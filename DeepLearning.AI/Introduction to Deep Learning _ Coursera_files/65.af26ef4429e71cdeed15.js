(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"/+fu":function(module,exports,e){var t=e("Uuiu"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},"1ah5":function(module,e,t){"use strict";var a=t("q1tI"),n=t.n(a),r=t("oX1x"),i=t("Q/5i"),o=function QuizGradeDisclaimer(e){var t=e.courseSlug;if(t)return n.a.createElement(r.a,{courseSlug:t},function(e){var t=e.notifications;if(null==t?void 0:t.some(function(e){return"gradeDisclaimerMessage"===e.typeName}))return n.a.createElement(i.a,null);return null});return null};e.a=o},"8mOo":function(module,e,t){"use strict";var a=t("8cuT"),n=t("MnCE"),r=Object(n.compose)(Object(a.a)(["CourseStore"],function(e,t){var a,n=e.CourseStore,r=t.itemMetadata,i,o,c=n.getMaterials().getNeighbors(r).nextItemMetadataOrItemGroup;return{nextItemUrl:null!==(a=null==c?void 0:c.getLink())&&void 0!==a?a:""}}));e.a=r},"9wTT":function(module,exports,e){var t=e("XrnM"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},D1JF:function(module,exports,e){},DGck:function(module,exports,e){},FkXZ:function(module,exports,e){var t=e("hLsX"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},GLUr:function(module,e,t){"use strict";var a=t("q1tI"),n=t.n(a),r=t("EqTq"),i=t("m10x"),o=t("kvW3"),c=t("/Fji"),s=t("TpV6"),l=t("vrZb"),m=t.n(l),u=t("PdUD"),d=t.n(u),v=Object(r.a)("LearningObjectivesWithItemsList"),p=function LearningObjectivesWithItemsList(e){var t=e.learningObjectives;return n.a.createElement("div",{className:v()},null==t?void 0:t.map(function(e,t){var a=e.id,r=e.description,l=e.computedItems;return n.a.createElement("div",{key:"learning-objective-".concat(a),className:v("objective")},n.a.createElement(c.a,{key:a,title:n.a.createElement("div",null,n.a.createElement(i.k,null,r),n.a.createElement("div",{className:v("materials-count",void 0,["caption-text"])},n.a.createElement(o.b,{message:m()("{numItems, plural, =0 {Nothing} one {# material} other {# materials}} to review"),numItems:(null==l?void 0:l.length)||0}))),isCollapsible:!!(null==l?void 0:l.length),collapsibleIconTitle:l&&(null==l?void 0:l.length)>1?m()("Materials to review"):m()("Material to review"),startCollapsed:t>0||!(null==l?void 0:l.length)},null==l?void 0:l.map(function(e){return n.a.createElement("div",{key:"learning-objective-item-".concat(a,"-").concat(e.id),className:v("item")},n.a.createElement(s.a,{computedItem:e}))})))}))};e.a=p},I3nW:function(module,exports,e){var t=e("iBcN"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},LkkC:function(module,exports,e){},MqGB:function(module,e,t){"use strict";t.d(e,"a",function(){return f}),t.d(e,"d",function(){return g}),t.d(e,"c",function(){return b});var a=t("J2iB"),n=t.n(a),r=t("q1tI"),i=t.n(r),o=t("EqTq"),c=t("CsdX"),s=t("LMF/"),l=t("qiXF"),m=t("d3Ej"),u=t.n(m),d=t("tqsA"),v=t.n(d),p=Object(o.a)("CoverPageRow"),f={check:"check",warning:"warning"},g=function getStatusIconTypeForGradeRow(e,t,a){if(n()(e))return null;if(!e&&(!t||a&&t))return f.warning;return f.check},b=function getStatusIconTitleForGradeRow(e,t){if(n()(e))return;if(!e&&!t)return u()("Activity Incomplete");return u()("Activity Completed")},E=function CoverPageRow(e){var t=e.stepTitle,a=e.stepDetails,n=e.rightSideView,r=e.statusIconType,o=e.statusIconTitle;return i.a.createElement("div",{className:p(void 0,{rightSideViewOnly:!t})},r&&i.a.createElement("div",{className:p("status-icon")},r===f.check&&i.a.createElement(s.a,{size:24,color:c.b.success,title:o}),r===f.warning&&i.a.createElement(l.a,{size:24,color:c.b.error,title:o})),t&&i.a.createElement("div",{className:p("left-side-view")},i.a.createElement("div",{className:p("step-title")},t),i.a.createElement("div",{className:p("step-details")},a)),i.a.createElement("div",{className:p("right-side-view")},n))};e.b=E},NKt0:function(module,e,t){"use strict";var a=t("q1tI"),n=t.n(a),r=t("EqTq"),i=t("JJfJ"),o=t("m10x"),c=t("tIcg"),s=t.n(c),l=t("PB6g"),m=Object(r.a)("CoverPageHeader"),u=function CoverPageHeader(e){var t=e.assignmentTypeName,a=e.item,r=(a=void 0===a?{}:a).timeCommitment,c=a.name,s=e.subHeader;return n.a.createElement("div",{className:m()},n.a.createElement(o.l,{tag:"div",rootClassName:m("metadata")},n.a.createElement("span",{"aria-hidden":!0},t),n.a.createElement(l.b,{tagName:"span"},t),!!r&&n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{"aria-hidden":!0}," • ",Object(i.t)(r)),n.a.createElement(l.b,{tagName:"span"},Object(i.t)(r,!0)))),n.a.createElement(o.h,{tag:"h1",rootClassName:m("title")},c),s&&n.a.createElement("div",{className:m("sub-header")},s))};e.a=u},PdUD:function(module,exports,e){var t=e("D1JF"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},Pm80:function(module,exports,e){},"Q/5i":function(module,e,t){"use strict";var a=t("q1tI"),n=t.n(a),r=t("JOyW"),i=t("lS+i"),o=t.n(i),c=function GradeDisclaimerNotification(){var e=o()("These grades are provisional and may change. Final overall\n      grades will be published after the exam board has met.");return n.a.createElement("div",{className:"rc-GradeDisclaimerNotification"},n.a.createElement(r.a,{trackingName:"grade_disclaimer_notification",type:"info",message:e}))};e.a=c},TO9F:function(module,e,t){"use strict";var a=t("q1tI"),n=t.n(a),r=t("EqTq"),i=t("VMeS"),o=t("uNjD"),c=t.n(o),s=Object(r.a)("CoverPageContainer"),l=function CoverPageContainer(e){var t=e.children,a=e.className;return n.a.createElement("div",{className:s(void 0,void 0,a)},t||n.a.createElement(i.a,null))};e.a=l},USJv:function(module,e,t){"use strict";var a=t("q1tI"),n=t.n(a),r=t("MnCE"),i=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a=_objectWithoutPropertiesLoose(e,t),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){if(n=i[r],t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;a[n]=e[n]}}return a}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++){if(r=n[i],t.indexOf(r)>=0)continue;a[r]=e[r]}return a}var o=function SvgaChart(e){var t=e.title,n=void 0===t?"Chart":t,r=_objectWithoutProperties(e,["title"]);return a.createElement(i.a,_extends({title:n},r,{viewBox:"0 0 41 37"}),a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{fill:"#F26C75",d:"M5 32h32V0H5z"}),a.createElement("path",{stroke:"#424242",strokeWidth:"2",d:"M8 28l9.263-12.572 10.105 8.98L40 6"}),a.createElement("path",{stroke:"#4D4D4D",strokeWidth:"2",d:"M1 0v36h40"})))};(o=Object(r.pure)(o)).displayName="SvgaChart",e.a=o},Uuiu:function(module,exports,e){},Vh8P:function(module,e,t){"use strict";var a=t("UB5X"),n=t.n(a),r=t("q1tI"),i=t.n(r),o=t("EqTq"),c=t("AWZ4"),s=t("m10x"),l=t("CsdX"),m=t("CfbJ"),u=t("d3Ej"),d=t.n(u),v=t("kWps"),p=t("kvW3"),f=t("JJfJ"),g=t("RSmF"),b=t("9wTT"),E=t.n(b),h=Object(o.a)("CoverPageRowRightSideActions"),O=function renderActionButton(e,t){return i.a.createElement(c.b,{size:"sm",type:"primary",label:e,onClick:t,htmlAttributes:{"aria-label":d()("#{action} quiz",{action:e})}})},y=function CoverPageRowRightSideActions(e){var t=e.startAttempt,a=e.restartAttempt,r=e.resumeAttempt,o=e.retryAttempt,u=e.submissionTime,b=e.showTimer,E=e.timeLimit,y=e.timerId,j=e.attemptsLeft,S=e.secondsLeftInLatestAttempt,C=e.attemptLimitTimeLeft,w=null,N=n()(C)||"number"==typeof j&&j<=0;return t?w=O(d()("Start"),t):a?w=O(d()("Restart"),a):r?w=O(d()("Resume"),r):o&&(w=i.a.createElement(c.b,{size:"sm",type:"link",label:d()("Try again"),onClick:o,disabled:N})),i.a.createElement("div",{className:h()},i.a.createElement("div",{className:h("action-button",{linkStyle:!!o})},w),N&&n()(C)&&i.a.createElement("div",{className:h("retry-info")},i.a.createElement(s.a,null,i.a.createElement(p.b,{message:d()("Retake the quiz in {attemptLimitTimeLeft}"),attemptLimitTimeLeft:i.a.createElement("strong",null,Object(f.t)(C))}))),u&&i.a.createElement("div",{className:h("submission-time")},i.a.createElement(s.a,null,i.a.createElement(s.l,{tag:"span"},d()("Submitted"))," ",i.a.createElement("span",{className:h("submission-time-detail")},v.a.getFormattedDeadline(u)))),n()(E)&&t&&i.a.createElement("div",{className:h("time-limit")},i.a.createElement(s.a,null,i.a.createElement(m.a,{size:20,color:l.b.primary}),i.a.createElement("span",{className:h("time-limit-text")},i.a.createElement(p.b,{message:d()("You will have {timeLimit} to finish"),timeLimit:Object(f.t)(E,!0)})))),b&&n()(S)&&i.a.createElement(g.a,{timerId:y,remainingTimeInMs:1e3*S,displayRemaining:!0}))};e.a=y},XSZB:function(module,exports,e){var t=e("LkkC"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},XrnM:function(module,exports,e){},aumC:function(module,exports,e){var t=e("Pm80"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},eXDi:function(module,e,t){"use strict";var a=t("UB5X"),n=t.n(a),r=t("q1tI"),i=t.n(r),o=t("EqTq"),c=t("hbUA"),s=t("kvW3"),l=t("AWZ4"),m=t("m10x"),u=t("xBnS"),d=t("bOpO"),v=t("d3Ej"),p=t.n(v),f=t("I3nW"),g=t.n(f),b=Object(o.a)("CoverPageRowRightSideGrade"),E=function CoverPageRowRightSideGrade(e){var t=e.itemGrade,a=e.computedScore,r=e.maxScore,o=e.viewFeedback,c=e.isViewFeedbackButtonLinkStyle,d=e.isCumulativeGraded,v=e.reviewsExpected,f=void 0===v?0:v,g=e.reviewsReceived,E=void 0===g?0:g,O=e.showKeepHighScoreMsg,y=void 0===O||O,j=e.isRequired,S=void 0!==j&&j,C=t||{},w=C.grade,N=C.isPassed;return i.a.createElement("div",{className:b()},i.a.createElement("div",{className:b("grade-info")},i.a.createElement("div",{className:b("grade-label")},p()("Grade")),i.a.createElement("div",{className:b("grade-percent",{passed:n()(w)&&!!N&&(!d||S&&d),failed:n()(w)&&!N&&(!d||S&&d)})},i.a.createElement(h,{itemGrade:t,computedScore:a,maxScore:r,reviewsExpected:f,reviewsReceived:E}))),n()(w)&&o&&i.a.createElement("div",{className:b("view-feedback-section")},i.a.createElement("div",{className:b("view-feedback-button",{linkStyle:c})},i.a.createElement(l.b,{size:c?"zero":"sm",type:c?"link":"primary",label:p()("View Feedback"),onClick:o})),i.a.createElement("div",{className:b("view-feedback-info")},f>0&&E>0&&i.a.createElement(u.a,{label:p()("Feedback"),details:i.a.createElement(s.b,{message:p()("{reviewsReceived, number} of {reviewsExpected, number} received"),reviewsExpected:f,reviewsReceived:E})}),y&&i.a.createElement(m.a,null,p()("We keep your highest score")))))},h=function CoverPageRowGradeDetail(e){var t=e.itemGrade,a=e.computedScore,r=e.maxScore,o=e.reviewsExpected,l=void 0===o?0:o,u=e.reviewsReceived,v=void 0===u?0:u,f,g=(t||{}).grade;if(n()(g))return i.a.createElement("div",{className:b("grade-percent-container")},Object(c.b)(g),i.a.createElement(d.a,{itemGrade:t,computedScore:a,maxScore:r}));if(l>0&&v>0)return i.a.createElement(m.a,null,i.a.createElement(s.b,{message:p()("In progress, {reviewsReceived, number} of {reviewsExpected, number} received"),reviewsExpected:l,reviewsReceived:v}));return i.a.createElement(m.a,{rootClassName:b("no-grade")},"—")};e.a=E},fHLu:function(module,e,t){"use strict";t.d(e,"a",function(){return r});var a=t("S0QZ"),n=function clearQuizApolloCache(e){Object(a.a)(e.cache,["RestQuizSessionMetadataElement","RestQuizQuestionDataElement","LocalTimerState","LocalChangedResponse","LocalStepState","$ROOT_QUERY.ChangedResponse"])},r=function clearPracticeQuizApolloCache(e){Object(a.a)(e.cache,["LocalChangedResponse","LocalStepState"])};e.b=n},hLsX:function(module,exports,e){},iBcN:function(module,exports,e){},lo9b:function(module,e,t){"use strict";var a=t("q1tI"),n=t.n(a),r=t("EqTq"),i=t("m10x"),o=t("Euzd"),c=t("GLUr"),s=t("vrZb"),l=t.n(s),m=t("/+fu"),u=t.n(m),d=Object(r.a)("LearningObjectivesContent"),v=function LearningObjectivesContent(e){var t=e.itemId,a=e.courseSlug,r=void 0===a?"":a,s=e.learningObjectiveIds;return n.a.createElement("div",{className:d()},n.a.createElement(i.h,null,l()("Review Learning Objectives")),n.a.createElement("p",{className:d("instructions")},l()("Review concepts related to your current learning objectives")),n.a.createElement("div",{className:d("learning-objectives")},n.a.createElement(o.a,{itemId:t,courseSlug:r,learningObjectiveIds:s,removeParentItem:!0,removeFutureItems:!0},function(e){var t=e.learningObjectives;return n.a.createElement(c.a,{learningObjectives:t})})))};e.a=v},nlef:function(module,e,t){"use strict";var a=t("UB5X"),n=t.n(a),r=t("q1tI"),i=t.n(r),o=t("EqTq"),c=t("JJfJ"),s=t("kvW3"),l=t("xBnS"),m=t("izmZ"),u=t("d3Ej"),d=t.n(u),v=t("aumC"),p=t.n(v),f=Object(o.a)("CoverPageDetails"),g=function CoverPageDetails(e){var t=e.deadline,a=e.attemptsCompleted,r=void 0===a?0:a,o=e.attemptsLeft,u=e.attemptsRateCount,v=e.attemptsRateInterval,p=e.passingFraction,g=e.isCumulativeGraded,b=n()(o)?o+r:null;return i.a.createElement("div",{className:f()},t&&i.a.createElement(l.a,{label:d()("Due Date"),details:Object(c.s)(t,c.g),ariaDetails:Object(c.s)(t,c.b)}),n()(o)&&i.a.createElement(l.a,{label:d()("Attempts"),details:i.a.createElement(s.b,{message:o===b?d()("{attemptsMax, number} left"):d()("{attemptsLeft, number}/{attemptsMax, number} left"),attemptsLeft:Math.max(o,0),attemptsMax:b})}),n()(u)&&n()(v)&&i.a.createElement(l.a,{label:d()("Attempts"),details:i.a.createElement(s.b,{message:d()("{count, number} every {duration}"),count:u,duration:Object(c.t)(v,!0)})}),n()(p)&&!g&&i.a.createElement(l.a,{label:d()("To Pass"),details:i.a.createElement(s.a,{message:d()("{percent} or higher"),percent:i.a.createElement(m.a,{value:p,maxFractionDigits:0})})}))};e.a=g},oX1x:function(module,e,t){"use strict";var a=t("VkAN"),n=t.n(a),r=t("q1tI"),i=t.n(r),o=t("sQ/U"),c=t("PDuk"),s=t("lTCR"),l=t.n(s),m=t("oJmH"),u=t.n(m),d=t("BH3y");function _templateObject(){var e=n()(["\n  query CourseMessagesQuery($id: String!) {\n    CourseMessagesV1 @naptime {\n      findCourseMessages(id: $id) {\n        elements {\n          id\n          messages\n        }\n      }\n    }\n  }\n"]);return _templateObject=function _templateObject(){return e},e}var v=l()(_templateObject()),p=function CourseMessagesProvider(e){var t=e.courseSlug,a=e.children,n=o.a.get().id,r=Object(c.c)([Object(c.c)([n,t]),d.a.COURSE_GRADES,-1]);return i.a.createElement(m.Query,{query:v,variables:{id:r}},function(e){var t,n,r,i=e.loading,o=e.data,c=e.refetch,s=null==o?void 0:null===(t=o.CourseMessagesV1)||void 0===t?void 0:null===(n=t.findCourseMessages)||void 0===n?void 0:null===(r=n.elements)||void 0===r?void 0:r[0].messages;return a({loading:i,notifications:s,refetch:c})})};e.a=p},pRpZ:function(module,e,t){"use strict";var a=t("q1tI"),n=t.n(a),r=t("EqTq"),i=t("w+/x"),o=t("USJv"),c=t("m10x"),s=t("kvW3"),l=t("d3Ej"),m=t.n(l),u=t("FkXZ"),d=t.n(u),v=Object(r.a)("CoverPageNudges"),p=function LikelihoodNudge(e){var t=e.value,a=Math.ceil(t/100);return n.a.createElement("div",{className:v()},n.a.createElement("div",{className:v("svg-icon")},n.a.createElement(o.a,{size:48})),n.a.createElement("div",{className:v("message")},n.a.createElement(c.n,null,m()("Get closer to your goal")),n.a.createElement(s.b,{message:m()("You are {value} more likely to complete the course if you finish the assignment"),value:n.a.createElement("strong",null,a>1?a+m()(" times"):t+"%"),tagName:"p",rootClassName:v("info")})))},f=function SocialNudge(e){var t=e.value;return n.a.createElement("div",{className:v()},n.a.createElement("div",{className:v("svg-icon")},n.a.createElement(i.a,{size:48}),","),n.a.createElement("div",{className:v("message")},n.a.createElement(c.n,null,m()("People are making progress")),n.a.createElement(s.b,{message:m()("{numOfLearners} learners have recently completed this assignment"),numOfLearners:n.a.createElement("strong",null,t),tagName:"p",rootClassName:v("info")})))},g=function CoverPageNudges(e){var t=e.nudge,a=t.nudgeType,r=t.nudgeNumber;switch(a){case"social":return n.a.createElement(f,{value:r});case"likelihood":return n.a.createElement(p,{value:r});default:return null}};e.a=g},sTBZ:function(module,exports,e){var t=e("xbEm"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},tIcg:function(module,exports,e){var t=e("vui7"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},tgnx:function(module,e,t){"use strict";var a=t("VbXa"),n=t.n(a),r=t("q1tI"),i=t.n(r),o=t("EqTq"),c=t("AWZ4"),s=t("22Sa"),l=t("oe9u"),m=t("lo9b"),u=t("vrZb"),d=t.n(u),v=Object(o.a)("LearningObjectivesButton"),p=function(e){function LearningObjectivesButton(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={expanded:!1},t.toggleTunnelVision=function(){return t.setState(function(e){return{expanded:!e.expanded}})},t}var t;return n()(LearningObjectivesButton,e),LearningObjectivesButton.prototype.render=function render(){var e=this.props,t=e.itemId,a=e.courseSlug,n=e.learningObjectiveIds,r=this.state.expanded;if(!(null==n?void 0:n.length))return null;return i.a.createElement("div",{className:v()},i.a.createElement(c.b,{type:"link",size:"zero",onClick:this.toggleTunnelVision},d()("Review Learning Objectives")),r&&i.a.createElement(s.a,{onClose:this.toggleTunnelVision,headerLeft:i.a.createElement(l.b,{headerText:d()("Review Learning Objectives"),itemTypeText:d()("Review materials")}),headerRight:i.a.createElement("div",null)},i.a.createElement(m.a,{itemId:t,courseSlug:a,learningObjectiveIds:n})))},LearningObjectivesButton}(i.a.Component);e.a=p},tqsA:function(module,exports,e){var t=e("DGck"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},uNjD:function(module,exports,e){var t=e("zcis"),a;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},r=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},vui7:function(module,exports,e){},"w+/x":function(module,e,t){"use strict";var a=t("q1tI"),n=t.n(a),r=t("MnCE"),i=t("oyNZ");function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a=_objectWithoutPropertiesLoose(e,t),n,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++){if(n=i[r],t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;a[n]=e[n]}}return a}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a={},n=Object.keys(e),r,i;for(i=0;i<n.length;i++){if(r=n[i],t.indexOf(r)>=0)continue;a[r]=e[r]}return a}var o=function SvgaPen(e){var t=e.title,n=void 0===t?"Pen":t,r=_objectWithoutProperties(e,["title"]);return a.createElement(i.a,_extends({title:n},r,{viewBox:"0 0 36 44"}),a.createElement("g",{fill:"none",fillRule:"evenodd"},a.createElement("path",{d:"M36 25.855C36 35.845 20.836 44 10.895 44S0 35.846 0 25.855C0 15.865 13.185 8 23.127 8 33.067 8 36 15.864 36 25.855",fill:"#F3C800"}),a.createElement("path",{stroke:"#4D4D4D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",d:"M21.907 4.781l6.751 12.248-10.823 17.146L7.253 17.181l6.999-12.452M8.428 4.081h19.359V1H8.427zM17.954 33.074V21.186"}),a.createElement("path",{d:"M15.23 18.272a2.723 2.723 0 1 1 5.447 0 2.723 2.723 0 0 1-5.446 0z",stroke:"#4D4D4D",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))};(o=Object(r.pure)(o)).displayName="SvgaPen",e.a=o},wrIk:function(module,e,t){"use strict";t.r(e),t.d(e,"QuizCoverPage",function(){return B});var a=t("lSNA"),n=t.n(a),r=t("VbXa"),i=t.n(r),o=t("q1tI"),c=t.n(o),s=t("MnCE"),l=t("oJmH"),m=t.n(l),u=t("sBWo"),d=t("8mOo"),v=t("+LJP"),p=t("fHLu"),f=t("NKt0"),g=t("tgnx"),b=t("pRpZ"),E=t("TO9F"),h=t("scbn"),O=t("qJwm"),y=t("MqGB"),j=t("nlef"),S=t("Vh8P"),C=t("eXDi"),w=t("1ah5"),N=t("zaiP"),P=t("LHEl"),L=t("kYu0"),I=t("VtNW"),k=t.n(I),x=t("VMeS"),T=t("8ec0"),R=t("xXQ2"),q=t("KvdX"),A=t("TOZ3"),D=t("EqTq"),M=t("XSZB"),z=t.n(M);function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach(function(t){n()(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var F=Object(D.a)("QuizCoverPage"),B=function(e){function QuizCoverPage(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).getRestartAttemptFunction=function(e,a,n){return function(){if(a&&n){if(n.isLastAttemptBeforeLock||1===n.attemptsLeft)return void a({type:q.a.lastAttemptModal,props:_objectSpread(_objectSpread({},n),{},{onPrimaryButtonClick:t.getRestartAttemptFunction(e)})});if("number"==typeof n.timeLimit)return void a({type:q.a.timedAttemptStart,props:_objectSpread(_objectSpread({},n),{},{onPrimaryButtonClick:t.getRestartAttemptFunction(e)})})}var r=t.props.openAttemptPage;Object(p.b)(e),r()}},t}var t;return i()(QuizCoverPage,e),QuizCoverPage.prototype.render=function render(){var e=this,t=this.props,a=t.nextItemUrl,n=t.children,r=t.openSubmittedAttemptPage;return c.a.createElement(N.a,null,function(t){var i=t.item;if(!i||!i.contentSummary)return c.a.createElement(x.a,null);return c.a.createElement(P.a,{courseId:i.courseId,itemId:i.id},function(t){var o=t.loading,s=t.lastSessionId,m=t.lockingConfigurationSummary,u=t.unsubmittedSessionId,d=t.bestEvaluation,v=t.nudge,N=t.refetch;if(!i||!i.contentSummary||o)return c.a.createElement(x.a,null);if("exam"===i.contentSummary.typeName){var P=i.contentSummary.definition,I=i.isCumulativeGraded;return c.a.createElement(E.a,null,c.a.createElement(A.b,{justifyContent:"between",rootClassName:F("header-container")},c.a.createElement(f.a,{assignmentTypeName:k()("Quiz"),item:i,subHeader:c.a.createElement(g.a,{courseId:null==i?void 0:i.courseId,itemId:null==i?void 0:i.id,courseSlug:null==i?void 0:i.courseSlug,learningObjectiveIds:null==i?void 0:i.learningObjectiveIds})}),v&&c.a.createElement(b.a,{nudge:v})),c.a.createElement("div",{className:F("notifications")},c.a.createElement(w.a,{courseSlug:null==i?void 0:i.courseSlug})),c.a.createElement(L.a,{standardProctorConfigurationId:P.standardProctorConfigurationId},function(t){var a=t.timeLimit,n=t.secondsLeftInLatestAttempt,r=t.remainingAttempts,o=t.completedAttempts,l=t.client;return c.a.createElement(y.b,{stepTitle:k()("Submit your assignment"),stepDetails:c.a.createElement(j.a,{deadline:i.deadline,attemptsRateCount:(m||{}).allowedSubmissionsPerInterval,attemptsRateInterval:(m||{}).allowedSubmissionsInterval,attemptsLeft:r,attemptsCompleted:o}),rightSideView:c.a.createElement(q.b,null,function(t){var o=t.showModal,d={timeLimit:a,attemptsLeft:r,lockedTimeLeft:Object(R.b)(m),isLastAttemptBeforeLock:Object(R.c)(m),hasAttemptLimit:!!m&&m.allowedSubmissionsPerInterval>0};return c.a.createElement(S.a,{startAttempt:s||u?void 0:e.getRestartAttemptFunction(l,o,d),resumeAttempt:u?e.getRestartAttemptFunction(l):void 0,timeLimit:a,showTimer:!!u,timerId:Object(T.a)(i.id),secondsLeftInLatestAttempt:n,retryAttempt:e.getRestartAttemptFunction(l,o,d),attemptLimitTimeLeft:Object(R.a)(m),attemptsLeft:r})}),statusIconType:s?y.a.check:void 0,statusIconTitle:s?k()("Activity Completed"):void 0})}),c.a.createElement(y.b,{stepTitle:k()("Receive grade"),stepDetails:c.a.createElement(j.a,{passingFraction:P.passingFraction,isCumulativeGraded:I}),rightSideView:c.a.createElement(l.ApolloConsumer,null,function(e){return c.a.createElement(C.a,{itemGrade:i.itemGrade,computedScore:(d||{}).score,maxScore:(d||{}).maxScore,isCumulativeGraded:I,viewFeedback:s?function(){Object(p.b)(e),r()}:void 0,isViewFeedbackButtonLinkStyle:!!u})}),statusIconType:Object(y.d)((i.itemGrade||{}).isPassed,I),statusIconTitle:Object(y.c)((i.itemGrade||{}).isPassed,I)}),c.a.createElement(y.b,{rightSideView:c.a.createElement(h.a,{computedItem:i,itemFeedbackType:O.c.Quiz})}),n&&N&&c.a.cloneElement(n,{refetchCoverPageData:function refetchCoverPageData(){return N().then(function(){return i.refetch()})},nextItemUrl:a}))}return null})})},QuizCoverPage}(c.a.Component),G=Object(s.compose)(d.a,Object(v.a)(function(e){return{openAttemptPage:function openAttemptPage(){e.push({name:"quiz-attempt",params:e.params})},openSubmittedAttemptPage:function openSubmittedAttemptPage(){e.push({name:"quiz-view-attempt",params:e.params})}}}))(B);e.default=Object(u.a)(G)},xBnS:function(module,e,t){"use strict";var a=t("q1tI"),n=t.n(a),r=t("EqTq"),i=t("m10x"),o=t("sTBZ"),c=t.n(o),s=t("PB6g"),l=Object(r.a)("CoverPagePhaseDetail"),m=function CoverPagePhaseDetail(e){var t=e.label,a=e.details,r=e.ariaDetails;return n.a.createElement("div",{className:l()},n.a.createElement(i.a,null,n.a.createElement(i.l,{rootClassName:l("label"),tag:"span"},t),n.a.createElement("span",{className:l("content")},n.a.createElement("span",r&&{"aria-hidden":!0},a),r&&n.a.createElement(s.b,{tagName:"span"},r))))};e.a=m},xbEm:function(module,exports,e){},zcis:function(module,exports,e){}}]);
//# sourceMappingURL=65.af26ef4429e71cdeed15.js.map