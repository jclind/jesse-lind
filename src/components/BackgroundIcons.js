import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { randomNumber } from '../util/randomNumber'
import { useRouter } from 'next/router'

const points = [
  { ctl: [-5, -5] },
  { t1: [-5, 20] },
  { t2: [-5, 30] },
  { t3: [-5, 40] },
  { t4: [-5, 50] },
  { t5: [-5, 60] },
  { t6: [-5, 70] },
  { t7: [-5, 80] },
  { ctr: [-5, 105] },
  { r1: [20, 105] },
  { r2: [30, 105] },
  { r3: [40, 105] },
  { r4: [50, 105] },
  { r5: [60, 105] },
  { r6: [70, 105] },
  { r7: [80, 105] },
  { cbr: [105, 105] },
  { b7: [105, 80] },
  { b6: [105, 70] },
  { b5: [105, 60] },
  { b4: [105, 50] },
  { b3: [105, 40] },
  { b2: [105, 30] },
  { b1: [105, 20] },
  { cbl: [105, -5] },
  { l1: [80, -5] },
  { l2: [70, -5] },
  { l3: [60, -5] },
  { l4: [50, -5] },
  { l5: [40, -5] },
  { l6: [30, -5] },
  { l7: [20, -5] },
]
// const colors = [
//   'brightness(0) saturate(100%) invert(96%) sepia(4%) saturate(7343%) hue-rotate(162deg) brightness(96%) contrast(98%)',
//   'brightness(0) saturate(100%) invert(87%) sepia(6%) saturate(3450%) hue-rotate(331deg) brightness(104%) contrast(101%)',
//   'brightness(0) saturate(100%) invert(73%) sepia(99%) saturate(2662%) hue-rotate(311deg) brightness(103%) contrast(136%)',
// ]
const icons = [
  '/branch-icon.svg',
  '/bug-icon.svg',
  '/coffee-icon.svg',
  '/css-icon.svg',
  '/figma-icon.svg',
  '/file-icon.svg',
  '/firebase-icon.svg',
  '/git-icon.svg',
  '/html-icon.svg',
  '/js-icon.svg',
  '/react-icon.svg',
  '/right-arrow-icon.svg',
  '/left-arrow-icon.svg',
  '/next-icon.svg',
  '/scss-icon.svg',
  '/vscode-icon.svg',
]

const BackgroundIcons = () => {
  const router = useRouter()

  useEffect(() => {
    const getRandomPoint = prevPoint => {
      // If a previous point is passed in, filter array to be points not on the same side as selected point
      if (prevPoint) {
        // If the first letter is c (meaning a corner), get the last characters (the two letters of the adjacent sides)
        const prevPointProp = Object.keys(prevPoint)[0]
        const prevPointType =
          prevPointProp.charAt(0) === 'c'
            ? prevPointProp.substring(1, 3)
            : prevPointProp.charAt(0)
        // Create array of points that aren't on the same side
        // Or aren't on adjacent side if one point is a corner
        const newArr = points.filter(point => {
          const currPointType =
            Object.keys(point)[0].charAt(0) === 'c'
              ? Object.keys(point)[0].substring(1, 3).split('')
              : Object.keys(point)[0].substring(0, 1).split('')
          const isSubstring = () => {
            let bool = false
            currPointType.map(curr => {
              if (prevPointType.includes(curr)) {
                bool = true
              }
            })
            return bool
          }
          return !isSubstring()
        })
        // const currPoint = newArr[randomNumber(newArr.length)]
        // return currPoint[Object.keys(currPoint)]
        return newArr[randomNumber(0, newArr.length)]
      }
      // const currPoint = points[randomNumber(points.length)]
      return points[randomNumber(0, points.length)]
    }
    const getTwoPoints = () => {
      const first = getRandomPoint()
      const second = getRandomPoint(first)
      return {
        first: first[Object.keys(first)],
        second: second[Object.keys(second)],
      }
    }
    const createEl = () => {
      console.log('new item')
      const { first, second } = getTwoPoints()
      const id = '_' + uuidv4()
      const el = document.createElement('img')
      el.setAttribute('id', id)
      el.setAttribute('class', 'item svg')
      el.setAttribute('src', `${icons[randomNumber(0, icons.length)]}`)
      if (document.querySelector('.background-icons-container')) {
        document.querySelector('.background-icons-container').appendChild(el)
      }

      // Random time between 15 and 35 seconds
      const randTime = randomNumber(15000, 35000)
      // Random rotation degree between 0 and 520
      const randRot = randomNumber(0, 520)

      if (document.getElementById(`${id}`)) {
        const animation = document.getElementById(`${id}`).animate(
          [
            {
              top: `${first[0]}%`,
              left: `${first[1]}%`,
              transform: `rotate(0deg)`,
            },
            {
              top: `${second[0]}%`,
              left: `${second[1]}%`,
              transform: `rotate(${randRot}deg)`,
            },
          ],
          {
            duration: randTime,
          }
        )
        animation.onfinish = function () {
          if (el) {
            el.remove()
          }
        }
      }
    }

    // initialize timer variable for setTimeout clearing in useEffect later
    let timer = null

    const spawnLoop = () => {
      // Get random time between 4 and 12 seconds to set next timeout for
      const randTime = randomNumber(4000, 12000)
      // Create element every random amount of time and call spawnLoop again for next element
      timer = setTimeout(() => {
        createEl()
        spawnLoop()
      }, randTime)
    }
    // Remove setTimeout timer on page change to stop element creation
    router.events.on('routeChangeStart', (url, { shallow }) => {
      if (timer) {
        clearTimeout(timer)
      }
    })

    spawnLoop()

    // Create initial elements for beginning sequence
    createEl()
    setTimeout(() => {
      createEl()
    }, 1000)
    setTimeout(() => {
      createEl()
    }, 2000)

    console.log('yooyyoo')
  }, [router.events])

  return <div className='background-icons-container'></div>
}

export default BackgroundIcons
