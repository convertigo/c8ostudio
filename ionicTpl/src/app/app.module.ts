import { NgModule, ErrorHandler } 							from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } 	from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   				from '@angular/forms';
import { BrowserModule } 									from '@angular/platform-browser';
import { BrowserAnimationsModule }                          from '@angular/platform-browser/animations';
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

import { CodeEditorModule } from "../app/pages/codeeditor/codeeditor.module";
import { PropertiesModule } from "../app/pages/properties/properties.module";
import { LogViewerModule }  from "../app/pages/logviewer/logviewer.module";
import { ProjectsModule }   from "../app/pages/projects/projects.module";
import { FlowViewerModule } from "../app/pages/flowviewer/flowviewer.module";
import { PaletteModule }    from "../app/pages/palette/palette.module";

import { CodeEditor }       from "../app/pages/codeeditor/codeeditor";
import { Properties }       from "../app/pages/properties/properties";
import { LogViewer }        from "../app/pages/logviewer/logviewer";
import { Projects }         from "../app/pages/projects/projects";
import { FlowViewer }       from "../app/pages/flowviewer/flowviewer";
import { Palette }          from "../app/pages/palette/palette";

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
  imports: [
    BrowserModule,

    CodeEditorModule,
    PropertiesModule,
    LogViewerModule,
    ProjectsModule,
    FlowViewerModule,
    PaletteModule,

    BrowserAnimationsModule,
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
  entryComponents: [/*Begin_c8o_NgComponents*/
    AppComponent,
    CodeEditor,
    Properties,
    LogViewer,
    Projects,
    FlowViewer,
    Palette
    /*=c8o_PagesDeclarations*/
  /*End_c8o_NgComponents*/],
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