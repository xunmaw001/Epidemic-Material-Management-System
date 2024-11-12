const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"员工管理",
                        "menuJump":"列表",
                        "tableName":"yuangong"
                    }
                ],
                "menu":"员工管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"物资管理",
                        "menuJump":"列表",
                        "tableName":"wuzi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"物资留言管理",
                        "menuJump":"列表",
                        "tableName":"wuziLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"物资收藏管理",
                        "menuJump":"列表",
                        "tableName":"wuziCollection"
                    }
                ],
                "menu":"物资管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "出入库",
                            "删除"
                        ],
                        "menu":"出入库管理",
                        "menuJump":"列表",
                        "tableName":"wuziChuruInout"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "报表",
                            "删除"
                        ],
                        "menu":"出入库详情管理",
                        "menuJump":"列表",
                        "tableName":"wuziChuruInoutList"
                    }
                ],
                "menu":"出入库管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除",
                            "审核",
                            "报表"
                        ],
                        "menu":"物资捐赠管理",
                        "menuJump":"列表",
                        "tableName":"juanzeng"
                    }
                ],
                "menu":"物资捐赠管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除",
                            "审核",
                            "报表"
                        ],
                        "menu":"物资申请管理",
                        "menuJump":"列表",
                        "tableName":"shenqing"
                    }
                ],
                "menu":"物资申请管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"疫情论坛管理",
                        "menuJump":"列表",
                        "tableName":"forum"
                    }
                ],
                "menu":"疫情论坛管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"疫情资讯管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"疫情资讯管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"防疫宣传管理",
                        "menuJump":"列表",
                        "tableName":"jiaoyu"
                    }
                ],
                "menu":"防疫宣传管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"防疫宣传类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJiaoyu"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"物资类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryWuzi"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"出入库类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryWuziChuruInout"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
            /*,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"数据备份",
			            "menuJump":"列表",
			            "tableName":"beifen"
			        },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"数据还原",
					    "menuJump":"列表",
					    "tableName":"huanyuan"
					}
			    ],
			    "menu":"数据库管理"
			}*/
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
            {
                "backMenu":[
                    {
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "新增",
                                    "修改",
                                ],
                                "menu":"用户管理",
                                "menuJump":"列表",
                                "tableName":"yonghu"
                            }
                        ],
                        "menu":"用户管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"物资管理",
                                "menuJump":"列表",
                                "tableName":"wuzi"
                            }
                            ,
                            {
                                "buttons":[
                                    "查看",
                                    "修改",
                                    "删除"
                                ],
                                "menu":"物资留言管理",
                                "menuJump":"列表",
                                "tableName":"wuziLiuyan"
                            }
                            ,
                            {
                                "buttons":[
                                    "查看",
                                    "删除"
                                ],
                                "menu":"物资收藏管理",
                                "menuJump":"列表",
                                "tableName":"wuziCollection"
                            }
                        ],
                        "menu":"物资管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "出入库",
                                    "删除"
                                ],
                                "menu":"出入库管理",
                                "menuJump":"列表",
                                "tableName":"wuziChuruInout"
                            }
                            ,
                            {
                                "buttons":[
                                    "查看",
                                    "报表",
                                    "删除"
                                ],
                                "menu":"出入库详情管理",
                                "menuJump":"列表",
                                "tableName":"wuziChuruInoutList"
                            }
                        ],
                        "menu":"出入库管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "审核",
                                    "报表"
                                ],
                                "menu":"物资捐赠管理",
                                "menuJump":"列表",
                                "tableName":"juanzeng"
                            }
                        ],
                        "menu":"物资捐赠管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "审核",
                                    "报表"
                                ],
                                "menu":"物资申请管理",
                                "menuJump":"列表",
                                "tableName":"shenqing"
                            }
                        ],
                        "menu":"物资申请管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "新增",
                                ],
                                "menu":"疫情论坛管理",
                                "menuJump":"列表",
                                "tableName":"forum"
                            }
                        ],
                        "menu":"疫情论坛管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                ],
                                "menu":"疫情资讯管理",
                                "menuJump":"列表",
                                "tableName":"gonggao"
                            }
                        ],
                        "menu":"疫情资讯管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",
                                    "新增",
                                    "修改",
                                    "删除"
                                ],
                                "menu":"防疫宣传管理",
                                "menuJump":"列表",
                                "tableName":"jiaoyu"
                            }
                        ],
                        "menu":"防疫宣传管理"
                    }
                    ,{
                        "child":[
                            {
                                "buttons":[
                                    "查看",

                                ],
                                "menu":"轮播图管理",
                                "menuJump":"列表",
                                "tableName":"config"
                            }
                        ],
                        "menu":"轮播图信息"
                    }
                    /*,{
                        "child":[
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"数据备份",
                                "menuJump":"列表",
                                "tableName":"beifen"
                            },
                            {
                                "buttons":[
                                    "查看"
                                ],
                                "menu":"数据还原",
                                "menuJump":"列表",
                                "tableName":"huanyuan"
                            }
                        ],
                        "menu":"数据库管理"
                    }*/
                ],
                "frontMenu":[],
                "hasBackLogin":"是",
                "hasBackRegister":"否",
                "hasFrontLogin":"否",
                "hasFrontRegister":"否",
                "roleName":"员工",
                "tableName":"yuangong"
            }
]
    }
}
export default menu;