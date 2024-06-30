// src/app/components/Database.tsx
'use client'

import React, { useState, useEffect, useMemo } from 'react'
import {
  Container,
  Paper,
  Box,
  Input,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TableSortLabel,
} from '@mui/material'

interface DatabaseItem {
  id: string // ID as a string type
  title: string // 名称
  company: string // 公司
  time: string // Time related to the item
  address: string // Location related to the item
  job: string // 位置
  major: string // Major or field of study
  education: string // Level of education
  experience: string // Internship experience
  source: string // Source of the job listing
  status: string // Job seeking status
  type: string // Type of the job
  period: string // Internship period
  duration: string // Duration of the internship
  skills: string // Skills required
  englishLevel: string // Level of English proficiency
  industry: string // Industry type
  deadline: string // Application deadline
  compensation: string // Compensation or salary
  remote: string // Whether the job is remote
  referral: string // Whether the job is an internal referral
  contactway: string // Contact information
}

// Column definitions with English labels
const columns = [
  { id: 'id', label: 'ID' },
  { id: 'title', label: '标题' },
  { id: 'company', label: '公司' },
  { id: 'time', label: '招聘时间' },
  { id: 'address', label: '地点' },
  { id: 'job', label: '职位' },
  { id: 'major', label: '专业' },
  { id: 'education', label: '学历' },
  { id: 'experience', label: '经验' },
  { id: 'source', label: '来源' },
  { id: 'status', label: '求职状态' },
  { id: 'type', label: '职位类型' },
  { id: 'period', label: '实习周期' },
  { id: 'duration', label: '实习时长' },
  { id: 'skills', label: '技能要求' },
  { id: 'englishLevel', label: '英语水平' },
  { id: 'industry', label: '行业' },
  { id: 'deadline', label: '截止日期' },
  { id: 'compensation', label: '薪酬' },
  { id: 'remote', label: '是否远程' },
  { id: 'referral', label: '是否内推' },
  { id: 'contactway', label: '联系方式' },
]

function Database() {
  const [database, setDatabase] = useState<DatabaseItem[]>([])
  const [filters, setFilters] = useState<Record<string, string | null>>({})

  // 当我们添加一个新项时，我们可以通过以下方式来增加 ID
  const addNewItem = (newItem: Omit<DatabaseItem, 'id'>) => {
    const newDatabase = [...database, { ...newItem, id: database.length + 1 }]
    setDatabase(newDatabase)
  }

  // const [jobs, setJobs] = useState([])

  // 从数据库中获取
  useEffect(() => {
    fetch('http://127.0.0.1:5000/getalljob', {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setDatabase(data) // Store fetched data in state
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, []) // Empty dependency array means this effect runs only once after the component mounts

  // 使用useEffect钩子模拟获取数据库数据
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = [
  //       {
  //         id: 1,
  //         title: '产品经理',
  //         company: '腾讯科技',
  //         time: '2024-06-28',
  //         address: '深圳',
  //         job: '产品经理',
  //         major: '计算机科学',
  //         education: '本科',
  //         experience: '有实习经验者优先',
  //         source: '学校就业网',
  //         status: '招聘中',
  //         type: '全职',
  //         period: '2024年7月',
  //         duration: '6个月',
  //         skills: '需求分析,产品设计',
  //         englishLevel: '四级',
  //         industry: '互联网',
  //         deadline: '2024-07-15',
  //         compensation: '面议',
  //         remote: '否',
  //         referral: '否',
  //         contactway: '微信:543dfsgf',
  //       },
  //       {
  //         id: 2,
  //         title: '市场助理',
  //         company: '百度在线',
  //         time: '2024-06-28',
  //         address: '北京',
  //         job: '市场助理',
  //         major: '市场营销',
  //         education: '硕士',
  //         experience: '无要求',
  //         source: '公司官网',
  //         status: '招聘中',
  //         type: '实习',
  //         period: '2024年8月',
  //         duration: '3个月',
  //         skills: '市场调研,数据分析',
  //         englishLevel: '六级',
  //         industry: '互联网',
  //         deadline: '2024-07-20',
  //         compensation: '3000元/月',
  //         remote: '是',
  //         referral: '是',
  //         contactway: '微信: 432424',
  //       },
  //       {
  //         id: 3,
  //         title: '软件开发工程师',
  //         company: '阿里巴巴集团',
  //         time: '2024-06-29',
  //         address: '杭州',
  //         job: '后端开发',
  //         major: '软件工程',
  //         education: '本科及以上',
  //         experience: '至少一年相关经验',
  //         source: 'LinkedIn',
  //         status: '招聘中',
  //         type: '全职',
  //         period: '立即入职',
  //         duration: '长期',
  //         skills: 'Java, Spring Boot',
  //         englishLevel: '熟练',
  //         industry: '电子商务',
  //         deadline: '2024-07-25',
  //         compensation: '年薪25万起',
  //         remote: '否',
  //         referral: '是',
  //         contactway: 'x: 3424342',
  //       },
  //     ]
  //     setDatabase(data)
  //   }
  //   fetchData()
  // }, [])

  // 首先，我们需要一个辅助函数来从数据库中提取每个列的所有不同值
  const getUniqueValues = (columnId) => {
    const uniqueValues = new Set(database.map((item) => item[columnId]))
    return Array.from(uniqueValues)
  }

  // 修改 renderTableHeader 函数以包含复合选择器
  const renderTableHeader = () => (
    <TableHead>
      <TableRow>
        {columns.map(({ id, label }) => (
          <TableCell key={id}>
            <select
              value={filters[id] || ''}
              onChange={(event) => handleFilterChange(event, id)}
            >
              <option value="">全部</option>
              {/* 使用 getUniqueValues 函数填充选项 */}
              {getUniqueValues(id).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        {columns.map(({ id, label }) => (
          // 确保label是一个字符串，如果是数字，需要转换为字符串或直接使用字符串
          <TableCell key={id}>
            <h3>{label?.toString()}</h3>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )

  // 处理复合选择器筛选条件变化的函数
  const handleFilterChange = (event, columnId) => {
    const { value } = event.target
    setFilters((prevFilters) => ({ ...prevFilters, [columnId]: value }))
  }

  // 根据过滤条件过滤数据
  const filteredItems = useMemo(() => {
    return database.filter((item) => {
      return columns.every((column) => {
        const filterValue = filters[column.id]
        // 检查 filterValue 是否不为空
        return !filterValue || item[column.id] === filterValue
      })
    })
  }, [database, filters])

  // 为 TableCell 设置固定宽度和样式
  const cellStyle = {
    maxWidth: 200, // 设置最大宽度，可根据实际情况调整
    minWidth: 200, // 设置最小宽度，确保列的一致性
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordBreak: 'break-all',
  }

  // // 渲染表头
  // const renderTableHeader = () => (
  //   <TableHead>
  //     <TableRow>
  //       {columns.map(({ id, label }) => (
  //         <TableCell
  //           key={id}
  //           // style={{
  //           //   whiteSpace: 'nowrap',
  //           //   overflow: 'hidden',
  //           //   textOverflow: 'ellipsis',
  //           //   wordBreak: 'break-all',
  //           // }}
  //         >
  //           <Input
  //             type="text"
  //             placeholder={`按${label}过滤...`}
  //             name={id}
  //             onChange={handleFilterChange}
  //           />
  //         </TableCell>
  //       ))}
  //     </TableRow>
  //     <TableRow>
  //       {columns.map(({ id, label }) => (
  //         // 确保label是一个字符串，如果是数字，需要转换为字符串或直接使用字符串
  //         <TableCell key={id}>{label?.toString()}</TableCell>
  //       ))}
  //     </TableRow>
  //   </TableHead>
  // )

  // 渲染表格内容
  const renderTableBody = () => (
    <TableBody>
      {filteredItems.map((item) => (
        <TableRow key={item.id}>
          {columns.map(({ id }) => (
            <TableCell
              key={id}
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordBreak: 'break-all',
              }}
            >
              {item[id]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 2 }}>{/* 其他UI和逻辑 */}</Box>
      <Paper>
        <Table>
          {renderTableHeader()}
          {renderTableBody()}
        </Table>
      </Paper>
    </Container>
  )
}

export default Database
