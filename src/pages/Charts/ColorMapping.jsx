import React from 'react'
import { ChartsHeader } from '../../components'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Tooltip, Category, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts'
import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'





const ColorMapping = () => {

const {currentMode}= useStateContext

  return (
    <div>
      <ChartsHeader category='Color Mapping' title='USA CLIMATE - WEATHER BY MONTH'/>
      
      <div className="w-full">
        <ChartComponent
          id='charts'
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{border: {width: 0}}}
          legendSettings={{mode: 'Range', background: 'white'}}
          tooltip={{enable: true, shared: true}}
          crosshair={{enable: true, lineType: 'Vertical', line:{width: 0}}}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]}/>

          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              xName="x"
              yName="y"
              name="USA"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                TopRight: 10
              }}
            />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item}/>)}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default ColorMapping
