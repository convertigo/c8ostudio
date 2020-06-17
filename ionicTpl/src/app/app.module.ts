import { NgModule, ErrorHandler } 							from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } 	from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   				from '@angular/forms';
import { BrowserModule } 									from '@angular/platform-browser';
//import { BrowserAnimationsModule }                          from '@angular/platform-browser/animations';
import { RouteReuseStrategy } 								from '@angular/router';

import { TranslateModule, TranslateLoader } 				from '@ngx-translate/core';
import { TranslateHttpLoader } 								from '@ngx-translate/http-loader';

import { IonicModule, IonicRouteStrategy } 					from '@ionic/angular';
import { SplashScreen } 									from '@ionic-native/splash-screen/ngx';
import { StatusBar } 										from '@ionic-native/status-bar/ngx';

import { C8o, HttpXsrfInterceptor }                         from "c8osdkangular";
import { C8oRouter } 			                            from 'c8ocaf';
import { ActionBeans }                                      from './services/actionbeans.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CodeEditorModule } from "../pages/CodeEditor/codeeditor.module";
import { PropertiesModule } from "../pages/Properties/properties.module";
import { LogViewerModule }  from "../pages/LogViewer/logviewer.module";
import { ProjectsModule }   from "../pages/Projects/projects.module";
import { FlowViewerModule } from "../pages/FlowViewer/flowviewer.module";
import { PaletteModule }    from "../pages/Palette/palette.module";

import { CodeEditor }       from "../pages/CodeEditor/codeeditor";
import { Properties }       from "../pages/Properties/properties";
import { LogViewer }        from "../pages/LogViewer/logviewer";
import { Projects }         from "../pages/Projects/projects";
import { FlowViewer }       from "../pages/FlowViewer/flowviewer";
import { Palette }          from "../pages/Palette/palette";


/* Custom Golden Layout */
/*
import { GoldenLayoutModule, GoldenLayoutConfiguration}                       from '@embedded-enterprises/ng6-golden-layout';
const  config: GoldenLayoutConfiguration = {
    components: [
    ],
    
    defaultLayout: {
      content: [
      ]
    }
}
*/

import * as $                                                                 from 'jquery';
window['$'] = $
/* Custom Golden Layout */

/**
 * Customize the ngx-translate loader for assets/i18n
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,

    CodeEditorModule,
    PropertiesModule,
    LogViewerModule,
    ProjectsModule,
    FlowViewerModule,
    PaletteModule,

    //BrowserAnimationsModule,
    HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
	}),
	IonicModule.forRoot(), 
	AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    C8o,
    C8oRouter,
//    ActionBeans,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpXsrfInterceptor,
        multi: true
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}