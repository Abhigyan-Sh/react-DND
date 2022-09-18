import update from 'immutability-helper'
import React, { useState, useCallback } from 'react'
import ItemTypes from '../utils/ItemTypes'
import Domain from '../components/Domain.js'
import Skills from '../components/Skills.js'

const Container = () => {
  const styles = {
    pgCover: 'h-screen w-screen flex flex-col gap-12',
    skillCover: 'flex flex-wrap items-center justify-center',
    domainsCover: 'flex justify-center flex-wrap gap-5 mx-auto h-3/6'
  }
  const [ domains, setDomains ] = useState([
    {accepts: [ItemTypes.FRONTEND], techs: [], tool_urls: []},
    {accepts: [ItemTypes.BLOCKCHAIN], techs: [], tool_urls: []},
    {accepts: [ItemTypes.BACKEND], techs: [], tool_urls: []},
  ])
  const [skills] = useState([
    { name: 'ReactJS', type: ItemTypes.FRONTEND, tool_url: 'https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/reactjs.svg' },
    { name: 'NodeJS', type: ItemTypes.BACKEND, tool_url: 'https://utillities.netlify.app/ToolImages/nodeJS.jpg' },
    { name: 'etherJs', type: ItemTypes.BLOCKCHAIN, tool_url: 'https://utillities.netlify.app/ToolImages/ethereumBlockchain.jpg' },

    { name: 'HTML', type: ItemTypes.FRONTEND, tool_url: 'https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/html.svg' },
    { name: 'ExpressJS', type: ItemTypes.BACKEND, tool_url: 'https://utillities.netlify.app/ToolImages/express.png' },
    { name: 'RemixIDE', type: ItemTypes.BLOCKCHAIN, tool_url: 	'https://utillities.netlify.app/ToolImages/remixIDE.png' },

    { name: 'CSS', type: ItemTypes.FRONTEND, tool_url: 'https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/css.svg' },
    { name: 'Solidity', type: ItemTypes.BLOCKCHAIN, tool_url: 'https://utillities.netlify.app/ToolImages/solidity.png' },

    { name: 'TailwindCSS', type: ItemTypes.FRONTEND, tool_url: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
    { name: 'web3js', type: ItemTypes.BLOCKCHAIN, tool_url: 'https://utillities.netlify.app/ToolImages/web3js.jfif' },

    { name: 'MUI', type: ItemTypes.FRONTEND, tool_url: 'https://utillities.netlify.app/ToolImages/mui.png' },
    { name: 'postman', type: ItemTypes.BACKEND, tool_url: 'https://utillities.netlify.app/ToolImages/postman.png' },
    { name: 'alchemy', type: ItemTypes.BLOCKCHAIN, tool_url: 'https://utillities.netlify.app/ToolImages/alchemy.jfif' },

    { name: 'AngularJS', type: ItemTypes.FRONTEND, tool_url: 'https://utillities.netlify.app/ToolImages/angularjs.png' },
    { name: "freeAPI's", type: ItemTypes.BACKEND, tool_url: 'https://utillities.netlify.app/ToolImages/api.png' },
    { name: 'chainlink', type: ItemTypes.BLOCKCHAIN, tool_url: 'https://utillities.netlify.app/ToolImages/chainlink.jpg' },

    { name: 'ReduxToolKit', type: ItemTypes.FRONTEND, tool_url: '	https://utillities.netlify.app/ToolImages/rtk.jpeg' },
    { name: 'nodemailer', type: ItemTypes.BACKEND, tool_url: '	https://utillities.netlify.app/ToolImages/nodemailer.jpg' },
    { name: 'openzeppelin', type: ItemTypes.BLOCKCHAIN, tool_url: 'https://utillities.netlify.app/ToolImages/openzeppelin.png' },

    { name: 'Django', type: ItemTypes.FRONTEND, tool_url: '	https://utillities.netlify.app/ToolImages/django.png' },
    { name: 'middlewares', type: ItemTypes.BACKEND, tool_url: 'https://utillities.netlify.app/ToolImages/middlewares.png' },
    { name: 'Hardhat', type: ItemTypes.BLOCKCHAIN, tool_url: 'https://utillities.netlify.app/ToolImages/hardhat.png' },
  ])
  const [ placedInSkill, setPlacedInSkill ] = useState([])
  function isDropped(boxName) {
    return placedInSkill.indexOf(boxName) > -1
  }
  /*@dev:::
    const handleDrop = useCallback(() => {}, []) 
    */
  const handleDrop = useCallback(
    (each, i) => {
      // Below one has been used -> look function isDropped..
      /* console.log(each) */
      const { name } = each
      setPlacedInSkill(
        update(placedInSkill, name ? { $push : [name]} : { $push : []})
      )
      // Below one has been used
      const toolURL = skills.find(eachObj => eachObj.name === each.name)
      const ToolURL = toolURL.tool_url
      /* console.log(ToolURL) */
      setDomains(
        update(domains, {
          [i] : {
            techs : {
              $push : [each]
            },
            tool_urls : {
              $push : [ToolURL]
            }
          }
        })
      )
    },
    [ placedInSkill, domains ]
  )
  return (
    <div className={styles.pgCover}>
    {/* SKILLs BOX */}
    <div className={styles.skillCover}>
        {skills.map(({ name, type, tool_url }, index) => (
          <Skills
            name={name}
            type={type}
            tool_url = {tool_url}
            isDropped={isDropped(name)}
            key={index}
          />
        ))}
      </div>
    {/* DOMAINs BOX */}
      <div className= {styles.domainsCover}>
        {domains.map(({accepts, techs, tool_urls}, i) => (
          <Domain
            key = {i}
            accepts = {accepts}
            techs = {techs}
            toolURL = {tool_urls}
            onDrop = {(each)=>{handleDrop(each, i)}}
          />)
        )}
      </div>
    </div>
  )
}

export default Container