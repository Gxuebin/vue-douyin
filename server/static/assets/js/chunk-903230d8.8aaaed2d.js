(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-903230d8"],{"4b24":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{on:{"!click":function(e){return t.closeCommentList(e)}}},[s("scroll",{ref:"listWrap",staticClass:"list-wrap",attrs:{data:t.list}},[s("followed-list",{attrs:{list:t.list},on:{showCommentList:t.fetchCommentsAndShowList}})],1),s("transition",{attrs:{name:"up"}},[t.showCommentList?s("comment-list",{attrs:{commentList:t.commentList,commentNum:t.commentNum},on:{close:t.closeCommentList,scrollToEnd:t.fetchCommentsAndShowList}}):t._e()],1)],1)},o=[],n=s("be94"),a=s("e9fc"),c=s("ed17"),r=s("2ce0"),l=s("41ea"),m=s("2f62"),d=s("bc3a"),u=s.n(d),h={created:function(){var t=this,e=this.loginInfo.userId;u.a.get("/api/user/".concat(e,"/FollowerVideo"),{baseURL:l["a"],withCredentials:!0}).then(function(e){t.list=e.data.data,t.$refs.listWrap.refresh(),t.isLoading=!1})},data:function(){return{showCommentList:!1,commentNum:0,commentList:[],page:0,currentCommentVideoId:"",isEnd:!1,list:[]}},computed:Object(n["a"])({},Object(m["c"])(["loginInfo"])),methods:{fetchCommentsAndShowList:function(t,e){var s=this;if(this.currentCommentVideoId!==t)this.isEnd=!1,this.page=1,this.currentCommentVideoId=t,this.commentNum=e,u.a.get("/api/video/".concat(t,"/getVideoComment/page/").concat(this.page),{baseURL:l["a"],withCredentials:!0}).then(function(t){t.data.data.length<20&&(s.isEnd=!0),s.commentList=t.data.data,s.showCommentList=!0});else{if(this.page++,this.isEnd)return;u.a.get("/api/video/".concat(t,"/getVideoComment/page/").concat(this.page),{baseURL:l["a"],withCredentials:!0}).then(function(t){t.data.data.length<20&&(s.isEnd=!0),s.commentList=s.commentList.concat(t.data.data),s.showCommentList=!0})}},closeCommentList:function(t){this.showCommentList&&(this.currentCommentVideoId="",t.stopPropagation(),this.showCommentList=!1)}},components:{Scroll:a["a"],FollowedList:c["a"],CommentList:r["a"]}},f=h,p=(s("86ab"),s("2877")),C=Object(p["a"])(f,i,o,!1,null,"2a6e931c",null);C.options.__file="Followed.vue";e["default"]=C.exports},"86ab":function(t,e,s){"use strict";var i=s("fa85"),o=s.n(i);o.a},a5d7:function(t,e,s){"use strict";var i=s("ab3b"),o=s.n(i);o.a},ab3b:function(t,e,s){},ed17:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"followed-list"},[t._l(t.list,function(e){return s("div",{key:e.videoInfo.videoId,staticClass:"followed-item"},[s("div",{staticClass:"top"},[s("img",{staticClass:"avatar",attrs:{src:""+t.baseURL+e.userInfo.userAvatar,alt:"",width:"30",height:"30"},on:{click:function(s){t.chooseUser(e.userInfo.userId)}}}),s("span",{staticClass:"name"},[t._v("@"+t._s(e.userInfo.userNickname))])]),s("div",{staticClass:"desc"},[t._v(t._s(e.videoInfo.videoDesc))]),s("div",{staticClass:"video-wrap"},[s("video",{staticClass:"video",attrs:{poster:e.videoInfo.videoCover,src:e.videoInfo.videoPath,"webkit-playsinline":"",playsinline:"","x5-video-player-type":"h5"},on:{click:function(e){return e.target!==e.currentTarget?null:t.playHandler(e)}}})]),s("div",{staticClass:"button-bar"},[s("div",{staticClass:"like iconfont icon-heart-fill",class:{"red-heart":t.like},on:{click:t.toggleLike}},[s("span",{staticClass:"likenum"},[t._v(t._s(e.WSLCNum.likeNum))])]),s("div",{staticClass:"comment iconfont icon-message",on:{click:function(s){s.stopPropagation(),t.showCommentList(e.videoInfo.videoId,e.WSLCNum.commentNum)}}},[s("span",{staticClass:"commentnum"},[t._v(t._s(e.WSLCNum.commentNum))])]),s("div",{staticClass:"share iconfont icon-share"},[s("span",{staticClass:"sharenum"},[t._v(t._s(e.WSLCNum.shareNum))])])]),s("div",{staticClass:"time"},[t._v(t._s(t.formatTime(e.videoInfo.createdAt)))])])}),s("no-more",{staticClass:"no-more"})],2)},o=[],n=s("d94a"),a=s("41ea"),c=s("8b55"),r={props:{list:{type:Array,required:!0}},data:function(){return{like:!1,baseURL:a["a"]}},methods:{showCommentList:function(t,e){this.$emit("showCommentList",t,e)},playHandler:function(t){var e=t.target;e.paused?e.play():e.pause()},toggleLike:function(){this.like=!this.like},chooseUser:function(t){"/followed"===this.$route.path&&this.$router.push("/profile/".concat(t))},formatTime:c["b"]},components:{NoMore:n["a"]}},l=r,m=(s("a5d7"),s("2877")),d=Object(m["a"])(l,i,o,!1,null,"c4e21b62",null);d.options.__file="FollowedList.vue";e["a"]=d.exports},fa85:function(t,e,s){}}]);