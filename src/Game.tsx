import {useState} from 'react'
import { Button, Radio, Collapse} from 'antd';
import './index.css'
import type { RadioChangeEvent } from 'antd';

const options = [
  { label: '剪刀', value: 1 },
  { label: '石头', value: 2 },
  { label: '布', value: 3 },
];

type re = {label?: string, value?: number}
type re2 = {total: number, win: number, lost: number, average: number}

const Game = () => {
  // 你的选择
  const [value, setValue] = useState(0)
  // ai结果
  const [randomResult, setRandomResult] = useState<re>({})
  // 最后结果
  const [result, setResult] = useState("")
  // 次数
  const [allResult, setAllResult] = useState<re2>({total: 0, win: 0, lost: 0, average: 0})
  // lists
  const [lists] = useState(['剪刀', '石头', '布'])

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value)
  }

  const start = () => {
    const randomNum = Math.floor(Math.random() * 10)
    allResult.total ++
    // 0-9
    if(randomNum < 3) {
      setRandomResult({ label: '剪刀', value: 1 })
      if(value === 1) {
        setResult("平局")
        allResult.average++
      } else if(value === 2){
        setResult("你赢了")
        allResult.win++
      } else {
        setResult("你输了")
        allResult.lost++
      }
    } else if(randomNum < 6) {
      setRandomResult({ label: '石头', value: 2 })
      if(value === 1) {
        setResult("你输了")
        allResult.lost++
      } else if(value === 2){
        setResult("平局")
        allResult.average++
      } else {
        setResult("你赢了")
        allResult.win++
      }
    } else {
      setRandomResult({ label: '布', value: 3 })
      if(value === 1) {
        setResult("你赢了")
        allResult.win++
      } else if(value === 2){
        setResult("你输了")
        allResult.lost++
      } else {
        setResult("平局")
        allResult.average++
      }
    }
    setAllResult(allResult)
  }

  return (
    <div>
      <div className='header'>
        <div className='btn'>
          请选择： <Radio.Group options={options} onChange={onChange3} value={value} />
          <Button type="primary" onClick={start}>开始</Button>
        </div>
        <Collapse defaultActiveKey={['1', '2']} >
          <Collapse.Panel header="当局结果" key="1">
            <div>
              <div>你的选择：{lists[value - 1]}</div>
              <div>AI结果：{randomResult.label}</div>
              <div>{result }</div>
            </div>
          </Collapse.Panel>
          <Collapse.Panel header="总计" key="2">
            <div>
              <div>总局数： {allResult.total}</div>
              <div>赢了局数： {allResult.win}</div>
              <div>输了局数： {allResult.lost}</div>
              <div>平局局数： {allResult.average}</div>
            </div>
          </Collapse.Panel>
        </Collapse>
      </div>
    </div>
  )
}

export default Game
