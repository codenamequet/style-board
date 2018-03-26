import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import AddShoes from './AddShoes'
import Landing from './Landing'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <main>
        <Switch>
          <Route exact path='/' render={() => (<Landing />)} />
          <Route exact path='/shoes/add' render={() => (<AddShoes />)} />
          <Route exact path='/*' render={() => (<Landing />)} />
        </Switch>
       {/* <Accessories />
       <Shirts />
       <Pants />
       <Shoes />
       <AddShoes /> */}
      </main>
      <Footer />
      </div>
    )
  }
}

{/* <div className='App'>
        <Header />
        <main>
          <Switch>
            <Route exact path='/'              render={()      => (<Landing />)}/>
            <Route exact path='/books'         render={(props) => (<ItemContainer {...props}/>)}/>
            <Route exact path='/books/add'     render={()      => (<ItemAdd />)} />
            <Route path='/books/:title/edit'   render={(props) => (<ItemEdit {...props} />)} />
            <Route path='/books/:title'        render={(props) => (<ItemDetails {...props}/>)} />
            <Route exact path='/records'       render={(props) => (<RecordContainer {...props}/>)}/>
            <Route exact path='/records/add'   render={()      => (<RecordAdd />)} />
            <Route path='/records/:title/edit' render={(props) => (<RecordEdit {...props} />)} />
            <Route path='/records/:title'      render={(props) => (<RecordDetails {...props}/>)} />
            <Route exact path='/users'         render={()      => (<UserAuth />)} />
            <Route path='/*'                   render={()      => (<Landing />)} />
          </Switch>
        </main>
        <Footer />
      </div> */}
export default App;
