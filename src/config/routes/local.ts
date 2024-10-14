class UserRoute{
    static list   = "/user/all"
    static detail = "/user/detail/:id"
    static auth   = "/user/login"
    static create = "/user/register"
    static delete = "/user/delete"
    static update = "/user/update"
}

class ActivityRoute{
    static list   = "/activity/all"
    static detail = "/activity/details"
    static create = "/activity/store"
    static delete = "/activity/delete"
    static update = "/activity/update"
}

class SecteurRoute{
    static list   = "/sector/all"
    static detail = "/sector/detail/:id"
    static create = "/sector/store"
    static delete = "/sector/delete"
    static update = "/sector/update"
}

class ServiceRoute{
    static list   = "/service/all"
    static detail = "/service/detail/:id"
    static create = "/service/store"
    static delete = "/service/delete"
    static update = "serviceservice/update"
}

class StatusJuridiqueRoute{
    static list   = "/status_juridique/all"
    static detail = "/status_juridique/detail/:id"
    static create = "/status_juridique/store"
    static delete = "/status_juridique/delete"
    static update = "/status_juridique/update"
}

class Enterprise{
    static list   = "/enterprise/all"
    static detail = "/enterprise/detail/:id"
    static create = "/enterprise/store"
    static delete = "/enterprise/delete"
    static update = "/enterprise/update"
}

class WorkSpace{
    static auth   = "/workspace/login"
    static list   = "/workspace/all"
    static detail = "/workspace/detail/:id"
    static create = "/workspace/store"
    static delete = "/workspace/delete"
    static update = "/workspace/update"
}

class WorkSpaceUser{
    static list   = "/workspace_user/all"
    static detail = "/workspace_user/detail/:id"
    static create = "/workspace_user/store"
    static delete = "workspace_user/delete"
    static update = "workspace_user/update"
}

export default class local{
    static activity         = ActivityRoute;
    static enterprise       = Enterprise;
    static secteur          = SecteurRoute;
    static service          = ServiceRoute;
    static statusJuridique  = StatusJuridiqueRoute;
    static user             = UserRoute;
    static workspace        = WorkSpace;
    static workspaceUser    = WorkSpaceUser;
}