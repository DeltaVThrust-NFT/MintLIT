import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'

import LitJsSdk from 'lit-js-sdk'

import Header from './Header'
import { getMetadata } from './utils/firestore'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    textAlign: 'center',
    maxWidth: 1300,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}))

export default function View () {
  const classes = useStyles()

  useEffect(async () => {
    const chain = 'polygon'
    const tokenIds = await LitJsSdk.findLITs({ chain })
    console.log('tokenIds', tokenIds)
    const metadata = await getMetadata({ tokenIds, chain })
    console.log(metadata)
  }, [])

  return (
    <div className={classes.root}>
      <Header />
      <div style={{ height: 24 }} />
      <Container maxWidth='lg'>
        <Card>
          <CardContent>
            hi
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}
