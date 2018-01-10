import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

const mapStateToProps = state => ({
	user: state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	fetchData: (id) => dispatch(fetchData(id))
});

export const withData = Component => connect(mapStateToProps, mapDispatchToProps)(Component);
