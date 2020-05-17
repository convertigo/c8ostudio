import { NgModule, ErrorHandler }		                                      from '@angular/core';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS }                    from '@angular/common/http';
import { BrowserModule }                                                      from '@angular/platform-browser';
import { BrowserAnimationsModule }                                            from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   								  from '@angular/forms';

import { IonicApp, IonicModule, IonicErrorHandler, DeepLinkConfig }           from 'ionic-angular';
import { StatusBar }                                                          from '@ionic-native/status-bar';
import { TranslateModule, TranslateLoader }                                   from '@ngx-translate/core';
import { TranslateHttpLoader }                                                from '@ngx-translate/http-loader';
/*=c8o_ModuleTsImports*/

import { C8o, HttpXsrfInterceptor }                                           from "c8osdkangular";
import { C8oRouter } 			                                              from 'c8ocaf';
import { ActionBeans }                                                        from '../services/actionbeans.service';

import { MyApp } 				                                              from './app.component';
/*=c8o_PagesImport*/


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
 * Deep links to your pages so that the app can rout directly to the page url
 */
export const deepLinkConfig: DeepLinkConfig = {
  links: [/*=c8o_PagesLinks*/]
};


/**
 * Customize the ngx-translate loader for assets/i18n
 */
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [/*Begin_c8o_NgDeclarations*/
    MyApp,
    /*=c8o_PagesDeclarations*/
  /*End_c8o_NgDeclarations*/],
  imports: [/*Begin_c8o_NgModules*/
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
    IonicModule.forRoot(MyApp, {preloadModules: true})
  /*End_c8o_NgModules*/],
  bootstrap: [IonicApp],
  entryComponents: [/*Begin_c8o_NgComponents*/
    MyApp,
    CodeEditor,
    Properties,
    LogViewer,
    Projects,
    FlowViewer,
    Palette
    /*=c8o_PagesDeclarations*/
  /*End_c8o_NgComponents*/],
  providers: [/*Begin_c8o_NgProviders*/
    StatusBar,
    C8o,
    C8oRouter,
    ActionBeans,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpXsrfInterceptor,
        multi: true
    },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  /*End_c8o_NgProviders*/]
})

export class AppModule {}