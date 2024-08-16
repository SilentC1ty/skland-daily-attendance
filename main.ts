/*
 * @Descripttion: 
 * @详细文档参考: 
 * @version: 
 * @Author: xuyuchen
 * @Date: 2024-08-06 17:39:10
 * @LastEditors: xuyuchen
 * @LastEditTime: 2024-08-16 08:56:34
 */
// import assert from 'node:assert'
import 'dotenv/config'
// import process from 'node:process'
import { doAttendanceForAccount } from './src'

// assert(typeof process.env.SKLAND_TOKEN === 'string')

const accounts = []
// const withServerChan = process.env.SERVERCHAN_SENDKEY
// const withBark = process.env.BARK_URL

await Promise.all(accounts.map(token => doAttendanceForAccount(token, { withServerChan: false, withBark: false })))
