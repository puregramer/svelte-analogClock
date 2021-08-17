import { makeAutoObservable, observable, computed, action } from "mobx";
import {timeFormatFilter} from "../utils";

const UPDATE_INTERVAL = 1000;

export default class MobxStore {
    currentTime = new Date();

    constructor() {
        makeAutoObservable(this, {
            currentTime: observable,
            hours: computed,
            minutes: computed,
            seconds: computed,
            currentTimeString: computed,

            updateCurrentTime: action,
        });

        setInterval(() => this.updateCurrentTime(), UPDATE_INTERVAL);
    }

    get hours() {
        return this.currentTime.getHours();
    }

    get minutes() {
        return this.currentTime.getMinutes();
    }

    get seconds() {
        return this.currentTime.getSeconds();
    }

    get currentTimeString() {
        return timeFormatFilter.format(this.currentTime);
    }

    updateCurrentTime() {
        this.currentTime = new Date();
    }
}