import React, { useState, useEffect , useRef} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import _ from "lodash";
import MenuBar from '../components/header/menu-bar/Menu-Bar'
import { IMenuBarProps } from '../interfaces/Product-Interfaces'
import * as Actions from '../root-store/pages/product/actions'
import {RootState} from '../root-store/root-reducer'

function useUpdateEffect(callback : any, dependencies : any) {
    const firstRenderRef = useRef(true)
  
    // Since ref persists value between renders (and itself doesn't trigger a render when value is changed), we can simply just set ref to a failing condition on our 1st render so that component only is re-rendered when dependencies change and not also "onMount"
    useEffect(() => {
      if (firstRenderRef.current) {
        firstRenderRef.current = false
        return
      }
      return callback()
    }, dependencies)
  }

export default function Products(){
    const dispatch = useDispatch()
    const categories = useSelector((state : RootState) => state.product_reducer.products);
    const [productsTopBarData, setProductsTopBarData] = useState<IMenuBarProps>({
        categoriesList : []
    }) 
    useEffect(() => {
        if(_.isUndefined(categories) || _.isEmpty(categories) ){
            dispatch(Actions.getAllCategory())
        }
    },[])

    useUpdateEffect(() => {
        if( !_.isEmpty(categories)){
            setProductsTopBarData(value => ({...value,categoriesList: categories }))
        }
    },[categories != null])

    return (
        <React.Fragment>
            {/* <MenuBar categoriesList={productsTopBarData.categoriesList}/> */}
        </React.Fragment>
    )
}