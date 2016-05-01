"use strict";var __decorate=this&&this.__decorate||function(e,t,i,n){var r,s=arguments.length,a=3>s?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(3>s?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a},__metadata=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},core_1=require("angular2/core"),Observable_1=require("rxjs/Observable"),data_service_1=require("./data.service"),notification_service_1=require("./notification.service"),interfaces_1=require("../interfaces/interfaces"),TimerService=function(){function e(e,t){var i=this;this._dataService=e,this._notificationService=t,this.runningTime$=new Observable_1.Observable(function(e){return i._timerObserver=e}),this.runningTime$.subscribe(),this.stopTimer(),this._selectedTime=null}return Object.defineProperty(e.prototype,"runningPhaseType",{get:function(){return this._selectedTime},enumerable:!0,configurable:!0}),e.prototype.startTimer=function(e){this.clockRunning?this.stopTimer():(this._startTimer(e),this._selectedTime=e,this.focusRunning=!0)},e.prototype.stopTimer=function(){clearInterval(this._interval),this._runningTime=new Date,this._runningTime.setMinutes(0),this._runningTime.setSeconds(0),this._timerObserver.next(this._runningTime),this.clockRunning=!1,this._selectedTime=null},e.prototype._startTimer=function(e){var t=this;this._selectedTime=e,this.clockRunning=!0,this._runningTime.setMinutes(e),this._runningTime.setSeconds(1),this._interval=setInterval(function(){t._timerFinished()?(t._saveTime(),t.stopTimer()):t._runningTime=new Date(t._runningTime.getTime()-1e3),t._timerObserver.next(t._runningTime)},1e3)},e.prototype._timerFinished=function(){return 0===this._runningTime.getSeconds()&&0===this._runningTime.getMinutes()},e.prototype._saveTime=function(){var e=null,t=null;switch(this._selectedTime){case interfaces_1.PhaseType.FOCUS:e=interfaces_1.PhaseType.FOCUS,t="Focus Phase Complete!";break;case interfaces_1.PhaseType.SHORT_BREAK:e=interfaces_1.PhaseType.SHORT_BREAK,t="Short Break Complete!";break;case interfaces_1.PhaseType.LONG_BREAK:e=interfaces_1.PhaseType.LONG_BREAK,t="Long Break Complete!";break;default:e=this._selectedTime,t="Custom Brake Complete!"}this._selectedTime=null,this._dataService.addFocusPhase({phaseType:e,dateCreated:Firebase.ServerValue.TIMESTAMP}),this._notificationService.openNotification(t)},e=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[data_service_1.DataService,notification_service_1.NotificationService])],e)}();exports.TimerService=TimerService;