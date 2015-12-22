var __decorate=this&&this.__decorate||function(e,t,i,o){var n,c=arguments.length,r=3>c?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(r=(3>c?n(r):c>3?n(t,i,r):n(t,i))||r);return c>3&&r&&Object.defineProperty(t,i,r),r},__metadata=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},core_1=require("angular2/core"),focus_timer_component_1=require("./components/focus-timer.component"),notification_service_1=require("./services/notification.service"),interfaces_1=require("./interfaces/interfaces"),Home=function(){function e(e){this._notificationService=e,this.notificationsEnabled=!1,this.notificationsSupported=!0,this._notificationService.hasPermission()===interfaces_1.NotificationPermission.GRANTED&&(this.notificationsEnabled=!0),this._notificationService.hasPermission()===interfaces_1.NotificationPermission.UNSUPPORTED&&(this.notificationsSupported=!1)}return e.prototype.enableNotifications=function(){this._notificationService.requestPermission()},e=__decorate([core_1.Component({selector:"focus-home",templateUrl:"app/home.html",directives:[focus_timer_component_1.FocusTimerCmp]}),__metadata("design:paramtypes",[notification_service_1.NotificationService])],e)}();exports.Home=Home;