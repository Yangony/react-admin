import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Login from '@/page/Login'

import ProIndex from '@/page/Pro/index'
// 登录验证
function requireAuth(url,str) {
  // 模拟token失效时间
  console.log(window)
  const token = sessionStorage.getItem('token')
  if (token) {
    return str
  } else {
    return <Redirect to={"/?bakck_url=" + url} />;
  }
}

function RouterConfig({ history, app }) {
  return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route onEnter= {requireAuth} >
            <Route path="/pro" component={ProIndex}></Route>
          </Route>
        </Switch>
      </Router>
  );
}

export default RouterConfig;
