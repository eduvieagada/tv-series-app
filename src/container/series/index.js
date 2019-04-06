import React, { Component } from 'react';
import SeriesList from '../../components/seriesList';
import Loader from '../../components/loader';
import Intro from '../../components/intro';
import _ from 'lodash';

class Series extends Component {
    constructor(props) {
        super(props);
        this.delayedCallback = _.debounce(this.ajaxCall, 500);
    }

    state = {
        series: [],
        seriesName: '',
        isFetching: false
    };
    onSeriesInputChange = e => {
        e.persist();
        this.delayedCallback(e);
    };

    ajaxCall (e) {
        this.setState({ seriesName: e.target.value, isFetching: true });
        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({ series: json, isFetching: false }));
    }

    render() {
        const { series, seriesName, isFetching } = this.state;
        return (
            <div>
                <Intro message="Here you can find all of your most loved series" />
                <div>
                    <input type="text" onChange={this.onSeriesInputChange.bind(this)} />
                </div>
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                        <p>Please enter series name</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                        <p>No TV series found</p>
                }
                {
                    isFetching && <Loader/>
                }
                {
                    !isFetching && <SeriesList List={this.state.series} />
                }
            </div>
        );
    }
}

export default Series;