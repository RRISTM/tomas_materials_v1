import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Collapse, List } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import { Link, Route } from "react-router-dom";

const styles = theme => ({
  Folder: {
    color: '#002052',
    fontWeight: 'bold'
  },
  File: {
    color: '#002052',
    fontWeight: '500'
  }
});

export class DrawerMenuItem extends Component {
  constructor(props) {
    super(props);

    // this.searchFolder = this.searchFolder.bind(this);
    // this.searchItem = this.searchItem.bind(this);
    function searchFolder(item) {
      return item.children.find((item) => searchItem(item));
    }
    function searchItem(item) {
      if (item.type === 'Folder') {
        return searchFolder(item);
      } else {
        if (props.location.pathname.includes(`${props.match.url}/${item.file}`)) {
          return true;
        } else {
          return false;
        }
      }
    }
    let item_inside = searchItem(this.props.item);
    if (item_inside === undefined) {
      item_inside = false;
    } else {
      item_inside = true;
    }
    this.state = { expand: item_inside };
  }


  render() {
    const { theme, classes } = this.props;
    let item = this.props.item;
    // let shortName = item.name.replace(/\s/g, '');
    let itemNested = {};
    if (this.props.depth > 0) {
      // console.log(this.props.classesToUse);
      // itemNested = this.props.classesToUse.nested;
      let leftPadding = theme.spacing(4) * this.props.depth;
      itemNested = { paddingLeft: leftPadding };
    }
    let completeItem = {};
    if (item.type === 'Folder') {
      /*folder */
      let subFolder = item.children.map((value) => (
        <Route key={value.name} to={`${this.props.match.path}`} render={(routeProps) => (
          <DrawerMenuItem key={value.name} item={value} depth={this.props.depth + 1} selectCb={this.props.selectCb} theme={theme} classes={classes} {...routeProps} />
        )} />
      ));
      let folderItem = (
        <Fragment>
          <ListItem button style={itemNested} onClick={(e) => this.setState({ expand: !this.state.expand })} >
            <ListItemText inset primary={item.name} disableTypography className={classes.Folder} />
            {this.state.expand ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.expand} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {subFolder}
            </List>
          </Collapse>
        </Fragment>
      );
      completeItem = folderItem;
    } else if (item.type === 'File') {
      /*file */
      let selectedItem = false;
      if (this.props.location.pathname.includes(`${this.props.match.url}/${item.file}`)) {
        selectedItem = true;
      }
      let fileItem = (
        <ListItem button selected={selectedItem} style={itemNested} onClick={(e) => this.props.selectCb(item.name)} component={Link} to={`${this.props.match.url}/${item.file}`}>
          <ListItemText disableTypography inset primary={item.name} className={classes.File} />
        </ListItem>
      );
      completeItem = fileItem;
    } else {
      // console.log('Not defined item')
    }

    return (
      <Fragment>
        {completeItem}
      </Fragment>
    )
  }
}
DrawerMenuItem.propTypes = {
  // classes: PropTypes.array.isRequired,
  selectCb: PropTypes.func.isRequired,
  depth: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(DrawerMenuItem);