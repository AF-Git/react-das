import Loadable from 'react-loadable';
import Loading from '../components/Loading'

const ShopList = Loadable({loader: () => import('../views/shop/ShopList'),loading: Loading});
const AddShop = Loadable({loader: () => import('../views/shop/AddShop'),loading: Loading});
const SaasAppList = Loadable({loader: () => import('../views/saasapp/SaasAppList'),loading: Loading});
const AddSaasApp = Loadable({loader: () => import('../views/saasapp/AddSaasApp'),loading: Loading});
const AppList = Loadable({loader: () => import('../views/app/AppList'),loading: Loading});
const AddApp = Loadable({loader: () => import('../views/app/AddApp'),loading: Loading});
const TplList = Loadable({loader: () => import('../views/tpl/TplList'),loading: Loading});
const AddTpl = Loadable({loader: () => import('../views/tpl/AddTpl'),loading: Loading});
const TargetList = Loadable({loader: () => import('../views/target/TargetList'),loading: Loading});
const AddTarget = Loadable({loader: () => import('../views/target/AddTarget'),loading: Loading});
const CreditList = Loadable({loader: () => import('../views/credit/CreditList'),loading: Loading});
const AddCredit = Loadable({loader: () => import('../views/credit/AddCredit'),loading: Loading});
const CreditRecordList = Loadable({loader: () => import('../views/creditrecord/CreditRecordList'),loading: Loading});
const AddCreditRecord = Loadable({loader: () => import('../views/creditrecord/AddCreditRecord'),loading: Loading});
const SensitiveWordList = Loadable({loader: () => import('../views/sensitive/SensitiveWordList'),loading: Loading});
const AddSensitiveWord = Loadable({loader: () => import('../views/sensitive/AddSensitiveWord'),loading: Loading});
const HistoryList = Loadable({loader: () => import('../views/history/HistoryList'),loading: Loading});
const HistoryDetail = Loadable({loader: () => import('../views/history/HistoryDetail'),loading: Loading});
const DailyMsgList = Loadable({loader: () => import('../views/history/DailyMsgList'),loading: Loading});

const EditShop = Loadable({loader: () => import('../views/shop/EditShop'),loading: Loading});
const EditApp = Loadable({loader: () => import('../views/app/EditApp'),loading: Loading});
const EditTpl = Loadable({loader: () => import('../views/tpl/EditTpl'),loading: Loading});
const EditTarget = Loadable({loader: () => import('../views/target/EditTarget'),loading: Loading});
const EditCredit = Loadable({loader: () => import('../views/credit/EditCredit'),loading: Loading});



export const StaticRouterMap = [
    {
        path: "/shop/editShop",
        name: "editShop",
        component: EditShop,
        meta: { title: "????????????" }
    },
    {
        path: "/app/editApp",
        name: "editApp",
        component: EditApp,
        meta: { title: "????????????" }
    },
    {
        path: "/tpl/editTpl",
        name: "editTpl",
        component: EditTpl,
        meta: { title: "????????????" }
    },
    {
        path: "/target/editTarget",
        name: "editTarget",
        component: EditTarget,
        meta: { title: "??????????????????" }
    },
    {
        path: "/credit/editCredit",
        name: "editCredit",
        component: EditCredit,
        meta: { title: "????????????" }
    },
    {
        path: "/history/historyDetail",
        name: "historyDetail",
        component: HistoryDetail,
        meta: { title: "??????????????????" }
    }
]

export const AsyncRouterMap =  [
    {
        path: '/shop',
        name: 'shop',
        meta: {  title: '????????????', icon: 'shop', roleId: ['1','2'] },
        children: [
            {
                path: "/shop/addShop",
                name: "addShop",
                component: AddShop,
                meta: { title: "????????????" }
            }
        ]
    },
    // {
    //     path: '/saasapp',
    //     name: 'saasapp',
    //     meta: {  title: '??????????????????', icon: 'appstore', roleId: ['1','3'] },
    //     children: [
    //         {
    //             path: "/saasapp/saasAppList",
    //             name: "saasAppList",
    //             component: SaasAppList,
    //             meta: { title: "??????????????????" }
    //         },
    //         {
    //             path: "/saasapp/addSaasApp",
    //             name: "addSaasApp",
    //             component: AddSaasApp,
    //             meta: { title: "??????????????????" }
    //         }
    //     ]
    // },
    // {
    //     path: '/app',
    //     name: 'app',
    //     meta: {  title: '????????????', icon: 'appstore', roleId: ['1','3'] },
    //     children: [
    //         {
    //             path: "/app/appList",
    //             name: "appList",
    //             component: AppList,
    //             meta: { title: "????????????" }
    //         },
    //         {
    //             path: "/app/addApp",
    //             name: "addApp",
    //             component: AddApp,
    //             meta: { title: "????????????" }
    //         }
    //     ]
    // },
    // {
    //     path: '/tpl',
    //     name: 'tpl',
    //     meta: {  title: '????????????', icon: 'appstore', roleId: ['1','3'] },
    //     children: [
    //         {
    //             path: "/tpl/tplList",
    //             name: "tplList",
    //             component: TplList,
    //             meta: { title: "????????????" }
    //         },
    //         {
    //             path: "/tpl/addTpl",
    //             name: "addTpl",
    //             component: AddTpl,
    //             meta: { title: "????????????" }
    //         }
    //     ]
    // },
    // {
    //     path: '/target',
    //     name: 'target',
    //     meta: {  title: '??????????????????', icon: 'appstore', roleId: ['1','3'] },
    //     children: [
    //         {
    //             path: "/target/targetList",
    //             name: "targetList",
    //             component: TargetList,
    //             meta: { title: "??????????????????" }
    //         },
    //         {
    //             path: "/target/addTarget",
    //             name: "addTarget",
    //             component: AddTarget,
    //             meta: { title: "??????????????????" }
    //         }
    //     ]
    // },
    // {
    //     path: '/credit',
    //     name: 'credit',
    //     meta: {  title: '????????????', icon: 'appstore', roleId: ['1','3'] },
    //     children: [
    //         {
    //             path: "/credit/creditList",
    //             name: "creditList",
    //             component: CreditList,
    //             meta: { title: "????????????" }
    //         },
    //         {
    //             path: "/credit/addCredit",
    //             name: "addCredit",
    //             component: AddCredit,
    //             meta: { title: "????????????" }
    //         }
    //     ]
    // },
    // {
    //     path: '/creditrecord',
    //     name: 'creditrecord',
    //     meta: {  title: '??????????????????', icon: 'appstore', roleId: ['1','3'] },
    //     children: [
    //         {
    //             path: "/creditrecord/creditRecordList",
    //             name: "creditRecordList",
    //             component: CreditRecordList,
    //             meta: { title: "??????????????????" }
    //         },
    //         {
    //             path: "/creditrecord/addCreditRecord",
    //             name: "addCreditRecord",
    //             component: AddCreditRecord,
    //             meta: { title: "??????????????????" }
    //         }
    //     ]
    // },
    // {
    //     path: '/sensitive',
    //     name: 'sensitive',
    //     meta: {  title: '???????????????', icon: 'appstore', roleId: ['1','3'] },
    //     children: [
    //         {
    //             path: "/sensitive/sensitiveWordList",
    //             name: "sensitiveWordList",
    //             component: SensitiveWordList,
    //             meta: { title: "???????????????" }
    //         },
    //         {
    //             path: "/sensitive/addSensitiveWord",
    //             name: "addSensitiveWord",
    //             component: AddSensitiveWord,
    //             meta: { title: "???????????????" }
    //         }
    //     ]
    // },
    // {
    //     path: '/history',
    //     name: 'history',
    //     meta: {  title: '??????????????????', icon: 'appstore', roleId: ['1','3'] },
    //     children: [
    //         {
    //             path: "/history/historyList",
    //             name: "historyList",
    //             component: HistoryList,
    //             meta: { title: "??????????????????" }
    //         },
    //         {
    //             path: "/history/dailyMsgList",
    //             name: "dailyMsgList",
    //             component: DailyMsgList,
    //             meta: { title: "???????????????????????????" }
    //         }
    //     ]
    // }
];

