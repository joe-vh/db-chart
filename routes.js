import React from 'react'
import { Route, IndexRoute, Link } from 'react-router'

// added x2
import { UserAuthWrapper } from 'redux-auth-wrapper'

import { donutData, barData } from './example-data'

import DonutChart from './charts/DonutChart/DonutChart';
import BarChart from './charts/BarChart/BarChart';

// added
const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  wrapperDisplayName: 'UserIsAuthenticated',
  failureRedirectPath: '/bar'
})

const App = ({ children }) => (
  <div>
    <header>
      Links:
      {' '}
      <Link to="/">Home</Link>
      {' '}
      <Link to="/foo">Foo</Link>
      {' '}
      <Link to="/bar">Bar</Link>
      {' '}
      <Link to="/donut">Donut</Link>
    </header>
    {children}
  </div>
)

const Home = () => (<div>Home!</div>)
const Foo = () => (<div>Foo!</div>)
//const Bar = () => (<div>Bar!</div>)
const DonutRoute = () => (<div><DonutChart id={'atkien etc'} data={donutData} /></div>)
const BarRoute = () => (<div>
  <BarChart
    id={'performance etc'}
    values={barData.values0}
    title={barData.title}
    xTitle={barData.xTitle}
    yTitle={barData.yTitle}
    xUnit={barData.xUnit}
    yUnit={barData.yUnit}
    yAxesRounding={20}
    width={900}
    height={450}
    xModulus={52}
    yModulus={10}
  />
  <BarChart
    id={'performance etc'}
    values={barData.values1}
    title={barData.title}
    xTitle={barData.xTitle}
    yTitle={barData.yTitle}
    xUnit={barData.xUnit}
    yUnit={barData.yUnit}
    width={650}
    height={250}
    xModulus={52}
    yModulus={10}
  />
  <BarChart
    id={'performance etc'}
    values={barData.values6}
    title={barData.title}
    xTitle={barData.xTitle}
    yTitle={barData.yTitle}
    xUnit={barData.xUnit}
    yUnit={barData.yUnit}
    width={900}
    height={450}
    yAxesRounding={10}
    xModulus={2}
    yModulus={2}
  />
  <BarChart
    id={'another'}
    values={barData.values3}
    title={barData.title}
    xTitle={barData.xTitle}
    yTitle={barData.yTitle}
    xUnit={barData.xUnit}
    yUnit={barData.yUnit}
    width={600}
    height={350}
    xModulus={52}
    yModulus={10}
  />
  <BarChart
    id={'anotherone'}
    values={barData.values4}
    title={barData.title}
    xTitle={barData.xTitle}
    yTitle={barData.yTitle}
    xUnit={barData.xUnit}
    yUnit={barData.yUnit}
    width={900}
    height={450}
    xModulus={3}
    yModulus={5}
  />
  <BarChart
    id={'performance 4'}
    values={barData.values5}
    title={barData.title}
    xTitle={barData.xTitle}
    yTitle={barData.yTitle}
    xUnit={barData.xUnit}
    yUnit={barData.yUnit}
    width={900}
    height={450}
    yAxesRounding={1}
    xModulus={1}
    yModulus={1}
  />
  <BarChart
    id={'performance okk'}
    values={barData.values2}
    title={barData.title}
    xTitle={barData.xTitle}
    yTitle={barData.yTitle}
    xUnit={barData.xUnit}
    yUnit={barData.yUnit}
    xModulus={52}
    yModulus={10}
  />
</div>)

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="foo" component={UserIsAuthenticated(Foo)} />
    {/*<Route path="bar" component={Bar} />*/}
    <Route path="donut" component={DonutRoute} />
    <Route path="bar" component={BarRoute} />
  </Route>
)

export default routes
