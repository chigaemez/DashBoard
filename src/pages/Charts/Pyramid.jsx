import React from 'react'
import { ChartsHeader } from '../../components'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts'
import { PyramidData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'





const ColorMapping = () => {

const {currentMode}= useStateContext

  return (
    <div>
      <ChartsHeader category='Color Mapping' title='USA CLIMATE - WEATHER BY MONTH'/>
      
      <div className="w-full">
        <AccumulationChartComponent
          id='charts'
          legendSettings={{background: 'white'}}
          tooltip={{enable: true}}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]}/>

          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={PyramidData}
              xName="x"
              yName="y"
              name="Food"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{mode: 'Drop', fill: 'red'}}
              dataLabel={{
                visible:true,
                position : "Inside",
                name:'text'
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default ColorMapping
