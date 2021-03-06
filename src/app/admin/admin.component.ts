import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT, PlatformLocation } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzIconService } from 'ng-zorro-antd/icon';

import { CommonService } from './../service/common.service';

const number10IconLiteral =
    '<svg t="1614656301570" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="667" width="24" height="24"><path d="M613.449901 887.558133l-57.825944 68.909933-17.418983-24.519976c-8.785991-13.791987-14.199986-27.583973-15.119985-41.37696-0.307-4.596996 0.409-10.72699 0.153-15.272985l20.17798-300.262707 48.169953-59.766941 42.347959 59.766941-20.48398 312.522695z m28.452972-434.967575l-50.264951 62.831939-40.30396-62.831939 16.754983-266.49674c2.195998-18.389982 2.655997-29.116972 3.370997-35.246965 1.379999-13.741987 6.333994-24.519976 15.835984-35.195966l30.444971-36.728964 43.929957 67.377934-19.767981 306.290701zM850.879669 901.40112l48.885952 73.507928-25.182975 30.69997c-10.42099 13.740987-22.578978 18.389982-44.084957 18.389982H631.277884c-21.505979 0-34.327966-6.129994-43.062958-18.389982l-20.125981-30.69997 60.889941-73.507928H850.879669zM678.426837 124.845878L631.174884 58.999942l21.812978-30.69997C666.524849 9.90999 679.601836 2.247998 696.55982 2.247998h207.139797c15.834985 0 31.261969 10.72699 41.32496 26.051974l17.725983 29.116972-59.050943 67.377934H678.426837z m211.379794 450.23956l50.315951-61.24694 40.200961 61.24794-16.805984 265.015742c-0.969999 19.921981-2.451998 32.181969-2.144998 36.779964-1.379999 13.739987-6.436994 22.934978-16.959983 35.194965l-32.794968 35.195966-41.32496-61.24794 19.512981-310.939697z m28.859972-428.836581l58.898942-68.909933 13.842987 21.45498c10.06399 15.323985 15.477985 29.116972 16.448984 44.389956 0.409 6.129994 0.816999 12.259988 0.051 18.389982l-18.542982 291.016716-51.49095 61.29994-39.077962-61.29994 19.869981-306.341701z m-699.931317-25.182975l-36.779964-54.147947L225.58028 0h139.914863l-84.898917 121.065882h-61.85994z m24.468976 445.949564l53.993948-56.189945 47.149954 56.189945-29.321972 394.356615-55.219946 60.276941-45.923955-60.78794 29.321971-393.845616z m31.05797-422.962587L383.885125 24.519976l-31.00697 421.429589-55.679945 64.874936-45.054956-65.385936 22.118978-301.385706z" p-id="668"></path></svg>';
const number11IconLiteral =
    '<svg t="1614656323150" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="866" width="24" height="24"><path d="M218.0608 121.344l-36.864-54.272L224.9216 0h140.2368L280.064 121.344H218.0608z m24.5248 446.976l54.1184-56.32 47.2576 56.32-29.3888 395.264L259.2256 1024l-46.0288-60.928 29.3888-394.752z m31.1296-423.936L383.5904 24.576l-31.0784 422.4-55.808 65.024-45.1584-65.536 22.1696-302.08zM703.3344 121.344l-36.864-54.272L710.1952 0h140.2368l-85.0944 121.344h-62.0032z m24.5248 446.976l54.1184-56.32 47.2576 56.32-29.3888 395.264L744.448 1024l-46.0288-60.928 29.44-394.752z m31.0784-423.936l109.8752-119.808-31.0784 422.4-55.808 65.024-45.1584-65.536 22.1696-302.08z" p-id="867"></path></svg>';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit, AfterViewInit {
    isCollapsed = false;
    menuList = [];
    showSearch = false;
    searchOptions = [];
    inputValue = 'Pro Table';
    noticeList = [];
    messageList = [];
    taskList = [];
    bellInfo = {
        total: 11,
        notice: 4,
        message: 3,
        task: 4,
    };
    visible = false;
    navigationInfo = {
        header: true,
        menu: true
    };
    contentList = [
        { type: 'header', name: '??????' },
        { type: 'footer', name: '??????' },
        { type: 'menu', name: '??????' },
        { type: 'menuHeader', name: '?????????' },
    ];
    drawerInfo = {
        content: {
            header: true,
            footer: true,
            menu: true,
            menuHeader: true
        }
    };
    siteStyle = 'menuDark';
    doc: Document;
    contentDom: Element = null;

    constructor(
        private platformLocation: PlatformLocation,
        private router: Router,
        private message: NzMessageService,
        private iconService: NzIconService,
        private commonS: CommonService,
        @Inject(DOCUMENT) doc: any,
    ) {
        this.iconService.addIconLiteral('number:10', number10IconLiteral);
        this.iconService.addIconLiteral('number:11', number11IconLiteral);
        this.doc = doc;
    }

    ngAfterViewInit() {
        this.contentDom = this.doc.querySelector('html');
    }

    ngOnInit() {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event) => {
                this.contentDom.scrollTop = 0;
            });

        const siteStyle = localStorage.getItem('site-style');
        if (siteStyle) {
            this.siteStyle = siteStyle;
        }
        this.changeStyle(this.siteStyle);

        this.menuList = [
            {
              title: 'Home',
              icon: 'home',
              link: '/home',
            },
            {
              title: '????????????',
              icon: 'cluster',
              link: '/device',
            },
            {
                title: 'Dashboard',
                icon: 'dashboard',
                open: false,
                children: [
                    {
                        title: '?????????',
                        link: '/dashboard/analysis'
                    },
                    {
                        title: '?????????',
                        link: '/dashboard/monitor'
                    },
                    {
                        title: '?????????',
                        link: '/dashboard/workplace'
                    },
                ]
            },
            {
                title: '?????????',
                icon: 'form',
                open: false,
                children: [
                    {
                        title: '????????????',
                        link: '/form/basic-form'
                    },
                    {
                        title: '????????????',
                        link: '/form/step-form'
                    },
                    {
                        title: '????????????',
                        link: '/form/advanced-form'
                    },
                ]
            },
            {
                title: '?????????',
                icon: 'table',
                open: false,
                children: [
                    {
                        title: '????????????',
                        open: false,
                        children: [
                            {
                                title: '????????????????????????',
                                link: '/list/search/articles'
                            },
                            {
                                title: '????????????????????????',
                                link: '/list/search/projects'
                            },
                            {
                                title: '????????????????????????',
                                link: '/list/search/applications'
                            },
                        ]
                    },
                    {
                        title: '????????????',
                        link: '/list/table-list'
                    },
                    {
                        title: '????????????',
                        link: '/list/basic-list'
                    },
                    {
                        title: '????????????',
                        link: '/list/card-list'
                    },
                ]
            },
            {
                title: '?????????',
                icon: 'profile',
                open: false,
                children: [
                    {
                        title: '???????????????',
                        link: '/profile/basic'
                    },
                    {
                        title: '???????????????',
                        link: '/profile/advanced'
                    },
                ]
            },
            {
                title: '?????????',
                icon: 'check-circle',
                open: false,
                children: [
                    {
                        title: '?????????',
                        link: '/result/success'
                    },
                    {
                        title: '?????????',
                        link: '/result/fail'
                    },
                ]
            },
            {
                title: '?????????',
                icon: 'warning',
                open: false,
                children: [
                    {
                        title: '403',
                        link: '/exception/403'
                    },
                    {
                        title: '404',
                        link: '/exception/404'
                    },
                    {
                        title: '500',
                        link: '/exception/500'
                    },
                ]
            },
            {
                title: '?????????',
                icon: 'user',
                open: false,
                children: [
                    {
                        title: '????????????',
                        link: '/account/center'
                    },
                    {
                        title: '????????????',
                        link: '/account/settings'
                    },
                ]
            },
            {
                title: 'v11 ????????????',
                icon: 'number:11',
                link: '/migration/v11'
            },
            {
                title: 'v10 ????????????',
                icon: 'number:10',
                link: '/migration/v10'
            },
            {
                title: '????????????',
                icon: 'tags',
                link: '/changelog'
            },
        ];

        /**
         * ??????
         * 1???PathLocationStrategy???const url = this.platformLocation.pathname
         * 2???HashLocationStrategy???const url = this.platformLocation.hash.slice(1);
         */

        this.searchOptions = ['umi ui', 'Ant Design', 'Pro Table', 'Pro Layout'];

        this.noticeList = [
            { id: 1, type: 1, title: '???????????? 14 ????????????', time: '3 ??????', read: false },
            { id: 2, type: 2, title: '???????????? ????????? ????????????????????????', time: '3 ??????', read: false },
            { id: 3, type: 3, title: '??????????????????????????????????????????', time: '3 ??????', read: true },
            { id: 4, type: 4, title: '???????????????????????????????????????', time: '3 ??????', read: false },
            { id: 5, type: 1, title: '???????????????????????????????????????????????????', time: '3 ??????', read: false },
        ];

        this.messageList = [
            {
                id: 1, avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                title: '????????? ????????????', desc: '????????????????????????????????????', time: '3 ??????', read: false
            },
            {
                id: 2, avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                title: '????????? ????????????', desc: '??????????????????????????????????????????????????????????????????????????????', time: '3 ??????', read: false
            },
            {
                id: 3, avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
                title: '??????', desc: '??????????????????????????????????????????????????????????????????????????????', time: '3 ??????', read: false
            },
        ];

        this.taskList = [
            { id: 1, type: 1, title: '????????????', desc: '??????????????? 2017-01-12 20:00 ?????????', read: false },
            { id: 2, type: 2, title: '???????????????????????????', desc: '??????????????? 2017-01-06????????? 2017-01-07 ???????????????????????????', read: false },
            { id: 3, type: 3, title: '??????????????????', desc: '??????????????? 2017-01-09 ????????????????????????', read: false },
            { id: 4, type: 4, title: 'ABCD ????????????', desc: '??????????????? 2017-01-06????????? 2017-01-07 ???????????????????????????', read: false },
        ];
    }

    changeCollapsed() {
        this.isCollapsed = !this.isCollapsed;
        this.commonS.changeLayout();
    }

    search() {
        this.showSearch = true;
    }

    inputBlur() {
        this.showSearch = false;
    }

    goUrl(url) {
        this.router.navigate([url]);
    }

    logout() {
        this.router.navigate(['/user/login']);
    }

    changeVersion(version) {
        window.location.href = 'https://llkui.github.io/ng-antd-admin/version/' + version;
    }

    read(item) {
        item.read = true;
        this.getBellInfo();
    }

    readAll(type) {
        if (type === 'notice') {
            this.noticeList = [];
        } else if (type === 'message') {
            this.messageList = [];
        } else {
            this.taskList = [];
        }
        this.getBellInfo();
    }

    getBellInfo() {
        const noticeLength = this.noticeList.filter(i => !i.read).length;
        const messageLength = this.messageList.filter(i => !i.read).length;
        const taskLength = this.taskList.filter(i => !i.read).length;
        this.bellInfo = {
            total: noticeLength + messageLength + taskLength,
            notice: noticeLength,
            message: messageLength,
            task: taskLength
        };
    }

    readMore(type) {
        this.message.success('Click on view more');
    }

    close() {
        this.visible = false;
    }

    changeDrawer() {
        this.visible = !this.visible;
    }

    changeContent(type) {
        if (type === 'menu') {
            const e = document.createEvent('Event');
            e.initEvent('resize', true, true);
            window.dispatchEvent(e);
        }
    }

    changeStyle(value) {
        this.siteStyle = value;
        localStorage.setItem('site-style', this.siteStyle);
        if (value === 'dark') {
            this.changeTheme('dark');
        } else {
            this.changeTheme('default');
        }
    }

    changeTheme(theme: 'default' | 'dark'): void {
        if (theme === 'dark') {
            const loading = this.message.loading('??????????????????', { nzDuration: 0 });
            const style = document.createElement('link');
            style.type = 'text/css';
            style.rel = 'stylesheet';
            style.id = 'dark-theme';
            style.href = 'assets/themes/style.dark.css';
            document.body.appendChild(style);
            setTimeout(() => {
                this.message.remove(loading.messageId);
            }, 1500);
        } else {
            const dom = document.getElementById('dark-theme');
            if (dom) {
                dom.remove();
            }
        }
    }
}
