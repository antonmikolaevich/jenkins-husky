const {Before} = require('@wdio/cucumber-framework')
Before({name: 'console log '}, ()=>{
    return console.log('before hook')
} )