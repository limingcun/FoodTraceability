<?php

/*
 * @version: 0.1 查询工具类范例
 * @author: wuzhihui
 * @date: 2016/9/4
 * @description:
 *
 */

namespace app\Utils;

class IQuery{
    //加入排序
    public function ofOrder(&$query, $request,$table='id')
    {
        $params=$request->input('params');
        $sort = isset($params['_sort'])?$params['_sort']:'';
        $order = isset($params['order'])?$params['order']:'';

        if($sort != null && $sort != ''){
            if($order != null && $order == 'desc') $query = $query->orderBy($sort, 'desc');
            else $query = $query->orderBy($sort,'asc');
        }else{
            $query = $query->orderBy($table, 'desc');
        }
        return $query;
    }
}