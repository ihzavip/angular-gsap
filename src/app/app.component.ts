import { Component, OnInit } from '@angular/core';
// or all tools are exported from the "all" file (excluding members-only plugins):
// import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-gsap';

  ngOnInit() {
    this.setupGsap();
  }

  setupGsap(): void {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container',
        start: 'top center', // when the top of the trigger hits the top of the viewport
        end: '+=300', // end after scrolling 500px beyond the start
        scrub: 3, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });

    tl.from('.box', {
      backgroundColor: '#28a92b',
      rotation: 360,
      scale: 0,
    });
  }
}
