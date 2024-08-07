import React from 'react'
import { ChartsHeader } from '../../components'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Zoom, Inject, HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts'
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'



const  date1 = new Date('2017, 1, 1')

function filterValue(value) {
  if(value.x >= date1){
    return value.x, value.high, value.low
  }
}

const returnValue = financialChartData.filter(filterValue)




const Financial = () => {

const {currentMode}= useStateContext

  return (
    <div>
      <ChartsHeader category='Financial' title='APPLE Historical'/>
      
      <div className="w-full">
        <ChartComponent
          id='charts'
          primaryXAxis={FinancialPrimaryXAxis}
          primaryYAxis={FinancialPrimaryYAxis}
          chartArea={{border: {width: 0}}}
          tooltip={{enable: true, shared: true}}
          crosshair={{enable: true, lineType: 'Vertical', line:{width: 0}}}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]}/>

          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={returnValue}
              xName="x"
              yName="low"
              name="Apple Inc"
              type="Hilo"
              low="low"
              high="high"
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Financial
