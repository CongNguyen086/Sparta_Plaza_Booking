import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
// Components
import ContentHeader from '../ContentHeader'
import CatalogTable from './CatalogTable'
import CreateForm from './CreateForm'

class RoomCatalog extends Component {
    render() {
        const { match } = this.props
        console.log('match', match)
        return (
            <div>
                <ContentHeader {...this.props} />
                {/* <CreateForm /> */}
                <Switch>
                    {/* <Route path={`${match.url}`} exact render={() => (
                        <CreateForm title='Create' submitButton='Create' />)}
                    /> */}
                    <Route path={`${match.url}`} component={CatalogTable} />
                </Switch>
            </div>
        )
    }
}
export default withRouter(RoomCatalog)
