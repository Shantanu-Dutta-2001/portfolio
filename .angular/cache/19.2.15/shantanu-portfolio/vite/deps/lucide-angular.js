import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Renderer2,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-AXFVII4J.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/lucide-angular/fesm2020/lucide-angular.mjs
var _c0 = ["*"];
var AArrowDown = [["path", {
  d: "M3.5 13h6",
  key: "p1my2r"
}], ["path", {
  d: "m2 16 4.5-9 4.5 9",
  key: "ndf0b3"
}], ["path", {
  d: "M18 7v9",
  key: "pknjwm"
}], ["path", {
  d: "m14 12 4 4 4-4",
  key: "buelq4"
}]];
var AArrowUp = [["path", {
  d: "M3.5 13h6",
  key: "p1my2r"
}], ["path", {
  d: "m2 16 4.5-9 4.5 9",
  key: "ndf0b3"
}], ["path", {
  d: "M18 16V7",
  key: "ty0viw"
}], ["path", {
  d: "m14 11 4-4 4 4",
  key: "1pu57t"
}]];
var ALargeSmall = [["path", {
  d: "M21 14h-5",
  key: "1vh23k"
}], ["path", {
  d: "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",
  key: "1wh10o"
}], ["path", {
  d: "M4.5 13h6",
  key: "dfilno"
}], ["path", {
  d: "m3 16 4.5-9 4.5 9",
  key: "2dxa0e"
}]];
var Accessibility = [["circle", {
  cx: "16",
  cy: "4",
  r: "1",
  key: "1grugj"
}], ["path", {
  d: "m18 19 1-7-6 1",
  key: "r0i19z"
}], ["path", {
  d: "m5 8 3-3 5.5 3-2.36 3.5",
  key: "9ptxx2"
}], ["path", {
  d: "M4.24 14.5a5 5 0 0 0 6.88 6",
  key: "10kmtu"
}], ["path", {
  d: "M13.76 17.5a5 5 0 0 0-6.88-6",
  key: "2qq6rc"
}]];
var Activity = [["path", {
  d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
  key: "169zse"
}]];
var AirVent = [["path", {
  d: "M18 17.5a2.5 2.5 0 1 1-4 2.03V12",
  key: "yd12zl"
}], ["path", {
  d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
  key: "larmp2"
}], ["path", {
  d: "M6 8h12",
  key: "6g4wlu"
}], ["path", {
  d: "M6.6 15.572A2 2 0 1 0 10 17v-5",
  key: "1x1kqn"
}]];
var Airplay = [["path", {
  d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
  key: "ns4c3b"
}], ["path", {
  d: "m12 15 5 6H7Z",
  key: "14qnn2"
}]];
var AlarmClockCheck = [["circle", {
  cx: "12",
  cy: "13",
  r: "8",
  key: "3y4lt7"
}], ["path", {
  d: "M5 3 2 6",
  key: "18tl5t"
}], ["path", {
  d: "m22 6-3-3",
  key: "1opdir"
}], ["path", {
  d: "M6.38 18.7 4 21",
  key: "17xu3x"
}], ["path", {
  d: "M17.64 18.67 20 21",
  key: "kv2oe2"
}], ["path", {
  d: "m9 13 2 2 4-4",
  key: "6343dt"
}]];
var AlarmClockMinus = [["circle", {
  cx: "12",
  cy: "13",
  r: "8",
  key: "3y4lt7"
}], ["path", {
  d: "M5 3 2 6",
  key: "18tl5t"
}], ["path", {
  d: "m22 6-3-3",
  key: "1opdir"
}], ["path", {
  d: "M6.38 18.7 4 21",
  key: "17xu3x"
}], ["path", {
  d: "M17.64 18.67 20 21",
  key: "kv2oe2"
}], ["path", {
  d: "M9 13h6",
  key: "1uhe8q"
}]];
var AlarmClockOff = [["path", {
  d: "M6.87 6.87a8 8 0 1 0 11.26 11.26",
  key: "3on8tj"
}], ["path", {
  d: "M19.9 14.25a8 8 0 0 0-9.15-9.15",
  key: "15ghsc"
}], ["path", {
  d: "m22 6-3-3",
  key: "1opdir"
}], ["path", {
  d: "M6.26 18.67 4 21",
  key: "yzmioq"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M4 4 2 6",
  key: "1ycko6"
}]];
var AlarmClockPlus = [["circle", {
  cx: "12",
  cy: "13",
  r: "8",
  key: "3y4lt7"
}], ["path", {
  d: "M5 3 2 6",
  key: "18tl5t"
}], ["path", {
  d: "m22 6-3-3",
  key: "1opdir"
}], ["path", {
  d: "M6.38 18.7 4 21",
  key: "17xu3x"
}], ["path", {
  d: "M17.64 18.67 20 21",
  key: "kv2oe2"
}], ["path", {
  d: "M12 10v6",
  key: "1bos4e"
}], ["path", {
  d: "M9 13h6",
  key: "1uhe8q"
}]];
var AlarmClock = [["circle", {
  cx: "12",
  cy: "13",
  r: "8",
  key: "3y4lt7"
}], ["path", {
  d: "M12 9v4l2 2",
  key: "1c63tq"
}], ["path", {
  d: "M5 3 2 6",
  key: "18tl5t"
}], ["path", {
  d: "m22 6-3-3",
  key: "1opdir"
}], ["path", {
  d: "M6.38 18.7 4 21",
  key: "17xu3x"
}], ["path", {
  d: "M17.64 18.67 20 21",
  key: "kv2oe2"
}]];
var AlarmSmoke = [["path", {
  d: "M11 21c0-2.5 2-2.5 2-5",
  key: "1sicvv"
}], ["path", {
  d: "M16 21c0-2.5 2-2.5 2-5",
  key: "1o3eny"
}], ["path", {
  d: "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8",
  key: "1bvca4"
}], ["path", {
  d: "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z",
  key: "x3qr1j"
}], ["path", {
  d: "M6 21c0-2.5 2-2.5 2-5",
  key: "i3w1gp"
}]];
var Album = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}], ["polyline", {
  points: "11 3 11 11 14 8 17 11 17 3",
  key: "1wcwz3"
}]];
var AlignCenterHorizontal = [["path", {
  d: "M2 12h20",
  key: "9i4pu4"
}], ["path", {
  d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",
  key: "11f1s0"
}], ["path", {
  d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",
  key: "t14dx9"
}], ["path", {
  d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",
  key: "1w07xs"
}], ["path", {
  d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",
  key: "1apec2"
}]];
var AlignCenterVertical = [["path", {
  d: "M12 2v20",
  key: "t6zp3m"
}], ["path", {
  d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",
  key: "14d6g8"
}], ["path", {
  d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",
  key: "1e2lrw"
}], ["path", {
  d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",
  key: "1fkdwx"
}], ["path", {
  d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",
  key: "1euafb"
}]];
var AlignCenter = [["path", {
  d: "M17 12H7",
  key: "16if0g"
}], ["path", {
  d: "M19 18H5",
  key: "18s9l3"
}], ["path", {
  d: "M21 6H3",
  key: "1jwq7v"
}]];
var AlignEndHorizontal = [["rect", {
  width: "6",
  height: "16",
  x: "4",
  y: "2",
  rx: "2",
  key: "z5wdxg"
}], ["rect", {
  width: "6",
  height: "9",
  x: "14",
  y: "9",
  rx: "2",
  key: "um7a8w"
}], ["path", {
  d: "M22 22H2",
  key: "19qnx5"
}]];
var AlignEndVertical = [["rect", {
  width: "16",
  height: "6",
  x: "2",
  y: "4",
  rx: "2",
  key: "10wcwx"
}], ["rect", {
  width: "9",
  height: "6",
  x: "9",
  y: "14",
  rx: "2",
  key: "4p5bwg"
}], ["path", {
  d: "M22 22V2",
  key: "12ipfv"
}]];
var AlignHorizontalDistributeCenter = [["rect", {
  width: "6",
  height: "14",
  x: "4",
  y: "5",
  rx: "2",
  key: "1wwnby"
}], ["rect", {
  width: "6",
  height: "10",
  x: "14",
  y: "7",
  rx: "2",
  key: "1fe6j6"
}], ["path", {
  d: "M17 22v-5",
  key: "4b6g73"
}], ["path", {
  d: "M17 7V2",
  key: "hnrr36"
}], ["path", {
  d: "M7 22v-3",
  key: "1r4jpn"
}], ["path", {
  d: "M7 5V2",
  key: "liy1u9"
}]];
var AlignHorizontalDistributeEnd = [["rect", {
  width: "6",
  height: "14",
  x: "4",
  y: "5",
  rx: "2",
  key: "1wwnby"
}], ["rect", {
  width: "6",
  height: "10",
  x: "14",
  y: "7",
  rx: "2",
  key: "1fe6j6"
}], ["path", {
  d: "M10 2v20",
  key: "uyc634"
}], ["path", {
  d: "M20 2v20",
  key: "1tx262"
}]];
var AlignHorizontalDistributeStart = [["rect", {
  width: "6",
  height: "14",
  x: "4",
  y: "5",
  rx: "2",
  key: "1wwnby"
}], ["rect", {
  width: "6",
  height: "10",
  x: "14",
  y: "7",
  rx: "2",
  key: "1fe6j6"
}], ["path", {
  d: "M4 2v20",
  key: "gtpd5x"
}], ["path", {
  d: "M14 2v20",
  key: "tg6bpw"
}]];
var AlignHorizontalJustifyCenter = [["rect", {
  width: "6",
  height: "14",
  x: "2",
  y: "5",
  rx: "2",
  key: "dy24zr"
}], ["rect", {
  width: "6",
  height: "10",
  x: "16",
  y: "7",
  rx: "2",
  key: "13zkjt"
}], ["path", {
  d: "M12 2v20",
  key: "t6zp3m"
}]];
var AlignHorizontalJustifyEnd = [["rect", {
  width: "6",
  height: "14",
  x: "2",
  y: "5",
  rx: "2",
  key: "dy24zr"
}], ["rect", {
  width: "6",
  height: "10",
  x: "12",
  y: "7",
  rx: "2",
  key: "1ht384"
}], ["path", {
  d: "M22 2v20",
  key: "40qfg1"
}]];
var AlignHorizontalJustifyStart = [["rect", {
  width: "6",
  height: "14",
  x: "6",
  y: "5",
  rx: "2",
  key: "hsirpf"
}], ["rect", {
  width: "6",
  height: "10",
  x: "16",
  y: "7",
  rx: "2",
  key: "13zkjt"
}], ["path", {
  d: "M2 2v20",
  key: "1ivd8o"
}]];
var AlignHorizontalSpaceAround = [["rect", {
  width: "6",
  height: "10",
  x: "9",
  y: "7",
  rx: "2",
  key: "yn7j0q"
}], ["path", {
  d: "M4 22V2",
  key: "tsjzd3"
}], ["path", {
  d: "M20 22V2",
  key: "1bnhr8"
}]];
var AlignHorizontalSpaceBetween = [["rect", {
  width: "6",
  height: "14",
  x: "3",
  y: "5",
  rx: "2",
  key: "j77dae"
}], ["rect", {
  width: "6",
  height: "10",
  x: "15",
  y: "7",
  rx: "2",
  key: "bq30hj"
}], ["path", {
  d: "M3 2v20",
  key: "1d2pfg"
}], ["path", {
  d: "M21 2v20",
  key: "p059bm"
}]];
var AlignJustify = [["path", {
  d: "M3 12h18",
  key: "1i2n21"
}], ["path", {
  d: "M3 18h18",
  key: "1h113x"
}], ["path", {
  d: "M3 6h18",
  key: "d0wm0j"
}]];
var AlignLeft = [["path", {
  d: "M15 12H3",
  key: "6jk70r"
}], ["path", {
  d: "M17 18H3",
  key: "1amg6g"
}], ["path", {
  d: "M21 6H3",
  key: "1jwq7v"
}]];
var AlignRight = [["path", {
  d: "M21 12H9",
  key: "dn1m92"
}], ["path", {
  d: "M21 18H7",
  key: "1ygte8"
}], ["path", {
  d: "M21 6H3",
  key: "1jwq7v"
}]];
var AlignStartHorizontal = [["rect", {
  width: "6",
  height: "16",
  x: "4",
  y: "6",
  rx: "2",
  key: "1n4dg1"
}], ["rect", {
  width: "6",
  height: "9",
  x: "14",
  y: "6",
  rx: "2",
  key: "17khns"
}], ["path", {
  d: "M22 2H2",
  key: "fhrpnj"
}]];
var AlignStartVertical = [["rect", {
  width: "9",
  height: "6",
  x: "6",
  y: "14",
  rx: "2",
  key: "lpm2y7"
}], ["rect", {
  width: "16",
  height: "6",
  x: "6",
  y: "4",
  rx: "2",
  key: "rdj6ps"
}], ["path", {
  d: "M2 2v20",
  key: "1ivd8o"
}]];
var AlignVerticalDistributeCenter = [["path", {
  d: "M22 17h-3",
  key: "1lwga1"
}], ["path", {
  d: "M22 7h-5",
  key: "o2endc"
}], ["path", {
  d: "M5 17H2",
  key: "1gx9xc"
}], ["path", {
  d: "M7 7H2",
  key: "6bq26l"
}], ["rect", {
  x: "5",
  y: "14",
  width: "14",
  height: "6",
  rx: "2",
  key: "1qrzuf"
}], ["rect", {
  x: "7",
  y: "4",
  width: "10",
  height: "6",
  rx: "2",
  key: "we8e9z"
}]];
var AlignVerticalDistributeEnd = [["rect", {
  width: "14",
  height: "6",
  x: "5",
  y: "14",
  rx: "2",
  key: "jmoj9s"
}], ["rect", {
  width: "10",
  height: "6",
  x: "7",
  y: "4",
  rx: "2",
  key: "aza5on"
}], ["path", {
  d: "M2 20h20",
  key: "owomy5"
}], ["path", {
  d: "M2 10h20",
  key: "1ir3d8"
}]];
var AlignVerticalDistributeStart = [["rect", {
  width: "14",
  height: "6",
  x: "5",
  y: "14",
  rx: "2",
  key: "jmoj9s"
}], ["rect", {
  width: "10",
  height: "6",
  x: "7",
  y: "4",
  rx: "2",
  key: "aza5on"
}], ["path", {
  d: "M2 14h20",
  key: "myj16y"
}], ["path", {
  d: "M2 4h20",
  key: "mda7wb"
}]];
var AlignVerticalJustifyCenter = [["rect", {
  width: "14",
  height: "6",
  x: "5",
  y: "16",
  rx: "2",
  key: "1i8z2d"
}], ["rect", {
  width: "10",
  height: "6",
  x: "7",
  y: "2",
  rx: "2",
  key: "ypihtt"
}], ["path", {
  d: "M2 12h20",
  key: "9i4pu4"
}]];
var AlignVerticalJustifyEnd = [["rect", {
  width: "14",
  height: "6",
  x: "5",
  y: "12",
  rx: "2",
  key: "4l4tp2"
}], ["rect", {
  width: "10",
  height: "6",
  x: "7",
  y: "2",
  rx: "2",
  key: "ypihtt"
}], ["path", {
  d: "M2 22h20",
  key: "272qi7"
}]];
var AlignVerticalJustifyStart = [["rect", {
  width: "14",
  height: "6",
  x: "5",
  y: "16",
  rx: "2",
  key: "1i8z2d"
}], ["rect", {
  width: "10",
  height: "6",
  x: "7",
  y: "6",
  rx: "2",
  key: "13squh"
}], ["path", {
  d: "M2 2h20",
  key: "1ennik"
}]];
var AlignVerticalSpaceAround = [["rect", {
  width: "10",
  height: "6",
  x: "7",
  y: "9",
  rx: "2",
  key: "b1zbii"
}], ["path", {
  d: "M22 20H2",
  key: "1p1f7z"
}], ["path", {
  d: "M22 4H2",
  key: "1b7qnq"
}]];
var AlignVerticalSpaceBetween = [["rect", {
  width: "14",
  height: "6",
  x: "5",
  y: "15",
  rx: "2",
  key: "1w91an"
}], ["rect", {
  width: "10",
  height: "6",
  x: "7",
  y: "3",
  rx: "2",
  key: "17wqzy"
}], ["path", {
  d: "M2 21h20",
  key: "1nyx9w"
}], ["path", {
  d: "M2 3h20",
  key: "91anmk"
}]];
var Ambulance = [["path", {
  d: "M10 10H6",
  key: "1bsnug"
}], ["path", {
  d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
  key: "wrbu53"
}], ["path", {
  d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",
  key: "lrkjwd"
}], ["path", {
  d: "M8 8v4",
  key: "1fwk8c"
}], ["path", {
  d: "M9 18h6",
  key: "x1upvd"
}], ["circle", {
  cx: "17",
  cy: "18",
  r: "2",
  key: "332jqn"
}], ["circle", {
  cx: "7",
  cy: "18",
  r: "2",
  key: "19iecd"
}]];
var Ampersand = [["path", {
  d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",
  key: "1o9ehi"
}], ["path", {
  d: "M16 12h3",
  key: "4uvgyw"
}]];
var Ampersands = [["path", {
  d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
  key: "12lh1k"
}], ["path", {
  d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
  key: "173c68"
}]];
var Amphora = [["path", {
  d: "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8",
  key: "1h8rid"
}], ["path", {
  d: "M10 5H8a2 2 0 0 0 0 4h.68",
  key: "3ezsi6"
}], ["path", {
  d: "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8",
  key: "yt6q09"
}], ["path", {
  d: "M14 5h2a2 2 0 0 1 0 4h-.68",
  key: "8f95yk"
}], ["path", {
  d: "M18 22H6",
  key: "mg6kv4"
}], ["path", {
  d: "M9 2h6",
  key: "1jrp98"
}]];
var Anchor = [["path", {
  d: "M12 22V8",
  key: "qkxhtm"
}], ["path", {
  d: "M5 12H2a10 10 0 0 0 20 0h-3",
  key: "1hv3nh"
}], ["circle", {
  cx: "12",
  cy: "5",
  r: "3",
  key: "rqqgnr"
}]];
var Angry = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M16 16s-1.5-2-4-2-4 2-4 2",
  key: "epbg0q"
}], ["path", {
  d: "M7.5 8 10 9",
  key: "olxxln"
}], ["path", {
  d: "m14 9 2.5-1",
  key: "1j6cij"
}], ["path", {
  d: "M9 10h.01",
  key: "qbtxuw"
}], ["path", {
  d: "M15 10h.01",
  key: "1qmjsl"
}]];
var Annoyed = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M8 15h8",
  key: "45n4r"
}], ["path", {
  d: "M8 9h2",
  key: "1g203m"
}], ["path", {
  d: "M14 9h2",
  key: "116p9w"
}]];
var Antenna = [["path", {
  d: "M2 12 7 2",
  key: "117k30"
}], ["path", {
  d: "m7 12 5-10",
  key: "1tvx22"
}], ["path", {
  d: "m12 12 5-10",
  key: "ev1o1a"
}], ["path", {
  d: "m17 12 5-10",
  key: "1e4ti3"
}], ["path", {
  d: "M4.5 7h15",
  key: "vlsxkz"
}], ["path", {
  d: "M12 16v6",
  key: "c8a4gj"
}]];
var Anvil = [["path", {
  d: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",
  key: "1hjpb6"
}], ["path", {
  d: "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",
  key: "1qn45f"
}], ["path", {
  d: "M9 12v5",
  key: "3anwtq"
}], ["path", {
  d: "M15 12v5",
  key: "5xh3zn"
}], ["path", {
  d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",
  key: "1fi4x8"
}]];
var Aperture = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m14.31 8 5.74 9.94",
  key: "1y6ab4"
}], ["path", {
  d: "M9.69 8h11.48",
  key: "1wxppr"
}], ["path", {
  d: "m7.38 12 5.74-9.94",
  key: "1grp0k"
}], ["path", {
  d: "M9.69 16 3.95 6.06",
  key: "libnyf"
}], ["path", {
  d: "M14.31 16H2.83",
  key: "x5fava"
}], ["path", {
  d: "m16.62 12-5.74 9.94",
  key: "1vwawt"
}]];
var AppWindowMac = [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2",
  key: "18n3k1"
}], ["path", {
  d: "M6 8h.01",
  key: "x9i8wu"
}], ["path", {
  d: "M10 8h.01",
  key: "1r9ogq"
}], ["path", {
  d: "M14 8h.01",
  key: "1primd"
}]];
var AppWindow = [["rect", {
  x: "2",
  y: "4",
  width: "20",
  height: "16",
  rx: "2",
  key: "izxlao"
}], ["path", {
  d: "M10 4v4",
  key: "pp8u80"
}], ["path", {
  d: "M2 8h20",
  key: "d11cs7"
}], ["path", {
  d: "M6 4v4",
  key: "1svtjw"
}]];
var Apple = [["path", {
  d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",
  key: "3s7exb"
}], ["path", {
  d: "M10 2c1 .5 2 2 2 5",
  key: "fcco2y"
}]];
var ArchiveRestore = [["rect", {
  width: "20",
  height: "5",
  x: "2",
  y: "3",
  rx: "1",
  key: "1wp1u1"
}], ["path", {
  d: "M4 8v11a2 2 0 0 0 2 2h2",
  key: "tvwodi"
}], ["path", {
  d: "M20 8v11a2 2 0 0 1-2 2h-2",
  key: "1gkqxj"
}], ["path", {
  d: "m9 15 3-3 3 3",
  key: "1pd0qc"
}], ["path", {
  d: "M12 12v9",
  key: "192myk"
}]];
var Archive = [["rect", {
  width: "20",
  height: "5",
  x: "2",
  y: "3",
  rx: "1",
  key: "1wp1u1"
}], ["path", {
  d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
  key: "1s80jp"
}], ["path", {
  d: "M10 12h4",
  key: "a56b0p"
}]];
var ArchiveX = [["rect", {
  width: "20",
  height: "5",
  x: "2",
  y: "3",
  rx: "1",
  key: "1wp1u1"
}], ["path", {
  d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",
  key: "1s80jp"
}], ["path", {
  d: "m9.5 17 5-5",
  key: "nakeu6"
}], ["path", {
  d: "m9.5 12 5 5",
  key: "1hccrj"
}]];
var Armchair = [["path", {
  d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",
  key: "irtipd"
}], ["path", {
  d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
  key: "1qyhux"
}], ["path", {
  d: "M5 18v2",
  key: "ppbyun"
}], ["path", {
  d: "M19 18v2",
  key: "gy7782"
}]];
var ArrowBigDownDash = [["path", {
  d: "M15 5H9",
  key: "1tp3ed"
}], ["path", {
  d: "M15 9v3h4l-7 7-7-7h4V9z",
  key: "ncdc4b"
}]];
var ArrowBigDown = [["path", {
  d: "M15 6v6h4l-7 7-7-7h4V6h6z",
  key: "1thax2"
}]];
var ArrowBigLeftDash = [["path", {
  d: "M19 15V9",
  key: "1hci5f"
}], ["path", {
  d: "M15 15h-3v4l-7-7 7-7v4h3v6z",
  key: "16tjna"
}]];
var ArrowBigLeft = [["path", {
  d: "M18 15h-6v4l-7-7 7-7v4h6v6z",
  key: "lbrdak"
}]];
var ArrowBigRightDash = [["path", {
  d: "M5 9v6",
  key: "158jrl"
}], ["path", {
  d: "M9 9h3V5l7 7-7 7v-4H9V9z",
  key: "1sg2xn"
}]];
var ArrowBigRight = [["path", {
  d: "M6 9h6V5l7 7-7 7v-4H6V9z",
  key: "7fvt9c"
}]];
var ArrowBigUpDash = [["path", {
  d: "M9 19h6",
  key: "456am0"
}], ["path", {
  d: "M9 15v-3H5l7-7 7 7h-4v3H9z",
  key: "1r2uve"
}]];
var ArrowBigUp = [["path", {
  d: "M9 18v-6H5l7-7 7 7h-4v6H9z",
  key: "1x06kx"
}]];
var ArrowDown01 = [["path", {
  d: "m3 16 4 4 4-4",
  key: "1co6wj"
}], ["path", {
  d: "M7 20V4",
  key: "1yoxec"
}], ["rect", {
  x: "15",
  y: "4",
  width: "4",
  height: "6",
  ry: "2",
  key: "1bwicg"
}], ["path", {
  d: "M17 20v-6h-2",
  key: "1qp1so"
}], ["path", {
  d: "M15 20h4",
  key: "1j968p"
}]];
var ArrowDown10 = [["path", {
  d: "m3 16 4 4 4-4",
  key: "1co6wj"
}], ["path", {
  d: "M7 20V4",
  key: "1yoxec"
}], ["path", {
  d: "M17 10V4h-2",
  key: "zcsr5x"
}], ["path", {
  d: "M15 10h4",
  key: "id2lce"
}], ["rect", {
  x: "15",
  y: "14",
  width: "4",
  height: "6",
  ry: "2",
  key: "33xykx"
}]];
var ArrowDownAZ = [["path", {
  d: "m3 16 4 4 4-4",
  key: "1co6wj"
}], ["path", {
  d: "M7 20V4",
  key: "1yoxec"
}], ["path", {
  d: "M20 8h-5",
  key: "1vsyxs"
}], ["path", {
  d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10",
  key: "ag13bf"
}], ["path", {
  d: "M15 14h5l-5 6h5",
  key: "ur5jdg"
}]];
var ArrowDownFromLine = [["path", {
  d: "M19 3H5",
  key: "1236rx"
}], ["path", {
  d: "M12 21V7",
  key: "gj6g52"
}], ["path", {
  d: "m6 15 6 6 6-6",
  key: "h15q88"
}]];
var ArrowDownLeft = [["path", {
  d: "M17 7 7 17",
  key: "15tmo1"
}], ["path", {
  d: "M17 17H7V7",
  key: "1org7z"
}]];
var ArrowDownNarrowWide = [["path", {
  d: "m3 16 4 4 4-4",
  key: "1co6wj"
}], ["path", {
  d: "M7 20V4",
  key: "1yoxec"
}], ["path", {
  d: "M11 4h4",
  key: "6d7r33"
}], ["path", {
  d: "M11 8h7",
  key: "djye34"
}], ["path", {
  d: "M11 12h10",
  key: "1438ji"
}]];
var ArrowDownRight = [["path", {
  d: "m7 7 10 10",
  key: "1fmybs"
}], ["path", {
  d: "M17 7v10H7",
  key: "6fjiku"
}]];
var ArrowDownToDot = [["path", {
  d: "M12 2v14",
  key: "jyx4ut"
}], ["path", {
  d: "m19 9-7 7-7-7",
  key: "1oe3oy"
}], ["circle", {
  cx: "12",
  cy: "21",
  r: "1",
  key: "o0uj5v"
}]];
var ArrowDownToLine = [["path", {
  d: "M12 17V3",
  key: "1cwfxf"
}], ["path", {
  d: "m6 11 6 6 6-6",
  key: "12ii2o"
}], ["path", {
  d: "M19 21H5",
  key: "150jfl"
}]];
var ArrowDownUp = [["path", {
  d: "m3 16 4 4 4-4",
  key: "1co6wj"
}], ["path", {
  d: "M7 20V4",
  key: "1yoxec"
}], ["path", {
  d: "m21 8-4-4-4 4",
  key: "1c9v7m"
}], ["path", {
  d: "M17 4v16",
  key: "7dpous"
}]];
var ArrowDownWideNarrow = [["path", {
  d: "m3 16 4 4 4-4",
  key: "1co6wj"
}], ["path", {
  d: "M7 20V4",
  key: "1yoxec"
}], ["path", {
  d: "M11 4h10",
  key: "1w87gc"
}], ["path", {
  d: "M11 8h7",
  key: "djye34"
}], ["path", {
  d: "M11 12h4",
  key: "q8tih4"
}]];
var ArrowDownZA = [["path", {
  d: "m3 16 4 4 4-4",
  key: "1co6wj"
}], ["path", {
  d: "M7 4v16",
  key: "1glfcx"
}], ["path", {
  d: "M15 4h5l-5 6h5",
  key: "8asdl1"
}], ["path", {
  d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",
  key: "r6l5cz"
}], ["path", {
  d: "M20 18h-5",
  key: "18j1r2"
}]];
var ArrowDown = [["path", {
  d: "M12 5v14",
  key: "s699le"
}], ["path", {
  d: "m19 12-7 7-7-7",
  key: "1idqje"
}]];
var ArrowLeftFromLine = [["path", {
  d: "m9 6-6 6 6 6",
  key: "7v63n9"
}], ["path", {
  d: "M3 12h14",
  key: "13k4hi"
}], ["path", {
  d: "M21 19V5",
  key: "b4bplr"
}]];
var ArrowLeftRight = [["path", {
  d: "M8 3 4 7l4 4",
  key: "9rb6wj"
}], ["path", {
  d: "M4 7h16",
  key: "6tx8e3"
}], ["path", {
  d: "m16 21 4-4-4-4",
  key: "siv7j2"
}], ["path", {
  d: "M20 17H4",
  key: "h6l3hr"
}]];
var ArrowLeftToLine = [["path", {
  d: "M3 19V5",
  key: "rwsyhb"
}], ["path", {
  d: "m13 6-6 6 6 6",
  key: "1yhaz7"
}], ["path", {
  d: "M7 12h14",
  key: "uoisry"
}]];
var ArrowRightFromLine = [["path", {
  d: "M3 5v14",
  key: "1nt18q"
}], ["path", {
  d: "M21 12H7",
  key: "13ipq5"
}], ["path", {
  d: "m15 18 6-6-6-6",
  key: "6tx3qv"
}]];
var ArrowLeft = [["path", {
  d: "m12 19-7-7 7-7",
  key: "1l729n"
}], ["path", {
  d: "M19 12H5",
  key: "x3x0zl"
}]];
var ArrowRightLeft = [["path", {
  d: "m16 3 4 4-4 4",
  key: "1x1c3m"
}], ["path", {
  d: "M20 7H4",
  key: "zbl0bi"
}], ["path", {
  d: "m8 21-4-4 4-4",
  key: "h9nckh"
}], ["path", {
  d: "M4 17h16",
  key: "g4d7ey"
}]];
var ArrowRightToLine = [["path", {
  d: "M17 12H3",
  key: "8awo09"
}], ["path", {
  d: "m11 18 6-6-6-6",
  key: "8c2y43"
}], ["path", {
  d: "M21 5v14",
  key: "nzette"
}]];
var ArrowUp01 = [["path", {
  d: "m3 8 4-4 4 4",
  key: "11wl7u"
}], ["path", {
  d: "M7 4v16",
  key: "1glfcx"
}], ["rect", {
  x: "15",
  y: "4",
  width: "4",
  height: "6",
  ry: "2",
  key: "1bwicg"
}], ["path", {
  d: "M17 20v-6h-2",
  key: "1qp1so"
}], ["path", {
  d: "M15 20h4",
  key: "1j968p"
}]];
var ArrowRight = [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}], ["path", {
  d: "m12 5 7 7-7 7",
  key: "xquz4c"
}]];
var ArrowUp10 = [["path", {
  d: "m3 8 4-4 4 4",
  key: "11wl7u"
}], ["path", {
  d: "M7 4v16",
  key: "1glfcx"
}], ["path", {
  d: "M17 10V4h-2",
  key: "zcsr5x"
}], ["path", {
  d: "M15 10h4",
  key: "id2lce"
}], ["rect", {
  x: "15",
  y: "14",
  width: "4",
  height: "6",
  ry: "2",
  key: "33xykx"
}]];
var ArrowUpAZ = [["path", {
  d: "m3 8 4-4 4 4",
  key: "11wl7u"
}], ["path", {
  d: "M7 4v16",
  key: "1glfcx"
}], ["path", {
  d: "M20 8h-5",
  key: "1vsyxs"
}], ["path", {
  d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10",
  key: "ag13bf"
}], ["path", {
  d: "M15 14h5l-5 6h5",
  key: "ur5jdg"
}]];
var ArrowUpFromDot = [["path", {
  d: "m5 9 7-7 7 7",
  key: "1hw5ic"
}], ["path", {
  d: "M12 16V2",
  key: "ywoabb"
}], ["circle", {
  cx: "12",
  cy: "21",
  r: "1",
  key: "o0uj5v"
}]];
var ArrowUpDown = [["path", {
  d: "m21 16-4 4-4-4",
  key: "f6ql7i"
}], ["path", {
  d: "M17 20V4",
  key: "1ejh1v"
}], ["path", {
  d: "m3 8 4-4 4 4",
  key: "11wl7u"
}], ["path", {
  d: "M7 4v16",
  key: "1glfcx"
}]];
var ArrowUpFromLine = [["path", {
  d: "m18 9-6-6-6 6",
  key: "kcunyi"
}], ["path", {
  d: "M12 3v14",
  key: "7cf3v8"
}], ["path", {
  d: "M5 21h14",
  key: "11awu3"
}]];
var ArrowUpNarrowWide = [["path", {
  d: "m3 8 4-4 4 4",
  key: "11wl7u"
}], ["path", {
  d: "M7 4v16",
  key: "1glfcx"
}], ["path", {
  d: "M11 12h4",
  key: "q8tih4"
}], ["path", {
  d: "M11 16h7",
  key: "uosisv"
}], ["path", {
  d: "M11 20h10",
  key: "jvxblo"
}]];
var ArrowUpLeft = [["path", {
  d: "M7 17V7h10",
  key: "11bw93"
}], ["path", {
  d: "M17 17 7 7",
  key: "2786uv"
}]];
var ArrowUpRight = [["path", {
  d: "M7 7h10v10",
  key: "1tivn9"
}], ["path", {
  d: "M7 17 17 7",
  key: "1vkiza"
}]];
var ArrowUpWideNarrow = [["path", {
  d: "m3 8 4-4 4 4",
  key: "11wl7u"
}], ["path", {
  d: "M7 4v16",
  key: "1glfcx"
}], ["path", {
  d: "M11 12h10",
  key: "1438ji"
}], ["path", {
  d: "M11 16h7",
  key: "uosisv"
}], ["path", {
  d: "M11 20h4",
  key: "1krc32"
}]];
var ArrowUpToLine = [["path", {
  d: "M5 3h14",
  key: "7usisc"
}], ["path", {
  d: "m18 13-6-6-6 6",
  key: "1kf1n9"
}], ["path", {
  d: "M12 7v14",
  key: "1akyts"
}]];
var ArrowUpZA = [["path", {
  d: "m3 8 4-4 4 4",
  key: "11wl7u"
}], ["path", {
  d: "M7 4v16",
  key: "1glfcx"
}], ["path", {
  d: "M15 4h5l-5 6h5",
  key: "8asdl1"
}], ["path", {
  d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",
  key: "r6l5cz"
}], ["path", {
  d: "M20 18h-5",
  key: "18j1r2"
}]];
var ArrowUp = [["path", {
  d: "m5 12 7-7 7 7",
  key: "hav0vg"
}], ["path", {
  d: "M12 19V5",
  key: "x0mq9r"
}]];
var ArrowsUpFromLine = [["path", {
  d: "m4 6 3-3 3 3",
  key: "9aidw8"
}], ["path", {
  d: "M7 17V3",
  key: "19qxw1"
}], ["path", {
  d: "m14 6 3-3 3 3",
  key: "6iy689"
}], ["path", {
  d: "M17 17V3",
  key: "o0fmgi"
}], ["path", {
  d: "M4 21h16",
  key: "1h09gz"
}]];
var Asterisk = [["path", {
  d: "M12 6v12",
  key: "1vza4d"
}], ["path", {
  d: "M17.196 9 6.804 15",
  key: "1ah31z"
}], ["path", {
  d: "m6.804 9 10.392 6",
  key: "1b6pxd"
}]];
var AtSign = [["circle", {
  cx: "12",
  cy: "12",
  r: "4",
  key: "4exip2"
}], ["path", {
  d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",
  key: "7n84p3"
}]];
var Atom = [["circle", {
  cx: "12",
  cy: "12",
  r: "1",
  key: "41hilf"
}], ["path", {
  d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",
  key: "1l2ple"
}], ["path", {
  d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",
  key: "1wam0m"
}]];
var AudioLines = [["path", {
  d: "M2 10v3",
  key: "1fnikh"
}], ["path", {
  d: "M6 6v11",
  key: "11sgs0"
}], ["path", {
  d: "M10 3v18",
  key: "yhl04a"
}], ["path", {
  d: "M14 8v7",
  key: "3a1oy3"
}], ["path", {
  d: "M18 5v13",
  key: "123xd1"
}], ["path", {
  d: "M22 10v3",
  key: "154ddg"
}]];
var AudioWaveform = [["path", {
  d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",
  key: "57tc96"
}]];
var Award = [["path", {
  d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
  key: "1yiouv"
}], ["circle", {
  cx: "12",
  cy: "8",
  r: "6",
  key: "1vp47v"
}]];
var Axe = [["path", {
  d: "m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9",
  key: "5z9253"
}], ["path", {
  d: "M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z",
  key: "19zklq"
}]];
var Axis3d = [["path", {
  d: "M13.5 10.5 15 9",
  key: "1nsxvm"
}], ["path", {
  d: "M4 4v15a1 1 0 0 0 1 1h15",
  key: "1w6lkd"
}], ["path", {
  d: "M4.293 19.707 6 18",
  key: "3g1p8c"
}], ["path", {
  d: "m9 15 1.5-1.5",
  key: "1xfbes"
}]];
var Baby = [["path", {
  d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",
  key: "1u7htd"
}], ["path", {
  d: "M15 12h.01",
  key: "1k8ypt"
}], ["path", {
  d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
  key: "11xh7x"
}], ["path", {
  d: "M9 12h.01",
  key: "157uk2"
}]];
var Backpack = [["path", {
  d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",
  key: "1ol0lm"
}], ["path", {
  d: "M8 10h8",
  key: "c7uz4u"
}], ["path", {
  d: "M8 18h8",
  key: "1no2b1"
}], ["path", {
  d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",
  key: "1fr6do"
}], ["path", {
  d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",
  key: "donm21"
}]];
var BadgeAlert = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "12",
  key: "1pkeuh"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "16",
  y2: "16",
  key: "4dfq90"
}]];
var BadgeCent = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["path", {
  d: "M12 7v10",
  key: "jspqdw"
}], ["path", {
  d: "M15.4 10a4 4 0 1 0 0 4",
  key: "2eqtx8"
}]];
var BadgeCheck = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["path", {
  d: "m9 12 2 2 4-4",
  key: "dzmm74"
}]];
var BadgeDollarSign = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["path", {
  d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
  key: "1h4pet"
}], ["path", {
  d: "M12 18V6",
  key: "zqpxq5"
}]];
var BadgeEuro = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["path", {
  d: "M7 12h5",
  key: "gblrwe"
}], ["path", {
  d: "M15 9.4a4 4 0 1 0 0 5.2",
  key: "1makmb"
}]];
var BadgeIndianRupee = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["path", {
  d: "M8 8h8",
  key: "1bis0t"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}], ["path", {
  d: "m13 17-5-1h1a4 4 0 0 0 0-8",
  key: "nu2bwa"
}]];
var BadgeInfo = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "16",
  y2: "12",
  key: "1y1yb1"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "8",
  y2: "8",
  key: "110wyk"
}]];
var BadgeJapaneseYen = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["path", {
  d: "m9 8 3 3v7",
  key: "17yadx"
}], ["path", {
  d: "m12 11 3-3",
  key: "p4cfq1"
}], ["path", {
  d: "M9 12h6",
  key: "1c52cq"
}], ["path", {
  d: "M9 16h6",
  key: "8wimt3"
}]];
var BadgeMinus = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "12",
  y2: "12",
  key: "1jonct"
}]];
var BadgePlus = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "16",
  key: "10p56q"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "12",
  y2: "12",
  key: "1jonct"
}]];
var BadgePercent = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["path", {
  d: "m15 9-6 6",
  key: "1uzhvr"
}], ["path", {
  d: "M9 9h.01",
  key: "1q5me6"
}], ["path", {
  d: "M15 15h.01",
  key: "lqbp3k"
}]];
var BadgePoundSterling = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["path", {
  d: "M8 12h4",
  key: "qz6y1c"
}], ["path", {
  d: "M10 16V9.5a2.5 2.5 0 0 1 5 0",
  key: "3mlbjk"
}], ["path", {
  d: "M8 16h7",
  key: "sbedsn"
}]];
var BadgeQuestionMark = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["path", {
  d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
  key: "1u773s"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "17",
  y2: "17",
  key: "io3f8k"
}]];
var BadgeRussianRuble = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["path", {
  d: "M9 16h5",
  key: "1syiyw"
}], ["path", {
  d: "M9 12h5a2 2 0 1 0 0-4h-3v9",
  key: "1ge9c1"
}]];
var BadgeSwissFranc = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["path", {
  d: "M11 17V8h4",
  key: "1bfq6y"
}], ["path", {
  d: "M11 12h3",
  key: "2eqnfz"
}], ["path", {
  d: "M9 16h4",
  key: "1skf3a"
}]];
var BadgeX = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}], ["line", {
  x1: "15",
  x2: "9",
  y1: "9",
  y2: "15",
  key: "f7djnv"
}], ["line", {
  x1: "9",
  x2: "15",
  y1: "9",
  y2: "15",
  key: "1shsy8"
}]];
var Badge = [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
  key: "3c2336"
}]];
var BaggageClaim = [["path", {
  d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",
  key: "4irg2o"
}], ["path", {
  d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",
  key: "14fcyx"
}], ["rect", {
  width: "13",
  height: "8",
  x: "8",
  y: "6",
  rx: "1",
  key: "o6oiis"
}], ["circle", {
  cx: "18",
  cy: "20",
  r: "2",
  key: "t9985n"
}], ["circle", {
  cx: "9",
  cy: "20",
  r: "2",
  key: "e5v82j"
}]];
var Ban = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m4.9 4.9 14.2 14.2",
  key: "1m5liu"
}]];
var Banana = [["path", {
  d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",
  key: "1cscit"
}], ["path", {
  d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",
  key: "1y1nbv"
}]];
var Bandage = [["path", {
  d: "M10 10.01h.01",
  key: "1e9xi7"
}], ["path", {
  d: "M10 14.01h.01",
  key: "ac23bv"
}], ["path", {
  d: "M14 10.01h.01",
  key: "2wfrvf"
}], ["path", {
  d: "M14 14.01h.01",
  key: "8tw8yn"
}], ["path", {
  d: "M18 6v11.5",
  key: "dkbidh"
}], ["path", {
  d: "M6 6v12",
  key: "vkc79e"
}], ["rect", {
  x: "2",
  y: "6",
  width: "20",
  height: "12",
  rx: "2",
  key: "1wpnh2"
}]];
var BanknoteArrowDown = [["path", {
  d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5",
  key: "x6cv4u"
}], ["path", {
  d: "m16 19 3 3 3-3",
  key: "1ibux0"
}], ["path", {
  d: "M18 12h.01",
  key: "yjnet6"
}], ["path", {
  d: "M19 16v6",
  key: "tddt3s"
}], ["path", {
  d: "M6 12h.01",
  key: "c2rlol"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}]];
var BanknoteArrowUp = [["path", {
  d: "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5",
  key: "x6cv4u"
}], ["path", {
  d: "M18 12h.01",
  key: "yjnet6"
}], ["path", {
  d: "M19 22v-6",
  key: "qhmiwi"
}], ["path", {
  d: "m22 19-3-3-3 3",
  key: "rn6bg2"
}], ["path", {
  d: "M6 12h.01",
  key: "c2rlol"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}]];
var BanknoteX = [["path", {
  d: "M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5",
  key: "16nib6"
}], ["path", {
  d: "m17 17 5 5",
  key: "p7ous7"
}], ["path", {
  d: "M18 12h.01",
  key: "yjnet6"
}], ["path", {
  d: "m22 17-5 5",
  key: "gqnmv0"
}], ["path", {
  d: "M6 12h.01",
  key: "c2rlol"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}]];
var Banknote = [["rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "6",
  rx: "2",
  key: "9lu3g6"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}], ["path", {
  d: "M6 12h.01M18 12h.01",
  key: "113zkx"
}]];
var Barcode = [["path", {
  d: "M3 5v14",
  key: "1nt18q"
}], ["path", {
  d: "M8 5v14",
  key: "1ybrkv"
}], ["path", {
  d: "M12 5v14",
  key: "s699le"
}], ["path", {
  d: "M17 5v14",
  key: "ycjyhj"
}], ["path", {
  d: "M21 5v14",
  key: "nzette"
}]];
var Baseline = [["path", {
  d: "M4 20h16",
  key: "14thso"
}], ["path", {
  d: "m6 16 6-12 6 12",
  key: "1b4byz"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}]];
var Barrel = [["path", {
  d: "M10 3a41 41 0 0 0 0 18",
  key: "1qcnzb"
}], ["path", {
  d: "M14 3a41 41 0 0 1 0 18",
  key: "547vd4"
}], ["path", {
  d: "M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z",
  key: "1wepyy"
}], ["path", {
  d: "M3.84 17h16.32",
  key: "1wh981"
}], ["path", {
  d: "M3.84 7h16.32",
  key: "19jf4x"
}]];
var Bath = [["path", {
  d: "M10 4 8 6",
  key: "1rru8s"
}], ["path", {
  d: "M17 19v2",
  key: "ts1sot"
}], ["path", {
  d: "M2 12h20",
  key: "9i4pu4"
}], ["path", {
  d: "M7 19v2",
  key: "12npes"
}], ["path", {
  d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
  key: "14ym8i"
}]];
var BatteryCharging = [["path", {
  d: "m11 7-3 5h4l-3 5",
  key: "b4a64w"
}], ["path", {
  d: "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935",
  key: "lre1cr"
}], ["path", {
  d: "M22 14v-4",
  key: "14q9d5"
}], ["path", {
  d: "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936",
  key: "13q5k0"
}]];
var BatteryFull = [["path", {
  d: "M10 10v4",
  key: "1mb2ec"
}], ["path", {
  d: "M14 10v4",
  key: "1nt88p"
}], ["path", {
  d: "M22 14v-4",
  key: "14q9d5"
}], ["path", {
  d: "M6 10v4",
  key: "1n77qd"
}], ["rect", {
  x: "2",
  y: "6",
  width: "16",
  height: "12",
  rx: "2",
  key: "13zb55"
}]];
var BatteryLow = [["path", {
  d: "M22 14v-4",
  key: "14q9d5"
}], ["path", {
  d: "M6 14v-4",
  key: "14a6bd"
}], ["rect", {
  x: "2",
  y: "6",
  width: "16",
  height: "12",
  rx: "2",
  key: "13zb55"
}]];
var BatteryMedium = [["path", {
  d: "M10 14v-4",
  key: "suye4c"
}], ["path", {
  d: "M22 14v-4",
  key: "14q9d5"
}], ["path", {
  d: "M6 14v-4",
  key: "14a6bd"
}], ["rect", {
  x: "2",
  y: "6",
  width: "16",
  height: "12",
  rx: "2",
  key: "13zb55"
}]];
var BatteryPlus = [["path", {
  d: "M10 9v6",
  key: "17i7lo"
}], ["path", {
  d: "M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605",
  key: "o09yah"
}], ["path", {
  d: "M22 14v-4",
  key: "14q9d5"
}], ["path", {
  d: "M7 12h6",
  key: "iekk3h"
}], ["path", {
  d: "M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606",
  key: "xyqvf1"
}]];
var BatteryWarning = [["path", {
  d: "M10 17h.01",
  key: "nbq80n"
}], ["path", {
  d: "M10 7v6",
  key: "nne03l"
}], ["path", {
  d: "M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2",
  key: "1m83kb"
}], ["path", {
  d: "M22 14v-4",
  key: "14q9d5"
}], ["path", {
  d: "M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",
  key: "h8lgfh"
}]];
var Battery = [["path", {
  d: "M 22 14 L 22 10",
  key: "nqc4tb"
}], ["rect", {
  x: "2",
  y: "6",
  width: "16",
  height: "12",
  rx: "2",
  key: "13zb55"
}]];
var Beaker = [["path", {
  d: "M4.5 3h15",
  key: "c7n0jr"
}], ["path", {
  d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",
  key: "m1uhx7"
}], ["path", {
  d: "M6 14h12",
  key: "4cwo0f"
}]];
var BeanOff = [["path", {
  d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",
  key: "bq3udt"
}], ["path", {
  d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",
  key: "17ccse"
}], ["path", {
  d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",
  key: "18zqgq"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}]];
var Bean = [["path", {
  d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",
  key: "1tvzk7"
}], ["path", {
  d: "M5.341 10.62a4 4 0 1 0 5.279-5.28",
  key: "2cyri2"
}]];
var BedDouble = [["path", {
  d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",
  key: "1k78r4"
}], ["path", {
  d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",
  key: "fb3tl2"
}], ["path", {
  d: "M12 4v6",
  key: "1dcgq2"
}], ["path", {
  d: "M2 18h20",
  key: "ajqnye"
}]];
var BedSingle = [["path", {
  d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",
  key: "1wm6mi"
}], ["path", {
  d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",
  key: "4k93s5"
}], ["path", {
  d: "M3 18h18",
  key: "1h113x"
}]];
var Bed = [["path", {
  d: "M2 4v16",
  key: "vw9hq8"
}], ["path", {
  d: "M2 8h18a2 2 0 0 1 2 2v10",
  key: "1dgv2r"
}], ["path", {
  d: "M2 17h20",
  key: "18nfp3"
}], ["path", {
  d: "M6 8v9",
  key: "1yriud"
}]];
var Beef = [["path", {
  d: "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3",
  key: "cisjcv"
}], ["path", {
  d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",
  key: "5byaag"
}], ["circle", {
  cx: "12.5",
  cy: "8.5",
  r: "2.5",
  key: "9738u8"
}]];
var BeerOff = [["path", {
  d: "M13 13v5",
  key: "igwfh0"
}], ["path", {
  d: "M17 11.47V8",
  key: "16yw0g"
}], ["path", {
  d: "M17 11h1a3 3 0 0 1 2.745 4.211",
  key: "1xbt65"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3",
  key: "c55o3e"
}], ["path", {
  d: "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268",
  key: "1ydug7"
}], ["path", {
  d: "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12",
  key: "q81o7q"
}], ["path", {
  d: "M9 14.6V18",
  key: "20ek98"
}]];
var Beer = [["path", {
  d: "M17 11h1a3 3 0 0 1 0 6h-1",
  key: "1yp76v"
}], ["path", {
  d: "M9 12v6",
  key: "1u1cab"
}], ["path", {
  d: "M13 12v6",
  key: "1sugkk"
}], ["path", {
  d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",
  key: "1510fo"
}], ["path", {
  d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",
  key: "19jb7n"
}]];
var BellDot = [["path", {
  d: "M10.268 21a2 2 0 0 0 3.464 0",
  key: "vwvbt9"
}], ["path", {
  d: "M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665",
  key: "1tip0g"
}], ["circle", {
  cx: "18",
  cy: "8",
  r: "3",
  key: "1g0gzu"
}]];
var BellElectric = [["path", {
  d: "M18.518 17.347A7 7 0 0 1 14 19",
  key: "1emhpo"
}], ["path", {
  d: "M18.8 4A11 11 0 0 1 20 9",
  key: "127b67"
}], ["path", {
  d: "M9 9h.01",
  key: "1q5me6"
}], ["circle", {
  cx: "20",
  cy: "16",
  r: "2",
  key: "1v9bxh"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "7",
  key: "p2h5vp"
}], ["rect", {
  x: "4",
  y: "16",
  width: "10",
  height: "6",
  rx: "2",
  key: "bfnviv"
}]];
var BellMinus = [["path", {
  d: "M10.268 21a2 2 0 0 0 3.464 0",
  key: "vwvbt9"
}], ["path", {
  d: "M15 8h6",
  key: "8ybuxh"
}], ["path", {
  d: "M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12",
  key: "bdwj86"
}]];
var BellOff = [["path", {
  d: "M10.268 21a2 2 0 0 0 3.464 0",
  key: "vwvbt9"
}], ["path", {
  d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742",
  key: "178tsu"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05",
  key: "1hqiys"
}]];
var BellPlus = [["path", {
  d: "M10.268 21a2 2 0 0 0 3.464 0",
  key: "vwvbt9"
}], ["path", {
  d: "M15 8h6",
  key: "8ybuxh"
}], ["path", {
  d: "M18 5v6",
  key: "g5ayrv"
}], ["path", {
  d: "M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332",
  key: "1abcvy"
}]];
var BellRing = [["path", {
  d: "M10.268 21a2 2 0 0 0 3.464 0",
  key: "vwvbt9"
}], ["path", {
  d: "M22 8c0-2.3-.8-4.3-2-6",
  key: "5bb3ad"
}], ["path", {
  d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
  key: "11g9vi"
}], ["path", {
  d: "M4 2C2.8 3.7 2 5.7 2 8",
  key: "tap9e0"
}]];
var Bell = [["path", {
  d: "M10.268 21a2 2 0 0 0 3.464 0",
  key: "vwvbt9"
}], ["path", {
  d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
  key: "11g9vi"
}]];
var BetweenHorizontalEnd = [["rect", {
  width: "13",
  height: "7",
  x: "3",
  y: "3",
  rx: "1",
  key: "11xb64"
}], ["path", {
  d: "m22 15-3-3 3-3",
  key: "26chmm"
}], ["rect", {
  width: "13",
  height: "7",
  x: "3",
  y: "14",
  rx: "1",
  key: "k6ky7n"
}]];
var BetweenHorizontalStart = [["rect", {
  width: "13",
  height: "7",
  x: "8",
  y: "3",
  rx: "1",
  key: "pkso9a"
}], ["path", {
  d: "m2 9 3 3-3 3",
  key: "1agib5"
}], ["rect", {
  width: "13",
  height: "7",
  x: "8",
  y: "14",
  rx: "1",
  key: "1q5fc1"
}]];
var BetweenVerticalEnd = [["rect", {
  width: "7",
  height: "13",
  x: "3",
  y: "3",
  rx: "1",
  key: "1fdu0f"
}], ["path", {
  d: "m9 22 3-3 3 3",
  key: "17z65a"
}], ["rect", {
  width: "7",
  height: "13",
  x: "14",
  y: "3",
  rx: "1",
  key: "1squn4"
}]];
var BetweenVerticalStart = [["rect", {
  width: "7",
  height: "13",
  x: "3",
  y: "8",
  rx: "1",
  key: "1fjrkv"
}], ["path", {
  d: "m15 2-3 3-3-3",
  key: "1uh6eb"
}], ["rect", {
  width: "7",
  height: "13",
  x: "14",
  y: "8",
  rx: "1",
  key: "w3fjg8"
}]];
var BicepsFlexed = [["path", {
  d: "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1",
  key: "1pmlyh"
}], ["path", {
  d: "M15 14a5 5 0 0 0-7.584 2",
  key: "5rb254"
}], ["path", {
  d: "M9.964 6.825C8.019 7.977 9.5 13 8 15",
  key: "kbvsx9"
}]];
var Bike = [["circle", {
  cx: "18.5",
  cy: "17.5",
  r: "3.5",
  key: "15x4ox"
}], ["circle", {
  cx: "5.5",
  cy: "17.5",
  r: "3.5",
  key: "1noe27"
}], ["circle", {
  cx: "15",
  cy: "5",
  r: "1",
  key: "19l28e"
}], ["path", {
  d: "M12 17.5V14l-3-3 4-3 2 3h2",
  key: "1npguv"
}]];
var Binary = [["rect", {
  x: "14",
  y: "14",
  width: "4",
  height: "6",
  rx: "2",
  key: "p02svl"
}], ["rect", {
  x: "6",
  y: "4",
  width: "4",
  height: "6",
  rx: "2",
  key: "xm4xkj"
}], ["path", {
  d: "M6 20h4",
  key: "1i6q5t"
}], ["path", {
  d: "M14 10h4",
  key: "ru81e7"
}], ["path", {
  d: "M6 14h2v6",
  key: "16z9wg"
}], ["path", {
  d: "M14 4h2v6",
  key: "1idq9u"
}]];
var Binoculars = [["path", {
  d: "M10 10h4",
  key: "tcdvrf"
}], ["path", {
  d: "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3",
  key: "3apit1"
}], ["path", {
  d: "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z",
  key: "rhpgnw"
}], ["path", {
  d: "M 22 16 L 2 16",
  key: "14lkq7"
}], ["path", {
  d: "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z",
  key: "104b3k"
}], ["path", {
  d: "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3",
  key: "14fczp"
}]];
var Biohazard = [["circle", {
  cx: "12",
  cy: "11.9",
  r: "2",
  key: "e8h31w"
}], ["path", {
  d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",
  key: "17bolr"
}], ["path", {
  d: "m8.9 10.1 1.4.8",
  key: "15ezny"
}], ["path", {
  d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",
  key: "wtwa5u"
}], ["path", {
  d: "m15.1 10.1-1.4.8",
  key: "1r0b28"
}], ["path", {
  d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",
  key: "m7qszh"
}], ["path", {
  d: "M12 13.9v1.6",
  key: "zfyyim"
}], ["path", {
  d: "M13.5 5.4c-1-.2-2-.2-3 0",
  key: "1bi9q0"
}], ["path", {
  d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5",
  key: "1rhjqw"
}], ["path", {
  d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5",
  key: "8gsud3"
}]];
var Bird = [["path", {
  d: "M16 7h.01",
  key: "1kdx03"
}], ["path", {
  d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",
  key: "oj1oa8"
}], ["path", {
  d: "m20 7 2 .5-2 .5",
  key: "12nv4d"
}], ["path", {
  d: "M10 18v3",
  key: "1yea0a"
}], ["path", {
  d: "M14 17.75V21",
  key: "1pymcb"
}], ["path", {
  d: "M7 18a6 6 0 0 0 3.84-10.61",
  key: "1npnn0"
}]];
var Bitcoin = [["path", {
  d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
  key: "yr8idg"
}]];
var Blend = [["circle", {
  cx: "9",
  cy: "9",
  r: "7",
  key: "p2h5vp"
}], ["circle", {
  cx: "15",
  cy: "15",
  r: "7",
  key: "19ennj"
}]];
var Blinds = [["path", {
  d: "M3 3h18",
  key: "o7r712"
}], ["path", {
  d: "M20 7H8",
  key: "gd2fo2"
}], ["path", {
  d: "M20 11H8",
  key: "1ynp89"
}], ["path", {
  d: "M10 19h10",
  key: "19hjk5"
}], ["path", {
  d: "M8 15h12",
  key: "1yqzne"
}], ["path", {
  d: "M4 3v14",
  key: "fggqzn"
}], ["circle", {
  cx: "4",
  cy: "19",
  r: "2",
  key: "p3m9r0"
}]];
var Blocks = [["path", {
  d: "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",
  key: "1ah6g2"
}], ["rect", {
  x: "14",
  y: "2",
  width: "8",
  height: "8",
  rx: "1",
  key: "88lufb"
}]];
var BluetoothConnected = [["path", {
  d: "m7 7 10 10-5 5V2l5 5L7 17",
  key: "1q5490"
}], ["line", {
  x1: "18",
  x2: "21",
  y1: "12",
  y2: "12",
  key: "1rsjjs"
}], ["line", {
  x1: "3",
  x2: "6",
  y1: "12",
  y2: "12",
  key: "11yl8c"
}]];
var BluetoothOff = [["path", {
  d: "m17 17-5 5V12l-5 5",
  key: "v5aci6"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M14.5 9.5 17 7l-5-5v4.5",
  key: "1kddfz"
}]];
var BluetoothSearching = [["path", {
  d: "m7 7 10 10-5 5V2l5 5L7 17",
  key: "1q5490"
}], ["path", {
  d: "M20.83 14.83a4 4 0 0 0 0-5.66",
  key: "k8tn1j"
}], ["path", {
  d: "M18 12h.01",
  key: "yjnet6"
}]];
var Bluetooth = [["path", {
  d: "m7 7 10 10-5 5V2l5 5L7 17",
  key: "1q5490"
}]];
var Bold = [["path", {
  d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",
  key: "mg9rjx"
}]];
var Bolt = [["path", {
  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  key: "yt0hxn"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "4",
  key: "4exip2"
}]];
var Bomb = [["circle", {
  cx: "11",
  cy: "13",
  r: "9",
  key: "hd149"
}], ["path", {
  d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",
  key: "jp4j1b"
}], ["path", {
  d: "m22 2-1.5 1.5",
  key: "ay92ug"
}]];
var Bone = [["path", {
  d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",
  key: "w610uw"
}]];
var BookA = [["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}], ["path", {
  d: "m8 13 4-7 4 7",
  key: "4rari8"
}], ["path", {
  d: "M9.1 11h5.7",
  key: "1gkovt"
}]];
var BookAlert = [["path", {
  d: "M12 13h.01",
  key: "y0uutt"
}], ["path", {
  d: "M12 6v3",
  key: "1m4b9j"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}]];
var BookAudio = [["path", {
  d: "M12 6v7",
  key: "1f6ttz"
}], ["path", {
  d: "M16 8v3",
  key: "gejaml"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}], ["path", {
  d: "M8 8v3",
  key: "1qzp49"
}]];
var BookCheck = [["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}], ["path", {
  d: "m9 9.5 2 2 4-4",
  key: "1dth82"
}]];
var BookCopy = [["path", {
  d: "M2 16V4a2 2 0 0 1 2-2h11",
  key: "spzkk5"
}], ["path", {
  d: "M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12",
  key: "1wz07i"
}], ["path", {
  d: "M5 14H4a2 2 0 1 0 0 4h1",
  key: "16gqf9"
}]];
var BookDashed = [["path", {
  d: "M12 17h1.5",
  key: "1gkc67"
}], ["path", {
  d: "M12 22h1.5",
  key: "1my7sn"
}], ["path", {
  d: "M12 2h1.5",
  key: "19tvb7"
}], ["path", {
  d: "M17.5 22H19a1 1 0 0 0 1-1",
  key: "10akbh"
}], ["path", {
  d: "M17.5 2H19a1 1 0 0 1 1 1v1.5",
  key: "1vrfjs"
}], ["path", {
  d: "M20 14v3h-2.5",
  key: "1naeju"
}], ["path", {
  d: "M20 8.5V10",
  key: "1ctpfu"
}], ["path", {
  d: "M4 10V8.5",
  key: "1o3zg5"
}], ["path", {
  d: "M4 19.5V14",
  key: "ob81pf"
}], ["path", {
  d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H8",
  key: "s8vcyb"
}], ["path", {
  d: "M8 22H6.5a1 1 0 0 1 0-5H8",
  key: "1cu73q"
}]];
var BookDown = [["path", {
  d: "M12 13V7",
  key: "h0r20n"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}], ["path", {
  d: "m9 10 3 3 3-3",
  key: "zt5b4y"
}]];
var BookHeadphones = [["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}], ["path", {
  d: "M8 12v-2a4 4 0 0 1 8 0v2",
  key: "1vsqkj"
}], ["circle", {
  cx: "15",
  cy: "12",
  r: "1",
  key: "1tmaij"
}], ["circle", {
  cx: "9",
  cy: "12",
  r: "1",
  key: "1vctgf"
}]];
var BookHeart = [["path", {
  d: "M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7",
  key: "1t75a8"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}]];
var BookImage = [["path", {
  d: "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17",
  key: "q6ojf0"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "2",
  key: "2qkj4p"
}]];
var BookKey = [["path", {
  d: "m19 3 1 1",
  key: "ze14oc"
}], ["path", {
  d: "m20 2-4.5 4.5",
  key: "1sppr8"
}], ["path", {
  d: "M20 7.898V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "1xzogz"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2h7.844",
  key: "vtdg6h"
}], ["circle", {
  cx: "14",
  cy: "8",
  r: "2",
  key: "u49eql"
}]];
var BookLock = [["path", {
  d: "M18 6V4a2 2 0 1 0-4 0v2",
  key: "1aquzs"
}], ["path", {
  d: "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "1rkj32"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",
  key: "18wgow"
}], ["rect", {
  x: "12",
  y: "6",
  width: "8",
  height: "5",
  rx: "1",
  key: "73l30o"
}]];
var BookMarked = [["path", {
  d: "M10 2v8l3-3 3 3V2",
  key: "sqw3rj"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}]];
var BookMinus = [["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}], ["path", {
  d: "M9 10h6",
  key: "9gxzsh"
}]];
var BookOpenCheck = [["path", {
  d: "M12 21V7",
  key: "gj6g52"
}], ["path", {
  d: "m16 12 2 2 4-4",
  key: "mdajum"
}], ["path", {
  d: "M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",
  key: "8arnkb"
}]];
var BookOpenText = [["path", {
  d: "M12 7v14",
  key: "1akyts"
}], ["path", {
  d: "M16 12h2",
  key: "7q9ll5"
}], ["path", {
  d: "M16 8h2",
  key: "msurwy"
}], ["path", {
  d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
  key: "ruj8y"
}], ["path", {
  d: "M6 12h2",
  key: "32wvfc"
}], ["path", {
  d: "M6 8h2",
  key: "30oboj"
}]];
var BookOpen = [["path", {
  d: "M12 7v14",
  key: "1akyts"
}], ["path", {
  d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
  key: "ruj8y"
}]];
var BookPlus = [["path", {
  d: "M12 7v6",
  key: "lw1j43"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}], ["path", {
  d: "M9 10h6",
  key: "9gxzsh"
}]];
var BookText = [["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}], ["path", {
  d: "M8 11h8",
  key: "vwpz6n"
}], ["path", {
  d: "M8 7h6",
  key: "1f0q6e"
}]];
var BookType = [["path", {
  d: "M10 13h4",
  key: "ytezjc"
}], ["path", {
  d: "M12 6v7",
  key: "1f6ttz"
}], ["path", {
  d: "M16 8V6H8v2",
  key: "x8j6u4"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}]];
var BookUp2 = [["path", {
  d: "M12 13V7",
  key: "h0r20n"
}], ["path", {
  d: "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "161d7n"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",
  key: "1lorq7"
}], ["path", {
  d: "m9 10 3-3 3 3",
  key: "11gsxs"
}], ["path", {
  d: "m9 5 3-3 3 3",
  key: "l8vdw6"
}]];
var BookUp = [["path", {
  d: "M12 13V7",
  key: "h0r20n"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}], ["path", {
  d: "m9 10 3-3 3 3",
  key: "11gsxs"
}]];
var BookUser = [["path", {
  d: "M15 13a3 3 0 1 0-6 0",
  key: "10j68g"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}], ["circle", {
  cx: "12",
  cy: "8",
  r: "2",
  key: "1822b1"
}]];
var BookX = [["path", {
  d: "m14.5 7-5 5",
  key: "dy991v"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}], ["path", {
  d: "m9.5 7 5 5",
  key: "s45iea"
}]];
var Book = [["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",
  key: "k3hazp"
}]];
var BookmarkCheck = [["path", {
  d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",
  key: "169p4p"
}], ["path", {
  d: "m9 10 2 2 4-4",
  key: "1gnqz4"
}]];
var BookmarkMinus = [["path", {
  d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
  key: "1fy3hk"
}], ["line", {
  x1: "15",
  x2: "9",
  y1: "10",
  y2: "10",
  key: "1gty7f"
}]];
var BookmarkPlus = [["path", {
  d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
  key: "1fy3hk"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "7",
  y2: "13",
  key: "1cppfj"
}], ["line", {
  x1: "15",
  x2: "9",
  y1: "10",
  y2: "10",
  key: "1gty7f"
}]];
var BookmarkX = [["path", {
  d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",
  key: "169p4p"
}], ["path", {
  d: "m14.5 7.5-5 5",
  key: "3lb6iw"
}], ["path", {
  d: "m9.5 7.5 5 5",
  key: "ko136h"
}]];
var Bookmark = [["path", {
  d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
  key: "1fy3hk"
}]];
var BoomBox = [["path", {
  d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",
  key: "vvzvr1"
}], ["path", {
  d: "M8 8v1",
  key: "xcqmfk"
}], ["path", {
  d: "M12 8v1",
  key: "1rj8u4"
}], ["path", {
  d: "M16 8v1",
  key: "1q12zr"
}], ["rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "9",
  rx: "2",
  key: "igpb89"
}], ["circle", {
  cx: "8",
  cy: "15",
  r: "2",
  key: "fa4a8s"
}], ["circle", {
  cx: "16",
  cy: "15",
  r: "2",
  key: "14c3ya"
}]];
var BotMessageSquare = [["path", {
  d: "M12 6V2H8",
  key: "1155em"
}], ["path", {
  d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",
  key: "w2lp3e"
}], ["path", {
  d: "M2 12h2",
  key: "1t8f8n"
}], ["path", {
  d: "M9 11v2",
  key: "1ueba0"
}], ["path", {
  d: "M15 11v2",
  key: "i11awn"
}], ["path", {
  d: "M20 12h2",
  key: "1q8mjw"
}]];
var BotOff = [["path", {
  d: "M13.67 8H18a2 2 0 0 1 2 2v4.33",
  key: "7az073"
}], ["path", {
  d: "M2 14h2",
  key: "vft8re"
}], ["path", {
  d: "M20 14h2",
  key: "4cs60a"
}], ["path", {
  d: "M22 22 2 2",
  key: "1r8tn9"
}], ["path", {
  d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586",
  key: "s09a7a"
}], ["path", {
  d: "M9 13v2",
  key: "rq6x2g"
}], ["path", {
  d: "M9.67 4H12v2.33",
  key: "110xot"
}]];
var Bot = [["path", {
  d: "M12 8V4H8",
  key: "hb8ula"
}], ["rect", {
  width: "16",
  height: "12",
  x: "4",
  y: "8",
  rx: "2",
  key: "enze0r"
}], ["path", {
  d: "M2 14h2",
  key: "vft8re"
}], ["path", {
  d: "M20 14h2",
  key: "4cs60a"
}], ["path", {
  d: "M15 13v2",
  key: "1xurst"
}], ["path", {
  d: "M9 13v2",
  key: "rq6x2g"
}]];
var BowArrow = [["path", {
  d: "M17 3h4v4",
  key: "19p9u1"
}], ["path", {
  d: "M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17",
  key: "12t3w9"
}], ["path", {
  d: "M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05",
  key: "ogng5l"
}], ["path", {
  d: "M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z",
  key: "8v3fy2"
}], ["path", {
  d: "M9.707 14.293 21 3",
  key: "ydm3bn"
}]];
var Box = [["path", {
  d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
  key: "hh9hay"
}], ["path", {
  d: "m3.3 7 8.7 5 8.7-5",
  key: "g66t2b"
}], ["path", {
  d: "M12 22V12",
  key: "d0xqtd"
}]];
var Boxes = [["path", {
  d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
  key: "lc1i9w"
}], ["path", {
  d: "m7 16.5-4.74-2.85",
  key: "1o9zyk"
}], ["path", {
  d: "m7 16.5 5-3",
  key: "va8pkn"
}], ["path", {
  d: "M7 16.5v5.17",
  key: "jnp8gn"
}], ["path", {
  d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
  key: "8zsnat"
}], ["path", {
  d: "m17 16.5-5-3",
  key: "8arw3v"
}], ["path", {
  d: "m17 16.5 4.74-2.85",
  key: "8rfmw"
}], ["path", {
  d: "M17 16.5v5.17",
  key: "k6z78m"
}], ["path", {
  d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
  key: "1xygjf"
}], ["path", {
  d: "M12 8 7.26 5.15",
  key: "1vbdud"
}], ["path", {
  d: "m12 8 4.74-2.85",
  key: "3rx089"
}], ["path", {
  d: "M12 13.5V8",
  key: "1io7kd"
}]];
var Braces = [["path", {
  d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",
  key: "ezmyqa"
}], ["path", {
  d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
  key: "e1hn23"
}]];
var Brackets = [["path", {
  d: "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3",
  key: "1kt8lf"
}], ["path", {
  d: "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3",
  key: "gduv9"
}]];
var BrainCircuit = [["path", {
  d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
  key: "l5xja"
}], ["path", {
  d: "M9 13a4.5 4.5 0 0 0 3-4",
  key: "10igwf"
}], ["path", {
  d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
  key: "105sqy"
}], ["path", {
  d: "M3.477 10.896a4 4 0 0 1 .585-.396",
  key: "ql3yin"
}], ["path", {
  d: "M6 18a4 4 0 0 1-1.967-.516",
  key: "2e4loj"
}], ["path", {
  d: "M12 13h4",
  key: "1ku699"
}], ["path", {
  d: "M12 18h6a2 2 0 0 1 2 2v1",
  key: "105ag5"
}], ["path", {
  d: "M12 8h8",
  key: "1lhi5i"
}], ["path", {
  d: "M16 8V5a2 2 0 0 1 2-2",
  key: "u6izg6"
}], ["circle", {
  cx: "16",
  cy: "13",
  r: ".5",
  key: "ry7gng"
}], ["circle", {
  cx: "18",
  cy: "3",
  r: ".5",
  key: "1aiba7"
}], ["circle", {
  cx: "20",
  cy: "21",
  r: ".5",
  key: "yhc1fs"
}], ["circle", {
  cx: "20",
  cy: "8",
  r: ".5",
  key: "1e43v0"
}]];
var BrainCog = [["path", {
  d: "m10.852 14.772-.383.923",
  key: "11vil6"
}], ["path", {
  d: "m10.852 9.228-.383-.923",
  key: "1fjppe"
}], ["path", {
  d: "m13.148 14.772.382.924",
  key: "je3va1"
}], ["path", {
  d: "m13.531 8.305-.383.923",
  key: "18epck"
}], ["path", {
  d: "m14.772 10.852.923-.383",
  key: "k9m8cz"
}], ["path", {
  d: "m14.772 13.148.923.383",
  key: "1xvhww"
}], ["path", {
  d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771",
  key: "jcbbz1"
}], ["path", {
  d: "M17.998 5.125a4 4 0 0 1 2.525 5.771",
  key: "1kkn7e"
}], ["path", {
  d: "M19.505 10.294a4 4 0 0 1-1.5 7.706",
  key: "18bmuc"
}], ["path", {
  d: "M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516",
  key: "uozx0d"
}], ["path", {
  d: "M4.5 10.291A4 4 0 0 0 6 18",
  key: "whdemb"
}], ["path", {
  d: "M6.002 5.125a3 3 0 0 0 .4 1.375",
  key: "1kqy2g"
}], ["path", {
  d: "m9.228 10.852-.923-.383",
  key: "1wtb30"
}], ["path", {
  d: "m9.228 13.148-.923.383",
  key: "1a830x"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}]];
var Brain = [["path", {
  d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
  key: "l5xja"
}], ["path", {
  d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
  key: "ep3f8r"
}], ["path", {
  d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
  key: "1p4c4q"
}], ["path", {
  d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
  key: "tmeiqw"
}], ["path", {
  d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
  key: "105sqy"
}], ["path", {
  d: "M3.477 10.896a4 4 0 0 1 .585-.396",
  key: "ql3yin"
}], ["path", {
  d: "M19.938 10.5a4 4 0 0 1 .585.396",
  key: "1qfode"
}], ["path", {
  d: "M6 18a4 4 0 0 1-1.967-.516",
  key: "2e4loj"
}], ["path", {
  d: "M19.967 17.484A4 4 0 0 1 18 18",
  key: "159ez6"
}]];
var BrickWallFire = [["path", {
  d: "M16 3v2.107",
  key: "gq8xun"
}], ["path", {
  d: "M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9",
  key: "1l2pih"
}], ["path", {
  d: "M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938",
  key: "jrnqjp"
}], ["path", {
  d: "M3 15h5.253",
  key: "xqg7rb"
}], ["path", {
  d: "M3 9h8.228",
  key: "1ppb70"
}], ["path", {
  d: "M8 15v6",
  key: "1stoo3"
}], ["path", {
  d: "M8 3v6",
  key: "vlvjmk"
}]];
var BrickWall = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M12 9v6",
  key: "199k2o"
}], ["path", {
  d: "M16 15v6",
  key: "8rj2es"
}], ["path", {
  d: "M16 3v6",
  key: "1j6rpj"
}], ["path", {
  d: "M3 15h18",
  key: "5xshup"
}], ["path", {
  d: "M3 9h18",
  key: "1pudct"
}], ["path", {
  d: "M8 15v6",
  key: "1stoo3"
}], ["path", {
  d: "M8 3v6",
  key: "vlvjmk"
}]];
var BriefcaseBusiness = [["path", {
  d: "M12 12h.01",
  key: "1mp3jc"
}], ["path", {
  d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
  key: "1ksdt3"
}], ["path", {
  d: "M22 13a18.15 18.15 0 0 1-20 0",
  key: "12hx5q"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "6",
  rx: "2",
  key: "i6l2r4"
}]];
var BriefcaseConveyorBelt = [["path", {
  d: "M10 20v2",
  key: "1n8e1g"
}], ["path", {
  d: "M14 20v2",
  key: "1lq872"
}], ["path", {
  d: "M18 20v2",
  key: "10uadw"
}], ["path", {
  d: "M21 20H3",
  key: "kdqkdp"
}], ["path", {
  d: "M6 20v2",
  key: "a9bc87"
}], ["path", {
  d: "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12",
  key: "17n9tx"
}], ["rect", {
  x: "4",
  y: "6",
  width: "16",
  height: "10",
  rx: "2",
  key: "1097i5"
}]];
var BriefcaseMedical = [["path", {
  d: "M12 11v4",
  key: "a6ujw6"
}], ["path", {
  d: "M14 13h-4",
  key: "1pl8zg"
}], ["path", {
  d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
  key: "1ksdt3"
}], ["path", {
  d: "M18 6v14",
  key: "1mu4gy"
}], ["path", {
  d: "M6 6v14",
  key: "1s15cj"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "6",
  rx: "2",
  key: "i6l2r4"
}]];
var Briefcase = [["path", {
  d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
  key: "jecpp"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "6",
  rx: "2",
  key: "i6l2r4"
}]];
var BringToFront = [["rect", {
  x: "8",
  y: "8",
  width: "8",
  height: "8",
  rx: "2",
  key: "yj20xf"
}], ["path", {
  d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",
  key: "1ltk23"
}], ["path", {
  d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",
  key: "1q24h9"
}]];
var BrushCleaning = [["path", {
  d: "m16 22-1-4",
  key: "1ow2iv"
}], ["path", {
  d: "M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1",
  key: "iw8jdu"
}], ["path", {
  d: "M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z",
  key: "1soew8"
}], ["path", {
  d: "m8 22 1-4",
  key: "s3unb"
}]];
var Brush = [["path", {
  d: "m11 10 3 3",
  key: "fzmg1i"
}], ["path", {
  d: "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",
  key: "p4q2r7"
}], ["path", {
  d: "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",
  key: "wy6l02"
}]];
var Bubbles = [["path", {
  d: "M7.2 14.8a2 2 0 0 1 2 2",
  key: "1tw9gg"
}], ["circle", {
  cx: "18.5",
  cy: "8.5",
  r: "3.5",
  key: "1wadoa"
}], ["circle", {
  cx: "7.5",
  cy: "16.5",
  r: "5.5",
  key: "6mdt3g"
}], ["circle", {
  cx: "7.5",
  cy: "4.5",
  r: "2.5",
  key: "637s54"
}]];
var BugOff = [["path", {
  d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",
  key: "vl8zik"
}], ["path", {
  d: "M14.12 3.88 16 2",
  key: "qol33r"
}], ["path", {
  d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",
  key: "1ou0bd"
}], ["path", {
  d: "M20.97 5c0 2.1-1.6 3.8-3.5 4",
  key: "18gb23"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",
  key: "1njkjs"
}], ["path", {
  d: "M12 20v-8",
  key: "i3yub9"
}], ["path", {
  d: "M6 13H2",
  key: "82j7cp"
}], ["path", {
  d: "M3 21c0-2.1 1.7-3.9 3.8-4",
  key: "4p0ekp"
}]];
var BugPlay = [["path", {
  d: "M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",
  key: "17shqo"
}], ["path", {
  d: "M14.12 3.88 16 2",
  key: "qol33r"
}], ["path", {
  d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",
  key: "1tjixy"
}], ["path", {
  d: "M20.97 5c0 2.1-1.6 3.8-3.5 4",
  key: "18gb23"
}], ["path", {
  d: "M3 21c0-2.1 1.7-3.9 3.8-4",
  key: "4p0ekp"
}], ["path", {
  d: "M6 13H2",
  key: "82j7cp"
}], ["path", {
  d: "M6.53 9C4.6 8.8 3 7.1 3 5",
  key: "32zzws"
}], ["path", {
  d: "m8 2 1.88 1.88",
  key: "fmnt4t"
}], ["path", {
  d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",
  key: "d7y7pr"
}]];
var Bug = [["path", {
  d: "m8 2 1.88 1.88",
  key: "fmnt4t"
}], ["path", {
  d: "M14.12 3.88 16 2",
  key: "qol33r"
}], ["path", {
  d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",
  key: "d7y7pr"
}], ["path", {
  d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
  key: "xs1cw7"
}], ["path", {
  d: "M12 20v-9",
  key: "1qisl0"
}], ["path", {
  d: "M6.53 9C4.6 8.8 3 7.1 3 5",
  key: "32zzws"
}], ["path", {
  d: "M6 13H2",
  key: "82j7cp"
}], ["path", {
  d: "M3 21c0-2.1 1.7-3.9 3.8-4",
  key: "4p0ekp"
}], ["path", {
  d: "M20.97 5c0 2.1-1.6 3.8-3.5 4",
  key: "18gb23"
}], ["path", {
  d: "M22 13h-4",
  key: "1jl80f"
}], ["path", {
  d: "M17.2 17c2.1.1 3.8 1.9 3.8 4",
  key: "k3fwyw"
}]];
var Building2 = [["path", {
  d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
  key: "1b4qmf"
}], ["path", {
  d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
  key: "i71pzd"
}], ["path", {
  d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
  key: "10jefs"
}], ["path", {
  d: "M10 6h4",
  key: "1itunk"
}], ["path", {
  d: "M10 10h4",
  key: "tcdvrf"
}], ["path", {
  d: "M10 14h4",
  key: "kelpxr"
}], ["path", {
  d: "M10 18h4",
  key: "1ulq68"
}]];
var Building = [["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2",
  ry: "2",
  key: "76otgf"
}], ["path", {
  d: "M9 22v-4h6v4",
  key: "r93iot"
}], ["path", {
  d: "M8 6h.01",
  key: "1dz90k"
}], ["path", {
  d: "M16 6h.01",
  key: "1x0f13"
}], ["path", {
  d: "M12 6h.01",
  key: "1vi96p"
}], ["path", {
  d: "M12 10h.01",
  key: "1nrarc"
}], ["path", {
  d: "M12 14h.01",
  key: "1etili"
}], ["path", {
  d: "M16 10h.01",
  key: "1m94wz"
}], ["path", {
  d: "M16 14h.01",
  key: "1gbofw"
}], ["path", {
  d: "M8 10h.01",
  key: "19clt8"
}], ["path", {
  d: "M8 14h.01",
  key: "6423bh"
}]];
var BusFront = [["path", {
  d: "M4 6 2 7",
  key: "1mqr15"
}], ["path", {
  d: "M10 6h4",
  key: "1itunk"
}], ["path", {
  d: "m22 7-2-1",
  key: "1umjhc"
}], ["rect", {
  width: "16",
  height: "16",
  x: "4",
  y: "3",
  rx: "2",
  key: "1wxw4b"
}], ["path", {
  d: "M4 11h16",
  key: "mpoxn0"
}], ["path", {
  d: "M8 15h.01",
  key: "a7atzg"
}], ["path", {
  d: "M16 15h.01",
  key: "rnfrdf"
}], ["path", {
  d: "M6 19v2",
  key: "1loha6"
}], ["path", {
  d: "M18 21v-2",
  key: "sqyl04"
}]];
var Bus = [["path", {
  d: "M8 6v6",
  key: "18i7km"
}], ["path", {
  d: "M15 6v6",
  key: "1sg6z9"
}], ["path", {
  d: "M2 12h19.6",
  key: "de5uta"
}], ["path", {
  d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",
  key: "1wwztk"
}], ["circle", {
  cx: "7",
  cy: "18",
  r: "2",
  key: "19iecd"
}], ["path", {
  d: "M9 18h5",
  key: "lrx6i"
}], ["circle", {
  cx: "16",
  cy: "18",
  r: "2",
  key: "1v4tcr"
}]];
var CableCar = [["path", {
  d: "M10 3h.01",
  key: "lbucoy"
}], ["path", {
  d: "M14 2h.01",
  key: "1k8aa1"
}], ["path", {
  d: "m2 9 20-5",
  key: "1kz0j5"
}], ["path", {
  d: "M12 12V6.5",
  key: "1vbrij"
}], ["rect", {
  width: "16",
  height: "10",
  x: "4",
  y: "12",
  rx: "3",
  key: "if91er"
}], ["path", {
  d: "M9 12v5",
  key: "3anwtq"
}], ["path", {
  d: "M15 12v5",
  key: "5xh3zn"
}], ["path", {
  d: "M4 17h16",
  key: "g4d7ey"
}]];
var Cable = [["path", {
  d: "M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",
  key: "10bnsj"
}], ["path", {
  d: "M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",
  key: "1eqmu1"
}], ["path", {
  d: "M21 21v-2h-4",
  key: "14zm7j"
}], ["path", {
  d: "M3 5h4V3",
  key: "z442eg"
}], ["path", {
  d: "M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",
  key: "ebdjd7"
}]];
var CakeSlice = [["circle", {
  cx: "9",
  cy: "7",
  r: "2",
  key: "1305pl"
}], ["path", {
  d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",
  key: "xle13f"
}], ["path", {
  d: "M16 13H3",
  key: "1wpj08"
}], ["path", {
  d: "M16 17H3",
  key: "3lvfcd"
}]];
var Cake = [["path", {
  d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",
  key: "1w3rig"
}], ["path", {
  d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",
  key: "n2jgmb"
}], ["path", {
  d: "M2 21h20",
  key: "1nyx9w"
}], ["path", {
  d: "M7 8v3",
  key: "1qtyvj"
}], ["path", {
  d: "M12 8v3",
  key: "hwp4zt"
}], ["path", {
  d: "M17 8v3",
  key: "1i6e5u"
}], ["path", {
  d: "M7 4h.01",
  key: "1bh4kh"
}], ["path", {
  d: "M12 4h.01",
  key: "1ujb9j"
}], ["path", {
  d: "M17 4h.01",
  key: "1upcoc"
}]];
var Calculator = [["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2",
  key: "1nb95v"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "6",
  y2: "6",
  key: "x4nwl0"
}], ["line", {
  x1: "16",
  x2: "16",
  y1: "14",
  y2: "18",
  key: "wjye3r"
}], ["path", {
  d: "M16 10h.01",
  key: "1m94wz"
}], ["path", {
  d: "M12 10h.01",
  key: "1nrarc"
}], ["path", {
  d: "M8 10h.01",
  key: "19clt8"
}], ["path", {
  d: "M12 14h.01",
  key: "1etili"
}], ["path", {
  d: "M8 14h.01",
  key: "6423bh"
}], ["path", {
  d: "M12 18h.01",
  key: "mhygvu"
}], ["path", {
  d: "M8 18h.01",
  key: "lrp35t"
}]];
var Calendar1 = [["path", {
  d: "M11 14h1v4",
  key: "fy54vd"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2",
  key: "12vinp"
}]];
var CalendarArrowDown = [["path", {
  d: "m14 18 4 4 4-4",
  key: "1waygx"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "M18 14v8",
  key: "irew45"
}], ["path", {
  d: "M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343",
  key: "bse4f3"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "M8 2v4",
  key: "1cmpym"
}]];
var CalendarArrowUp = [["path", {
  d: "m14 18 4-4 4 4",
  key: "ftkppy"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "M18 22v-8",
  key: "su0gjh"
}], ["path", {
  d: "M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9",
  key: "1exg90"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "M8 2v4",
  key: "1cmpym"
}]];
var CalendarCheck2 = [["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
  key: "bce9hv"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "m16 20 2 2 4-4",
  key: "13tcca"
}]];
var CalendarCheck = [["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2",
  key: "1hopcy"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "m9 16 2 2 4-4",
  key: "19s6y9"
}]];
var CalendarClock = [["path", {
  d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",
  key: "1osxxc"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M3 10h5",
  key: "r794hk"
}], ["path", {
  d: "M17.5 17.5 16 16.3V14",
  key: "akvzfd"
}], ["circle", {
  cx: "16",
  cy: "16",
  r: "6",
  key: "qoo3c4"
}]];
var CalendarCog = [["path", {
  d: "m15.228 16.852-.923-.383",
  key: "npixar"
}], ["path", {
  d: "m15.228 19.148-.923.383",
  key: "51cr3n"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "m16.47 14.305.382.923",
  key: "obybxd"
}], ["path", {
  d: "m16.852 20.772-.383.924",
  key: "dpfhf9"
}], ["path", {
  d: "m19.148 15.228.383-.923",
  key: "1reyyz"
}], ["path", {
  d: "m19.53 21.696-.382-.924",
  key: "1goivc"
}], ["path", {
  d: "m20.772 16.852.924-.383",
  key: "htqkph"
}], ["path", {
  d: "m20.772 19.148.924.383",
  key: "9w9pjp"
}], ["path", {
  d: "M21 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
  key: "1dju0s"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3",
  key: "1xkwt0"
}]];
var CalendarDays = [["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2",
  key: "1hopcy"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "M8 14h.01",
  key: "6423bh"
}], ["path", {
  d: "M12 14h.01",
  key: "1etili"
}], ["path", {
  d: "M16 14h.01",
  key: "1gbofw"
}], ["path", {
  d: "M8 18h.01",
  key: "lrp35t"
}], ["path", {
  d: "M12 18h.01",
  key: "mhygvu"
}], ["path", {
  d: "M16 18h.01",
  key: "kzsmim"
}]];
var CalendarFold = [["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z",
  key: "kg77oy"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "M15 22v-4a2 2 0 0 1 2-2h4",
  key: "1gnbqr"
}]];
var CalendarHeart = [["path", {
  d: "M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",
  key: "136lmk"
}], ["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
  key: "1t7hil"
}]];
var CalendarMinus2 = [["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2",
  key: "1hopcy"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "M10 16h4",
  key: "17e571"
}]];
var CalendarMinus = [["path", {
  d: "M16 19h6",
  key: "xwg31i"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5",
  key: "1scpom"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "M8 2v4",
  key: "1cmpym"
}]];
var CalendarOff = [["path", {
  d: "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",
  key: "16swn3"
}], ["path", {
  d: "M21 15.5V6a2 2 0 0 0-2-2H9.5",
  key: "yhw86o"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "M3 10h7",
  key: "1wap6i"
}], ["path", {
  d: "M21 10h-5.5",
  key: "quycpq"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]];
var CalendarPlus2 = [["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2",
  key: "1hopcy"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "M10 16h4",
  key: "17e571"
}], ["path", {
  d: "M12 14v4",
  key: "1thi36"
}]];
var CalendarPlus = [["path", {
  d: "M16 19h6",
  key: "xwg31i"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "M19 16v6",
  key: "tddt3s"
}], ["path", {
  d: "M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5",
  key: "1glfrc"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "M8 2v4",
  key: "1cmpym"
}]];
var CalendarRange = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2",
  key: "1hopcy"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M17 14h-6",
  key: "bkmgh3"
}], ["path", {
  d: "M13 18H7",
  key: "bb0bb7"
}], ["path", {
  d: "M7 14h.01",
  key: "1qa3f1"
}], ["path", {
  d: "M17 18h.01",
  key: "1bdyru"
}]];
var CalendarSearch = [["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25",
  key: "1jrsq6"
}], ["path", {
  d: "m22 22-1.875-1.875",
  key: "13zax7"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3",
  key: "1xkwt0"
}]];
var CalendarSync = [["path", {
  d: "M11 10v4h4",
  key: "172dkj"
}], ["path", {
  d: "m11 14 1.535-1.605a5 5 0 0 1 8 1.5",
  key: "vu0qm5"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "m21 18-1.535 1.605a5 5 0 0 1-8-1.5",
  key: "1qgeyt"
}], ["path", {
  d: "M21 22v-4h-4",
  key: "hrummi"
}], ["path", {
  d: "M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3",
  key: "mctw84"
}], ["path", {
  d: "M3 10h4",
  key: "1el30a"
}], ["path", {
  d: "M8 2v4",
  key: "1cmpym"
}]];
var CalendarX2 = [["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
  key: "3spt84"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "m17 22 5-5",
  key: "1k6ppv"
}], ["path", {
  d: "m17 17 5 5",
  key: "p7ous7"
}]];
var CalendarX = [["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2",
  key: "1hopcy"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}], ["path", {
  d: "m14 14-4 4",
  key: "rymu2i"
}], ["path", {
  d: "m10 14 4 4",
  key: "3sz06r"
}]];
var Calendar = [["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2",
  key: "1hopcy"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}]];
var Camera = [["path", {
  d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
  key: "1tc9qg"
}], ["circle", {
  cx: "12",
  cy: "13",
  r: "3",
  key: "1vg3eu"
}]];
var CameraOff = [["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}], ["path", {
  d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",
  key: "qmtpty"
}], ["path", {
  d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",
  key: "1ufyfc"
}], ["path", {
  d: "M14.121 15.121A3 3 0 1 1 9.88 10.88",
  key: "11zox6"
}]];
var CandyOff = [["path", {
  d: "M10 10v7.9",
  key: "m8g9tt"
}], ["path", {
  d: "M11.802 6.145a5 5 0 0 1 6.053 6.053",
  key: "dn87i3"
}], ["path", {
  d: "M14 6.1v2.243",
  key: "1kzysn"
}], ["path", {
  d: "m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965",
  key: "3sxy18"
}], ["path", {
  d: "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4",
  key: "gpb6xx"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4",
  key: "qexcha"
}]];
var CandyCane = [["path", {
  d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",
  key: "isaq8g"
}], ["path", {
  d: "M17.75 7 15 2.1",
  key: "12x7e8"
}], ["path", {
  d: "M10.9 4.8 13 9",
  key: "100a87"
}], ["path", {
  d: "m7.9 9.7 2 4.4",
  key: "ntfhaj"
}], ["path", {
  d: "M4.9 14.7 7 18.9",
  key: "1x43jy"
}]];
var Candy = [["path", {
  d: "M10 7v10.9",
  key: "1gynux"
}], ["path", {
  d: "M14 6.1V17",
  key: "116kdf"
}], ["path", {
  d: "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4",
  key: "gpb6xx"
}], ["path", {
  d: "M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07",
  key: "1tsln4"
}], ["path", {
  d: "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4",
  key: "qexcha"
}]];
var Cannabis = [["path", {
  d: "M12 22v-4",
  key: "1utk9m"
}], ["path", {
  d: "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6",
  key: "1mezod"
}]];
var CaptionsOff = [["path", {
  d: "M10.5 5H19a2 2 0 0 1 2 2v8.5",
  key: "jqtk4d"
}], ["path", {
  d: "M17 11h-.5",
  key: "1961ue"
}], ["path", {
  d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",
  key: "1keqsi"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M7 11h4",
  key: "1o1z6v"
}], ["path", {
  d: "M7 15h2.5",
  key: "1ina1g"
}]];
var Captions = [["rect", {
  width: "18",
  height: "14",
  x: "3",
  y: "5",
  rx: "2",
  ry: "2",
  key: "12ruh7"
}], ["path", {
  d: "M7 15h4M15 15h2M7 11h2M13 11h4",
  key: "1ueiar"
}]];
var CarFront = [["path", {
  d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",
  key: "1imjwt"
}], ["path", {
  d: "M7 14h.01",
  key: "1qa3f1"
}], ["path", {
  d: "M17 14h.01",
  key: "7oqj8z"
}], ["rect", {
  width: "18",
  height: "8",
  x: "3",
  y: "10",
  rx: "2",
  key: "a7itu8"
}], ["path", {
  d: "M5 18v2",
  key: "ppbyun"
}], ["path", {
  d: "M19 18v2",
  key: "gy7782"
}]];
var CarTaxiFront = [["path", {
  d: "M10 2h4",
  key: "n1abiw"
}], ["path", {
  d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",
  key: "1imjwt"
}], ["path", {
  d: "M7 14h.01",
  key: "1qa3f1"
}], ["path", {
  d: "M17 14h.01",
  key: "7oqj8z"
}], ["rect", {
  width: "18",
  height: "8",
  x: "3",
  y: "10",
  rx: "2",
  key: "a7itu8"
}], ["path", {
  d: "M5 18v2",
  key: "ppbyun"
}], ["path", {
  d: "M19 18v2",
  key: "gy7782"
}]];
var Car = [["path", {
  d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
  key: "5owen"
}], ["circle", {
  cx: "7",
  cy: "17",
  r: "2",
  key: "u2ysq9"
}], ["path", {
  d: "M9 17h6",
  key: "r8uit2"
}], ["circle", {
  cx: "17",
  cy: "17",
  r: "2",
  key: "axvx0g"
}]];
var Caravan = [["path", {
  d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",
  key: "19jm3t"
}], ["path", {
  d: "M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2",
  key: "13hakp"
}], ["path", {
  d: "M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9",
  key: "1crci8"
}], ["circle", {
  cx: "8",
  cy: "19",
  r: "2",
  key: "t8fc5s"
}]];
var CardSim = [["path", {
  d: "M12 14v4",
  key: "1thi36"
}], ["path", {
  d: "M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
  key: "1o66bk"
}], ["path", {
  d: "M8 14h8",
  key: "1fgep2"
}], ["rect", {
  x: "8",
  y: "10",
  width: "8",
  height: "8",
  rx: "1",
  key: "1aonk6"
}]];
var Carrot = [["path", {
  d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",
  key: "rfqxbe"
}], ["path", {
  d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",
  key: "6b25w4"
}], ["path", {
  d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",
  key: "fn65lo"
}]];
var CaseLower = [["circle", {
  cx: "7",
  cy: "12",
  r: "3",
  key: "12clwm"
}], ["path", {
  d: "M10 9v6",
  key: "17i7lo"
}], ["circle", {
  cx: "17",
  cy: "12",
  r: "3",
  key: "gl7c2s"
}], ["path", {
  d: "M14 7v8",
  key: "dl84cr"
}]];
var CaseSensitive = [["path", {
  d: "m3 15 4-8 4 8",
  key: "1vwr6u"
}], ["path", {
  d: "M4 13h6",
  key: "1r9ots"
}], ["circle", {
  cx: "18",
  cy: "12",
  r: "3",
  key: "1kchzo"
}], ["path", {
  d: "M21 9v6",
  key: "anns31"
}]];
var CaseUpper = [["path", {
  d: "m3 15 4-8 4 8",
  key: "1vwr6u"
}], ["path", {
  d: "M4 13h6",
  key: "1r9ots"
}], ["path", {
  d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",
  key: "1sqfas"
}]];
var CassetteTape = [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2",
  key: "18n3k1"
}], ["circle", {
  cx: "8",
  cy: "10",
  r: "2",
  key: "1xl4ub"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}], ["circle", {
  cx: "16",
  cy: "10",
  r: "2",
  key: "r14t7q"
}], ["path", {
  d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",
  key: "l01ucn"
}]];
var Cast = [["path", {
  d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",
  key: "3zrzxg"
}], ["path", {
  d: "M2 12a9 9 0 0 1 8 8",
  key: "g6cvee"
}], ["path", {
  d: "M2 16a5 5 0 0 1 4 4",
  key: "1y1dii"
}], ["line", {
  x1: "2",
  x2: "2.01",
  y1: "20",
  y2: "20",
  key: "xu2jvo"
}]];
var Castle = [["path", {
  d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",
  key: "109fe4"
}], ["path", {
  d: "M18 11V4H6v7",
  key: "mon5oj"
}], ["path", {
  d: "M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4",
  key: "1k4jtn"
}], ["path", {
  d: "M22 11V9",
  key: "3zbp94"
}], ["path", {
  d: "M2 11V9",
  key: "1x5rnq"
}], ["path", {
  d: "M6 4V2",
  key: "1rsq15"
}], ["path", {
  d: "M18 4V2",
  key: "1jsdo1"
}], ["path", {
  d: "M10 4V2",
  key: "75d9ly"
}], ["path", {
  d: "M14 4V2",
  key: "8nj3z6"
}]];
var Cat = [["path", {
  d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",
  key: "x6xyqk"
}], ["path", {
  d: "M8 14v.5",
  key: "1nzgdb"
}], ["path", {
  d: "M16 14v.5",
  key: "1lajdz"
}], ["path", {
  d: "M11.25 16.25h1.5L12 17l-.75-.75Z",
  key: "12kq1m"
}]];
var Cctv = [["path", {
  d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97",
  key: "ir91b5"
}], ["path", {
  d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z",
  key: "jlp8i1"
}], ["path", {
  d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",
  key: "19bib8"
}], ["path", {
  d: "M2 21v-4",
  key: "l40lih"
}], ["path", {
  d: "M7 9h.01",
  key: "19b3jx"
}]];
var ChartArea = [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["path", {
  d: "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z",
  key: "q0gr47"
}]];
var ChartBarBig = [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["rect", {
  x: "7",
  y: "13",
  width: "9",
  height: "4",
  rx: "1",
  key: "1iip1u"
}], ["rect", {
  x: "7",
  y: "5",
  width: "12",
  height: "4",
  rx: "1",
  key: "1anskk"
}]];
var ChartBarDecreasing = [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["path", {
  d: "M7 11h8",
  key: "1feolt"
}], ["path", {
  d: "M7 16h3",
  key: "ur6vzw"
}], ["path", {
  d: "M7 6h12",
  key: "sz5b0d"
}]];
var ChartBarIncreasing = [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["path", {
  d: "M7 11h8",
  key: "1feolt"
}], ["path", {
  d: "M7 16h12",
  key: "wsnu98"
}], ["path", {
  d: "M7 6h3",
  key: "w9rmul"
}]];
var ChartBarStacked = [["path", {
  d: "M11 13v4",
  key: "vyy2rb"
}], ["path", {
  d: "M15 5v4",
  key: "1gx88a"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["rect", {
  x: "7",
  y: "13",
  width: "9",
  height: "4",
  rx: "1",
  key: "1iip1u"
}], ["rect", {
  x: "7",
  y: "5",
  width: "12",
  height: "4",
  rx: "1",
  key: "1anskk"
}]];
var ChartBar = [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["path", {
  d: "M7 16h8",
  key: "srdodz"
}], ["path", {
  d: "M7 11h12",
  key: "127s9w"
}], ["path", {
  d: "M7 6h3",
  key: "w9rmul"
}]];
var ChartColumnBig = [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["rect", {
  x: "15",
  y: "5",
  width: "4",
  height: "12",
  rx: "1",
  key: "q8uenq"
}], ["rect", {
  x: "7",
  y: "8",
  width: "4",
  height: "9",
  rx: "1",
  key: "sr5ea"
}]];
var ChartCandlestick = [["path", {
  d: "M9 5v4",
  key: "14uxtq"
}], ["rect", {
  width: "4",
  height: "6",
  x: "7",
  y: "9",
  rx: "1",
  key: "f4fvz0"
}], ["path", {
  d: "M9 15v2",
  key: "r5rk32"
}], ["path", {
  d: "M17 3v2",
  key: "1l2re6"
}], ["rect", {
  width: "4",
  height: "8",
  x: "15",
  y: "5",
  rx: "1",
  key: "z38je5"
}], ["path", {
  d: "M17 13v3",
  key: "5l0wba"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}]];
var ChartColumnDecreasing = [["path", {
  d: "M13 17V9",
  key: "1fwyjl"
}], ["path", {
  d: "M18 17v-3",
  key: "1sqioe"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["path", {
  d: "M8 17V5",
  key: "1wzmnc"
}]];
var ChartColumnIncreasing = [["path", {
  d: "M13 17V9",
  key: "1fwyjl"
}], ["path", {
  d: "M18 17V5",
  key: "sfb6ij"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["path", {
  d: "M8 17v-3",
  key: "17ska0"
}]];
var ChartColumn = [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["path", {
  d: "M18 17V9",
  key: "2bz60n"
}], ["path", {
  d: "M13 17V5",
  key: "1frdt8"
}], ["path", {
  d: "M8 17v-3",
  key: "17ska0"
}]];
var ChartColumnStacked = [["path", {
  d: "M11 13H7",
  key: "t0o9gq"
}], ["path", {
  d: "M19 9h-4",
  key: "rera1j"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["rect", {
  x: "15",
  y: "5",
  width: "4",
  height: "12",
  rx: "1",
  key: "q8uenq"
}], ["rect", {
  x: "7",
  y: "8",
  width: "4",
  height: "9",
  rx: "1",
  key: "sr5ea"
}]];
var ChartGantt = [["path", {
  d: "M10 6h8",
  key: "zvc2xc"
}], ["path", {
  d: "M12 16h6",
  key: "yi5mkt"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["path", {
  d: "M8 11h7",
  key: "wz2hg0"
}]];
var ChartLine = [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["path", {
  d: "m19 9-5 5-4-4-3 3",
  key: "2osh9i"
}]];
var ChartNetwork = [["path", {
  d: "m13.11 7.664 1.78 2.672",
  key: "go2gg9"
}], ["path", {
  d: "m14.162 12.788-3.324 1.424",
  key: "11x848"
}], ["path", {
  d: "m20 4-6.06 1.515",
  key: "1wxxh7"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["circle", {
  cx: "12",
  cy: "6",
  r: "2",
  key: "1jj5th"
}], ["circle", {
  cx: "16",
  cy: "12",
  r: "2",
  key: "4ma0v8"
}], ["circle", {
  cx: "9",
  cy: "15",
  r: "2",
  key: "lf2ghp"
}]];
var ChartNoAxesColumnDecreasing = [["path", {
  d: "M12 20V10",
  key: "g8npz5"
}], ["path", {
  d: "M18 20v-4",
  key: "8uic4z"
}], ["path", {
  d: "M6 20V4",
  key: "1w1bmo"
}]];
var ChartNoAxesColumnIncreasing = [["line", {
  x1: "12",
  x2: "12",
  y1: "20",
  y2: "10",
  key: "1vz5eb"
}], ["line", {
  x1: "18",
  x2: "18",
  y1: "20",
  y2: "4",
  key: "cun8e5"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "20",
  y2: "16",
  key: "hq0ia6"
}]];
var ChartNoAxesColumn = [["line", {
  x1: "18",
  x2: "18",
  y1: "20",
  y2: "10",
  key: "1xfpm4"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "20",
  y2: "4",
  key: "be30l9"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "20",
  y2: "14",
  key: "1r4le6"
}]];
var ChartNoAxesCombined = [["path", {
  d: "M12 16v5",
  key: "zza2cw"
}], ["path", {
  d: "M16 14v7",
  key: "1g90b9"
}], ["path", {
  d: "M20 10v11",
  key: "1iqoj0"
}], ["path", {
  d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",
  key: "1fw8x9"
}], ["path", {
  d: "M4 18v3",
  key: "1yp0dc"
}], ["path", {
  d: "M8 14v7",
  key: "n3cwzv"
}]];
var ChartNoAxesGantt = [["path", {
  d: "M8 6h10",
  key: "9lnwnk"
}], ["path", {
  d: "M6 12h9",
  key: "1g9pqf"
}], ["path", {
  d: "M11 18h7",
  key: "c8dzvl"
}]];
var ChartPie = [["path", {
  d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
  key: "pzmjnu"
}], ["path", {
  d: "M21.21 15.89A10 10 0 1 1 8 2.83",
  key: "k2fpak"
}]];
var ChartScatter = [["circle", {
  cx: "7.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor",
  key: "kqv944"
}], ["circle", {
  cx: "18.5",
  cy: "5.5",
  r: ".5",
  fill: "currentColor",
  key: "lysivs"
}], ["circle", {
  cx: "11.5",
  cy: "11.5",
  r: ".5",
  fill: "currentColor",
  key: "byv1b8"
}], ["circle", {
  cx: "7.5",
  cy: "16.5",
  r: ".5",
  fill: "currentColor",
  key: "nkw3mc"
}], ["circle", {
  cx: "17.5",
  cy: "14.5",
  r: ".5",
  fill: "currentColor",
  key: "1gjh6j"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}]];
var ChartSpline = [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16",
  key: "c24i48"
}], ["path", {
  d: "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7",
  key: "lw07rv"
}]];
var CheckCheck = [["path", {
  d: "M18 6 7 17l-5-5",
  key: "116fxf"
}], ["path", {
  d: "m22 10-7.5 7.5L13 16",
  key: "ke71qq"
}]];
var CheckLine = [["path", {
  d: "M20 4L9 15",
  key: "1qkx8z"
}], ["path", {
  d: "M21 19L3 19",
  key: "100sma"
}], ["path", {
  d: "M9 15L4 10",
  key: "9zxff7"
}]];
var Check = [["path", {
  d: "M20 6 9 17l-5-5",
  key: "1gmf2c"
}]];
var ChefHat = [["path", {
  d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",
  key: "1qvrer"
}], ["path", {
  d: "M6 17h12",
  key: "1jwigz"
}]];
var Cherry = [["path", {
  d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",
  key: "cvxqlc"
}], ["path", {
  d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",
  key: "1ostrc"
}], ["path", {
  d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",
  key: "hqx58h"
}], ["path", {
  d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",
  key: "eykp1o"
}]];
var ChevronDown = [["path", {
  d: "m6 9 6 6 6-6",
  key: "qrunsl"
}]];
var ChevronFirst = [["path", {
  d: "m17 18-6-6 6-6",
  key: "1yerx2"
}], ["path", {
  d: "M7 6v12",
  key: "1p53r6"
}]];
var ChevronLast = [["path", {
  d: "m7 18 6-6-6-6",
  key: "lwmzdw"
}], ["path", {
  d: "M17 6v12",
  key: "1o0aio"
}]];
var ChevronLeft = [["path", {
  d: "m15 18-6-6 6-6",
  key: "1wnfg3"
}]];
var ChevronRight = [["path", {
  d: "m9 18 6-6-6-6",
  key: "mthhwq"
}]];
var ChevronUp = [["path", {
  d: "m18 15-6-6-6 6",
  key: "153udz"
}]];
var ChevronsDownUp = [["path", {
  d: "m7 20 5-5 5 5",
  key: "13a0gw"
}], ["path", {
  d: "m7 4 5 5 5-5",
  key: "1kwcof"
}]];
var ChevronsDown = [["path", {
  d: "m7 6 5 5 5-5",
  key: "1lc07p"
}], ["path", {
  d: "m7 13 5 5 5-5",
  key: "1d48rs"
}]];
var ChevronsLeftRightEllipsis = [["path", {
  d: "M12 12h.01",
  key: "1mp3jc"
}], ["path", {
  d: "M16 12h.01",
  key: "1l6xoz"
}], ["path", {
  d: "m17 7 5 5-5 5",
  key: "1xlxn0"
}], ["path", {
  d: "m7 7-5 5 5 5",
  key: "19njba"
}], ["path", {
  d: "M8 12h.01",
  key: "czm47f"
}]];
var ChevronsLeftRight = [["path", {
  d: "m9 7-5 5 5 5",
  key: "j5w590"
}], ["path", {
  d: "m15 7 5 5-5 5",
  key: "1bl6da"
}]];
var ChevronsLeft = [["path", {
  d: "m11 17-5-5 5-5",
  key: "13zhaf"
}], ["path", {
  d: "m18 17-5-5 5-5",
  key: "h8a8et"
}]];
var ChevronsRightLeft = [["path", {
  d: "m20 17-5-5 5-5",
  key: "30x0n2"
}], ["path", {
  d: "m4 17 5-5-5-5",
  key: "16spf4"
}]];
var ChevronsRight = [["path", {
  d: "m6 17 5-5-5-5",
  key: "xnjwq"
}], ["path", {
  d: "m13 17 5-5-5-5",
  key: "17xmmf"
}]];
var ChevronsUpDown = [["path", {
  d: "m7 15 5 5 5-5",
  key: "1hf1tw"
}], ["path", {
  d: "m7 9 5-5 5 5",
  key: "sgt6xg"
}]];
var ChevronsUp = [["path", {
  d: "m17 11-5-5-5 5",
  key: "e8nh98"
}], ["path", {
  d: "m17 18-5-5-5 5",
  key: "2avn1x"
}]];
var Chrome = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "4",
  key: "4exip2"
}], ["line", {
  x1: "21.17",
  x2: "12",
  y1: "8",
  y2: "8",
  key: "a0cw5f"
}], ["line", {
  x1: "3.95",
  x2: "8.54",
  y1: "6.06",
  y2: "14",
  key: "1kftof"
}], ["line", {
  x1: "10.88",
  x2: "15.46",
  y1: "21.94",
  y2: "14",
  key: "1ymyh8"
}]];
var Church = [["path", {
  d: "M10 9h4",
  key: "u4k05v"
}], ["path", {
  d: "M12 7v5",
  key: "ma6bk"
}], ["path", {
  d: "M14 22v-4a2 2 0 0 0-4 0v4",
  key: "1pdhuj"
}], ["path", {
  d: "M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22",
  key: "1rkokr"
}], ["path", {
  d: "m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7",
  key: "1w6esw"
}]];
var CigaretteOff = [["path", {
  d: "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13",
  key: "1gdiyg"
}], ["path", {
  d: "M18 8c0-2.5-2-2.5-2-5",
  key: "1il607"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866",
  key: "166zjj"
}], ["path", {
  d: "M22 8c0-2.5-2-2.5-2-5",
  key: "1gah44"
}], ["path", {
  d: "M7 12v4",
  key: "jqww69"
}]];
var Cigarette = [["path", {
  d: "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14",
  key: "1mb5g1"
}], ["path", {
  d: "M18 8c0-2.5-2-2.5-2-5",
  key: "1il607"
}], ["path", {
  d: "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
  key: "1yl5r7"
}], ["path", {
  d: "M22 8c0-2.5-2-2.5-2-5",
  key: "1gah44"
}], ["path", {
  d: "M7 12v4",
  key: "jqww69"
}]];
var CircleArrowDown = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M12 8v8",
  key: "napkw2"
}], ["path", {
  d: "m8 12 4 4 4-4",
  key: "k98ssh"
}]];
var CircleAlert = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "12",
  key: "1pkeuh"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "16",
  y2: "16",
  key: "4dfq90"
}]];
var CircleArrowLeft = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m12 8-4 4 4 4",
  key: "15vm53"
}], ["path", {
  d: "M16 12H8",
  key: "1fr5h0"
}]];
var CircleArrowOutDownLeft = [["path", {
  d: "M2 12a10 10 0 1 1 10 10",
  key: "1yn6ov"
}], ["path", {
  d: "m2 22 10-10",
  key: "28ilpk"
}], ["path", {
  d: "M8 22H2v-6",
  key: "sulq54"
}]];
var CircleArrowOutDownRight = [["path", {
  d: "M12 22a10 10 0 1 1 10-10",
  key: "130bv5"
}], ["path", {
  d: "M22 22 12 12",
  key: "131aw7"
}], ["path", {
  d: "M22 16v6h-6",
  key: "1gvm70"
}]];
var CircleArrowOutUpLeft = [["path", {
  d: "M2 8V2h6",
  key: "hiwtdz"
}], ["path", {
  d: "m2 2 10 10",
  key: "1oh8rs"
}], ["path", {
  d: "M12 2A10 10 0 1 1 2 12",
  key: "rrk4fa"
}]];
var CircleArrowOutUpRight = [["path", {
  d: "M22 12A10 10 0 1 1 12 2",
  key: "1fm58d"
}], ["path", {
  d: "M22 2 12 12",
  key: "yg2myt"
}], ["path", {
  d: "M16 2h6v6",
  key: "zan5cs"
}]];
var CircleArrowRight = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m12 16 4-4-4-4",
  key: "1i9zcv"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}]];
var CircleArrowUp = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m16 12-4-4-4 4",
  key: "177agl"
}], ["path", {
  d: "M12 16V8",
  key: "1sbj14"
}]];
var CircleCheckBig = [["path", {
  d: "M21.801 10A10 10 0 1 1 17 3.335",
  key: "yps3ct"
}], ["path", {
  d: "m9 11 3 3L22 4",
  key: "1pflzl"
}]];
var CircleCheck = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m9 12 2 2 4-4",
  key: "dzmm74"
}]];
var CircleChevronDown = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m16 10-4 4-4-4",
  key: "894hmk"
}]];
var CircleChevronLeft = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m14 16-4-4 4-4",
  key: "ojs7w8"
}]];
var CircleChevronRight = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m10 8 4 4-4 4",
  key: "1wy4r4"
}]];
var CircleChevronUp = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m8 14 4-4 4 4",
  key: "fy2ptz"
}]];
var CircleDashed = [["path", {
  d: "M10.1 2.182a10 10 0 0 1 3.8 0",
  key: "5ilxe3"
}], ["path", {
  d: "M13.9 21.818a10 10 0 0 1-3.8 0",
  key: "11zvb9"
}], ["path", {
  d: "M17.609 3.721a10 10 0 0 1 2.69 2.7",
  key: "1iw5b2"
}], ["path", {
  d: "M2.182 13.9a10 10 0 0 1 0-3.8",
  key: "c0bmvh"
}], ["path", {
  d: "M20.279 17.609a10 10 0 0 1-2.7 2.69",
  key: "1ruxm7"
}], ["path", {
  d: "M21.818 10.1a10 10 0 0 1 0 3.8",
  key: "qkgqxc"
}], ["path", {
  d: "M3.721 6.391a10 10 0 0 1 2.7-2.69",
  key: "1mcia2"
}], ["path", {
  d: "M6.391 20.279a10 10 0 0 1-2.69-2.7",
  key: "1fvljs"
}]];
var CircleDivide = [["line", {
  x1: "8",
  x2: "16",
  y1: "12",
  y2: "12",
  key: "1jonct"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "16",
  y2: "16",
  key: "aqc6ln"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "8",
  key: "1mkcni"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]];
var CircleDollarSign = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
  key: "1h4pet"
}], ["path", {
  d: "M12 18V6",
  key: "zqpxq5"
}]];
var CircleDotDashed = [["path", {
  d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0",
  key: "1qdqn0"
}], ["path", {
  d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",
  key: "1bq7p6"
}], ["path", {
  d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8",
  key: "1rlaqf"
}], ["path", {
  d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",
  key: "1xk03u"
}], ["path", {
  d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0",
  key: "l7re25"
}], ["path", {
  d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",
  key: "1v18p6"
}], ["path", {
  d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8",
  key: "xdo6bj"
}], ["path", {
  d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",
  key: "1jjmaz"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "1",
  key: "41hilf"
}]];
var CircleDot = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "1",
  key: "41hilf"
}]];
var CircleEllipsis = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M17 12h.01",
  key: "1m0b6t"
}], ["path", {
  d: "M12 12h.01",
  key: "1mp3jc"
}], ["path", {
  d: "M7 12h.01",
  key: "eqddd0"
}]];
var CircleEqual = [["path", {
  d: "M7 10h10",
  key: "1101jm"
}], ["path", {
  d: "M7 14h10",
  key: "1mhdw3"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]];
var CircleFadingArrowUp = [["path", {
  d: "M12 2a10 10 0 0 1 7.38 16.75",
  key: "175t95"
}], ["path", {
  d: "m16 12-4-4-4 4",
  key: "177agl"
}], ["path", {
  d: "M12 16V8",
  key: "1sbj14"
}], ["path", {
  d: "M2.5 8.875a10 10 0 0 0-.5 3",
  key: "1vce0s"
}], ["path", {
  d: "M2.83 16a10 10 0 0 0 2.43 3.4",
  key: "o3fkw4"
}], ["path", {
  d: "M4.636 5.235a10 10 0 0 1 .891-.857",
  key: "1szpfk"
}], ["path", {
  d: "M8.644 21.42a10 10 0 0 0 7.631-.38",
  key: "9yhvd4"
}]];
var CircleFadingPlus = [["path", {
  d: "M12 2a10 10 0 0 1 7.38 16.75",
  key: "175t95"
}], ["path", {
  d: "M12 8v8",
  key: "napkw2"
}], ["path", {
  d: "M16 12H8",
  key: "1fr5h0"
}], ["path", {
  d: "M2.5 8.875a10 10 0 0 0-.5 3",
  key: "1vce0s"
}], ["path", {
  d: "M2.83 16a10 10 0 0 0 2.43 3.4",
  key: "o3fkw4"
}], ["path", {
  d: "M4.636 5.235a10 10 0 0 1 .891-.857",
  key: "1szpfk"
}], ["path", {
  d: "M8.644 21.42a10 10 0 0 0 7.631-.38",
  key: "9yhvd4"
}]];
var CircleGauge = [["path", {
  d: "M15.6 2.7a10 10 0 1 0 5.7 5.7",
  key: "1e0p6d"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}], ["path", {
  d: "M13.4 10.6 19 5",
  key: "1kr7tw"
}]];
var CircleMinus = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}]];
var CircleOff = [["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M8.35 2.69A10 10 0 0 1 21.3 15.65",
  key: "1pfsoa"
}], ["path", {
  d: "M19.08 19.08A10 10 0 1 1 4.92 4.92",
  key: "1ablyi"
}]];
var CircleParkingOff = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m5 5 14 14",
  key: "11anup"
}], ["path", {
  d: "M13 13a3 3 0 1 0 0-6H9v2",
  key: "uoagbd"
}], ["path", {
  d: "M9 17v-2.34",
  key: "a9qo08"
}]];
var CircleParking = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M9 17V7h4a3 3 0 0 1 0 6H9",
  key: "1dfk2c"
}]];
var CirclePause = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["line", {
  x1: "10",
  x2: "10",
  y1: "15",
  y2: "9",
  key: "c1nkhi"
}], ["line", {
  x1: "14",
  x2: "14",
  y1: "15",
  y2: "9",
  key: "h65svq"
}]];
var CirclePercent = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m15 9-6 6",
  key: "1uzhvr"
}], ["path", {
  d: "M9 9h.01",
  key: "1q5me6"
}], ["path", {
  d: "M15 15h.01",
  key: "lqbp3k"
}]];
var CirclePlay = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polygon", {
  points: "10 8 16 12 10 16 10 8",
  key: "1cimsy"
}]];
var CirclePlus = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}], ["path", {
  d: "M12 8v8",
  key: "napkw2"
}]];
var CirclePoundSterling = [["path", {
  d: "M10 16V9.5a1 1 0 0 1 5 0",
  key: "1i1are"
}], ["path", {
  d: "M8 12h4",
  key: "qz6y1c"
}], ["path", {
  d: "M8 16h7",
  key: "sbedsn"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]];
var CirclePower = [["path", {
  d: "M12 7v4",
  key: "xawao1"
}], ["path", {
  d: "M7.998 9.003a5 5 0 1 0 8-.005",
  key: "1pek45"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]];
var CircleQuestionMark = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
  key: "1u773s"
}], ["path", {
  d: "M12 17h.01",
  key: "p32p05"
}]];
var CircleSlash2 = [["path", {
  d: "M22 2 2 22",
  key: "y4kqgn"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]];
var CircleSlash = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["line", {
  x1: "9",
  x2: "15",
  y1: "15",
  y2: "9",
  key: "1dfufj"
}]];
var CircleSmall = [["circle", {
  cx: "12",
  cy: "12",
  r: "6",
  key: "1vlfrh"
}]];
var CircleStop = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["rect", {
  x: "9",
  y: "9",
  width: "6",
  height: "6",
  rx: "1",
  key: "1ssd4o"
}]];
var CircleUserRound = [["path", {
  d: "M18 20a6 6 0 0 0-12 0",
  key: "1qehca"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "4",
  key: "1h16sb"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]];
var CircleUser = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3",
  key: "ilqhr7"
}], ["path", {
  d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
  key: "154egf"
}]];
var CircleX = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m15 9-6 6",
  key: "1uzhvr"
}], ["path", {
  d: "m9 9 6 6",
  key: "z0biqf"
}]];
var Circle = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]];
var CircuitBoard = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M11 9h4a2 2 0 0 0 2-2V3",
  key: "1ve2rv"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2",
  key: "af1f0g"
}], ["path", {
  d: "M7 21v-4a2 2 0 0 1 2-2h4",
  key: "1fwkro"
}], ["circle", {
  cx: "15",
  cy: "15",
  r: "2",
  key: "3i40o0"
}]];
var Citrus = [["path", {
  d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",
  key: "4ite01"
}], ["path", {
  d: "M19.65 15.66A8 8 0 0 1 8.35 4.34",
  key: "1gxipu"
}], ["path", {
  d: "m14 10-5.5 5.5",
  key: "92pfem"
}], ["path", {
  d: "M14 17.85V10H6.15",
  key: "xqmtsk"
}]];
var Clapperboard = [["path", {
  d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",
  key: "1tn4o7"
}], ["path", {
  d: "m6.2 5.3 3.1 3.9",
  key: "iuk76l"
}], ["path", {
  d: "m12.4 3.4 3.1 4",
  key: "6hsd6n"
}], ["path", {
  d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",
  key: "ltgou9"
}]];
var ClipboardCheck = [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1",
  key: "tgr4d6"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
  key: "116196"
}], ["path", {
  d: "m9 14 2 2 4-4",
  key: "df797q"
}]];
var ClipboardCopy = [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1",
  key: "tgr4d6"
}], ["path", {
  d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",
  key: "4jdomd"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v4",
  key: "3hqy98"
}], ["path", {
  d: "M21 14H11",
  key: "1bme5i"
}], ["path", {
  d: "m15 10-4 4 4 4",
  key: "5dvupr"
}]];
var ClipboardList = [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1",
  key: "tgr4d6"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
  key: "116196"
}], ["path", {
  d: "M12 11h4",
  key: "1jrz19"
}], ["path", {
  d: "M12 16h4",
  key: "n85exb"
}], ["path", {
  d: "M8 11h.01",
  key: "1dfujw"
}], ["path", {
  d: "M8 16h.01",
  key: "18s6g9"
}]];
var ClipboardMinus = [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1",
  key: "tgr4d6"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
  key: "116196"
}], ["path", {
  d: "M9 14h6",
  key: "159ibu"
}]];
var ClipboardPaste = [["path", {
  d: "M11 14h10",
  key: "1w8e9d"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v1.344",
  key: "1e62lh"
}], ["path", {
  d: "m17 18 4-4-4-4",
  key: "z2g111"
}], ["path", {
  d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",
  key: "bjbb7m"
}], ["rect", {
  x: "8",
  y: "2",
  width: "8",
  height: "4",
  rx: "1",
  key: "ublpy"
}]];
var ClipboardPenLine = [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  key: "1oijnt"
}], ["path", {
  d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",
  key: "1but9f"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 1.73 1",
  key: "1p8n7l"
}], ["path", {
  d: "M8 18h1",
  key: "13wk12"
}], ["path", {
  d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
  key: "2t3380"
}]];
var ClipboardPen = [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  key: "1oijnt"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",
  key: "cereej"
}], ["path", {
  d: "M4 13.5V6a2 2 0 0 1 2-2h2",
  key: "5ua5vh"
}], ["path", {
  d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
  key: "1y4qbx"
}]];
var ClipboardPlus = [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1",
  key: "tgr4d6"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
  key: "116196"
}], ["path", {
  d: "M9 14h6",
  key: "159ibu"
}], ["path", {
  d: "M12 17v-6",
  key: "1y8rbf"
}]];
var ClipboardType = [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1",
  key: "tgr4d6"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
  key: "116196"
}], ["path", {
  d: "M9 12v-1h6v1",
  key: "iehl6m"
}], ["path", {
  d: "M11 17h2",
  key: "12w5me"
}], ["path", {
  d: "M12 11v6",
  key: "1bwqyc"
}]];
var ClipboardX = [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1",
  key: "tgr4d6"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
  key: "116196"
}], ["path", {
  d: "m15 11-6 6",
  key: "1toa9n"
}], ["path", {
  d: "m9 11 6 6",
  key: "wlibny"
}]];
var Clipboard = [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1",
  key: "tgr4d6"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
  key: "116196"
}]];
var Clock1 = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 14.5 8",
  key: "12zbmj"
}]];
var Clock10 = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 8 10",
  key: "atfzqc"
}]];
var Clock11 = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 9.5 8",
  key: "l5bg6f"
}]];
var Clock12 = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12",
  key: "1fub01"
}]];
var Clock2 = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 16 10",
  key: "1g230d"
}]];
var Clock3 = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 16.5 12",
  key: "1aq6pp"
}]];
var Clock4 = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 16 14",
  key: "68esgv"
}]];
var Clock5 = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 14.5 16",
  key: "1pcbox"
}]];
var Clock7 = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 9.5 16",
  key: "ka3394"
}]];
var Clock6 = [["path", {
  d: "M12 16.5V6",
  key: "1a6ag5"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]];
var Clock8 = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 8 14",
  key: "tmc9b4"
}]];
var Clock9 = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 7.5 12",
  key: "1k60p0"
}]];
var ClockAlert = [["path", {
  d: "M12 6v6l4 2",
  key: "mmk7yg"
}], ["path", {
  d: "M16 21.16a10 10 0 1 1 5-13.516",
  key: "cxo92l"
}], ["path", {
  d: "M20 11.5v6",
  key: "2ei3xq"
}], ["path", {
  d: "M20 21.5h.01",
  key: "1r2dzp"
}]];
var ClockArrowDown = [["path", {
  d: "M12.338 21.994A10 10 0 1 1 21.925 13.227",
  key: "1i7shu"
}], ["path", {
  d: "M12 6v6l2 1",
  key: "19cm8n"
}], ["path", {
  d: "m14 18 4 4 4-4",
  key: "1waygx"
}], ["path", {
  d: "M18 14v8",
  key: "irew45"
}]];
var ClockArrowUp = [["path", {
  d: "M13.228 21.925A10 10 0 1 1 21.994 12.338",
  key: "1fzlyi"
}], ["path", {
  d: "M12 6v6l1.562.781",
  key: "1ujuk9"
}], ["path", {
  d: "m14 18 4-4 4 4",
  key: "ftkppy"
}], ["path", {
  d: "M18 22v-8",
  key: "su0gjh"
}]];
var ClockFading = [["path", {
  d: "M12 2a10 10 0 0 1 7.38 16.75",
  key: "175t95"
}], ["path", {
  d: "M12 6v6l4 2",
  key: "mmk7yg"
}], ["path", {
  d: "M2.5 8.875a10 10 0 0 0-.5 3",
  key: "1vce0s"
}], ["path", {
  d: "M2.83 16a10 10 0 0 0 2.43 3.4",
  key: "o3fkw4"
}], ["path", {
  d: "M4.636 5.235a10 10 0 0 1 .891-.857",
  key: "1szpfk"
}], ["path", {
  d: "M8.644 21.42a10 10 0 0 0 7.631-.38",
  key: "9yhvd4"
}]];
var ClockPlus = [["path", {
  d: "M12 6v6l3.644 1.822",
  key: "1jmett"
}], ["path", {
  d: "M16 19h6",
  key: "xwg31i"
}], ["path", {
  d: "M19 16v6",
  key: "tddt3s"
}], ["path", {
  d: "M21.92 13.267a10 10 0 1 0-8.653 8.653",
  key: "1u0osk"
}]];
var Clock = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["polyline", {
  points: "12 6 12 12 16 14",
  key: "68esgv"
}]];
var CloudAlert = [["path", {
  d: "M12 12v4",
  key: "tww15h"
}], ["path", {
  d: "M12 20h.01",
  key: "zekei9"
}], ["path", {
  d: "M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708",
  key: "xsb5ju"
}]];
var CloudCheck = [["path", {
  d: "m17 15-5.5 5.5L9 18",
  key: "15q87x"
}], ["path", {
  d: "M5 17.743A7 7 0 1 1 15.71 10h1.79a4.5 4.5 0 0 1 1.5 8.742",
  key: "9ho6ki"
}]];
var CloudCog = [["path", {
  d: "m10.852 19.772-.383.924",
  key: "r7sl7d"
}], ["path", {
  d: "m13.148 14.228.383-.923",
  key: "1d5zpm"
}], ["path", {
  d: "M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923",
  key: "1ydik7"
}], ["path", {
  d: "m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544",
  key: "1m1vsf"
}], ["path", {
  d: "m14.772 15.852.923-.383",
  key: "660p6e"
}], ["path", {
  d: "m14.772 18.148.923.383",
  key: "hrcpis"
}], ["path", {
  d: "M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",
  key: "j2q98n"
}], ["path", {
  d: "m9.228 15.852-.923-.383",
  key: "1p9ong"
}], ["path", {
  d: "m9.228 18.148-.923.383",
  key: "6558rz"
}]];
var CloudDownload = [["path", {
  d: "M12 13v8l-4-4",
  key: "1f5nwf"
}], ["path", {
  d: "m12 21 4-4",
  key: "1lfcce"
}], ["path", {
  d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",
  key: "ui1hmy"
}]];
var CloudDrizzle = [["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
  key: "1pljnt"
}], ["path", {
  d: "M8 19v1",
  key: "1dk2by"
}], ["path", {
  d: "M8 14v1",
  key: "84yxot"
}], ["path", {
  d: "M16 19v1",
  key: "v220m7"
}], ["path", {
  d: "M16 14v1",
  key: "g12gj6"
}], ["path", {
  d: "M12 21v1",
  key: "q8vafk"
}], ["path", {
  d: "M12 16v1",
  key: "1mx6rx"
}]];
var CloudFog = [["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
  key: "1pljnt"
}], ["path", {
  d: "M16 17H7",
  key: "pygtm1"
}], ["path", {
  d: "M17 21H9",
  key: "1u2q02"
}]];
var CloudHail = [["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
  key: "1pljnt"
}], ["path", {
  d: "M16 14v2",
  key: "a1is7l"
}], ["path", {
  d: "M8 14v2",
  key: "1e9m6t"
}], ["path", {
  d: "M16 20h.01",
  key: "xwek51"
}], ["path", {
  d: "M8 20h.01",
  key: "1vjney"
}], ["path", {
  d: "M12 16v2",
  key: "z66u1j"
}], ["path", {
  d: "M12 22h.01",
  key: "1urd7a"
}]];
var CloudLightning = [["path", {
  d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",
  key: "1cez44"
}], ["path", {
  d: "m13 12-3 5h4l-3 5",
  key: "1t22er"
}]];
var CloudMoonRain = [["path", {
  d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197",
  key: "erj67n"
}], ["path", {
  d: "M11 20v2",
  key: "174qtz"
}], ["path", {
  d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",
  key: "1qmrp3"
}], ["path", {
  d: "M7 19v2",
  key: "12npes"
}]];
var CloudMoon = [["path", {
  d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197",
  key: "erj67n"
}], ["path", {
  d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",
  key: "p44pc9"
}]];
var CloudOff = [["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",
  key: "yfwify"
}], ["path", {
  d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",
  key: "jlfiyv"
}]];
var CloudRainWind = [["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
  key: "1pljnt"
}], ["path", {
  d: "m9.2 22 3-7",
  key: "sb5f6j"
}], ["path", {
  d: "m9 13-3 7",
  key: "500co5"
}], ["path", {
  d: "m17 13-3 7",
  key: "8t2fiy"
}]];
var CloudRain = [["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
  key: "1pljnt"
}], ["path", {
  d: "M16 14v6",
  key: "1j4efv"
}], ["path", {
  d: "M8 14v6",
  key: "17c4r9"
}], ["path", {
  d: "M12 16v6",
  key: "c8a4gj"
}]];
var CloudSnow = [["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
  key: "1pljnt"
}], ["path", {
  d: "M8 15h.01",
  key: "a7atzg"
}], ["path", {
  d: "M8 19h.01",
  key: "puxtts"
}], ["path", {
  d: "M12 17h.01",
  key: "p32p05"
}], ["path", {
  d: "M12 21h.01",
  key: "h35vbk"
}], ["path", {
  d: "M16 15h.01",
  key: "rnfrdf"
}], ["path", {
  d: "M16 19h.01",
  key: "1vcnzz"
}]];
var CloudSunRain = [["path", {
  d: "M12 2v2",
  key: "tus03m"
}], ["path", {
  d: "m4.93 4.93 1.41 1.41",
  key: "149t6j"
}], ["path", {
  d: "M20 12h2",
  key: "1q8mjw"
}], ["path", {
  d: "m19.07 4.93-1.41 1.41",
  key: "1shlcs"
}], ["path", {
  d: "M15.947 12.65a4 4 0 0 0-5.925-4.128",
  key: "dpwdj0"
}], ["path", {
  d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",
  key: "1qmrp3"
}], ["path", {
  d: "M11 20v2",
  key: "174qtz"
}], ["path", {
  d: "M7 19v2",
  key: "12npes"
}]];
var CloudUpload = [["path", {
  d: "M12 13v8",
  key: "1l5pq0"
}], ["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",
  key: "1pljnt"
}], ["path", {
  d: "m8 17 4-4 4 4",
  key: "1quai1"
}]];
var CloudSun = [["path", {
  d: "M12 2v2",
  key: "tus03m"
}], ["path", {
  d: "m4.93 4.93 1.41 1.41",
  key: "149t6j"
}], ["path", {
  d: "M20 12h2",
  key: "1q8mjw"
}], ["path", {
  d: "m19.07 4.93-1.41 1.41",
  key: "1shlcs"
}], ["path", {
  d: "M15.947 12.65a4 4 0 0 0-5.925-4.128",
  key: "dpwdj0"
}], ["path", {
  d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",
  key: "s09mg5"
}]];
var Cloud = [["path", {
  d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
  key: "p7xjir"
}]];
var Cloudy = [["path", {
  d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
  key: "gqqjvc"
}], ["path", {
  d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",
  key: "1p2s76"
}]];
var Clover = [["path", {
  d: "M16.17 7.83 2 22",
  key: "t58vo8"
}], ["path", {
  d: "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",
  key: "17k36q"
}], ["path", {
  d: "m7.83 7.83 8.34 8.34",
  key: "1d7sxk"
}]];
var Club = [["path", {
  d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",
  key: "27yuqz"
}], ["path", {
  d: "M12 17.66L12 22",
  key: "ogfahf"
}]];
var CodeXml = [["path", {
  d: "m18 16 4-4-4-4",
  key: "1inbqp"
}], ["path", {
  d: "m6 8-4 4 4 4",
  key: "15zrgr"
}], ["path", {
  d: "m14.5 4-5 16",
  key: "e7oirm"
}]];
var Code = [["path", {
  d: "m16 18 6-6-6-6",
  key: "eg8j8"
}], ["path", {
  d: "m8 6-6 6 6 6",
  key: "ppft3o"
}]];
var Codepen = [["polygon", {
  points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",
  key: "srzb37"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "15.5",
  key: "1t73f2"
}], ["polyline", {
  points: "22 8.5 12 15.5 2 8.5",
  key: "ajlxae"
}], ["polyline", {
  points: "2 15.5 12 8.5 22 15.5",
  key: "susrui"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "2",
  y2: "8.5",
  key: "2cldga"
}]];
var Codesandbox = [["path", {
  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  key: "yt0hxn"
}], ["polyline", {
  points: "7.5 4.21 12 6.81 16.5 4.21",
  key: "fabo96"
}], ["polyline", {
  points: "7.5 19.79 7.5 14.6 3 12",
  key: "z377f1"
}], ["polyline", {
  points: "21 12 16.5 14.6 16.5 19.79",
  key: "9nrev1"
}], ["polyline", {
  points: "3.27 6.96 12 12.01 20.73 6.96",
  key: "1180pa"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22.08",
  y2: "12",
  key: "3z3uq6"
}]];
var Coffee = [["path", {
  d: "M10 2v2",
  key: "7u0qdc"
}], ["path", {
  d: "M14 2v2",
  key: "6buw04"
}], ["path", {
  d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
  key: "pwadti"
}], ["path", {
  d: "M6 2v2",
  key: "colzsn"
}]];
var Cog = [["path", {
  d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
  key: "sobvz5"
}], ["path", {
  d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  key: "11i496"
}], ["path", {
  d: "M12 2v2",
  key: "tus03m"
}], ["path", {
  d: "M12 22v-2",
  key: "1osdcq"
}], ["path", {
  d: "m17 20.66-1-1.73",
  key: "eq3orb"
}], ["path", {
  d: "M11 10.27 7 3.34",
  key: "16pf9h"
}], ["path", {
  d: "m20.66 17-1.73-1",
  key: "sg0v6f"
}], ["path", {
  d: "m3.34 7 1.73 1",
  key: "1ulond"
}], ["path", {
  d: "M14 12h8",
  key: "4f43i9"
}], ["path", {
  d: "M2 12h2",
  key: "1t8f8n"
}], ["path", {
  d: "m20.66 7-1.73 1",
  key: "1ow05n"
}], ["path", {
  d: "m3.34 17 1.73-1",
  key: "nuk764"
}], ["path", {
  d: "m17 3.34-1 1.73",
  key: "2wel8s"
}], ["path", {
  d: "m11 13.73-4 6.93",
  key: "794ttg"
}]];
var Coins = [["circle", {
  cx: "8",
  cy: "8",
  r: "6",
  key: "3yglwk"
}], ["path", {
  d: "M18.09 10.37A6 6 0 1 1 10.34 18",
  key: "t5s6rm"
}], ["path", {
  d: "M7 6h1v4",
  key: "1obek4"
}], ["path", {
  d: "m16.71 13.88.7.71-2.82 2.82",
  key: "1rbuyh"
}]];
var Columns2 = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M12 3v18",
  key: "108xh3"
}]];
var Columns3Cog = [["path", {
  d: "M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5",
  key: "1g2yzs"
}], ["path", {
  d: "m14.3 19.6 1-.4",
  key: "11sv9r"
}], ["path", {
  d: "M15 3v7.5",
  key: "7lm50a"
}], ["path", {
  d: "m15.2 16.9-.9-.3",
  key: "1t7mvx"
}], ["path", {
  d: "m16.6 21.7.3-.9",
  key: "1j67ps"
}], ["path", {
  d: "m16.8 15.3-.4-1",
  key: "1ei7r6"
}], ["path", {
  d: "m19.1 15.2.3-.9",
  key: "18r7jp"
}], ["path", {
  d: "m19.6 21.7-.4-1",
  key: "z2vh2"
}], ["path", {
  d: "m20.7 16.8 1-.4",
  key: "19m87a"
}], ["path", {
  d: "m21.7 19.4-.9-.3",
  key: "1qgwi9"
}], ["path", {
  d: "M9 3v18",
  key: "fh3hqa"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3",
  key: "1xkwt0"
}]];
var Columns3 = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M9 3v18",
  key: "fh3hqa"
}], ["path", {
  d: "M15 3v18",
  key: "14nvp0"
}]];
var Columns4 = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M7.5 3v18",
  key: "w0wo6v"
}], ["path", {
  d: "M12 3v18",
  key: "108xh3"
}], ["path", {
  d: "M16.5 3v18",
  key: "10tjh1"
}]];
var Combine = [["path", {
  d: "M10 18H5a3 3 0 0 1-3-3v-1",
  key: "ru65g8"
}], ["path", {
  d: "M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",
  key: "e30een"
}], ["path", {
  d: "M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",
  key: "2ahx8o"
}], ["path", {
  d: "m7 21 3-3-3-3",
  key: "127cv2"
}], ["rect", {
  x: "14",
  y: "14",
  width: "8",
  height: "8",
  rx: "2",
  key: "1b0bso"
}], ["rect", {
  x: "2",
  y: "2",
  width: "8",
  height: "8",
  rx: "2",
  key: "1x09vl"
}]];
var Command = [["path", {
  d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
  key: "11bfej"
}]];
var Compass = [["path", {
  d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
  key: "9ktpf1"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]];
var Component2 = [["path", {
  d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",
  key: "1uwlt4"
}], ["path", {
  d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",
  key: "10291m"
}], ["path", {
  d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",
  key: "1tqoq1"
}], ["path", {
  d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",
  key: "1x6lto"
}]];
var Computer = [["rect", {
  width: "14",
  height: "8",
  x: "5",
  y: "2",
  rx: "2",
  key: "wc9tft"
}], ["rect", {
  width: "20",
  height: "8",
  x: "2",
  y: "14",
  rx: "2",
  key: "w68u3i"
}], ["path", {
  d: "M6 18h2",
  key: "rwmk9e"
}], ["path", {
  d: "M12 18h6",
  key: "aqd8w3"
}]];
var ConciergeBell = [["path", {
  d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",
  key: "1pvr1r"
}], ["path", {
  d: "M20 16a8 8 0 1 0-16 0",
  key: "1pa543"
}], ["path", {
  d: "M12 4v4",
  key: "1bq03y"
}], ["path", {
  d: "M10 4h4",
  key: "1xpv9s"
}]];
var Cone = [["path", {
  d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",
  key: "53pte7"
}], ["ellipse", {
  cx: "12",
  cy: "19",
  rx: "9",
  ry: "3",
  key: "1ji25f"
}]];
var Construction = [["rect", {
  x: "2",
  y: "6",
  width: "20",
  height: "8",
  rx: "1",
  key: "1estib"
}], ["path", {
  d: "M17 14v7",
  key: "7m2elx"
}], ["path", {
  d: "M7 14v7",
  key: "1cm7wv"
}], ["path", {
  d: "M17 3v3",
  key: "1v4jwn"
}], ["path", {
  d: "M7 3v3",
  key: "7o6guu"
}], ["path", {
  d: "M10 14 2.3 6.3",
  key: "1023jk"
}], ["path", {
  d: "m14 6 7.7 7.7",
  key: "1s8pl2"
}], ["path", {
  d: "m8 6 8 8",
  key: "hl96qh"
}]];
var ContactRound = [["path", {
  d: "M16 2v2",
  key: "scm5qe"
}], ["path", {
  d: "M17.915 22a6 6 0 0 0-12 0",
  key: "suqz9p"
}], ["path", {
  d: "M8 2v2",
  key: "pbkmx"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "4",
  key: "4exip2"
}], ["rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2",
  key: "12vinp"
}]];
var Contact = [["path", {
  d: "M16 2v2",
  key: "scm5qe"
}], ["path", {
  d: "M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",
  key: "1waht3"
}], ["path", {
  d: "M8 2v2",
  key: "pbkmx"
}], ["circle", {
  cx: "12",
  cy: "11",
  r: "3",
  key: "itu57m"
}], ["rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2",
  key: "12vinp"
}]];
var Container = [["path", {
  d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
  key: "1t2lqe"
}], ["path", {
  d: "M10 21.9V14L2.1 9.1",
  key: "o7czzq"
}], ["path", {
  d: "m10 14 11.9-6.9",
  key: "zm5e20"
}], ["path", {
  d: "M14 19.8v-8.1",
  key: "159ecu"
}], ["path", {
  d: "M18 17.5V9.4",
  key: "11uown"
}]];
var Contrast = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M12 18a6 6 0 0 0 0-12v12z",
  key: "j4l70d"
}]];
var Cookie = [["path", {
  d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",
  key: "laymnq"
}], ["path", {
  d: "M8.5 8.5v.01",
  key: "ue8clq"
}], ["path", {
  d: "M16 15.5v.01",
  key: "14dtrp"
}], ["path", {
  d: "M12 12v.01",
  key: "u5ubse"
}], ["path", {
  d: "M11 17v.01",
  key: "1hyl5a"
}], ["path", {
  d: "M7 14v.01",
  key: "uct60s"
}]];
var CookingPot = [["path", {
  d: "M2 12h20",
  key: "9i4pu4"
}], ["path", {
  d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",
  key: "u0tga0"
}], ["path", {
  d: "m4 8 16-4",
  key: "16g0ng"
}], ["path", {
  d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",
  key: "12cejc"
}]];
var CopyCheck = [["path", {
  d: "m12 15 2 2 4-4",
  key: "2c609p"
}], ["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2",
  key: "17jyea"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
  key: "zix9uf"
}]];
var CopyMinus = [["line", {
  x1: "12",
  x2: "18",
  y1: "15",
  y2: "15",
  key: "1nscbv"
}], ["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2",
  key: "17jyea"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
  key: "zix9uf"
}]];
var CopyPlus = [["line", {
  x1: "15",
  x2: "15",
  y1: "12",
  y2: "18",
  key: "1p7wdc"
}], ["line", {
  x1: "12",
  x2: "18",
  y1: "15",
  y2: "15",
  key: "1nscbv"
}], ["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2",
  key: "17jyea"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
  key: "zix9uf"
}]];
var CopySlash = [["line", {
  x1: "12",
  x2: "18",
  y1: "18",
  y2: "12",
  key: "ebkxgr"
}], ["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2",
  key: "17jyea"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
  key: "zix9uf"
}]];
var CopyX = [["line", {
  x1: "12",
  x2: "18",
  y1: "12",
  y2: "18",
  key: "1rg63v"
}], ["line", {
  x1: "12",
  x2: "18",
  y1: "18",
  y2: "12",
  key: "ebkxgr"
}], ["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2",
  key: "17jyea"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
  key: "zix9uf"
}]];
var Copy = [["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2",
  key: "17jyea"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
  key: "zix9uf"
}]];
var Copyleft = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M9.17 14.83a4 4 0 1 0 0-5.66",
  key: "1sveal"
}]];
var Copyright = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M14.83 14.83a4 4 0 1 1 0-5.66",
  key: "1i56pz"
}]];
var CornerDownLeft = [["path", {
  d: "M20 4v7a4 4 0 0 1-4 4H4",
  key: "6o5b7l"
}], ["path", {
  d: "m9 10-5 5 5 5",
  key: "1kshq7"
}]];
var CornerDownRight = [["path", {
  d: "m15 10 5 5-5 5",
  key: "qqa56n"
}], ["path", {
  d: "M4 4v7a4 4 0 0 0 4 4h12",
  key: "z08zvw"
}]];
var CornerLeftUp = [["path", {
  d: "M14 9 9 4 4 9",
  key: "1af5af"
}], ["path", {
  d: "M20 20h-7a4 4 0 0 1-4-4V4",
  key: "1blwi3"
}]];
var CornerLeftDown = [["path", {
  d: "m14 15-5 5-5-5",
  key: "1eia93"
}], ["path", {
  d: "M20 4h-7a4 4 0 0 0-4 4v12",
  key: "nbpdq2"
}]];
var CornerRightDown = [["path", {
  d: "m10 15 5 5 5-5",
  key: "1hpjnr"
}], ["path", {
  d: "M4 4h7a4 4 0 0 1 4 4v12",
  key: "wcbgct"
}]];
var CornerRightUp = [["path", {
  d: "m10 9 5-5 5 5",
  key: "9ctzwi"
}], ["path", {
  d: "M4 20h7a4 4 0 0 0 4-4V4",
  key: "1plgdj"
}]];
var CornerUpLeft = [["path", {
  d: "M20 20v-7a4 4 0 0 0-4-4H4",
  key: "1nkjon"
}], ["path", {
  d: "M9 14 4 9l5-5",
  key: "102s5s"
}]];
var CornerUpRight = [["path", {
  d: "m15 14 5-5-5-5",
  key: "12vg1m"
}], ["path", {
  d: "M4 20v-7a4 4 0 0 1 4-4h12",
  key: "1lu4f8"
}]];
var Cpu = [["path", {
  d: "M12 20v2",
  key: "1lh1kg"
}], ["path", {
  d: "M12 2v2",
  key: "tus03m"
}], ["path", {
  d: "M17 20v2",
  key: "1rnc9c"
}], ["path", {
  d: "M17 2v2",
  key: "11trls"
}], ["path", {
  d: "M2 12h2",
  key: "1t8f8n"
}], ["path", {
  d: "M2 17h2",
  key: "7oei6x"
}], ["path", {
  d: "M2 7h2",
  key: "asdhe0"
}], ["path", {
  d: "M20 12h2",
  key: "1q8mjw"
}], ["path", {
  d: "M20 17h2",
  key: "1fpfkl"
}], ["path", {
  d: "M20 7h2",
  key: "1o8tra"
}], ["path", {
  d: "M7 20v2",
  key: "4gnj0m"
}], ["path", {
  d: "M7 2v2",
  key: "1i4yhu"
}], ["rect", {
  x: "4",
  y: "4",
  width: "16",
  height: "16",
  rx: "2",
  key: "1vbyd7"
}], ["rect", {
  x: "8",
  y: "8",
  width: "8",
  height: "8",
  rx: "1",
  key: "z9xiuo"
}]];
var CreativeCommons = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",
  key: "1ss3eq"
}], ["path", {
  d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",
  key: "1od56t"
}]];
var CreditCard = [["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "5",
  rx: "2",
  key: "ynyp8z"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "10",
  y2: "10",
  key: "1b3vmo"
}]];
var Croissant = [["path", {
  d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",
  key: "1ozxlb"
}], ["path", {
  d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",
  key: "ffuyb5"
}], ["path", {
  d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",
  key: "osnpzi"
}], ["path", {
  d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",
  key: "1vubaw"
}], ["path", {
  d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",
  key: "wxr772"
}]];
var Crop = [["path", {
  d: "M6 2v14a2 2 0 0 0 2 2h14",
  key: "ron5a4"
}], ["path", {
  d: "M18 22V8a2 2 0 0 0-2-2H2",
  key: "7s9ehn"
}]];
var Cross = [["path", {
  d: "M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",
  key: "1xbrqy"
}]];
var Crosshair = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["line", {
  x1: "22",
  x2: "18",
  y1: "12",
  y2: "12",
  key: "l9bcsi"
}], ["line", {
  x1: "6",
  x2: "2",
  y1: "12",
  y2: "12",
  key: "13hhkx"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "6",
  y2: "2",
  key: "10w3f3"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "18",
  key: "15g9kq"
}]];
var Crown = [["path", {
  d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
  key: "1vdc57"
}], ["path", {
  d: "M5 21h14",
  key: "11awu3"
}]];
var Cuboid = [["path", {
  d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",
  key: "1u2ovd"
}], ["path", {
  d: "M10 22v-8L2.25 9.15",
  key: "11pn4q"
}], ["path", {
  d: "m10 14 11.77-6.87",
  key: "1kt1wh"
}]];
var CupSoda = [["path", {
  d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",
  key: "8166m8"
}], ["path", {
  d: "M5 8h14",
  key: "pcz4l3"
}], ["path", {
  d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",
  key: "yjz344"
}], ["path", {
  d: "m12 8 1-6h2",
  key: "3ybfa4"
}]];
var Currency = [["circle", {
  cx: "12",
  cy: "12",
  r: "8",
  key: "46899m"
}], ["line", {
  x1: "3",
  x2: "6",
  y1: "3",
  y2: "6",
  key: "1jkytn"
}], ["line", {
  x1: "21",
  x2: "18",
  y1: "3",
  y2: "6",
  key: "14zfjt"
}], ["line", {
  x1: "3",
  x2: "6",
  y1: "21",
  y2: "18",
  key: "iusuec"
}], ["line", {
  x1: "21",
  x2: "18",
  y1: "21",
  y2: "18",
  key: "yj2dd7"
}]];
var Cylinder = [["ellipse", {
  cx: "12",
  cy: "5",
  rx: "9",
  ry: "3",
  key: "msslwz"
}], ["path", {
  d: "M3 5v14a9 3 0 0 0 18 0V5",
  key: "aqi0yr"
}]];
var Dam = [["path", {
  d: "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
  key: "157kva"
}], ["path", {
  d: "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
  key: "d7q6m6"
}], ["path", {
  d: "M2 10h4",
  key: "l0bgd4"
}], ["path", {
  d: "M2 14h4",
  key: "1gsvsf"
}], ["path", {
  d: "M2 18h4",
  key: "1bu2t1"
}], ["path", {
  d: "M2 6h4",
  key: "aawbzj"
}], ["path", {
  d: "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z",
  key: "pr6s65"
}]];
var DatabaseBackup = [["ellipse", {
  cx: "12",
  cy: "5",
  rx: "9",
  ry: "3",
  key: "msslwz"
}], ["path", {
  d: "M3 12a9 3 0 0 0 5 2.69",
  key: "1ui2ym"
}], ["path", {
  d: "M21 9.3V5",
  key: "6k6cib"
}], ["path", {
  d: "M3 5v14a9 3 0 0 0 6.47 2.88",
  key: "i62tjy"
}], ["path", {
  d: "M12 12v4h4",
  key: "1bxaet"
}], ["path", {
  d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",
  key: "1f4ei9"
}]];
var DatabaseZap = [["ellipse", {
  cx: "12",
  cy: "5",
  rx: "9",
  ry: "3",
  key: "msslwz"
}], ["path", {
  d: "M3 5V19A9 3 0 0 0 15 21.84",
  key: "14ibmq"
}], ["path", {
  d: "M21 5V8",
  key: "1marbg"
}], ["path", {
  d: "M21 12L18 17H22L19 22",
  key: "zafso"
}], ["path", {
  d: "M3 12A9 3 0 0 0 14.59 14.87",
  key: "1y4wr8"
}]];
var Database = [["ellipse", {
  cx: "12",
  cy: "5",
  rx: "9",
  ry: "3",
  key: "msslwz"
}], ["path", {
  d: "M3 5V19A9 3 0 0 0 21 19V5",
  key: "1wlel7"
}], ["path", {
  d: "M3 12A9 3 0 0 0 21 12",
  key: "mv7ke4"
}]];
var DecimalsArrowLeft = [["path", {
  d: "m13 21-3-3 3-3",
  key: "s3o1nf"
}], ["path", {
  d: "M20 18H10",
  key: "14r3mt"
}], ["path", {
  d: "M3 11h.01",
  key: "1eifu7"
}], ["rect", {
  x: "6",
  y: "3",
  width: "5",
  height: "8",
  rx: "2.5",
  key: "v9paqo"
}]];
var DecimalsArrowRight = [["path", {
  d: "M10 18h10",
  key: "1y5s8o"
}], ["path", {
  d: "m17 21 3-3-3-3",
  key: "1ammt0"
}], ["path", {
  d: "M3 11h.01",
  key: "1eifu7"
}], ["rect", {
  x: "15",
  y: "3",
  width: "5",
  height: "8",
  rx: "2.5",
  key: "76md6a"
}], ["rect", {
  x: "6",
  y: "3",
  width: "5",
  height: "8",
  rx: "2.5",
  key: "v9paqo"
}]];
var Delete = [["path", {
  d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
  key: "1yo7s0"
}], ["path", {
  d: "m12 9 6 6",
  key: "anjzzh"
}], ["path", {
  d: "m18 9-6 6",
  key: "1fp51s"
}]];
var Dessert = [["circle", {
  cx: "12",
  cy: "4",
  r: "2",
  key: "muu5ef"
}], ["path", {
  d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",
  key: "lfo06j"
}], ["path", {
  d: "M3.2 14.8a9 9 0 0 0 17.6 0",
  key: "12xarc"
}]];
var Diameter = [["circle", {
  cx: "19",
  cy: "19",
  r: "2",
  key: "17f5cg"
}], ["circle", {
  cx: "5",
  cy: "5",
  r: "2",
  key: "1gwv83"
}], ["path", {
  d: "M6.48 3.66a10 10 0 0 1 13.86 13.86",
  key: "xr8kdq"
}], ["path", {
  d: "m6.41 6.41 11.18 11.18",
  key: "uhpjw7"
}], ["path", {
  d: "M3.66 6.48a10 10 0 0 0 13.86 13.86",
  key: "cldpwv"
}]];
var DiamondMinus = [["path", {
  d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",
  key: "1ey20j"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}]];
var DiamondPercent = [["path", {
  d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",
  key: "1tpxz2"
}], ["path", {
  d: "M9.2 9.2h.01",
  key: "1b7bvt"
}], ["path", {
  d: "m14.5 9.5-5 5",
  key: "17q4r4"
}], ["path", {
  d: "M14.7 14.8h.01",
  key: "17nsh4"
}]];
var DiamondPlus = [["path", {
  d: "M12 8v8",
  key: "napkw2"
}], ["path", {
  d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",
  key: "1ey20j"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}]];
var Diamond = [["path", {
  d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",
  key: "1f1r0c"
}]];
var Dice1 = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}], ["path", {
  d: "M12 12h.01",
  key: "1mp3jc"
}]];
var Dice2 = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}], ["path", {
  d: "M15 9h.01",
  key: "x1ddxp"
}], ["path", {
  d: "M9 15h.01",
  key: "fzyn71"
}]];
var Dice3 = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}], ["path", {
  d: "M16 8h.01",
  key: "cr5u4v"
}], ["path", {
  d: "M12 12h.01",
  key: "1mp3jc"
}], ["path", {
  d: "M8 16h.01",
  key: "18s6g9"
}]];
var Dice4 = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}], ["path", {
  d: "M16 8h.01",
  key: "cr5u4v"
}], ["path", {
  d: "M8 8h.01",
  key: "1e4136"
}], ["path", {
  d: "M8 16h.01",
  key: "18s6g9"
}], ["path", {
  d: "M16 16h.01",
  key: "1f9h7w"
}]];
var Dice5 = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}], ["path", {
  d: "M16 8h.01",
  key: "cr5u4v"
}], ["path", {
  d: "M8 8h.01",
  key: "1e4136"
}], ["path", {
  d: "M8 16h.01",
  key: "18s6g9"
}], ["path", {
  d: "M16 16h.01",
  key: "1f9h7w"
}], ["path", {
  d: "M12 12h.01",
  key: "1mp3jc"
}]];
var Dice6 = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}], ["path", {
  d: "M16 8h.01",
  key: "cr5u4v"
}], ["path", {
  d: "M16 12h.01",
  key: "1l6xoz"
}], ["path", {
  d: "M16 16h.01",
  key: "1f9h7w"
}], ["path", {
  d: "M8 8h.01",
  key: "1e4136"
}], ["path", {
  d: "M8 12h.01",
  key: "czm47f"
}], ["path", {
  d: "M8 16h.01",
  key: "18s6g9"
}]];
var Dices = [["rect", {
  width: "12",
  height: "12",
  x: "2",
  y: "10",
  rx: "2",
  ry: "2",
  key: "6agr2n"
}], ["path", {
  d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",
  key: "1o487t"
}], ["path", {
  d: "M6 18h.01",
  key: "uhywen"
}], ["path", {
  d: "M10 14h.01",
  key: "ssrbsk"
}], ["path", {
  d: "M15 6h.01",
  key: "cblpky"
}], ["path", {
  d: "M18 9h.01",
  key: "2061c0"
}]];
var Diff = [["path", {
  d: "M12 3v14",
  key: "7cf3v8"
}], ["path", {
  d: "M5 10h14",
  key: "elsbfy"
}], ["path", {
  d: "M5 21h14",
  key: "11awu3"
}]];
var Disc2 = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "4",
  key: "4exip2"
}], ["path", {
  d: "M12 12h.01",
  key: "1mp3jc"
}]];
var Disc3 = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M6 12c0-1.7.7-3.2 1.8-4.2",
  key: "oqkarx"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}], ["path", {
  d: "M18 12c0 1.7-.7 3.2-1.8 4.2",
  key: "1eah9h"
}]];
var DiscAlbum = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "5",
  key: "nd82uf"
}], ["path", {
  d: "M12 12h.01",
  key: "1mp3jc"
}]];
var Disc = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}]];
var Divide = [["circle", {
  cx: "12",
  cy: "6",
  r: "1",
  key: "1bh7o1"
}], ["line", {
  x1: "5",
  x2: "19",
  y1: "12",
  y2: "12",
  key: "13b5wn"
}], ["circle", {
  cx: "12",
  cy: "18",
  r: "1",
  key: "lqb9t5"
}]];
var DnaOff = [["path", {
  d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8",
  key: "1bivrr"
}], ["path", {
  d: "m17 6-2.891-2.891",
  key: "xu6p2f"
}], ["path", {
  d: "M2 15c3.333-3 6.667-3 10-3",
  key: "nxix30"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "m20 9 .891.891",
  key: "3xwk7g"
}], ["path", {
  d: "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1",
  key: "18cutr"
}], ["path", {
  d: "M3.109 14.109 4 15",
  key: "q76aoh"
}], ["path", {
  d: "m6.5 12.5 1 1",
  key: "cs35ky"
}], ["path", {
  d: "m7 18 2.891 2.891",
  key: "1sisit"
}], ["path", {
  d: "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16",
  key: "rlvei3"
}]];
var Dna = [["path", {
  d: "m10 16 1.5 1.5",
  key: "11lckj"
}], ["path", {
  d: "m14 8-1.5-1.5",
  key: "1ohn8i"
}], ["path", {
  d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",
  key: "80uv8i"
}], ["path", {
  d: "m16.5 10.5 1 1",
  key: "696xn5"
}], ["path", {
  d: "m17 6-2.891-2.891",
  key: "xu6p2f"
}], ["path", {
  d: "M2 15c6.667-6 13.333 0 20-6",
  key: "1pyr53"
}], ["path", {
  d: "m20 9 .891.891",
  key: "3xwk7g"
}], ["path", {
  d: "M3.109 14.109 4 15",
  key: "q76aoh"
}], ["path", {
  d: "m6.5 12.5 1 1",
  key: "cs35ky"
}], ["path", {
  d: "m7 18 2.891 2.891",
  key: "1sisit"
}], ["path", {
  d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993",
  key: "q3hbxp"
}]];
var Dock = [["path", {
  d: "M2 8h20",
  key: "d11cs7"
}], ["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2",
  key: "18n3k1"
}], ["path", {
  d: "M6 16h12",
  key: "u522kt"
}]];
var Dog = [["path", {
  d: "M11.25 16.25h1.5L12 17z",
  key: "w7jh35"
}], ["path", {
  d: "M16 14v.5",
  key: "1lajdz"
}], ["path", {
  d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",
  key: "u7s9ue"
}], ["path", {
  d: "M8 14v.5",
  key: "1nzgdb"
}], ["path", {
  d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",
  key: "v8hric"
}]];
var DollarSign = [["line", {
  x1: "12",
  x2: "12",
  y1: "2",
  y2: "22",
  key: "7eqyqh"
}], ["path", {
  d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  key: "1b0p4s"
}]];
var Donut = [["path", {
  d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",
  key: "19sr3x"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}]];
var DoorClosedLocked = [["path", {
  d: "M10 12h.01",
  key: "1kxr2c"
}], ["path", {
  d: "M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",
  key: "1bnhmg"
}], ["path", {
  d: "M2 20h8",
  key: "10ntw1"
}], ["path", {
  d: "M20 17v-2a2 2 0 1 0-4 0v2",
  key: "pwaxnr"
}], ["rect", {
  x: "14",
  y: "17",
  width: "8",
  height: "5",
  rx: "1",
  key: "15pjcy"
}]];
var DoorClosed = [["path", {
  d: "M10 12h.01",
  key: "1kxr2c"
}], ["path", {
  d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",
  key: "36qu9e"
}], ["path", {
  d: "M2 20h20",
  key: "owomy5"
}]];
var DoorOpen = [["path", {
  d: "M11 20H2",
  key: "nlcfvz"
}], ["path", {
  d: "M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",
  key: "au4z13"
}], ["path", {
  d: "M11 4H8a2 2 0 0 0-2 2v14",
  key: "74r1mk"
}], ["path", {
  d: "M14 12h.01",
  key: "1jfl7z"
}], ["path", {
  d: "M22 20h-3",
  key: "vhrsz"
}]];
var Dot = [["circle", {
  cx: "12.1",
  cy: "12.1",
  r: "1",
  key: "18d7e5"
}]];
var Download = [["path", {
  d: "M12 15V3",
  key: "m9g1x1"
}], ["path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
  key: "ih7n3h"
}], ["path", {
  d: "m7 10 5 5 5-5",
  key: "brsn70"
}]];
var DraftingCompass = [["path", {
  d: "m12.99 6.74 1.93 3.44",
  key: "iwagvd"
}], ["path", {
  d: "M19.136 12a10 10 0 0 1-14.271 0",
  key: "ppmlo4"
}], ["path", {
  d: "m21 21-2.16-3.84",
  key: "vylbct"
}], ["path", {
  d: "m3 21 8.02-14.26",
  key: "1ssaw4"
}], ["circle", {
  cx: "12",
  cy: "5",
  r: "2",
  key: "f1ur92"
}]];
var Drama = [["path", {
  d: "M10 11h.01",
  key: "d2at3l"
}], ["path", {
  d: "M14 6h.01",
  key: "k028ub"
}], ["path", {
  d: "M18 6h.01",
  key: "1v4wsw"
}], ["path", {
  d: "M6.5 13.1h.01",
  key: "1748ia"
}], ["path", {
  d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",
  key: "172yzv"
}], ["path", {
  d: "M17.4 9.9c-.8.8-2 .8-2.8 0",
  key: "1obv0w"
}], ["path", {
  d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",
  key: "rqjl8i"
}], ["path", {
  d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",
  key: "1mr6wy"
}]];
var Dribbble = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",
  key: "hpej1"
}], ["path", {
  d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",
  key: "1tr44o"
}], ["path", {
  d: "M8.56 2.75c4.37 6 6 9.42 8 17.72",
  key: "kbh691"
}]];
var Drill = [["path", {
  d: "M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z",
  key: "ioqxb1"
}], ["path", {
  d: "M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8",
  key: "1rs59n"
}], ["path", {
  d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",
  key: "105ega"
}], ["path", {
  d: "M18 6h4",
  key: "66u95g"
}], ["path", {
  d: "m5 10-2 8",
  key: "xt2lic"
}], ["path", {
  d: "m7 18 2-8",
  key: "1bzku2"
}]];
var Drone = [["path", {
  d: "M10 10 7 7",
  key: "zp14k7"
}], ["path", {
  d: "m10 14-3 3",
  key: "1jrpxk"
}], ["path", {
  d: "m14 10 3-3",
  key: "7tigam"
}], ["path", {
  d: "m14 14 3 3",
  key: "vm23p3"
}], ["path", {
  d: "M14.205 4.139a4 4 0 1 1 5.439 5.863",
  key: "1tm5p2"
}], ["path", {
  d: "M19.637 14a4 4 0 1 1-5.432 5.868",
  key: "16egi2"
}], ["path", {
  d: "M4.367 10a4 4 0 1 1 5.438-5.862",
  key: "1wta6a"
}], ["path", {
  d: "M9.795 19.862a4 4 0 1 1-5.429-5.873",
  key: "q39hpv"
}], ["rect", {
  x: "10",
  y: "8",
  width: "4",
  height: "8",
  rx: "1",
  key: "phrjt1"
}]];
var DropletOff = [["path", {
  d: "M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586",
  key: "8suz2t"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208",
  key: "19dw9m"
}]];
var Droplet = [["path", {
  d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
  key: "c7niix"
}]];
var Droplets = [["path", {
  d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
  key: "1ptgy4"
}], ["path", {
  d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
  key: "1sl1rz"
}]];
var Drum = [["path", {
  d: "m2 2 8 8",
  key: "1v6059"
}], ["path", {
  d: "m22 2-8 8",
  key: "173r8a"
}], ["ellipse", {
  cx: "12",
  cy: "9",
  rx: "10",
  ry: "5",
  key: "liohsx"
}], ["path", {
  d: "M7 13.4v7.9",
  key: "1yi6u9"
}], ["path", {
  d: "M12 14v8",
  key: "1tn2tj"
}], ["path", {
  d: "M17 13.4v7.9",
  key: "eqz2v3"
}], ["path", {
  d: "M2 9v8a10 5 0 0 0 20 0V9",
  key: "1750ul"
}]];
var Drumstick = [["path", {
  d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23",
  key: "1dtqwm"
}], ["path", {
  d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59",
  key: "1oq1fw"
}]];
var Dumbbell = [["path", {
  d: "M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",
  key: "9m4mmf"
}], ["path", {
  d: "m2.5 21.5 1.4-1.4",
  key: "17g3f0"
}], ["path", {
  d: "m20.1 3.9 1.4-1.4",
  key: "1qn309"
}], ["path", {
  d: "M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",
  key: "1t2c92"
}], ["path", {
  d: "m9.6 14.4 4.8-4.8",
  key: "6umqxw"
}]];
var EarOff = [["path", {
  d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",
  key: "1qngmn"
}], ["path", {
  d: "M6 8.5c0-.75.13-1.47.36-2.14",
  key: "b06bma"
}], ["path", {
  d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",
  key: "g10hsz"
}], ["path", {
  d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",
  key: "ygzou7"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}]];
var Ear = [["path", {
  d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",
  key: "1dfaln"
}], ["path", {
  d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",
  key: "1qnva7"
}]];
var EarthLock = [["path", {
  d: "M7 3.34V5a3 3 0 0 0 3 3",
  key: "w732o8"
}], ["path", {
  d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
  key: "f02343"
}], ["path", {
  d: "M21.54 15H17a2 2 0 0 0-2 2v4.54",
  key: "1djwo0"
}], ["path", {
  d: "M12 2a10 10 0 1 0 9.54 13",
  key: "zjsr6q"
}], ["path", {
  d: "M20 6V4a2 2 0 1 0-4 0v2",
  key: "1of5e8"
}], ["rect", {
  width: "8",
  height: "5",
  x: "14",
  y: "6",
  rx: "1",
  key: "1fmf51"
}]];
var Earth = [["path", {
  d: "M21.54 15H17a2 2 0 0 0-2 2v4.54",
  key: "1djwo0"
}], ["path", {
  d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",
  key: "1tzkfa"
}], ["path", {
  d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",
  key: "14pb5j"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]];
var Eclipse = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M12 2a7 7 0 1 0 10 10",
  key: "1yuj32"
}]];
var EggFried = [["circle", {
  cx: "11.5",
  cy: "12.5",
  r: "3.5",
  key: "1cl1mi"
}], ["path", {
  d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",
  key: "165ef9"
}]];
var EggOff = [["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19",
  key: "13g2jy"
}], ["path", {
  d: "M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568",
  key: "1581id"
}]];
var Egg = [["path", {
  d: "M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12",
  key: "1le142"
}]];
var EllipsisVertical = [["circle", {
  cx: "12",
  cy: "12",
  r: "1",
  key: "41hilf"
}], ["circle", {
  cx: "12",
  cy: "5",
  r: "1",
  key: "gxeob9"
}], ["circle", {
  cx: "12",
  cy: "19",
  r: "1",
  key: "lyex9k"
}]];
var Ellipsis = [["circle", {
  cx: "12",
  cy: "12",
  r: "1",
  key: "41hilf"
}], ["circle", {
  cx: "19",
  cy: "12",
  r: "1",
  key: "1wjl8i"
}], ["circle", {
  cx: "5",
  cy: "12",
  r: "1",
  key: "1pcz8c"
}]];
var EqualApproximately = [["path", {
  d: "M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",
  key: "yrdkhy"
}], ["path", {
  d: "M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",
  key: "gzkvyz"
}]];
var EqualNot = [["line", {
  x1: "5",
  x2: "19",
  y1: "9",
  y2: "9",
  key: "1nwqeh"
}], ["line", {
  x1: "5",
  x2: "19",
  y1: "15",
  y2: "15",
  key: "g8yjpy"
}], ["line", {
  x1: "19",
  x2: "5",
  y1: "5",
  y2: "19",
  key: "1x9vlm"
}]];
var Equal = [["line", {
  x1: "5",
  x2: "19",
  y1: "9",
  y2: "9",
  key: "1nwqeh"
}], ["line", {
  x1: "5",
  x2: "19",
  y1: "15",
  y2: "15",
  key: "g8yjpy"
}]];
var Eraser = [["path", {
  d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
  key: "g5wo59"
}], ["path", {
  d: "m5.082 11.09 8.828 8.828",
  key: "1wx5vj"
}]];
var Euro = [["path", {
  d: "M4 10h12",
  key: "1y6xl8"
}], ["path", {
  d: "M4 14h9",
  key: "1loblj"
}], ["path", {
  d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
  key: "1j6lzo"
}]];
var EthernetPort = [["path", {
  d: "m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z",
  key: "rbahqx"
}], ["path", {
  d: "M6 8v1",
  key: "1636ez"
}], ["path", {
  d: "M10 8v1",
  key: "1talb4"
}], ["path", {
  d: "M14 8v1",
  key: "1rsfgr"
}], ["path", {
  d: "M18 8v1",
  key: "gnkwox"
}]];
var Expand = [["path", {
  d: "m15 15 6 6",
  key: "1s409w"
}], ["path", {
  d: "m15 9 6-6",
  key: "ko1vev"
}], ["path", {
  d: "M21 16v5h-5",
  key: "1ck2sf"
}], ["path", {
  d: "M21 8V3h-5",
  key: "1qoq8a"
}], ["path", {
  d: "M3 16v5h5",
  key: "1t08am"
}], ["path", {
  d: "m3 21 6-6",
  key: "wwnumi"
}], ["path", {
  d: "M3 8V3h5",
  key: "1ln10m"
}], ["path", {
  d: "M9 9 3 3",
  key: "v551iv"
}]];
var ExternalLink = [["path", {
  d: "M15 3h6v6",
  key: "1q9fwt"
}], ["path", {
  d: "M10 14 21 3",
  key: "gplh6r"
}], ["path", {
  d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
  key: "a6xqqp"
}]];
var EyeClosed = [["path", {
  d: "m15 18-.722-3.25",
  key: "1j64jw"
}], ["path", {
  d: "M2 8a10.645 10.645 0 0 0 20 0",
  key: "1e7gxb"
}], ["path", {
  d: "m20 15-1.726-2.05",
  key: "1cnuld"
}], ["path", {
  d: "m4 15 1.726-2.05",
  key: "1dsqqd"
}], ["path", {
  d: "m9 18 .722-3.25",
  key: "ypw2yx"
}]];
var EyeOff = [["path", {
  d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
  key: "ct8e1f"
}], ["path", {
  d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
  key: "151rxh"
}], ["path", {
  d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
  key: "13bj9a"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]];
var Eye = [["path", {
  d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
  key: "1nclc0"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}]];
var Facebook = [["path", {
  d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  key: "1jg4f8"
}]];
var Factory = [["path", {
  d: "M12 16h.01",
  key: "1drbdi"
}], ["path", {
  d: "M16 16h.01",
  key: "1f9h7w"
}], ["path", {
  d: "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",
  key: "1iv0i2"
}], ["path", {
  d: "M8 16h.01",
  key: "18s6g9"
}]];
var Fan = [["path", {
  d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",
  key: "484a7f"
}], ["path", {
  d: "M12 12v.01",
  key: "u5ubse"
}]];
var FastForward = [["polygon", {
  points: "13 19 22 12 13 5 13 19",
  key: "587y9g"
}], ["polygon", {
  points: "2 19 11 12 2 5 2 19",
  key: "3pweh0"
}]];
var Feather = [["path", {
  d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",
  key: "18jl4k"
}], ["path", {
  d: "M16 8 2 22",
  key: "vp34q"
}], ["path", {
  d: "M17.5 15H9",
  key: "1oz8nu"
}]];
var Fence = [["path", {
  d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",
  key: "1n2rgs"
}], ["path", {
  d: "M6 8h4",
  key: "utf9t1"
}], ["path", {
  d: "M6 18h4",
  key: "12yh4b"
}], ["path", {
  d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",
  key: "3ha7mj"
}], ["path", {
  d: "M14 8h4",
  key: "1r8wg2"
}], ["path", {
  d: "M14 18h4",
  key: "1t3kbu"
}], ["path", {
  d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",
  key: "dfd4e2"
}]];
var FerrisWheel = [["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}], ["path", {
  d: "M12 2v4",
  key: "3427ic"
}], ["path", {
  d: "m6.8 15-3.5 2",
  key: "hjy98k"
}], ["path", {
  d: "m20.7 7-3.5 2",
  key: "f08gto"
}], ["path", {
  d: "M6.8 9 3.3 7",
  key: "1aevh4"
}], ["path", {
  d: "m20.7 17-3.5-2",
  key: "1liqo3"
}], ["path", {
  d: "m9 22 3-8 3 8",
  key: "wees03"
}], ["path", {
  d: "M8 22h8",
  key: "rmew8v"
}], ["path", {
  d: "M18 18.7a9 9 0 1 0-12 0",
  key: "dhzg4g"
}]];
var FileArchive = [["path", {
  d: "M10 12v-1",
  key: "v7bkov"
}], ["path", {
  d: "M10 18v-2",
  key: "1cjy8d"
}], ["path", {
  d: "M10 7V6",
  key: "dljcrl"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01",
  key: "gkbcor"
}], ["circle", {
  cx: "10",
  cy: "20",
  r: "2",
  key: "1xzdoj"
}]];
var Figma = [["path", {
  d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",
  key: "1340ok"
}], ["path", {
  d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",
  key: "1hz3m3"
}], ["path", {
  d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",
  key: "1oz8n2"
}], ["path", {
  d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",
  key: "1ff65i"
}], ["path", {
  d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",
  key: "pdip6e"
}]];
var FileAudio2 = [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",
  key: "17k7jt"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["circle", {
  cx: "3",
  cy: "17",
  r: "1",
  key: "vo6nti"
}], ["path", {
  d: "M2 17v-3a4 4 0 0 1 8 0v3",
  key: "1ggdre"
}], ["circle", {
  cx: "9",
  cy: "17",
  r: "1",
  key: "bc1fq4"
}]];
var FileAudio = [["path", {
  d: "M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",
  key: "rslqgf"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",
  key: "9f7x3i"
}]];
var FileAxis3d = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "m8 18 4-4",
  key: "12zab0"
}], ["path", {
  d: "M8 10v8h8",
  key: "tlaukw"
}]];
var FileBadge2 = [["path", {
  d: "m13.69 12.479 1.29 4.88a.5.5 0 0 1-.697.591l-1.844-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88",
  key: "7a4gmr"
}], ["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",
  key: "1mlx9k"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3",
  key: "ilqhr7"
}]];
var FileBadge = [["path", {
  d: "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.072",
  key: "n6s66f"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "m6.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88",
  key: "1e6yvx"
}], ["circle", {
  cx: "5",
  cy: "14",
  r: "3",
  key: "ufru5t"
}]];
var FileBox = [["path", {
  d: "M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
  key: "16lz6z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",
  key: "99pj1s"
}], ["path", {
  d: "M7 17v5",
  key: "1yj1jh"
}], ["path", {
  d: "M11.7 14.2 7 17l-4.7-2.8",
  key: "1yk8tc"
}]];
var FileChartColumnIncreasing = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M8 18v-2",
  key: "qcmpov"
}], ["path", {
  d: "M12 18v-4",
  key: "q1q25u"
}], ["path", {
  d: "M16 18v-6",
  key: "15y0np"
}]];
var FileChartColumn = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M8 18v-1",
  key: "zg0ygc"
}], ["path", {
  d: "M12 18v-6",
  key: "17g6i2"
}], ["path", {
  d: "M16 18v-3",
  key: "j5jt4h"
}]];
var FileChartLine = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "m16 13-3.5 3.5-2-2L8 17",
  key: "zz7yod"
}]];
var FileChartPie = [["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5",
  key: "13ddob"
}], ["path", {
  d: "M4.017 11.512a6 6 0 1 0 8.466 8.475",
  key: "s6vs5t"
}], ["path", {
  d: "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z",
  key: "1dl6s6"
}]];
var FileCheck2 = [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
  key: "1pf5j1"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "m3 15 2 2 4-4",
  key: "1lhrkk"
}]];
var FileCheck = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "m9 15 2 2 4-4",
  key: "1grp1n"
}]];
var FileClock = [["path", {
  d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",
  key: "37hlfg"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["circle", {
  cx: "8",
  cy: "16",
  r: "6",
  key: "10v15b"
}], ["path", {
  d: "M9.5 17.5 8 16.25V14",
  key: "1o80t2"
}]];
var FileCode2 = [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
  key: "1pf5j1"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "m5 12-3 3 3 3",
  key: "oke12k"
}], ["path", {
  d: "m9 18 3-3-3-3",
  key: "112psh"
}]];
var FileCode = [["path", {
  d: "M10 12.5 8 15l2 2.5",
  key: "1tg20x"
}], ["path", {
  d: "m14 12.5 2 2.5-2 2.5",
  key: "yinavb"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",
  key: "1mlx9k"
}]];
var FileCog = [["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "m2.305 15.53.923-.382",
  key: "yfp9st"
}], ["path", {
  d: "m3.228 12.852-.924-.383",
  key: "bckynb"
}], ["path", {
  d: "M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5",
  key: "1yo3oz"
}], ["path", {
  d: "m4.852 11.228-.383-.923",
  key: "1j88i9"
}], ["path", {
  d: "m4.852 16.772-.383.924",
  key: "sag1dv"
}], ["path", {
  d: "m7.148 11.228.383-.923",
  key: "rj39hk"
}], ["path", {
  d: "m7.53 17.696-.382-.924",
  key: "1uu5cs"
}], ["path", {
  d: "m8.772 12.852.923-.383",
  key: "13811l"
}], ["path", {
  d: "m8.772 15.148.923.383",
  key: "z1a5l0"
}], ["circle", {
  cx: "6",
  cy: "14",
  r: "3",
  key: "a1xfv6"
}]];
var FileDiff = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M9 10h6",
  key: "9gxzsh"
}], ["path", {
  d: "M12 13V7",
  key: "h0r20n"
}], ["path", {
  d: "M9 17h6",
  key: "r8uit2"
}]];
var FileDigit = [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
  key: "1pf5j1"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["rect", {
  width: "4",
  height: "6",
  x: "2",
  y: "12",
  rx: "2",
  key: "jm304g"
}], ["path", {
  d: "M10 12h2v6",
  key: "12zw74"
}], ["path", {
  d: "M10 18h4",
  key: "1ulq68"
}]];
var FileDown = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M12 18v-6",
  key: "17g6i2"
}], ["path", {
  d: "m9 15 3 3 3-3",
  key: "1npd3o"
}]];
var FileHeart = [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",
  key: "17k7jt"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
  key: "1c1fso"
}]];
var FileImage = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["circle", {
  cx: "10",
  cy: "12",
  r: "2",
  key: "737tya"
}], ["path", {
  d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",
  key: "wt3hpn"
}]];
var FileJson2 = [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
  key: "1pf5j1"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
  key: "fq0c9t"
}], ["path", {
  d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
  key: "4gibmv"
}]];
var FileInput = [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
  key: "1pf5j1"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M2 15h10",
  key: "jfw4w8"
}], ["path", {
  d: "m9 18 3-3-3-3",
  key: "112psh"
}]];
var FileJson = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
  key: "1oajmo"
}], ["path", {
  d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
  key: "mpwhp6"
}]];
var FileKey = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["circle", {
  cx: "10",
  cy: "16",
  r: "2",
  key: "4ckbqe"
}], ["path", {
  d: "m16 10-4.5 4.5",
  key: "7p3ebg"
}], ["path", {
  d: "m15 11 1 1",
  key: "1bsyx3"
}]];
var FileKey2 = [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",
  key: "rc0qvx"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["circle", {
  cx: "4",
  cy: "16",
  r: "2",
  key: "1ehqvc"
}], ["path", {
  d: "m10 10-4.5 4.5",
  key: "7fwrp6"
}], ["path", {
  d: "m9 11 1 1",
  key: "wa6s5q"
}]];
var FileLock = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["rect", {
  width: "8",
  height: "6",
  x: "8",
  y: "12",
  rx: "1",
  key: "3yr8at"
}], ["path", {
  d: "M10 12v-2a2 2 0 1 1 4 0v2",
  key: "j4i8d"
}]];
var FileLock2 = [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",
  key: "jmtmu2"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["rect", {
  width: "8",
  height: "5",
  x: "2",
  y: "13",
  rx: "1",
  key: "10y5wo"
}], ["path", {
  d: "M8 13v-2a2 2 0 1 0-4 0v2",
  key: "1pdxzg"
}]];
var FileMinus2 = [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
  key: "1pf5j1"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M3 15h6",
  key: "4e2qda"
}]];
var FileMusic = [["path", {
  d: "M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4",
  key: "1d3kfm"
}], ["path", {
  d: "M8 18v-7.7L16 9v7",
  key: "1oie6o"
}], ["circle", {
  cx: "14",
  cy: "16",
  r: "2",
  key: "1bzzi3"
}], ["circle", {
  cx: "6",
  cy: "18",
  r: "2",
  key: "1fncim"
}]];
var FileMinus = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M9 15h6",
  key: "cctwl0"
}]];
var FileOutput = [["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",
  key: "1vk7w2"
}], ["path", {
  d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",
  key: "1jink5"
}], ["path", {
  d: "m5 11-3 3",
  key: "1dgrs4"
}], ["path", {
  d: "m5 17-3-3h10",
  key: "1mvvaf"
}]];
var FilePenLine = [["path", {
  d: "m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",
  key: "142zxg"
}], ["path", {
  d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
  key: "2t3380"
}], ["path", {
  d: "M8 18h1",
  key: "13wk12"
}]];
var FilePen = [["path", {
  d: "M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5",
  key: "1couwa"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
  key: "1y4qbx"
}]];
var FilePlus2 = [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
  key: "1pf5j1"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M3 15h6",
  key: "4e2qda"
}], ["path", {
  d: "M6 12v6",
  key: "1u72j0"
}]];
var FilePlus = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M9 15h6",
  key: "cctwl0"
}], ["path", {
  d: "M12 18v-6",
  key: "17g6i2"
}]];
var FileQuestionMark = [["path", {
  d: "M12 17h.01",
  key: "p32p05"
}], ["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",
  key: "1mlx9k"
}], ["path", {
  d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",
  key: "mhlwft"
}]];
var FileSearch2 = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["circle", {
  cx: "11.5",
  cy: "14.5",
  r: "2.5",
  key: "1bq0ko"
}], ["path", {
  d: "M13.3 16.3 15 18",
  key: "2quom7"
}]];
var FileScan = [["path", {
  d: "M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",
  key: "1rdf37"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M16 14a2 2 0 0 0-2 2",
  key: "ceaadl"
}], ["path", {
  d: "M20 14a2 2 0 0 1 2 2",
  key: "1ny6zw"
}], ["path", {
  d: "M20 22a2 2 0 0 0 2-2",
  key: "1l9q4k"
}], ["path", {
  d: "M16 22a2 2 0 0 1-2-2",
  key: "1wqh5n"
}]];
var FileSearch = [["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",
  key: "ms7g94"
}], ["path", {
  d: "m9 18-1.5-1.5",
  key: "1j6qii"
}], ["circle", {
  cx: "5",
  cy: "14",
  r: "3",
  key: "ufru5t"
}]];
var FileSliders = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}], ["path", {
  d: "M10 11v2",
  key: "1s651w"
}], ["path", {
  d: "M8 17h8",
  key: "wh5c61"
}], ["path", {
  d: "M14 16v2",
  key: "12fp5e"
}]];
var FileSpreadsheet = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M8 13h2",
  key: "yr2amv"
}], ["path", {
  d: "M14 13h2",
  key: "un5t4a"
}], ["path", {
  d: "M8 17h2",
  key: "2yhykz"
}], ["path", {
  d: "M14 17h2",
  key: "10kma7"
}]];
var FileStack = [["path", {
  d: "M21 7h-3a2 2 0 0 1-2-2V2",
  key: "9rb54x"
}], ["path", {
  d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",
  key: "1059l0"
}], ["path", {
  d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",
  key: "16874u"
}], ["path", {
  d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",
  key: "k2ox98"
}]];
var FileSymlink = [["path", {
  d: "m10 18 3-3-3-3",
  key: "18f6ys"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",
  key: "50q2rw"
}]];
var FileTerminal = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "m8 16 2-2-2-2",
  key: "10vzyd"
}], ["path", {
  d: "M12 18h4",
  key: "1wd2n7"
}]];
var FileText = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M10 9H8",
  key: "b1mrlr"
}], ["path", {
  d: "M16 13H8",
  key: "t4e002"
}], ["path", {
  d: "M16 17H8",
  key: "z1uh3a"
}]];
var FileType2 = [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
  key: "1pf5j1"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M2 13v-1h6v1",
  key: "1dh9dg"
}], ["path", {
  d: "M5 12v6",
  key: "150t9c"
}], ["path", {
  d: "M4 18h2",
  key: "1xrofg"
}]];
var FileType = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M9 13v-1h6v1",
  key: "1bb014"
}], ["path", {
  d: "M12 12v6",
  key: "3ahymv"
}], ["path", {
  d: "M11 18h2",
  key: "12mj7e"
}]];
var FileUser = [["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M15 18a3 3 0 1 0-6 0",
  key: "16awa0"
}], ["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",
  key: "1mlx9k"
}], ["circle", {
  cx: "12",
  cy: "13",
  r: "2",
  key: "1c1ljs"
}]];
var FileUp = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M12 12v6",
  key: "3ahymv"
}], ["path", {
  d: "m15 15-3-3-3 3",
  key: "15xj92"
}]];
var FileVideo2 = [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
  key: "1pf5j1"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["rect", {
  width: "8",
  height: "6",
  x: "2",
  y: "12",
  rx: "1",
  key: "1a6c1e"
}], ["path", {
  d: "m10 15.5 4 2.5v-6l-4 2.5",
  key: "t7cp39"
}]];
var FileVideo = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "m10 11 5 3-5 3v-6Z",
  key: "7ntvm4"
}]];
var FileVolume2 = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M8 15h.01",
  key: "a7atzg"
}], ["path", {
  d: "M11.5 13.5a2.5 2.5 0 0 1 0 3",
  key: "1fccat"
}], ["path", {
  d: "M15 12a5 5 0 0 1 0 6",
  key: "ps46cm"
}]];
var FileVolume = [["path", {
  d: "M11 11a5 5 0 0 1 0 6",
  key: "193qb2"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23",
  key: "ifyjnl"
}], ["path", {
  d: "M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z",
  key: "mk8rxu"
}]];
var FileWarning = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M12 9v4",
  key: "juzpu7"
}], ["path", {
  d: "M12 17h.01",
  key: "p32p05"
}]];
var FileX2 = [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",
  key: "1pf5j1"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "m8 12.5-5 5",
  key: "b853mi"
}], ["path", {
  d: "m3 12.5 5 5",
  key: "1qls4r"
}]];
var FileX = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "m14.5 12.5-5 5",
  key: "b62r18"
}], ["path", {
  d: "m9.5 12.5 5 5",
  key: "1rk7el"
}]];
var File = [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}]];
var Files = [["path", {
  d: "M20 7h-3a2 2 0 0 1-2-2V2",
  key: "x099mo"
}], ["path", {
  d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",
  key: "18t6ie"
}], ["path", {
  d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",
  key: "1nja0z"
}]];
var Film = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M7 3v18",
  key: "bbkbws"
}], ["path", {
  d: "M3 7.5h4",
  key: "zfgn84"
}], ["path", {
  d: "M3 12h18",
  key: "1i2n21"
}], ["path", {
  d: "M3 16.5h4",
  key: "1230mu"
}], ["path", {
  d: "M17 3v18",
  key: "in4fa5"
}], ["path", {
  d: "M17 7.5h4",
  key: "myr1c1"
}], ["path", {
  d: "M17 16.5h4",
  key: "go4c1d"
}]];
var Fingerprint = [["path", {
  d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
  key: "1nerag"
}], ["path", {
  d: "M14 13.12c0 2.38 0 6.38-1 8.88",
  key: "o46ks0"
}], ["path", {
  d: "M17.29 21.02c.12-.6.43-2.3.5-3.02",
  key: "ptglia"
}], ["path", {
  d: "M2 12a10 10 0 0 1 18-6",
  key: "ydlgp0"
}], ["path", {
  d: "M2 16h.01",
  key: "1gqxmh"
}], ["path", {
  d: "M21.8 16c.2-2 .131-5.354 0-6",
  key: "drycrb"
}], ["path", {
  d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",
  key: "1tidbn"
}], ["path", {
  d: "M8.65 22c.21-.66.45-1.32.57-2",
  key: "13wd9y"
}], ["path", {
  d: "M9 6.8a6 6 0 0 1 9 5.2v2",
  key: "1fr1j5"
}]];
var FireExtinguisher = [["path", {
  d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",
  key: "sqyvz"
}], ["path", {
  d: "M9 18h8",
  key: "i7pszb"
}], ["path", {
  d: "M18 3h-3",
  key: "7idoqj"
}], ["path", {
  d: "M11 3a6 6 0 0 0-6 6v11",
  key: "1v5je3"
}], ["path", {
  d: "M5 13h4",
  key: "svpcxo"
}], ["path", {
  d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",
  key: "vsjego"
}]];
var FishOff = [["path", {
  d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",
  key: "1j1hse"
}], ["path", {
  d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",
  key: "1q46z8"
}], ["path", {
  d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",
  key: "1407gh"
}]];
var FishSymbol = [["path", {
  d: "M2 16s9-15 20-4C11 23 2 8 2 8",
  key: "h4oh4o"
}]];
var Fish = [["path", {
  d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",
  key: "15baut"
}], ["path", {
  d: "M18 12v.5",
  key: "18hhni"
}], ["path", {
  d: "M16 17.93a9.77 9.77 0 0 1 0-11.86",
  key: "16dt7o"
}], ["path", {
  d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",
  key: "l9di03"
}], ["path", {
  d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",
  key: "1kjonw"
}], ["path", {
  d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",
  key: "1zlm23"
}]];
var FlagOff = [["path", {
  d: "M8 2c3 0 5 2 8 2s4-1 4-1v11",
  key: "9rwyz9"
}], ["path", {
  d: "M4 22V4",
  key: "1plyxx"
}], ["path", {
  d: "M4 15s1-1 4-1 5 2 8 2",
  key: "1myooe"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}]];
var FlagTriangleLeft = [["path", {
  d: "M17 22V2L7 7l10 5",
  key: "1rmf0r"
}]];
var FlagTriangleRight = [["path", {
  d: "M7 22V2l10 5-10 5",
  key: "17n18y"
}]];
var Flag = [["path", {
  d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
  key: "i9b6wo"
}], ["line", {
  x1: "4",
  x2: "4",
  y1: "22",
  y2: "15",
  key: "1cm3nv"
}]];
var FlameKindling = [["path", {
  d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",
  key: "1ir223"
}], ["path", {
  d: "m5 22 14-4",
  key: "1brv4h"
}], ["path", {
  d: "m5 18 14 4",
  key: "lgyyje"
}]];
var Flame = [["path", {
  d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
  key: "96xj49"
}]];
var FlashlightOff = [["path", {
  d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",
  key: "1r120k"
}], ["path", {
  d: "M7 2h11v4c0 2-2 2-2 4v1",
  key: "dz1920"
}], ["line", {
  x1: "11",
  x2: "18",
  y1: "6",
  y2: "6",
  key: "bi1vpe"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}]];
var FlaskConicalOff = [["path", {
  d: "M10 2v2.343",
  key: "15t272"
}], ["path", {
  d: "M14 2v6.343",
  key: "sxr80q"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563",
  key: "k0duyd"
}], ["path", {
  d: "M6.453 15H15",
  key: "1f0z33"
}], ["path", {
  d: "M8.5 2h7",
  key: "csnxdl"
}]];
var Flashlight = [["path", {
  d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",
  key: "1orkel"
}], ["line", {
  x1: "6",
  x2: "18",
  y1: "6",
  y2: "6",
  key: "1z11jq"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "12",
  y2: "12",
  key: "1f4yc1"
}]];
var FlaskConical = [["path", {
  d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
  key: "18mbvz"
}], ["path", {
  d: "M6.453 15h11.094",
  key: "3shlmq"
}], ["path", {
  d: "M8.5 2h7",
  key: "csnxdl"
}]];
var FlaskRound = [["path", {
  d: "M10 2v6.292a7 7 0 1 0 4 0V2",
  key: "1s42pc"
}], ["path", {
  d: "M5 15h14",
  key: "m0yey3"
}], ["path", {
  d: "M8.5 2h7",
  key: "csnxdl"
}]];
var FlipHorizontal2 = [["path", {
  d: "m3 7 5 5-5 5V7",
  key: "couhi7"
}], ["path", {
  d: "m21 7-5 5 5 5V7",
  key: "6ouia7"
}], ["path", {
  d: "M12 20v2",
  key: "1lh1kg"
}], ["path", {
  d: "M12 14v2",
  key: "8jcxud"
}], ["path", {
  d: "M12 8v2",
  key: "1woqiv"
}], ["path", {
  d: "M12 2v2",
  key: "tus03m"
}]];
var FlipHorizontal = [["path", {
  d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",
  key: "1i73f7"
}], ["path", {
  d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",
  key: "saxlbk"
}], ["path", {
  d: "M12 20v2",
  key: "1lh1kg"
}], ["path", {
  d: "M12 14v2",
  key: "8jcxud"
}], ["path", {
  d: "M12 8v2",
  key: "1woqiv"
}], ["path", {
  d: "M12 2v2",
  key: "tus03m"
}]];
var FlipVertical2 = [["path", {
  d: "m17 3-5 5-5-5h10",
  key: "1ftt6x"
}], ["path", {
  d: "m17 21-5-5-5 5h10",
  key: "1m0wmu"
}], ["path", {
  d: "M4 12H2",
  key: "rhcxmi"
}], ["path", {
  d: "M10 12H8",
  key: "s88cx1"
}], ["path", {
  d: "M16 12h-2",
  key: "10asgb"
}], ["path", {
  d: "M22 12h-2",
  key: "14jgyd"
}]];
var Flower2 = [["path", {
  d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
  key: "3pnvol"
}], ["circle", {
  cx: "12",
  cy: "8",
  r: "2",
  key: "1822b1"
}], ["path", {
  d: "M12 10v12",
  key: "6ubwww"
}], ["path", {
  d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",
  key: "9hd38g"
}], ["path", {
  d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",
  key: "ufn41s"
}]];
var FlipVertical = [["path", {
  d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",
  key: "14bfxa"
}], ["path", {
  d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",
  key: "14rx03"
}], ["path", {
  d: "M4 12H2",
  key: "rhcxmi"
}], ["path", {
  d: "M10 12H8",
  key: "s88cx1"
}], ["path", {
  d: "M16 12h-2",
  key: "10asgb"
}], ["path", {
  d: "M22 12h-2",
  key: "14jgyd"
}]];
var Flower = [["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}], ["path", {
  d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",
  key: "14wa3c"
}], ["path", {
  d: "M12 7.5V9",
  key: "1oy5b0"
}], ["path", {
  d: "M7.5 12H9",
  key: "eltsq1"
}], ["path", {
  d: "M16.5 12H15",
  key: "vk5kw4"
}], ["path", {
  d: "M12 16.5V15",
  key: "k7eayi"
}], ["path", {
  d: "m8 8 1.88 1.88",
  key: "nxy4qf"
}], ["path", {
  d: "M14.12 9.88 16 8",
  key: "1lst6k"
}], ["path", {
  d: "m8 16 1.88-1.88",
  key: "h2eex1"
}], ["path", {
  d: "M14.12 14.12 16 16",
  key: "uqkrx3"
}]];
var Focus = [["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}], ["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2",
  key: "aa7l1z"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2",
  key: "4qcy5o"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2",
  key: "6vwrx8"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2",
  key: "ioqczr"
}]];
var FoldHorizontal = [["path", {
  d: "M2 12h6",
  key: "1wqiqv"
}], ["path", {
  d: "M22 12h-6",
  key: "1eg9hc"
}], ["path", {
  d: "M12 2v2",
  key: "tus03m"
}], ["path", {
  d: "M12 8v2",
  key: "1woqiv"
}], ["path", {
  d: "M12 14v2",
  key: "8jcxud"
}], ["path", {
  d: "M12 20v2",
  key: "1lh1kg"
}], ["path", {
  d: "m19 9-3 3 3 3",
  key: "12ol22"
}], ["path", {
  d: "m5 15 3-3-3-3",
  key: "1kdhjc"
}]];
var FoldVertical = [["path", {
  d: "M12 22v-6",
  key: "6o8u61"
}], ["path", {
  d: "M12 8V2",
  key: "1wkif3"
}], ["path", {
  d: "M4 12H2",
  key: "rhcxmi"
}], ["path", {
  d: "M10 12H8",
  key: "s88cx1"
}], ["path", {
  d: "M16 12h-2",
  key: "10asgb"
}], ["path", {
  d: "M22 12h-2",
  key: "14jgyd"
}], ["path", {
  d: "m15 19-3-3-3 3",
  key: "e37ymu"
}], ["path", {
  d: "m15 5-3 3-3-3",
  key: "19d6lf"
}]];
var FolderArchive = [["circle", {
  cx: "15",
  cy: "19",
  r: "2",
  key: "u2pros"
}], ["path", {
  d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",
  key: "1jj40k"
}], ["path", {
  d: "M15 11v-1",
  key: "cntcp"
}], ["path", {
  d: "M15 17v-2",
  key: "1279jj"
}]];
var FolderCheck = [["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
  key: "1kt360"
}], ["path", {
  d: "m9 13 2 2 4-4",
  key: "6343dt"
}]];
var FolderClock = [["circle", {
  cx: "16",
  cy: "16",
  r: "6",
  key: "qoo3c4"
}], ["path", {
  d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",
  key: "1urifu"
}], ["path", {
  d: "M16 14v2l1 1",
  key: "xth2jh"
}]];
var FolderClosed = [["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
  key: "1kt360"
}], ["path", {
  d: "M2 10h20",
  key: "1ir3d8"
}]];
var FolderCode = [["path", {
  d: "M10 10.5 8 13l2 2.5",
  key: "m4t9c1"
}], ["path", {
  d: "m14 10.5 2 2.5-2 2.5",
  key: "14w2eb"
}], ["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",
  key: "1u1bxd"
}]];
var FolderCog = [["path", {
  d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3",
  key: "128dxu"
}], ["path", {
  d: "m14.305 19.53.923-.382",
  key: "3m78fa"
}], ["path", {
  d: "m15.228 16.852-.923-.383",
  key: "npixar"
}], ["path", {
  d: "m16.852 15.228-.383-.923",
  key: "5xggr7"
}], ["path", {
  d: "m16.852 20.772-.383.924",
  key: "dpfhf9"
}], ["path", {
  d: "m19.148 15.228.383-.923",
  key: "1reyyz"
}], ["path", {
  d: "m19.53 21.696-.382-.924",
  key: "1goivc"
}], ["path", {
  d: "m20.772 16.852.924-.383",
  key: "htqkph"
}], ["path", {
  d: "m20.772 19.148.924.383",
  key: "9w9pjp"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3",
  key: "1xkwt0"
}]];
var FolderDot = [["path", {
  d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
  key: "1fr9dc"
}], ["circle", {
  cx: "12",
  cy: "13",
  r: "1",
  key: "49l61u"
}]];
var FolderGit2 = [["path", {
  d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
  key: "1w6njk"
}], ["circle", {
  cx: "13",
  cy: "12",
  r: "2",
  key: "1j92g6"
}], ["path", {
  d: "M18 19c-2.8 0-5-2.2-5-5v8",
  key: "pkpw2h"
}], ["circle", {
  cx: "20",
  cy: "19",
  r: "2",
  key: "1obnsp"
}]];
var FolderDown = [["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
  key: "1kt360"
}], ["path", {
  d: "M12 10v6",
  key: "1bos4e"
}], ["path", {
  d: "m15 13-3 3-3-3",
  key: "6j2sf0"
}]];
var FolderGit = [["circle", {
  cx: "12",
  cy: "13",
  r: "2",
  key: "1c1ljs"
}], ["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
  key: "1kt360"
}], ["path", {
  d: "M14 13h3",
  key: "1dgedf"
}], ["path", {
  d: "M7 13h3",
  key: "1pygq7"
}]];
var FolderHeart = [["path", {
  d: "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",
  key: "6hud8k"
}], ["path", {
  d: "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z",
  key: "wpff58"
}]];
var FolderInput = [["path", {
  d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
  key: "fm4g5t"
}], ["path", {
  d: "M2 13h10",
  key: "pgb2dq"
}], ["path", {
  d: "m9 16 3-3-3-3",
  key: "6m91ic"
}]];
var FolderKanban = [["path", {
  d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
  key: "1fr9dc"
}], ["path", {
  d: "M8 10v4",
  key: "tgpxqk"
}], ["path", {
  d: "M12 10v2",
  key: "hh53o1"
}], ["path", {
  d: "M16 10v6",
  key: "1d6xys"
}]];
var FolderKey = [["circle", {
  cx: "16",
  cy: "20",
  r: "2",
  key: "1vifvg"
}], ["path", {
  d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",
  key: "3hgo9p"
}], ["path", {
  d: "m22 14-4.5 4.5",
  key: "1ef6z8"
}], ["path", {
  d: "m21 15 1 1",
  key: "1ejcpy"
}]];
var FolderLock = [["rect", {
  width: "8",
  height: "5",
  x: "14",
  y: "17",
  rx: "1",
  key: "19aais"
}], ["path", {
  d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",
  key: "1w6v7t"
}], ["path", {
  d: "M20 17v-2a2 2 0 1 0-4 0v2",
  key: "pwaxnr"
}]];
var FolderMinus = [["path", {
  d: "M9 13h6",
  key: "1uhe8q"
}], ["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
  key: "1kt360"
}]];
var FolderOpenDot = [["path", {
  d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",
  key: "1nmvlm"
}], ["circle", {
  cx: "14",
  cy: "15",
  r: "1",
  key: "1gm4qj"
}]];
var FolderOpen = [["path", {
  d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
  key: "usdka0"
}]];
var FolderOutput = [["path", {
  d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",
  key: "1yk7aj"
}], ["path", {
  d: "M2 13h10",
  key: "pgb2dq"
}], ["path", {
  d: "m5 10-3 3 3 3",
  key: "1r8ie0"
}]];
var FolderPen = [["path", {
  d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",
  key: "a8xqs0"
}], ["path", {
  d: "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
  key: "1saktj"
}]];
var FolderRoot = [["path", {
  d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
  key: "1fr9dc"
}], ["circle", {
  cx: "12",
  cy: "13",
  r: "2",
  key: "1c1ljs"
}], ["path", {
  d: "M12 15v5",
  key: "11xva1"
}]];
var FolderPlus = [["path", {
  d: "M12 10v6",
  key: "1bos4e"
}], ["path", {
  d: "M9 13h6",
  key: "1uhe8q"
}], ["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
  key: "1kt360"
}]];
var FolderSearch2 = [["circle", {
  cx: "11.5",
  cy: "12.5",
  r: "2.5",
  key: "1ea5ju"
}], ["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
  key: "1kt360"
}], ["path", {
  d: "M13.3 14.3 15 16",
  key: "1y4v1n"
}]];
var FolderSearch = [["path", {
  d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",
  key: "1bw5m7"
}], ["path", {
  d: "m21 21-1.9-1.9",
  key: "1g2n9r"
}], ["circle", {
  cx: "17",
  cy: "17",
  r: "3",
  key: "18b49y"
}]];
var FolderSymlink = [["path", {
  d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",
  key: "x1c07l"
}], ["path", {
  d: "m8 16 3-3-3-3",
  key: "rlqrt1"
}]];
var FolderSync = [["path", {
  d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",
  key: "1dkoa9"
}], ["path", {
  d: "M12 10v4h4",
  key: "1czhmt"
}], ["path", {
  d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5",
  key: "lvuxfi"
}], ["path", {
  d: "M22 22v-4h-4",
  key: "1ewp4q"
}], ["path", {
  d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5",
  key: "14ync0"
}]];
var FolderTree = [["path", {
  d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
  key: "hod4my"
}], ["path", {
  d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
  key: "w4yl2u"
}], ["path", {
  d: "M3 5a2 2 0 0 0 2 2h3",
  key: "f2jnh7"
}], ["path", {
  d: "M3 3v13a2 2 0 0 0 2 2h3",
  key: "k8epm1"
}]];
var FolderUp = [["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
  key: "1kt360"
}], ["path", {
  d: "M12 10v6",
  key: "1bos4e"
}], ["path", {
  d: "m9 13 3-3 3 3",
  key: "1pxg3c"
}]];
var FolderX = [["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
  key: "1kt360"
}], ["path", {
  d: "m9.5 10.5 5 5",
  key: "ra9qjz"
}], ["path", {
  d: "m14.5 10.5-5 5",
  key: "l2rkpq"
}]];
var Folder = [["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
  key: "1kt360"
}]];
var Folders = [["path", {
  d: "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",
  key: "4u7rpt"
}], ["path", {
  d: "M2 8v11a2 2 0 0 0 2 2h14",
  key: "1eicx1"
}]];
var Footprints = [["path", {
  d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
  key: "1dudjm"
}], ["path", {
  d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
  key: "l2t8xc"
}], ["path", {
  d: "M16 17h4",
  key: "1dejxt"
}], ["path", {
  d: "M4 13h4",
  key: "1bwh8b"
}]];
var Forklift = [["path", {
  d: "M12 12H5a2 2 0 0 0-2 2v5",
  key: "7zsz91"
}], ["circle", {
  cx: "13",
  cy: "19",
  r: "2",
  key: "wjnkru"
}], ["circle", {
  cx: "5",
  cy: "19",
  r: "2",
  key: "v8kfzx"
}], ["path", {
  d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",
  key: "13bk1p"
}]];
var Forward = [["path", {
  d: "m15 17 5-5-5-5",
  key: "nf172w"
}], ["path", {
  d: "M4 18v-2a4 4 0 0 1 4-4h12",
  key: "jmiej9"
}]];
var Frame = [["line", {
  x1: "22",
  x2: "2",
  y1: "6",
  y2: "6",
  key: "15w7dq"
}], ["line", {
  x1: "22",
  x2: "2",
  y1: "18",
  y2: "18",
  key: "1ip48p"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "2",
  y2: "22",
  key: "a2lnyx"
}], ["line", {
  x1: "18",
  x2: "18",
  y1: "2",
  y2: "22",
  key: "8vb6jd"
}]];
var Framer = [["path", {
  d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",
  key: "1a2nng"
}]];
var Frown = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M16 16s-1.5-2-4-2-4 2-4 2",
  key: "epbg0q"
}], ["line", {
  x1: "9",
  x2: "9.01",
  y1: "9",
  y2: "9",
  key: "yxxnd0"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "9",
  y2: "9",
  key: "1p4y9e"
}]];
var Fuel = [["line", {
  x1: "3",
  x2: "15",
  y1: "22",
  y2: "22",
  key: "xegly4"
}], ["line", {
  x1: "4",
  x2: "14",
  y1: "9",
  y2: "9",
  key: "xcnuvu"
}], ["path", {
  d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",
  key: "16j0yd"
}], ["path", {
  d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
  key: "7cu91f"
}]];
var Fullscreen = [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2",
  key: "aa7l1z"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2",
  key: "4qcy5o"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2",
  key: "6vwrx8"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2",
  key: "ioqczr"
}], ["rect", {
  width: "10",
  height: "8",
  x: "7",
  y: "8",
  rx: "1",
  key: "vys8me"
}]];
var FunnelPlus = [["path", {
  d: "M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348",
  key: "8mvsmf"
}], ["path", {
  d: "M16 6h6",
  key: "1dogtp"
}], ["path", {
  d: "M19 3v6",
  key: "1ytpjt"
}]];
var FunnelX = [["path", {
  d: "M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473",
  key: "ol2ft2"
}], ["path", {
  d: "m16.5 3.5 5 5",
  key: "15e6fa"
}], ["path", {
  d: "m21.5 3.5-5 5",
  key: "m0lwru"
}]];
var Funnel = [["path", {
  d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
  key: "sc7q7i"
}]];
var GalleryHorizontalEnd = [["path", {
  d: "M2 7v10",
  key: "a2pl2d"
}], ["path", {
  d: "M6 5v14",
  key: "1kq3d7"
}], ["rect", {
  width: "12",
  height: "18",
  x: "10",
  y: "3",
  rx: "2",
  key: "13i7bc"
}]];
var GalleryHorizontal = [["path", {
  d: "M2 3v18",
  key: "pzttux"
}], ["rect", {
  width: "12",
  height: "18",
  x: "6",
  y: "3",
  rx: "2",
  key: "btr8bg"
}], ["path", {
  d: "M22 3v18",
  key: "6jf3v"
}]];
var GalleryThumbnails = [["rect", {
  width: "18",
  height: "14",
  x: "3",
  y: "3",
  rx: "2",
  key: "74y24f"
}], ["path", {
  d: "M4 21h1",
  key: "16zlid"
}], ["path", {
  d: "M9 21h1",
  key: "15o7lz"
}], ["path", {
  d: "M14 21h1",
  key: "v9vybs"
}], ["path", {
  d: "M19 21h1",
  key: "edywat"
}]];
var GalleryVerticalEnd = [["path", {
  d: "M7 2h10",
  key: "nczekb"
}], ["path", {
  d: "M5 6h14",
  key: "u2x4p"
}], ["rect", {
  width: "18",
  height: "12",
  x: "3",
  y: "10",
  rx: "2",
  key: "l0tzu3"
}]];
var GalleryVertical = [["path", {
  d: "M3 2h18",
  key: "15qxfx"
}], ["rect", {
  width: "18",
  height: "12",
  x: "3",
  y: "6",
  rx: "2",
  key: "1439r6"
}], ["path", {
  d: "M3 22h18",
  key: "8prr45"
}]];
var Gamepad2 = [["line", {
  x1: "6",
  x2: "10",
  y1: "11",
  y2: "11",
  key: "1gktln"
}], ["line", {
  x1: "8",
  x2: "8",
  y1: "9",
  y2: "13",
  key: "qnk9ow"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "12",
  y2: "12",
  key: "krot7o"
}], ["line", {
  x1: "18",
  x2: "18.01",
  y1: "10",
  y2: "10",
  key: "1lcuu1"
}], ["path", {
  d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
  key: "mfqc10"
}]];
var Gamepad = [["line", {
  x1: "6",
  x2: "10",
  y1: "12",
  y2: "12",
  key: "161bw2"
}], ["line", {
  x1: "8",
  x2: "8",
  y1: "10",
  y2: "14",
  key: "1i6ji0"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "13",
  y2: "13",
  key: "dqpgro"
}], ["line", {
  x1: "18",
  x2: "18.01",
  y1: "11",
  y2: "11",
  key: "meh2c"
}], ["rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "6",
  rx: "2",
  key: "9lu3g6"
}]];
var Gauge = [["path", {
  d: "m12 14 4-4",
  key: "9kzdfg"
}], ["path", {
  d: "M3.34 19a10 10 0 1 1 17.32 0",
  key: "19p75a"
}]];
var Gavel = [["path", {
  d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",
  key: "15492f"
}], ["path", {
  d: "m16 16 6-6",
  key: "vzrcl6"
}], ["path", {
  d: "m8 8 6-6",
  key: "18bi4p"
}], ["path", {
  d: "m9 7 8 8",
  key: "5jnvq1"
}], ["path", {
  d: "m21 11-8-8",
  key: "z4y7zo"
}]];
var Gem = [["path", {
  d: "M6 3h12l4 6-10 13L2 9Z",
  key: "1pcd5k"
}], ["path", {
  d: "M11 3 8 9l4 13 4-13-3-6",
  key: "1fcu3u"
}], ["path", {
  d: "M2 9h20",
  key: "16fsjt"
}]];
var GeorgianLari = [["path", {
  d: "M11.5 21a7.5 7.5 0 1 1 7.35-9",
  key: "1gyj8k"
}], ["path", {
  d: "M13 12V3",
  key: "18om2a"
}], ["path", {
  d: "M4 21h16",
  key: "1h09gz"
}], ["path", {
  d: "M9 12V3",
  key: "geutu0"
}]];
var Ghost = [["path", {
  d: "M9 10h.01",
  key: "qbtxuw"
}], ["path", {
  d: "M15 10h.01",
  key: "1qmjsl"
}], ["path", {
  d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
  key: "uwwb07"
}]];
var Gift = [["rect", {
  x: "3",
  y: "8",
  width: "18",
  height: "4",
  rx: "1",
  key: "bkv52"
}], ["path", {
  d: "M12 8v13",
  key: "1c76mn"
}], ["path", {
  d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
  key: "6wjy6b"
}], ["path", {
  d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
  key: "1ihvrl"
}]];
var GitBranchPlus = [["path", {
  d: "M6 3v12",
  key: "qpgusn"
}], ["path", {
  d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  key: "1d02ji"
}], ["path", {
  d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  key: "chk6ph"
}], ["path", {
  d: "M15 6a9 9 0 0 0-9 9",
  key: "or332x"
}], ["path", {
  d: "M18 15v6",
  key: "9wciyi"
}], ["path", {
  d: "M21 18h-6",
  key: "139f0c"
}]];
var GitBranch = [["line", {
  x1: "6",
  x2: "6",
  y1: "3",
  y2: "15",
  key: "17qcm7"
}], ["circle", {
  cx: "18",
  cy: "6",
  r: "3",
  key: "1h7g24"
}], ["circle", {
  cx: "6",
  cy: "18",
  r: "3",
  key: "fqmcym"
}], ["path", {
  d: "M18 9a9 9 0 0 1-9 9",
  key: "n2h4wq"
}]];
var GitCommitVertical = [["path", {
  d: "M12 3v6",
  key: "1holv5"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}], ["path", {
  d: "M12 15v6",
  key: "a9ows0"
}]];
var GitCommitHorizontal = [["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}], ["line", {
  x1: "3",
  x2: "9",
  y1: "12",
  y2: "12",
  key: "1dyftd"
}], ["line", {
  x1: "15",
  x2: "21",
  y1: "12",
  y2: "12",
  key: "oup4p8"
}]];
var GitCompareArrows = [["circle", {
  cx: "5",
  cy: "6",
  r: "3",
  key: "1qnov2"
}], ["path", {
  d: "M12 6h5a2 2 0 0 1 2 2v7",
  key: "1yj91y"
}], ["path", {
  d: "m15 9-3-3 3-3",
  key: "1lwv8l"
}], ["circle", {
  cx: "19",
  cy: "18",
  r: "3",
  key: "1qljk2"
}], ["path", {
  d: "M12 18H7a2 2 0 0 1-2-2V9",
  key: "16sdep"
}], ["path", {
  d: "m9 15 3 3-3 3",
  key: "1m3kbl"
}]];
var GitCompare = [["circle", {
  cx: "18",
  cy: "18",
  r: "3",
  key: "1xkwt0"
}], ["circle", {
  cx: "6",
  cy: "6",
  r: "3",
  key: "1lh9wr"
}], ["path", {
  d: "M13 6h3a2 2 0 0 1 2 2v7",
  key: "1yeb86"
}], ["path", {
  d: "M11 18H8a2 2 0 0 1-2-2V9",
  key: "19pyzm"
}]];
var GitFork = [["circle", {
  cx: "12",
  cy: "18",
  r: "3",
  key: "1mpf1b"
}], ["circle", {
  cx: "6",
  cy: "6",
  r: "3",
  key: "1lh9wr"
}], ["circle", {
  cx: "18",
  cy: "6",
  r: "3",
  key: "1h7g24"
}], ["path", {
  d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",
  key: "1uq4wg"
}], ["path", {
  d: "M12 12v3",
  key: "158kv8"
}]];
var GitGraph = [["circle", {
  cx: "5",
  cy: "6",
  r: "3",
  key: "1qnov2"
}], ["path", {
  d: "M5 9v6",
  key: "158jrl"
}], ["circle", {
  cx: "5",
  cy: "18",
  r: "3",
  key: "104gr9"
}], ["path", {
  d: "M12 3v18",
  key: "108xh3"
}], ["circle", {
  cx: "19",
  cy: "6",
  r: "3",
  key: "108a5v"
}], ["path", {
  d: "M16 15.7A9 9 0 0 0 19 9",
  key: "1e3vqb"
}]];
var GitMerge = [["circle", {
  cx: "18",
  cy: "18",
  r: "3",
  key: "1xkwt0"
}], ["circle", {
  cx: "6",
  cy: "6",
  r: "3",
  key: "1lh9wr"
}], ["path", {
  d: "M6 21V9a9 9 0 0 0 9 9",
  key: "7kw0sc"
}]];
var GitPullRequestArrow = [["circle", {
  cx: "5",
  cy: "6",
  r: "3",
  key: "1qnov2"
}], ["path", {
  d: "M5 9v12",
  key: "ih889a"
}], ["circle", {
  cx: "19",
  cy: "18",
  r: "3",
  key: "1qljk2"
}], ["path", {
  d: "m15 9-3-3 3-3",
  key: "1lwv8l"
}], ["path", {
  d: "M12 6h5a2 2 0 0 1 2 2v7",
  key: "1yj91y"
}]];
var GitPullRequestClosed = [["circle", {
  cx: "6",
  cy: "6",
  r: "3",
  key: "1lh9wr"
}], ["path", {
  d: "M6 9v12",
  key: "1sc30k"
}], ["path", {
  d: "m21 3-6 6",
  key: "16nqsk"
}], ["path", {
  d: "m21 9-6-6",
  key: "9j17rh"
}], ["path", {
  d: "M18 11.5V15",
  key: "65xf6f"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3",
  key: "1xkwt0"
}]];
var GitPullRequestCreateArrow = [["circle", {
  cx: "5",
  cy: "6",
  r: "3",
  key: "1qnov2"
}], ["path", {
  d: "M5 9v12",
  key: "ih889a"
}], ["path", {
  d: "m15 9-3-3 3-3",
  key: "1lwv8l"
}], ["path", {
  d: "M12 6h5a2 2 0 0 1 2 2v3",
  key: "1rbwk6"
}], ["path", {
  d: "M19 15v6",
  key: "10aioa"
}], ["path", {
  d: "M22 18h-6",
  key: "1d5gi5"
}]];
var GitPullRequestCreate = [["circle", {
  cx: "6",
  cy: "6",
  r: "3",
  key: "1lh9wr"
}], ["path", {
  d: "M6 9v12",
  key: "1sc30k"
}], ["path", {
  d: "M13 6h3a2 2 0 0 1 2 2v3",
  key: "1jb6z3"
}], ["path", {
  d: "M18 15v6",
  key: "9wciyi"
}], ["path", {
  d: "M21 18h-6",
  key: "139f0c"
}]];
var GitPullRequestDraft = [["circle", {
  cx: "18",
  cy: "18",
  r: "3",
  key: "1xkwt0"
}], ["circle", {
  cx: "6",
  cy: "6",
  r: "3",
  key: "1lh9wr"
}], ["path", {
  d: "M18 6V5",
  key: "1oao2s"
}], ["path", {
  d: "M18 11v-1",
  key: "11c8tz"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "9",
  y2: "21",
  key: "rroup"
}]];
var GitPullRequest = [["circle", {
  cx: "18",
  cy: "18",
  r: "3",
  key: "1xkwt0"
}], ["circle", {
  cx: "6",
  cy: "6",
  r: "3",
  key: "1lh9wr"
}], ["path", {
  d: "M13 6h3a2 2 0 0 1 2 2v7",
  key: "1yeb86"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "9",
  y2: "21",
  key: "rroup"
}]];
var Github = [["path", {
  d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
  key: "tonef"
}], ["path", {
  d: "M9 18c-4.51 2-5-2-7-2",
  key: "9comsn"
}]];
var Gitlab = [["path", {
  d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",
  key: "148pdi"
}]];
var GlassWater = [["path", {
  d: "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",
  key: "p55z4y"
}], ["path", {
  d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",
  key: "mjntcy"
}]];
var Glasses = [["circle", {
  cx: "6",
  cy: "15",
  r: "4",
  key: "vux9w4"
}], ["circle", {
  cx: "18",
  cy: "15",
  r: "4",
  key: "18o8ve"
}], ["path", {
  d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",
  key: "1ag4bs"
}], ["path", {
  d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2",
  key: "1hm1gs"
}], ["path", {
  d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2",
  key: "1r31ai"
}]];
var GlobeLock = [["path", {
  d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",
  key: "qkt0x6"
}], ["path", {
  d: "M2 12h8.5",
  key: "ovaggd"
}], ["path", {
  d: "M20 6V4a2 2 0 1 0-4 0v2",
  key: "1of5e8"
}], ["rect", {
  width: "8",
  height: "5",
  x: "14",
  y: "6",
  rx: "1",
  key: "1fmf51"
}]];
var Globe = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
  key: "13o1zl"
}], ["path", {
  d: "M2 12h20",
  key: "9i4pu4"
}]];
var Goal = [["path", {
  d: "M12 13V2l8 4-8 4",
  key: "5wlwwj"
}], ["path", {
  d: "M20.561 10.222a9 9 0 1 1-12.55-5.29",
  key: "1c0wjv"
}], ["path", {
  d: "M8.002 9.997a5 5 0 1 0 8.9 2.02",
  key: "gb1g7m"
}]];
var Gpu = [["path", {
  d: "M2 21V3",
  key: "1bzk4w"
}], ["path", {
  d: "M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26",
  key: "1d64pi"
}], ["path", {
  d: "M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3",
  key: "5hbqbf"
}], ["circle", {
  cx: "16",
  cy: "11",
  r: "2",
  key: "qt15rb"
}], ["circle", {
  cx: "8",
  cy: "11",
  r: "2",
  key: "ssideg"
}]];
var Grab = [["path", {
  d: "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",
  key: "edstyy"
}], ["path", {
  d: "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",
  key: "19wdwo"
}], ["path", {
  d: "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5",
  key: "1lugqo"
}], ["path", {
  d: "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2",
  key: "1hbeus"
}], ["path", {
  d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",
  key: "1etffm"
}]];
var GraduationCap = [["path", {
  d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
  key: "j76jl0"
}], ["path", {
  d: "M22 10v6",
  key: "1lu8f3"
}], ["path", {
  d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
  key: "1r8lef"
}]];
var Grape = [["path", {
  d: "M22 5V2l-5.89 5.89",
  key: "1eenpo"
}], ["circle", {
  cx: "16.6",
  cy: "15.89",
  r: "3",
  key: "xjtalx"
}], ["circle", {
  cx: "8.11",
  cy: "7.4",
  r: "3",
  key: "u2fv6i"
}], ["circle", {
  cx: "12.35",
  cy: "11.65",
  r: "3",
  key: "i6i8g7"
}], ["circle", {
  cx: "13.91",
  cy: "5.85",
  r: "3",
  key: "6ye0dv"
}], ["circle", {
  cx: "18.15",
  cy: "10.09",
  r: "3",
  key: "snx9no"
}], ["circle", {
  cx: "6.56",
  cy: "13.2",
  r: "3",
  key: "17x4xg"
}], ["circle", {
  cx: "10.8",
  cy: "17.44",
  r: "3",
  key: "1hogw9"
}], ["circle", {
  cx: "5",
  cy: "19",
  r: "3",
  key: "1sn6vo"
}]];
var Grid2x2Check = [["path", {
  d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
  key: "11za1p"
}], ["path", {
  d: "m16 19 2 2 4-4",
  key: "1b14m6"
}]];
var Grid2x2Plus = [["path", {
  d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
  key: "11za1p"
}], ["path", {
  d: "M16 19h6",
  key: "xwg31i"
}], ["path", {
  d: "M19 22v-6",
  key: "qhmiwi"
}]];
var Grid2x2X = [["path", {
  d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
  key: "11za1p"
}], ["path", {
  d: "m16 16 5 5",
  key: "8tpb07"
}], ["path", {
  d: "m16 21 5-5",
  key: "193jll"
}]];
var Grid3x2 = [["path", {
  d: "M15 3v18",
  key: "14nvp0"
}], ["path", {
  d: "M3 12h18",
  key: "1i2n21"
}], ["path", {
  d: "M9 3v18",
  key: "fh3hqa"
}], ["rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  key: "h1oib"
}]];
var Grid3x3 = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M3 9h18",
  key: "1pudct"
}], ["path", {
  d: "M3 15h18",
  key: "5xshup"
}], ["path", {
  d: "M9 3v18",
  key: "fh3hqa"
}], ["path", {
  d: "M15 3v18",
  key: "14nvp0"
}]];
var GripHorizontal = [["circle", {
  cx: "12",
  cy: "9",
  r: "1",
  key: "124mty"
}], ["circle", {
  cx: "19",
  cy: "9",
  r: "1",
  key: "1ruzo2"
}], ["circle", {
  cx: "5",
  cy: "9",
  r: "1",
  key: "1a8b28"
}], ["circle", {
  cx: "12",
  cy: "15",
  r: "1",
  key: "1e56xg"
}], ["circle", {
  cx: "19",
  cy: "15",
  r: "1",
  key: "1a92ep"
}], ["circle", {
  cx: "5",
  cy: "15",
  r: "1",
  key: "5r1jwy"
}]];
var Grid2x2 = [["path", {
  d: "M12 3v18",
  key: "108xh3"
}], ["path", {
  d: "M3 12h18",
  key: "1i2n21"
}], ["rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  key: "h1oib"
}]];
var GripVertical = [["circle", {
  cx: "9",
  cy: "12",
  r: "1",
  key: "1vctgf"
}], ["circle", {
  cx: "9",
  cy: "5",
  r: "1",
  key: "hp0tcf"
}], ["circle", {
  cx: "9",
  cy: "19",
  r: "1",
  key: "fkjjf6"
}], ["circle", {
  cx: "15",
  cy: "12",
  r: "1",
  key: "1tmaij"
}], ["circle", {
  cx: "15",
  cy: "5",
  r: "1",
  key: "19l28e"
}], ["circle", {
  cx: "15",
  cy: "19",
  r: "1",
  key: "f4zoj3"
}]];
var Grip = [["circle", {
  cx: "12",
  cy: "5",
  r: "1",
  key: "gxeob9"
}], ["circle", {
  cx: "19",
  cy: "5",
  r: "1",
  key: "w8mnmm"
}], ["circle", {
  cx: "5",
  cy: "5",
  r: "1",
  key: "lttvr7"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "1",
  key: "41hilf"
}], ["circle", {
  cx: "19",
  cy: "12",
  r: "1",
  key: "1wjl8i"
}], ["circle", {
  cx: "5",
  cy: "12",
  r: "1",
  key: "1pcz8c"
}], ["circle", {
  cx: "12",
  cy: "19",
  r: "1",
  key: "lyex9k"
}], ["circle", {
  cx: "19",
  cy: "19",
  r: "1",
  key: "shf9b7"
}], ["circle", {
  cx: "5",
  cy: "19",
  r: "1",
  key: "bfqh0e"
}]];
var Group = [["path", {
  d: "M3 7V5c0-1.1.9-2 2-2h2",
  key: "adw53z"
}], ["path", {
  d: "M17 3h2c1.1 0 2 .9 2 2v2",
  key: "an4l38"
}], ["path", {
  d: "M21 17v2c0 1.1-.9 2-2 2h-2",
  key: "144t0e"
}], ["path", {
  d: "M7 21H5c-1.1 0-2-.9-2-2v-2",
  key: "rtnfgi"
}], ["rect", {
  width: "7",
  height: "5",
  x: "7",
  y: "7",
  rx: "1",
  key: "1eyiv7"
}], ["rect", {
  width: "7",
  height: "5",
  x: "10",
  y: "12",
  rx: "1",
  key: "1qlmkx"
}]];
var Guitar = [["path", {
  d: "m11.9 12.1 4.514-4.514",
  key: "109xqo"
}], ["path", {
  d: "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z",
  key: "txyc8t"
}], ["path", {
  d: "m6 16 2 2",
  key: "16qmzd"
}], ["path", {
  d: "M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z",
  key: "1de1vg"
}]];
var Ham = [["path", {
  d: "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856",
  key: "1k1t7q"
}], ["path", {
  d: "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288",
  key: "153t1g"
}], ["path", {
  d: "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025",
  key: "gzrt0n"
}], ["path", {
  d: "m8.5 16.5-1-1",
  key: "otr954"
}]];
var Hamburger = [["path", {
  d: "M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25",
  key: "5dloqd"
}], ["path", {
  d: "M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2",
  key: "1vl3my"
}], ["path", {
  d: "M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0",
  key: "1us75o"
}], ["path", {
  d: "m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2",
  key: "qqzweh"
}]];
var Hammer = [["path", {
  d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",
  key: "eefl8a"
}], ["path", {
  d: "m18 15 4-4",
  key: "16gjal"
}], ["path", {
  d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
  key: "b7pghm"
}]];
var HandCoins = [["path", {
  d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",
  key: "geh8rc"
}], ["path", {
  d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
  key: "1fto5m"
}], ["path", {
  d: "m2 16 6 6",
  key: "1pfhp9"
}], ["circle", {
  cx: "16",
  cy: "9",
  r: "2.9",
  key: "1n0dlu"
}], ["circle", {
  cx: "6",
  cy: "5",
  r: "3",
  key: "151irh"
}]];
var HandHeart = [["path", {
  d: "M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",
  key: "1ifwr1"
}], ["path", {
  d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
  key: "17abbs"
}], ["path", {
  d: "m2 15 6 6",
  key: "10dquu"
}], ["path", {
  d: "M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",
  key: "1h3036"
}]];
var HandHelping = [["path", {
  d: "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",
  key: "1j4xps"
}], ["path", {
  d: "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
  key: "uospg8"
}], ["path", {
  d: "m2 13 6 6",
  key: "16e5sb"
}]];
var HandMetal = [["path", {
  d: "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4",
  key: "wc6myp"
}], ["path", {
  d: "M14 11V9a2 2 0 1 0-4 0v2",
  key: "94qvcw"
}], ["path", {
  d: "M10 10.5V5a2 2 0 1 0-4 0v9",
  key: "m1ah89"
}], ["path", {
  d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",
  key: "t1skq1"
}]];
var HandPlatter = [["path", {
  d: "M12 3V2",
  key: "ar7q03"
}], ["path", {
  d: "m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5",
  key: "n2g93r"
}], ["path", {
  d: "M2 14h12a2 2 0 0 1 0 4h-2",
  key: "1o2jem"
}], ["path", {
  d: "M4 10h16",
  key: "img6z1"
}], ["path", {
  d: "M5 10a7 7 0 0 1 14 0",
  key: "1ega1o"
}], ["path", {
  d: "M5 14v6a1 1 0 0 1-1 1H2",
  key: "1hescx"
}]];
var Hand = [["path", {
  d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",
  key: "1fvzgz"
}], ["path", {
  d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",
  key: "1kc0my"
}], ["path", {
  d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",
  key: "10h0bg"
}], ["path", {
  d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
  key: "1s1gnw"
}]];
var Handshake = [["path", {
  d: "m11 17 2 2a1 1 0 1 0 3-3",
  key: "efffak"
}], ["path", {
  d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
  key: "9pr0kb"
}], ["path", {
  d: "m21 3 1 11h-2",
  key: "1tisrp"
}], ["path", {
  d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",
  key: "1uvwmv"
}], ["path", {
  d: "M3 4h8",
  key: "1ep09j"
}]];
var HardDriveDownload = [["path", {
  d: "M12 2v8",
  key: "1q4o3n"
}], ["path", {
  d: "m16 6-4 4-4-4",
  key: "6wukr"
}], ["rect", {
  width: "20",
  height: "8",
  x: "2",
  y: "14",
  rx: "2",
  key: "w68u3i"
}], ["path", {
  d: "M6 18h.01",
  key: "uhywen"
}], ["path", {
  d: "M10 18h.01",
  key: "h775k"
}]];
var HardDriveUpload = [["path", {
  d: "m16 6-4-4-4 4",
  key: "13yo43"
}], ["path", {
  d: "M12 2v8",
  key: "1q4o3n"
}], ["rect", {
  width: "20",
  height: "8",
  x: "2",
  y: "14",
  rx: "2",
  key: "w68u3i"
}], ["path", {
  d: "M6 18h.01",
  key: "uhywen"
}], ["path", {
  d: "M10 18h.01",
  key: "h775k"
}]];
var HardDrive = [["line", {
  x1: "22",
  x2: "2",
  y1: "12",
  y2: "12",
  key: "1y58io"
}], ["path", {
  d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
  key: "oot6mr"
}], ["line", {
  x1: "6",
  x2: "6.01",
  y1: "16",
  y2: "16",
  key: "sgf278"
}], ["line", {
  x1: "10",
  x2: "10.01",
  y1: "16",
  y2: "16",
  key: "1l4acy"
}]];
var HardHat = [["path", {
  d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",
  key: "1p9q5i"
}], ["path", {
  d: "M14 6a6 6 0 0 1 6 6v3",
  key: "1hnv84"
}], ["path", {
  d: "M4 15v-3a6 6 0 0 1 6-6",
  key: "9ciidu"
}], ["rect", {
  x: "2",
  y: "15",
  width: "20",
  height: "4",
  rx: "1",
  key: "g3x8cw"
}]];
var Hash = [["line", {
  x1: "4",
  x2: "20",
  y1: "9",
  y2: "9",
  key: "4lhtct"
}], ["line", {
  x1: "4",
  x2: "20",
  y1: "15",
  y2: "15",
  key: "vyu0kd"
}], ["line", {
  x1: "10",
  x2: "8",
  y1: "3",
  y2: "21",
  key: "1ggp8o"
}], ["line", {
  x1: "16",
  x2: "14",
  y1: "3",
  y2: "21",
  key: "weycgp"
}]];
var Haze = [["path", {
  d: "m5.2 6.2 1.4 1.4",
  key: "17imol"
}], ["path", {
  d: "M2 13h2",
  key: "13gyu8"
}], ["path", {
  d: "M20 13h2",
  key: "16rner"
}], ["path", {
  d: "m17.4 7.6 1.4-1.4",
  key: "t4xlah"
}], ["path", {
  d: "M22 17H2",
  key: "1gtaj3"
}], ["path", {
  d: "M22 21H2",
  key: "1gy6en"
}], ["path", {
  d: "M16 13a4 4 0 0 0-8 0",
  key: "1dyczq"
}], ["path", {
  d: "M12 5V2.5",
  key: "1vytko"
}]];
var HdmiPort = [["path", {
  d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",
  key: "2128wb"
}], ["path", {
  d: "M7.5 12h9",
  key: "1t0ckc"
}]];
var Heading2 = [["path", {
  d: "M4 12h8",
  key: "17cfdx"
}], ["path", {
  d: "M4 18V6",
  key: "1rz3zl"
}], ["path", {
  d: "M12 18V6",
  key: "zqpxq5"
}], ["path", {
  d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",
  key: "9jr5yi"
}]];
var Heading1 = [["path", {
  d: "M4 12h8",
  key: "17cfdx"
}], ["path", {
  d: "M4 18V6",
  key: "1rz3zl"
}], ["path", {
  d: "M12 18V6",
  key: "zqpxq5"
}], ["path", {
  d: "m17 12 3-2v8",
  key: "1hhhft"
}]];
var Heading3 = [["path", {
  d: "M4 12h8",
  key: "17cfdx"
}], ["path", {
  d: "M4 18V6",
  key: "1rz3zl"
}], ["path", {
  d: "M12 18V6",
  key: "zqpxq5"
}], ["path", {
  d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",
  key: "68ncm8"
}], ["path", {
  d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",
  key: "1ejuhz"
}]];
var Heading4 = [["path", {
  d: "M12 18V6",
  key: "zqpxq5"
}], ["path", {
  d: "M17 10v3a1 1 0 0 0 1 1h3",
  key: "tj5zdr"
}], ["path", {
  d: "M21 10v8",
  key: "1kdml4"
}], ["path", {
  d: "M4 12h8",
  key: "17cfdx"
}], ["path", {
  d: "M4 18V6",
  key: "1rz3zl"
}]];
var Heading5 = [["path", {
  d: "M4 12h8",
  key: "17cfdx"
}], ["path", {
  d: "M4 18V6",
  key: "1rz3zl"
}], ["path", {
  d: "M12 18V6",
  key: "zqpxq5"
}], ["path", {
  d: "M17 13v-3h4",
  key: "1nvgqp"
}], ["path", {
  d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",
  key: "2nebdn"
}]];
var Heading6 = [["path", {
  d: "M4 12h8",
  key: "17cfdx"
}], ["path", {
  d: "M4 18V6",
  key: "1rz3zl"
}], ["path", {
  d: "M12 18V6",
  key: "zqpxq5"
}], ["circle", {
  cx: "19",
  cy: "16",
  r: "2",
  key: "15mx69"
}], ["path", {
  d: "M20 10c-2 2-3 3.5-3 6",
  key: "f35dl0"
}]];
var Headphones = [["path", {
  d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
  key: "1xhozi"
}]];
var Heading = [["path", {
  d: "M6 12h12",
  key: "8npq4p"
}], ["path", {
  d: "M6 20V4",
  key: "1w1bmo"
}], ["path", {
  d: "M18 20V4",
  key: "o2hl4u"
}]];
var HeadphoneOff = [["path", {
  d: "M21 14h-1.343",
  key: "1jdnxi"
}], ["path", {
  d: "M9.128 3.47A9 9 0 0 1 21 12v3.343",
  key: "6kipu2"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3",
  key: "9x50f4"
}], ["path", {
  d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364",
  key: "1bkxnm"
}]];
var Headset = [["path", {
  d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",
  key: "12oyoe"
}], ["path", {
  d: "M21 16v2a4 4 0 0 1-4 4h-5",
  key: "1x7m43"
}]];
var HeartCrack = [["path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
  key: "c3ymky"
}], ["path", {
  d: "m12 13-1-1 2-2-3-3 2-2",
  key: "xjdxli"
}]];
var HeartHandshake = [["path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
  key: "c3ymky"
}], ["path", {
  d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
  key: "4oyue0"
}], ["path", {
  d: "m18 15-2-2",
  key: "60u0ii"
}], ["path", {
  d: "m15 18-2-2",
  key: "6p76be"
}]];
var HeartMinus = [["path", {
  d: "M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5",
  key: "vd0vy5"
}], ["path", {
  d: "M15 15h6",
  key: "1u4692"
}]];
var HeartOff = [["line", {
  x1: "2",
  y1: "2",
  x2: "22",
  y2: "22",
  key: "1w4vcy"
}], ["path", {
  d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",
  key: "3mpagl"
}], ["path", {
  d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",
  key: "1gh3v3"
}]];
var HeartPlus = [["path", {
  d: "M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5",
  key: "vd0vy5"
}], ["path", {
  d: "M15 15h6",
  key: "1u4692"
}], ["path", {
  d: "M18 12v6",
  key: "1houu1"
}]];
var HeartPulse = [["path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
  key: "c3ymky"
}], ["path", {
  d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",
  key: "1uw2ng"
}]];
var Heart = [["path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
  key: "c3ymky"
}]];
var Heater = [["path", {
  d: "M11 8c2-3-2-3 0-6",
  key: "1ldv5m"
}], ["path", {
  d: "M15.5 8c2-3-2-3 0-6",
  key: "1otqoz"
}], ["path", {
  d: "M6 10h.01",
  key: "1lbq93"
}], ["path", {
  d: "M6 14h.01",
  key: "zudwn7"
}], ["path", {
  d: "M10 16v-4",
  key: "1c25yv"
}], ["path", {
  d: "M14 16v-4",
  key: "1dkbt8"
}], ["path", {
  d: "M18 16v-4",
  key: "1yg9me"
}], ["path", {
  d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",
  key: "1ubg90"
}], ["path", {
  d: "M5 20v2",
  key: "1abpe8"
}], ["path", {
  d: "M19 20v2",
  key: "kqn6ft"
}]];
var Hexagon = [["path", {
  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
  key: "yt0hxn"
}]];
var Highlighter = [["path", {
  d: "m9 11-6 6v3h9l3-3",
  key: "1a3l36"
}], ["path", {
  d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",
  key: "14a9rk"
}]];
var History = [["path", {
  d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
  key: "1357e3"
}], ["path", {
  d: "M3 3v5h5",
  key: "1xhq8a"
}], ["path", {
  d: "M12 7v5l4 2",
  key: "1fdv2h"
}]];
var HopOff = [["path", {
  d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",
  key: "qyzcap"
}], ["path", {
  d: "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",
  key: "y078lb"
}], ["path", {
  d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",
  key: "1utre3"
}], ["path", {
  d: "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",
  key: "17o9hm"
}], ["path", {
  d: "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",
  key: "1d1n4p"
}], ["path", {
  d: "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",
  key: "9uv3tt"
}], ["path", {
  d: "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",
  key: "1292wz"
}], ["path", {
  d: "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",
  key: "7ozu9p"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]];
var Hop = [["path", {
  d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",
  key: "18lxf1"
}], ["path", {
  d: "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",
  key: "vtfxrw"
}], ["path", {
  d: "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",
  key: "13hl71"
}], ["path", {
  d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",
  key: "1sl8oj"
}], ["path", {
  d: "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",
  key: "19c6kt"
}], ["path", {
  d: "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",
  key: "85ghs3"
}], ["path", {
  d: "M4.93 4.93 3 3a.7.7 0 0 1 0-1",
  key: "x087yj"
}], ["path", {
  d: "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",
  key: "11xdqo"
}]];
var Hospital = [["path", {
  d: "M12 6v4",
  key: "16clxf"
}], ["path", {
  d: "M14 14h-4",
  key: "esezmu"
}], ["path", {
  d: "M14 18h-4",
  key: "16mqa2"
}], ["path", {
  d: "M14 8h-4",
  key: "z8ypaz"
}], ["path", {
  d: "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",
  key: "b1k337"
}], ["path", {
  d: "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18",
  key: "16g51d"
}]];
var Hotel = [["path", {
  d: "M10 22v-6.57",
  key: "1wmca3"
}], ["path", {
  d: "M12 11h.01",
  key: "z322tv"
}], ["path", {
  d: "M12 7h.01",
  key: "1ivr5q"
}], ["path", {
  d: "M14 15.43V22",
  key: "1q2vjd"
}], ["path", {
  d: "M15 16a5 5 0 0 0-6 0",
  key: "o9wqvi"
}], ["path", {
  d: "M16 11h.01",
  key: "xkw8gn"
}], ["path", {
  d: "M16 7h.01",
  key: "1kdx03"
}], ["path", {
  d: "M8 11h.01",
  key: "1dfujw"
}], ["path", {
  d: "M8 7h.01",
  key: "1vti4s"
}], ["rect", {
  x: "4",
  y: "2",
  width: "16",
  height: "20",
  rx: "2",
  key: "1uxh74"
}]];
var Hourglass = [["path", {
  d: "M5 22h14",
  key: "ehvnwv"
}], ["path", {
  d: "M5 2h14",
  key: "pdyrp9"
}], ["path", {
  d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
  key: "1d314k"
}], ["path", {
  d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",
  key: "1vvvr6"
}]];
var HousePlug = [["path", {
  d: "M10 12V8.964",
  key: "1vll13"
}], ["path", {
  d: "M14 12V8.964",
  key: "1x3qvg"
}], ["path", {
  d: "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z",
  key: "ppykja"
}], ["path", {
  d: "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2",
  key: "1gvg2z"
}]];
var HousePlus = [["path", {
  d: "M12.662 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v2.475",
  key: "uubd2h"
}], ["path", {
  d: "M14.959 12.717A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8",
  key: "p7f341"
}], ["path", {
  d: "M15 18h6",
  key: "3b3c90"
}], ["path", {
  d: "M18 15v6",
  key: "9wciyi"
}]];
var HouseWifi = [["path", {
  d: "M9.5 13.866a4 4 0 0 1 5 .01",
  key: "1wy54i"
}], ["path", {
  d: "M12 17h.01",
  key: "p32p05"
}], ["path", {
  d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  key: "1d0kgt"
}], ["path", {
  d: "M7 10.754a8 8 0 0 1 10 0",
  key: "exoy2g"
}]];
var House = [["path", {
  d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
  key: "5wwlr5"
}], ["path", {
  d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  key: "1d0kgt"
}]];
var IceCreamBowl = [["path", {
  d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",
  key: "1uxfcu"
}], ["path", {
  d: "M12.14 11a3.5 3.5 0 1 1 6.71 0",
  key: "4k3m1s"
}], ["path", {
  d: "M15.5 6.5a3.5 3.5 0 1 0-7 0",
  key: "zmuahr"
}]];
var IceCreamCone = [["path", {
  d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",
  key: "1v6356"
}], ["path", {
  d: "M17 7A5 5 0 0 0 7 7",
  key: "151p3v"
}], ["path", {
  d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",
  key: "1sdaij"
}]];
var IdCardLanyard = [["path", {
  d: "M13.5 8h-3",
  key: "xvov4w"
}], ["path", {
  d: "m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3",
  key: "16uttc"
}], ["path", {
  d: "M16.899 22A5 5 0 0 0 7.1 22",
  key: "1d0ppr"
}], ["path", {
  d: "m9 2 3 6",
  key: "1o7bd9"
}], ["circle", {
  cx: "12",
  cy: "15",
  r: "3",
  key: "g36mzq"
}]];
var IdCard = [["path", {
  d: "M16 10h2",
  key: "8sgtl7"
}], ["path", {
  d: "M16 14h2",
  key: "epxaof"
}], ["path", {
  d: "M6.17 15a3 3 0 0 1 5.66 0",
  key: "n6f512"
}], ["circle", {
  cx: "9",
  cy: "11",
  r: "2",
  key: "yxgjnd"
}], ["rect", {
  x: "2",
  y: "5",
  width: "20",
  height: "14",
  rx: "2",
  key: "qneu4z"
}]];
var ImageDown = [["path", {
  d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",
  key: "9csbqa"
}], ["path", {
  d: "m14 19 3 3v-5.5",
  key: "9ldu5r"
}], ["path", {
  d: "m17 22 3-3",
  key: "1nkfve"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2",
  key: "af1f0g"
}]];
var ImageMinus = [["path", {
  d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
  key: "m87ecr"
}], ["line", {
  x1: "16",
  x2: "22",
  y1: "5",
  y2: "5",
  key: "ez7e4s"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2",
  key: "af1f0g"
}], ["path", {
  d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
  key: "1xmnt7"
}]];
var ImageOff = [["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}], ["path", {
  d: "M10.41 10.41a2 2 0 1 1-2.83-2.83",
  key: "1bzlo9"
}], ["line", {
  x1: "13.5",
  x2: "6",
  y1: "13.5",
  y2: "21",
  key: "1q0aeu"
}], ["line", {
  x1: "18",
  x2: "21",
  y1: "12",
  y2: "15",
  key: "5mozeu"
}], ["path", {
  d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
  key: "mmje98"
}], ["path", {
  d: "M21 15V5a2 2 0 0 0-2-2H9",
  key: "43el77"
}]];
var ImagePlay = [["path", {
  d: "m11 16-5 5",
  key: "j5f7ct"
}], ["path", {
  d: "M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5",
  key: "7s81lt"
}], ["path", {
  d: "M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",
  key: "1omb6s"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2",
  key: "af1f0g"
}]];
var ImagePlus = [["path", {
  d: "M16 5h6",
  key: "1vod17"
}], ["path", {
  d: "M19 2v6",
  key: "4bpg5p"
}], ["path", {
  d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
  key: "1ue2ih"
}], ["path", {
  d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
  key: "1xmnt7"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2",
  key: "af1f0g"
}]];
var ImageUp = [["path", {
  d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",
  key: "9csbqa"
}], ["path", {
  d: "m14 19.5 3-3 3 3",
  key: "9vmjn0"
}], ["path", {
  d: "M17 22v-5.5",
  key: "1aa6fl"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2",
  key: "af1f0g"
}]];
var ImageUpscale = [["path", {
  d: "M16 3h5v5",
  key: "1806ms"
}], ["path", {
  d: "M17 21h2a2 2 0 0 0 2-2",
  key: "130fy9"
}], ["path", {
  d: "M21 12v3",
  key: "1wzk3p"
}], ["path", {
  d: "m21 3-5 5",
  key: "1g5oa7"
}], ["path", {
  d: "M3 7V5a2 2 0 0 1 2-2",
  key: "kk3yz1"
}], ["path", {
  d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19",
  key: "fyekpt"
}], ["path", {
  d: "M9 3h3",
  key: "d52fa"
}], ["rect", {
  x: "3",
  y: "11",
  width: "10",
  height: "10",
  rx: "1",
  key: "1wpmix"
}]];
var Image = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2",
  key: "af1f0g"
}], ["path", {
  d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
  key: "1xmnt7"
}]];
var Images = [["path", {
  d: "M18 22H4a2 2 0 0 1-2-2V6",
  key: "pblm9e"
}], ["path", {
  d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",
  key: "nf6bnh"
}], ["circle", {
  cx: "12",
  cy: "8",
  r: "2",
  key: "1822b1"
}], ["rect", {
  width: "16",
  height: "16",
  x: "6",
  y: "2",
  rx: "2",
  key: "12espp"
}]];
var Import = [["path", {
  d: "M12 3v12",
  key: "1x0j5s"
}], ["path", {
  d: "m8 11 4 4 4-4",
  key: "1dohi6"
}], ["path", {
  d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
  key: "1ywtjm"
}]];
var Inbox = [["polyline", {
  points: "22 12 16 12 14 15 10 15 8 12 2 12",
  key: "o97t9d"
}], ["path", {
  d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
  key: "oot6mr"
}]];
var IndentDecrease = [["path", {
  d: "M21 12H11",
  key: "wd7e0v"
}], ["path", {
  d: "M21 18H11",
  key: "4wu86t"
}], ["path", {
  d: "M21 6H11",
  key: "6dy1d6"
}], ["path", {
  d: "m7 8-4 4 4 4",
  key: "o5hrat"
}]];
var IndentIncrease = [["path", {
  d: "M21 12H11",
  key: "wd7e0v"
}], ["path", {
  d: "M21 18H11",
  key: "4wu86t"
}], ["path", {
  d: "M21 6H11",
  key: "6dy1d6"
}], ["path", {
  d: "m3 8 4 4-4 4",
  key: "1a3j6y"
}]];
var IndianRupee = [["path", {
  d: "M6 3h12",
  key: "ggurg9"
}], ["path", {
  d: "M6 8h12",
  key: "6g4wlu"
}], ["path", {
  d: "m6 13 8.5 8",
  key: "u1kupk"
}], ["path", {
  d: "M6 13h3",
  key: "wdp6ag"
}], ["path", {
  d: "M9 13c6.667 0 6.667-10 0-10",
  key: "1nkvk2"
}]];
var Infinity = [["path", {
  d: "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",
  key: "18ogeb"
}]];
var Info = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M12 16v-4",
  key: "1dtifu"
}], ["path", {
  d: "M12 8h.01",
  key: "e9boi3"
}]];
var InspectionPanel = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M7 7h.01",
  key: "7u93v4"
}], ["path", {
  d: "M17 7h.01",
  key: "14a9sn"
}], ["path", {
  d: "M7 17h.01",
  key: "19xn7k"
}], ["path", {
  d: "M17 17h.01",
  key: "1sd3ek"
}]];
var Instagram = [["rect", {
  width: "20",
  height: "20",
  x: "2",
  y: "2",
  rx: "5",
  ry: "5",
  key: "2e1cvw"
}], ["path", {
  d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
  key: "9exkf1"
}], ["line", {
  x1: "17.5",
  x2: "17.51",
  y1: "6.5",
  y2: "6.5",
  key: "r4j83e"
}]];
var Italic = [["line", {
  x1: "19",
  x2: "10",
  y1: "4",
  y2: "4",
  key: "15jd3p"
}], ["line", {
  x1: "14",
  x2: "5",
  y1: "20",
  y2: "20",
  key: "bu0au3"
}], ["line", {
  x1: "15",
  x2: "9",
  y1: "4",
  y2: "20",
  key: "uljnxc"
}]];
var IterationCcw = [["path", {
  d: "m16 14 4 4-4 4",
  key: "hkso8o"
}], ["path", {
  d: "M20 10a8 8 0 1 0-8 8h8",
  key: "1bik7b"
}]];
var IterationCw = [["path", {
  d: "M4 10a8 8 0 1 1 8 8H4",
  key: "svv66n"
}], ["path", {
  d: "m8 22-4-4 4-4",
  key: "6g7gki"
}]];
var JapaneseYen = [["path", {
  d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3",
  key: "2ej80x"
}], ["path", {
  d: "M6 15h12",
  key: "1hwgt5"
}], ["path", {
  d: "M6 11h12",
  key: "wf4gp6"
}]];
var Joystick = [["path", {
  d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",
  key: "jg2n2t"
}], ["path", {
  d: "M6 15v-2",
  key: "gd6mvg"
}], ["path", {
  d: "M12 15V9",
  key: "8c7uyn"
}], ["circle", {
  cx: "12",
  cy: "6",
  r: "3",
  key: "1gm2ql"
}]];
var Kanban = [["path", {
  d: "M6 5v11",
  key: "mdvv1e"
}], ["path", {
  d: "M12 5v6",
  key: "14ar3b"
}], ["path", {
  d: "M18 5v14",
  key: "7ji314"
}]];
var KeyRound = [["path", {
  d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
  key: "1s6t7t"
}], ["circle", {
  cx: "16.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor",
  key: "w0ekpg"
}]];
var KeySquare = [["path", {
  d: "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z",
  key: "165ttr"
}], ["path", {
  d: "m14 7 3 3",
  key: "1r5n42"
}], ["path", {
  d: "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814",
  key: "1ubxi2"
}]];
var Key = [["path", {
  d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
  key: "g0fldk"
}], ["path", {
  d: "m21 2-9.6 9.6",
  key: "1j0ho8"
}], ["circle", {
  cx: "7.5",
  cy: "15.5",
  r: "5.5",
  key: "yqb3hr"
}]];
var KeyboardMusic = [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2",
  key: "18n3k1"
}], ["path", {
  d: "M6 8h4",
  key: "utf9t1"
}], ["path", {
  d: "M14 8h.01",
  key: "1primd"
}], ["path", {
  d: "M18 8h.01",
  key: "emo2bl"
}], ["path", {
  d: "M2 12h20",
  key: "9i4pu4"
}], ["path", {
  d: "M6 12v4",
  key: "dy92yo"
}], ["path", {
  d: "M10 12v4",
  key: "1fxnav"
}], ["path", {
  d: "M14 12v4",
  key: "1hft58"
}], ["path", {
  d: "M18 12v4",
  key: "tjjnbz"
}]];
var KeyboardOff = [["path", {
  d: "M 20 4 A2 2 0 0 1 22 6",
  key: "1g1fkt"
}], ["path", {
  d: "M 22 6 L 22 16.41",
  key: "1qjg3w"
}], ["path", {
  d: "M 7 16 L 16 16",
  key: "n0yqwb"
}], ["path", {
  d: "M 9.69 4 L 20 4",
  key: "kbpcgx"
}], ["path", {
  d: "M14 8h.01",
  key: "1primd"
}], ["path", {
  d: "M18 8h.01",
  key: "emo2bl"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",
  key: "s23sx2"
}], ["path", {
  d: "M6 8h.01",
  key: "x9i8wu"
}], ["path", {
  d: "M8 12h.01",
  key: "czm47f"
}]];
var Keyboard = [["path", {
  d: "M10 8h.01",
  key: "1r9ogq"
}], ["path", {
  d: "M12 12h.01",
  key: "1mp3jc"
}], ["path", {
  d: "M14 8h.01",
  key: "1primd"
}], ["path", {
  d: "M16 12h.01",
  key: "1l6xoz"
}], ["path", {
  d: "M18 8h.01",
  key: "emo2bl"
}], ["path", {
  d: "M6 8h.01",
  key: "x9i8wu"
}], ["path", {
  d: "M7 16h10",
  key: "wp8him"
}], ["path", {
  d: "M8 12h.01",
  key: "czm47f"
}], ["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2",
  key: "18n3k1"
}]];
var LampCeiling = [["path", {
  d: "M12 2v5",
  key: "nd4vlx"
}], ["path", {
  d: "M14.829 15.998a3 3 0 1 1-5.658 0",
  key: "1pybiy"
}], ["path", {
  d: "M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z",
  key: "ma1wor"
}]];
var LampDesk = [["path", {
  d: "M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z",
  key: "sb8slu"
}], ["path", {
  d: "m14.207 4.793-3.414 3.414",
  key: "m2x3oj"
}], ["path", {
  d: "M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z",
  key: "8b3myj"
}], ["path", {
  d: "m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18",
  key: "43s6cu"
}]];
var LampFloor = [["path", {
  d: "M12 10v12",
  key: "6ubwww"
}], ["path", {
  d: "M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z",
  key: "1o95gh"
}], ["path", {
  d: "M9 22h6",
  key: "1rlq3v"
}]];
var LampWallDown = [["path", {
  d: "M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z",
  key: "u4w2d7"
}], ["path", {
  d: "M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z",
  key: "15356w"
}], ["path", {
  d: "M8 6h4a2 2 0 0 1 2 2v5",
  key: "1m6m7x"
}]];
var LampWallUp = [["path", {
  d: "M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z",
  key: "1uvrbf"
}], ["path", {
  d: "M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",
  key: "154r2a"
}], ["path", {
  d: "M8 18h4a2 2 0 0 0 2-2v-5",
  key: "z9mbu0"
}]];
var Lamp = [["path", {
  d: "M12 12v6",
  key: "3ahymv"
}], ["path", {
  d: "M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z",
  key: "1l7kg2"
}], ["path", {
  d: "M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z",
  key: "1mmzpi"
}]];
var LandPlot = [["path", {
  d: "m12 8 6-3-6-3v10",
  key: "mvpnpy"
}], ["path", {
  d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",
  key: "ek95tt"
}], ["path", {
  d: "m6.49 12.85 11.02 6.3",
  key: "1kt42w"
}], ["path", {
  d: "M17.51 12.85 6.5 19.15",
  key: "v55bdg"
}]];
var Landmark = [["path", {
  d: "M10 18v-7",
  key: "wt116b"
}], ["path", {
  d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
  key: "1m329m"
}], ["path", {
  d: "M14 18v-7",
  key: "vav6t3"
}], ["path", {
  d: "M18 18v-7",
  key: "aexdmj"
}], ["path", {
  d: "M3 22h18",
  key: "8prr45"
}], ["path", {
  d: "M6 18v-7",
  key: "1ivflk"
}]];
var Languages = [["path", {
  d: "m5 8 6 6",
  key: "1wu5hv"
}], ["path", {
  d: "m4 14 6-6 2-3",
  key: "1k1g8d"
}], ["path", {
  d: "M2 5h12",
  key: "or177f"
}], ["path", {
  d: "M7 2h1",
  key: "1t2jsx"
}], ["path", {
  d: "m22 22-5-10-5 10",
  key: "don7ne"
}], ["path", {
  d: "M14 18h6",
  key: "1m8k6r"
}]];
var LaptopMinimalCheck = [["path", {
  d: "M2 20h20",
  key: "owomy5"
}], ["path", {
  d: "m9 10 2 2 4-4",
  key: "1gnqz4"
}], ["rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "12",
  rx: "2",
  key: "8ur36m"
}]];
var LaptopMinimal = [["rect", {
  width: "18",
  height: "12",
  x: "3",
  y: "4",
  rx: "2",
  ry: "2",
  key: "1qhy41"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "20",
  y2: "20",
  key: "ni3hll"
}]];
var Laptop = [["path", {
  d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
  key: "1pdavp"
}], ["path", {
  d: "M20.054 15.987H3.946",
  key: "14rxg9"
}]];
var LassoSelect = [["path", {
  d: "M7 22a5 5 0 0 1-2-4",
  key: "umushi"
}], ["path", {
  d: "M7 16.93c.96.43 1.96.74 2.99.91",
  key: "ybbtv3"
}], ["path", {
  d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",
  key: "gt5e1w"
}], ["path", {
  d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  key: "bq3ynw"
}], ["path", {
  d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z",
  key: "72q637"
}]];
var Lasso = [["path", {
  d: "M7 22a5 5 0 0 1-2-4",
  key: "umushi"
}], ["path", {
  d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",
  key: "146dds"
}], ["path", {
  d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  key: "bq3ynw"
}]];
var Laugh = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",
  key: "b2q4dd"
}], ["line", {
  x1: "9",
  x2: "9.01",
  y1: "9",
  y2: "9",
  key: "yxxnd0"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "9",
  y2: "9",
  key: "1p4y9e"
}]];
var Layers2 = [["path", {
  d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z",
  key: "15q6uc"
}], ["path", {
  d: "m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845",
  key: "byia6g"
}]];
var Layers = [["path", {
  d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
  key: "zw3jo"
}], ["path", {
  d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
  key: "1wduqc"
}], ["path", {
  d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
  key: "kqbvx6"
}]];
var LayoutDashboard = [["rect", {
  width: "7",
  height: "9",
  x: "3",
  y: "3",
  rx: "1",
  key: "10lvy0"
}], ["rect", {
  width: "7",
  height: "5",
  x: "14",
  y: "3",
  rx: "1",
  key: "16une8"
}], ["rect", {
  width: "7",
  height: "9",
  x: "14",
  y: "12",
  rx: "1",
  key: "1hutg5"
}], ["rect", {
  width: "7",
  height: "5",
  x: "3",
  y: "16",
  rx: "1",
  key: "ldoo1y"
}]];
var LayoutGrid = [["rect", {
  width: "7",
  height: "7",
  x: "3",
  y: "3",
  rx: "1",
  key: "1g98yp"
}], ["rect", {
  width: "7",
  height: "7",
  x: "14",
  y: "3",
  rx: "1",
  key: "6d4xhi"
}], ["rect", {
  width: "7",
  height: "7",
  x: "14",
  y: "14",
  rx: "1",
  key: "nxv5o0"
}], ["rect", {
  width: "7",
  height: "7",
  x: "3",
  y: "14",
  rx: "1",
  key: "1bb6yr"
}]];
var LayoutList = [["rect", {
  width: "7",
  height: "7",
  x: "3",
  y: "3",
  rx: "1",
  key: "1g98yp"
}], ["rect", {
  width: "7",
  height: "7",
  x: "3",
  y: "14",
  rx: "1",
  key: "1bb6yr"
}], ["path", {
  d: "M14 4h7",
  key: "3xa0d5"
}], ["path", {
  d: "M14 9h7",
  key: "1icrd9"
}], ["path", {
  d: "M14 15h7",
  key: "1mj8o2"
}], ["path", {
  d: "M14 20h7",
  key: "11slyb"
}]];
var LayoutPanelLeft = [["rect", {
  width: "7",
  height: "18",
  x: "3",
  y: "3",
  rx: "1",
  key: "2obqm"
}], ["rect", {
  width: "7",
  height: "7",
  x: "14",
  y: "3",
  rx: "1",
  key: "6d4xhi"
}], ["rect", {
  width: "7",
  height: "7",
  x: "14",
  y: "14",
  rx: "1",
  key: "nxv5o0"
}]];
var LayoutPanelTop = [["rect", {
  width: "18",
  height: "7",
  x: "3",
  y: "3",
  rx: "1",
  key: "f1a2em"
}], ["rect", {
  width: "7",
  height: "7",
  x: "3",
  y: "14",
  rx: "1",
  key: "1bb6yr"
}], ["rect", {
  width: "7",
  height: "7",
  x: "14",
  y: "14",
  rx: "1",
  key: "nxv5o0"
}]];
var LayoutTemplate = [["rect", {
  width: "18",
  height: "7",
  x: "3",
  y: "3",
  rx: "1",
  key: "f1a2em"
}], ["rect", {
  width: "9",
  height: "7",
  x: "3",
  y: "14",
  rx: "1",
  key: "jqznyg"
}], ["rect", {
  width: "5",
  height: "7",
  x: "16",
  y: "14",
  rx: "1",
  key: "q5h2i8"
}]];
var Leaf = [["path", {
  d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
  key: "nnexq3"
}], ["path", {
  d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
  key: "mt58a7"
}]];
var LeafyGreen = [["path", {
  d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",
  key: "1134nt"
}], ["path", {
  d: "M2 22 17 7",
  key: "1q7jp2"
}]];
var Lectern = [["path", {
  d: "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3",
  key: "13jjxg"
}], ["path", {
  d: "M18 6V3a1 1 0 0 0-1-1h-3",
  key: "1550fe"
}], ["rect", {
  width: "8",
  height: "12",
  x: "8",
  y: "10",
  rx: "1",
  key: "qmu8b6"
}]];
var LetterText = [["path", {
  d: "M15 12h6",
  key: "upa0zy"
}], ["path", {
  d: "M15 6h6",
  key: "1jlkvy"
}], ["path", {
  d: "m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13",
  key: "blevx4"
}], ["path", {
  d: "M3 18h18",
  key: "1h113x"
}], ["path", {
  d: "M3.92 11h6.16",
  key: "1bqo8m"
}]];
var LibraryBig = [["rect", {
  width: "8",
  height: "18",
  x: "3",
  y: "3",
  rx: "1",
  key: "oynpb5"
}], ["path", {
  d: "M7 3v18",
  key: "bbkbws"
}], ["path", {
  d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",
  key: "1qboyk"
}]];
var Library = [["path", {
  d: "m16 6 4 14",
  key: "ji33uf"
}], ["path", {
  d: "M12 6v14",
  key: "1n7gus"
}], ["path", {
  d: "M8 8v12",
  key: "1gg7y9"
}], ["path", {
  d: "M4 4v16",
  key: "6qkkli"
}]];
var LifeBuoy = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "m4.93 4.93 4.24 4.24",
  key: "1ymg45"
}], ["path", {
  d: "m14.83 9.17 4.24-4.24",
  key: "1cb5xl"
}], ["path", {
  d: "m14.83 14.83 4.24 4.24",
  key: "q42g0n"
}], ["path", {
  d: "m9.17 14.83-4.24 4.24",
  key: "bqpfvv"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "4",
  key: "4exip2"
}]];
var Ligature = [["path", {
  d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2",
  key: "1rtphz"
}], ["path", {
  d: "M6 12h4",
  key: "a4o3ry"
}], ["path", {
  d: "M14 12h2v8",
  key: "c1fccl"
}], ["path", {
  d: "M6 20h4",
  key: "1i6q5t"
}], ["path", {
  d: "M14 20h4",
  key: "lzx1xo"
}]];
var LightbulbOff = [["path", {
  d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",
  key: "1fkcox"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",
  key: "10m8kw"
}], ["path", {
  d: "M9 18h6",
  key: "x1upvd"
}], ["path", {
  d: "M10 22h4",
  key: "ceow96"
}]];
var Lightbulb = [["path", {
  d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
  key: "1gvzjb"
}], ["path", {
  d: "M9 18h6",
  key: "x1upvd"
}], ["path", {
  d: "M10 22h4",
  key: "ceow96"
}]];
var LineSquiggle = [["path", {
  d: "M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2",
  key: "1lrphd"
}]];
var Link2Off = [["path", {
  d: "M9 17H7A5 5 0 0 1 7 7",
  key: "10o201"
}], ["path", {
  d: "M15 7h2a5 5 0 0 1 4 8",
  key: "1d3206"
}], ["line", {
  x1: "8",
  x2: "12",
  y1: "12",
  y2: "12",
  key: "rvw6j4"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}]];
var Link2 = [["path", {
  d: "M9 17H7A5 5 0 0 1 7 7h2",
  key: "8i5ue5"
}], ["path", {
  d: "M15 7h2a5 5 0 1 1 0 10h-2",
  key: "1b9ql8"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "12",
  y2: "12",
  key: "1jonct"
}]];
var Link = [["path", {
  d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
  key: "1cjeqo"
}], ["path", {
  d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
  key: "19qd67"
}]];
var Linkedin = [["path", {
  d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
  key: "c2jq9f"
}], ["rect", {
  width: "4",
  height: "12",
  x: "2",
  y: "9",
  key: "mk3on5"
}], ["circle", {
  cx: "4",
  cy: "4",
  r: "2",
  key: "bt5ra8"
}]];
var ListCheck = [["path", {
  d: "M11 18H3",
  key: "n3j2dh"
}], ["path", {
  d: "m15 18 2 2 4-4",
  key: "1szwhi"
}], ["path", {
  d: "M16 12H3",
  key: "1a2rj7"
}], ["path", {
  d: "M16 6H3",
  key: "1wxfjs"
}]];
var ListChecks = [["path", {
  d: "m3 17 2 2 4-4",
  key: "1jhpwq"
}], ["path", {
  d: "m3 7 2 2 4-4",
  key: "1obspn"
}], ["path", {
  d: "M13 6h8",
  key: "15sg57"
}], ["path", {
  d: "M13 12h8",
  key: "h98zly"
}], ["path", {
  d: "M13 18h8",
  key: "oe0vm4"
}]];
var ListCollapse = [["path", {
  d: "M10 12h11",
  key: "6m4ad9"
}], ["path", {
  d: "M10 18h11",
  key: "11hvi2"
}], ["path", {
  d: "M10 6h11",
  key: "c7qv1k"
}], ["path", {
  d: "m3 10 3-3-3-3",
  key: "i7pm08"
}], ["path", {
  d: "m3 20 3-3-3-3",
  key: "20gx1n"
}]];
var ListEnd = [["path", {
  d: "M16 12H3",
  key: "1a2rj7"
}], ["path", {
  d: "M16 6H3",
  key: "1wxfjs"
}], ["path", {
  d: "M10 18H3",
  key: "13769t"
}], ["path", {
  d: "M21 6v10a2 2 0 0 1-2 2h-5",
  key: "ilrcs8"
}], ["path", {
  d: "m16 16-2 2 2 2",
  key: "kkc6pm"
}]];
var ListFilterPlus = [["path", {
  d: "M10 18h4",
  key: "1ulq68"
}], ["path", {
  d: "M11 6H3",
  key: "1u26ik"
}], ["path", {
  d: "M15 6h6",
  key: "1jlkvy"
}], ["path", {
  d: "M18 9V3",
  key: "xwwp7m"
}], ["path", {
  d: "M7 12h8",
  key: "7a1bxv"
}]];
var ListFilter = [["path", {
  d: "M3 6h18",
  key: "d0wm0j"
}], ["path", {
  d: "M7 12h10",
  key: "b7w52i"
}], ["path", {
  d: "M10 18h4",
  key: "1ulq68"
}]];
var ListMinus = [["path", {
  d: "M11 12H3",
  key: "51ecnj"
}], ["path", {
  d: "M16 6H3",
  key: "1wxfjs"
}], ["path", {
  d: "M16 18H3",
  key: "12xzn7"
}], ["path", {
  d: "M21 12h-6",
  key: "bt1uis"
}]];
var ListMusic = [["path", {
  d: "M21 15V6",
  key: "h1cx4g"
}], ["path", {
  d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  key: "8saifv"
}], ["path", {
  d: "M12 12H3",
  key: "18klou"
}], ["path", {
  d: "M16 6H3",
  key: "1wxfjs"
}], ["path", {
  d: "M12 18H3",
  key: "11ftsu"
}]];
var ListOrdered = [["path", {
  d: "M10 12h11",
  key: "6m4ad9"
}], ["path", {
  d: "M10 18h11",
  key: "11hvi2"
}], ["path", {
  d: "M10 6h11",
  key: "c7qv1k"
}], ["path", {
  d: "M4 10h2",
  key: "16xx2s"
}], ["path", {
  d: "M4 6h1v4",
  key: "cnovpq"
}], ["path", {
  d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",
  key: "m9a95d"
}]];
var ListPlus = [["path", {
  d: "M11 12H3",
  key: "51ecnj"
}], ["path", {
  d: "M16 6H3",
  key: "1wxfjs"
}], ["path", {
  d: "M16 18H3",
  key: "12xzn7"
}], ["path", {
  d: "M18 9v6",
  key: "1twb98"
}], ["path", {
  d: "M21 12h-6",
  key: "bt1uis"
}]];
var ListRestart = [["path", {
  d: "M21 6H3",
  key: "1jwq7v"
}], ["path", {
  d: "M7 12H3",
  key: "13ou7f"
}], ["path", {
  d: "M7 18H3",
  key: "1sijw9"
}], ["path", {
  d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",
  key: "qth677"
}], ["path", {
  d: "M11 10v4h4",
  key: "172dkj"
}]];
var ListStart = [["path", {
  d: "M16 12H3",
  key: "1a2rj7"
}], ["path", {
  d: "M16 18H3",
  key: "12xzn7"
}], ["path", {
  d: "M10 6H3",
  key: "lf8lx7"
}], ["path", {
  d: "M21 18V8a2 2 0 0 0-2-2h-5",
  key: "1hghli"
}], ["path", {
  d: "m16 8-2-2 2-2",
  key: "160uvd"
}]];
var ListTodo = [["rect", {
  x: "3",
  y: "5",
  width: "6",
  height: "6",
  rx: "1",
  key: "1defrl"
}], ["path", {
  d: "m3 17 2 2 4-4",
  key: "1jhpwq"
}], ["path", {
  d: "M13 6h8",
  key: "15sg57"
}], ["path", {
  d: "M13 12h8",
  key: "h98zly"
}], ["path", {
  d: "M13 18h8",
  key: "oe0vm4"
}]];
var ListTree = [["path", {
  d: "M21 12h-8",
  key: "1bmf0i"
}], ["path", {
  d: "M21 6H8",
  key: "1pqkrb"
}], ["path", {
  d: "M21 18h-8",
  key: "1tm79t"
}], ["path", {
  d: "M3 6v4c0 1.1.9 2 2 2h3",
  key: "1ywdgy"
}], ["path", {
  d: "M3 10v6c0 1.1.9 2 2 2h3",
  key: "2wc746"
}]];
var ListVideo = [["path", {
  d: "M12 12H3",
  key: "18klou"
}], ["path", {
  d: "M16 6H3",
  key: "1wxfjs"
}], ["path", {
  d: "M12 18H3",
  key: "11ftsu"
}], ["path", {
  d: "m16 12 5 3-5 3v-6Z",
  key: "zpskkp"
}]];
var ListX = [["path", {
  d: "M11 12H3",
  key: "51ecnj"
}], ["path", {
  d: "M16 6H3",
  key: "1wxfjs"
}], ["path", {
  d: "M16 18H3",
  key: "12xzn7"
}], ["path", {
  d: "m19 10-4 4",
  key: "1tz659"
}], ["path", {
  d: "m15 10 4 4",
  key: "1n7nei"
}]];
var List = [["path", {
  d: "M3 12h.01",
  key: "nlz23k"
}], ["path", {
  d: "M3 18h.01",
  key: "1tta3j"
}], ["path", {
  d: "M3 6h.01",
  key: "1rqtza"
}], ["path", {
  d: "M8 12h13",
  key: "1za7za"
}], ["path", {
  d: "M8 18h13",
  key: "1lx6n3"
}], ["path", {
  d: "M8 6h13",
  key: "ik3vkj"
}]];
var LoaderCircle = [["path", {
  d: "M21 12a9 9 0 1 1-6.219-8.56",
  key: "13zald"
}]];
var LoaderPinwheel = [["path", {
  d: "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0",
  key: "1lzz15"
}], ["path", {
  d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6",
  key: "1gnrpi"
}], ["path", {
  d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6",
  key: "u9yy5q"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]];
var Loader = [["path", {
  d: "M12 2v4",
  key: "3427ic"
}], ["path", {
  d: "m16.2 7.8 2.9-2.9",
  key: "r700ao"
}], ["path", {
  d: "M18 12h4",
  key: "wj9ykh"
}], ["path", {
  d: "m16.2 16.2 2.9 2.9",
  key: "1bxg5t"
}], ["path", {
  d: "M12 18v4",
  key: "jadmvz"
}], ["path", {
  d: "m4.9 19.1 2.9-2.9",
  key: "bwix9q"
}], ["path", {
  d: "M2 12h4",
  key: "j09sii"
}], ["path", {
  d: "m4.9 4.9 2.9 2.9",
  key: "giyufr"
}]];
var LocateFixed = [["line", {
  x1: "2",
  x2: "5",
  y1: "12",
  y2: "12",
  key: "bvdh0s"
}], ["line", {
  x1: "19",
  x2: "22",
  y1: "12",
  y2: "12",
  key: "1tbv5k"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "2",
  y2: "5",
  key: "11lu5j"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "19",
  y2: "22",
  key: "x3vr5v"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "7",
  key: "fim9np"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}]];
var LocateOff = [["path", {
  d: "M12 19v3",
  key: "npa21l"
}], ["path", {
  d: "M12 2v3",
  key: "qbqxhf"
}], ["path", {
  d: "M18.89 13.24a7 7 0 0 0-8.13-8.13",
  key: "1v9jrh"
}], ["path", {
  d: "M19 12h3",
  key: "osuazr"
}], ["path", {
  d: "M2 12h3",
  key: "1wrr53"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M7.05 7.05a7 7 0 0 0 9.9 9.9",
  key: "rc5l2e"
}]];
var Locate = [["line", {
  x1: "2",
  x2: "5",
  y1: "12",
  y2: "12",
  key: "bvdh0s"
}], ["line", {
  x1: "19",
  x2: "22",
  y1: "12",
  y2: "12",
  key: "1tbv5k"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "2",
  y2: "5",
  key: "11lu5j"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "19",
  y2: "22",
  key: "x3vr5v"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "7",
  key: "fim9np"
}]];
var LocationEdit = [["path", {
  d: "M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468",
  key: "1fahp3"
}], ["path", {
  d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
  key: "1817ys"
}], ["circle", {
  cx: "10",
  cy: "10",
  r: "3",
  key: "1ns7v1"
}]];
var LockKeyholeOpen = [["circle", {
  cx: "12",
  cy: "16",
  r: "1",
  key: "1au0dj"
}], ["rect", {
  width: "18",
  height: "12",
  x: "3",
  y: "10",
  rx: "2",
  key: "l0tzu3"
}], ["path", {
  d: "M7 10V7a5 5 0 0 1 9.33-2.5",
  key: "car5b7"
}]];
var LockKeyhole = [["circle", {
  cx: "12",
  cy: "16",
  r: "1",
  key: "1au0dj"
}], ["rect", {
  x: "3",
  y: "10",
  width: "18",
  height: "12",
  rx: "2",
  key: "6s8ecr"
}], ["path", {
  d: "M7 10V7a5 5 0 0 1 10 0v3",
  key: "1pqi11"
}]];
var LockOpen = [["rect", {
  width: "18",
  height: "11",
  x: "3",
  y: "11",
  rx: "2",
  ry: "2",
  key: "1w4ew1"
}], ["path", {
  d: "M7 11V7a5 5 0 0 1 9.9-1",
  key: "1mm8w8"
}]];
var LogIn = [["path", {
  d: "m10 17 5-5-5-5",
  key: "1bsop3"
}], ["path", {
  d: "M15 12H3",
  key: "6jk70r"
}], ["path", {
  d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
  key: "u53s6r"
}]];
var Lock = [["rect", {
  width: "18",
  height: "11",
  x: "3",
  y: "11",
  rx: "2",
  ry: "2",
  key: "1w4ew1"
}], ["path", {
  d: "M7 11V7a5 5 0 0 1 10 0v4",
  key: "fwvmzm"
}]];
var LogOut = [["path", {
  d: "m16 17 5-5-5-5",
  key: "1bji2h"
}], ["path", {
  d: "M21 12H9",
  key: "dn1m92"
}], ["path", {
  d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
  key: "1uf3rs"
}]];
var Logs = [["path", {
  d: "M13 12h8",
  key: "h98zly"
}], ["path", {
  d: "M13 18h8",
  key: "oe0vm4"
}], ["path", {
  d: "M13 6h8",
  key: "15sg57"
}], ["path", {
  d: "M3 12h1",
  key: "lp3yf2"
}], ["path", {
  d: "M3 18h1",
  key: "1eiwyy"
}], ["path", {
  d: "M3 6h1",
  key: "rgxa97"
}], ["path", {
  d: "M8 12h1",
  key: "1con00"
}], ["path", {
  d: "M8 18h1",
  key: "13wk12"
}], ["path", {
  d: "M8 6h1",
  key: "tn6mkg"
}]];
var Lollipop = [["circle", {
  cx: "11",
  cy: "11",
  r: "8",
  key: "4ej97u"
}], ["path", {
  d: "m21 21-4.3-4.3",
  key: "1qie3q"
}], ["path", {
  d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",
  key: "107gwy"
}]];
var Magnet = [["path", {
  d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",
  key: "1i3lhw"
}], ["path", {
  d: "m5 8 4 4",
  key: "j6kj7e"
}], ["path", {
  d: "m12 15 4 4",
  key: "lnac28"
}]];
var MailCheck = [["path", {
  d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
  key: "12jkf8"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
  key: "1ocrg3"
}], ["path", {
  d: "m16 19 2 2 4-4",
  key: "1b14m6"
}]];
var Luggage = [["path", {
  d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",
  key: "1m57jg"
}], ["path", {
  d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",
  key: "1l99gc"
}], ["path", {
  d: "M10 20h4",
  key: "ni2waw"
}], ["circle", {
  cx: "16",
  cy: "20",
  r: "2",
  key: "1vifvg"
}], ["circle", {
  cx: "8",
  cy: "20",
  r: "2",
  key: "ckkr5m"
}]];
var MailMinus = [["path", {
  d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
  key: "fuxbkv"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
  key: "1ocrg3"
}], ["path", {
  d: "M16 19h6",
  key: "xwg31i"
}]];
var MailOpen = [["path", {
  d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
  key: "1jhwl8"
}], ["path", {
  d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",
  key: "1qfld7"
}]];
var MailPlus = [["path", {
  d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",
  key: "12jkf8"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
  key: "1ocrg3"
}], ["path", {
  d: "M19 16v6",
  key: "tddt3s"
}], ["path", {
  d: "M16 19h6",
  key: "xwg31i"
}]];
var MailQuestionMark = [["path", {
  d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",
  key: "e61zoh"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
  key: "1ocrg3"
}], ["path", {
  d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
  key: "7z9rxb"
}], ["path", {
  d: "M20 22v.01",
  key: "12bgn6"
}]];
var MailSearch = [["path", {
  d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",
  key: "w80f2v"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
  key: "1ocrg3"
}], ["path", {
  d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  key: "8lzu5m"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3",
  key: "1xkwt0"
}], ["path", {
  d: "m22 22-1.5-1.5",
  key: "1x83k4"
}]];
var MailX = [["path", {
  d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",
  key: "1j9vog"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
  key: "1ocrg3"
}], ["path", {
  d: "m17 17 4 4",
  key: "1b3523"
}], ["path", {
  d: "m21 17-4 4",
  key: "uinynz"
}]];
var MailWarning = [["path", {
  d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",
  key: "e61zoh"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
  key: "1ocrg3"
}], ["path", {
  d: "M20 14v4",
  key: "1hm744"
}], ["path", {
  d: "M20 22v.01",
  key: "12bgn6"
}]];
var Mail = [["path", {
  d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
  key: "132q7q"
}], ["rect", {
  x: "2",
  y: "4",
  width: "20",
  height: "16",
  rx: "2",
  key: "izxlao"
}]];
var Mailbox = [["path", {
  d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",
  key: "1lbycx"
}], ["polyline", {
  points: "15,9 18,9 18,11",
  key: "1pm9c0"
}], ["path", {
  d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2",
  key: "15i455"
}], ["line", {
  x1: "6",
  x2: "7",
  y1: "10",
  y2: "10",
  key: "1e2scm"
}]];
var Mails = [["rect", {
  width: "16",
  height: "13",
  x: "6",
  y: "4",
  rx: "2",
  key: "1drq3f"
}], ["path", {
  d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",
  key: "xn252p"
}], ["path", {
  d: "M2 8v11c0 1.1.9 2 2 2h14",
  key: "n13cji"
}]];
var MapPinCheckInside = [["path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
  key: "1r0f0z"
}], ["path", {
  d: "m9 10 2 2 4-4",
  key: "1gnqz4"
}]];
var MapPinCheck = [["path", {
  d: "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728",
  key: "1dq61d"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3",
  key: "ilqhr7"
}], ["path", {
  d: "m16 18 2 2 4-4",
  key: "1mkfmb"
}]];
var MapPinHouse = [["path", {
  d: "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z",
  key: "1p1rcz"
}], ["path", {
  d: "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2",
  key: "mcbcs9"
}], ["path", {
  d: "M18 22v-3",
  key: "1t1ugv"
}], ["circle", {
  cx: "10",
  cy: "10",
  r: "3",
  key: "1ns7v1"
}]];
var MapPinMinusInside = [["path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
  key: "1r0f0z"
}], ["path", {
  d: "M9 10h6",
  key: "9gxzsh"
}]];
var MapPinMinus = [["path", {
  d: "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",
  key: "11uxia"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3",
  key: "ilqhr7"
}], ["path", {
  d: "M16 18h6",
  key: "987eiv"
}]];
var MapPinOff = [["path", {
  d: "M12.75 7.09a3 3 0 0 1 2.16 2.16",
  key: "1d4wjd"
}], ["path", {
  d: "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568",
  key: "12yil7"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533",
  key: "lhrkcz"
}], ["path", {
  d: "M9.13 9.13a3 3 0 0 0 3.74 3.74",
  key: "13wojd"
}]];
var MapPinPlusInside = [["path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
  key: "1r0f0z"
}], ["path", {
  d: "M12 7v6",
  key: "lw1j43"
}], ["path", {
  d: "M9 10h6",
  key: "9gxzsh"
}]];
var MapPinPlus = [["path", {
  d: "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",
  key: "fcdtly"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3",
  key: "ilqhr7"
}], ["path", {
  d: "M16 18h6",
  key: "987eiv"
}], ["path", {
  d: "M19 15v6",
  key: "10aioa"
}]];
var MapPinXInside = [["path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
  key: "1r0f0z"
}], ["path", {
  d: "m14.5 7.5-5 5",
  key: "3lb6iw"
}], ["path", {
  d: "m9.5 7.5 5 5",
  key: "ko136h"
}]];
var MapPinX = [["path", {
  d: "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077",
  key: "y0ewhp"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3",
  key: "ilqhr7"
}], ["path", {
  d: "m21.5 15.5-5 5",
  key: "11iqnx"
}], ["path", {
  d: "m21.5 20.5-5-5",
  key: "1bylgx"
}]];
var MapPin = [["path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
  key: "1r0f0z"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3",
  key: "ilqhr7"
}]];
var MapPinned = [["path", {
  d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",
  key: "11u0oz"
}], ["circle", {
  cx: "12",
  cy: "8",
  r: "2",
  key: "1822b1"
}], ["path", {
  d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",
  key: "q8zwxj"
}]];
var MapPlus = [["path", {
  d: "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12",
  key: "svfegj"
}], ["path", {
  d: "M15 5.764V12",
  key: "1ocw4k"
}], ["path", {
  d: "M18 15v6",
  key: "9wciyi"
}], ["path", {
  d: "M21 18h-6",
  key: "139f0c"
}], ["path", {
  d: "M9 3.236v15",
  key: "1uimfh"
}]];
var Map = [["path", {
  d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
  key: "169xi5"
}], ["path", {
  d: "M15 5.764v15",
  key: "1pn4in"
}], ["path", {
  d: "M9 3.236v15",
  key: "1uimfh"
}]];
var MarsStroke = [["path", {
  d: "m14 6 4 4",
  key: "1q72g9"
}], ["path", {
  d: "M17 3h4v4",
  key: "19p9u1"
}], ["path", {
  d: "m21 3-7.75 7.75",
  key: "1cjbfd"
}], ["circle", {
  cx: "9",
  cy: "15",
  r: "6",
  key: "bx5svt"
}]];
var Mars = [["path", {
  d: "M16 3h5v5",
  key: "1806ms"
}], ["path", {
  d: "m21 3-6.75 6.75",
  key: "pv0uzu"
}], ["circle", {
  cx: "10",
  cy: "14",
  r: "6",
  key: "1qwbdc"
}]];
var Martini = [["path", {
  d: "M8 22h8",
  key: "rmew8v"
}], ["path", {
  d: "M12 11v11",
  key: "ur9y6a"
}], ["path", {
  d: "m19 3-7 8-7-8Z",
  key: "1sgpiw"
}]];
var Maximize2 = [["path", {
  d: "M15 3h6v6",
  key: "1q9fwt"
}], ["path", {
  d: "m21 3-7 7",
  key: "1l2asr"
}], ["path", {
  d: "m3 21 7-7",
  key: "tjx5ai"
}], ["path", {
  d: "M9 21H3v-6",
  key: "wtvkvv"
}]];
var Maximize = [["path", {
  d: "M8 3H5a2 2 0 0 0-2 2v3",
  key: "1dcmit"
}], ["path", {
  d: "M21 8V5a2 2 0 0 0-2-2h-3",
  key: "1e4gt3"
}], ["path", {
  d: "M3 16v3a2 2 0 0 0 2 2h3",
  key: "wsl5sc"
}], ["path", {
  d: "M16 21h3a2 2 0 0 0 2-2v-3",
  key: "18trek"
}]];
var Medal = [["path", {
  d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
  key: "143lza"
}], ["path", {
  d: "M11 12 5.12 2.2",
  key: "qhuxz6"
}], ["path", {
  d: "m13 12 5.88-9.8",
  key: "hbye0f"
}], ["path", {
  d: "M8 7h8",
  key: "i86dvs"
}], ["circle", {
  cx: "12",
  cy: "17",
  r: "5",
  key: "qbz8iq"
}], ["path", {
  d: "M12 18v-2h-.5",
  key: "fawc4q"
}]];
var MegaphoneOff = [["path", {
  d: "M9.26 9.26 3 11v3l14.14 3.14",
  key: "3429n"
}], ["path", {
  d: "M21 15.34V6l-7.31 2.03",
  key: "4o1dh8"
}], ["path", {
  d: "M11.6 16.8a3 3 0 1 1-5.8-1.6",
  key: "1yl0tm"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}]];
var Megaphone = [["path", {
  d: "m3 11 18-5v12L3 14v-3z",
  key: "n962bs"
}], ["path", {
  d: "M11.6 16.8a3 3 0 1 1-5.8-1.6",
  key: "1yl0tm"
}]];
var Meh = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "15",
  y2: "15",
  key: "1xb1d9"
}], ["line", {
  x1: "9",
  x2: "9.01",
  y1: "9",
  y2: "9",
  key: "yxxnd0"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "9",
  y2: "9",
  key: "1p4y9e"
}]];
var MemoryStick = [["path", {
  d: "M6 19v-3",
  key: "1nvgqn"
}], ["path", {
  d: "M10 19v-3",
  key: "iu8nkm"
}], ["path", {
  d: "M14 19v-3",
  key: "kcehxu"
}], ["path", {
  d: "M18 19v-3",
  key: "1vh91z"
}], ["path", {
  d: "M8 11V9",
  key: "63erz4"
}], ["path", {
  d: "M16 11V9",
  key: "fru6f3"
}], ["path", {
  d: "M12 11V9",
  key: "ha00sb"
}], ["path", {
  d: "M2 15h20",
  key: "16ne18"
}], ["path", {
  d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",
  key: "lhddv3"
}]];
var Menu = [["path", {
  d: "M4 12h16",
  key: "1lakjw"
}], ["path", {
  d: "M4 18h16",
  key: "19g7jn"
}], ["path", {
  d: "M4 6h16",
  key: "1o0s65"
}]];
var Merge = [["path", {
  d: "m8 6 4-4 4 4",
  key: "ybng9g"
}], ["path", {
  d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",
  key: "1hyw0i"
}], ["path", {
  d: "m20 22-5-5",
  key: "1m27yz"
}]];
var MessageCircleCode = [["path", {
  d: "M10 9.5 8 12l2 2.5",
  key: "3mjy60"
}], ["path", {
  d: "m14 9.5 2 2.5-2 2.5",
  key: "1bir2l"
}], ["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22z",
  key: "k85zhp"
}]];
var MessageCircleDashed = [["path", {
  d: "M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",
  key: "16ll65"
}], ["path", {
  d: "M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",
  key: "1nq77a"
}], ["path", {
  d: "M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",
  key: "1sf7wn"
}], ["path", {
  d: "M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",
  key: "x1hs5g"
}], ["path", {
  d: "M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",
  key: "19m18z"
}], ["path", {
  d: "M3.5 17.5 2 22l4.5-1.5",
  key: "1f36qi"
}], ["path", {
  d: "M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",
  key: "1vz3ju"
}], ["path", {
  d: "M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",
  key: "19f9do"
}]];
var MessageCircleHeart = [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
  key: "vv11sd"
}], ["path", {
  d: "M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",
  key: "43lnbm"
}]];
var MessageCircleMore = [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
  key: "vv11sd"
}], ["path", {
  d: "M8 12h.01",
  key: "czm47f"
}], ["path", {
  d: "M12 12h.01",
  key: "1mp3jc"
}], ["path", {
  d: "M16 12h.01",
  key: "1l6xoz"
}]];
var MessageCircleOff = [["path", {
  d: "M20.5 14.9A9 9 0 0 0 9.1 3.5",
  key: "1iebmn"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",
  key: "1ov8ce"
}]];
var MessageCirclePlus = [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
  key: "vv11sd"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}], ["path", {
  d: "M12 8v8",
  key: "napkw2"
}]];
var MessageCircleQuestionMark = [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
  key: "vv11sd"
}], ["path", {
  d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
  key: "1u773s"
}], ["path", {
  d: "M12 17h.01",
  key: "p32p05"
}]];
var MessageCircleReply = [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
  key: "vv11sd"
}], ["path", {
  d: "m10 15-3-3 3-3",
  key: "1pgupc"
}], ["path", {
  d: "M7 12h7a2 2 0 0 1 2 2v1",
  key: "1gheu4"
}]];
var MessageCircleWarning = [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
  key: "vv11sd"
}], ["path", {
  d: "M12 8v4",
  key: "1got3b"
}], ["path", {
  d: "M12 16h.01",
  key: "1drbdi"
}]];
var MessageCircleX = [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
  key: "vv11sd"
}], ["path", {
  d: "m15 9-6 6",
  key: "1uzhvr"
}], ["path", {
  d: "m9 9 6 6",
  key: "z0biqf"
}]];
var MessageCircle = [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
  key: "vv11sd"
}]];
var MessageSquareCode = [["path", {
  d: "M10 7.5 8 10l2 2.5",
  key: "xb17xw"
}], ["path", {
  d: "m14 7.5 2 2.5-2 2.5",
  key: "5rap1v"
}], ["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  key: "1lielz"
}]];
var MessageSquareDashed = [["path", {
  d: "M10 17H7l-4 4v-7",
  key: "1r71xu"
}], ["path", {
  d: "M14 17h1",
  key: "nufu4t"
}], ["path", {
  d: "M14 3h1",
  key: "1ec4yj"
}], ["path", {
  d: "M19 3a2 2 0 0 1 2 2",
  key: "18rm91"
}], ["path", {
  d: "M21 14v1a2 2 0 0 1-2 2",
  key: "29akq3"
}], ["path", {
  d: "M21 9v1",
  key: "mxsmne"
}], ["path", {
  d: "M3 9v1",
  key: "1r0deq"
}], ["path", {
  d: "M5 3a2 2 0 0 0-2 2",
  key: "y57alp"
}], ["path", {
  d: "M9 3h1",
  key: "1yesri"
}]];
var MessageSquareDiff = [["path", {
  d: "m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",
  key: "1xuzuj"
}], ["path", {
  d: "M9 10h6",
  key: "9gxzsh"
}], ["path", {
  d: "M12 7v6",
  key: "lw1j43"
}], ["path", {
  d: "M9 17h6",
  key: "r8uit2"
}]];
var MessageSquareDot = [["path", {
  d: "M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",
  key: "uodpkb"
}], ["circle", {
  cx: "18",
  cy: "6",
  r: "3",
  key: "1h7g24"
}]];
var MessageSquareHeart = [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  key: "1lielz"
}], ["path", {
  d: "M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",
  key: "1blaws"
}]];
var MessageSquareLock = [["path", {
  d: "M19 15v-2a2 2 0 1 0-4 0v2",
  key: "h3d1vz"
}], ["path", {
  d: "M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5",
  key: "xsnnhn"
}], ["rect", {
  x: "13",
  y: "15",
  width: "8",
  height: "5",
  rx: "1",
  key: "1ccwuk"
}]];
var MessageSquareMore = [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  key: "1lielz"
}], ["path", {
  d: "M8 10h.01",
  key: "19clt8"
}], ["path", {
  d: "M12 10h.01",
  key: "1nrarc"
}], ["path", {
  d: "M16 10h.01",
  key: "1m94wz"
}]];
var MessageSquareOff = [["path", {
  d: "M21 15V5a2 2 0 0 0-2-2H9",
  key: "43el77"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10",
  key: "pwpm4a"
}]];
var MessageSquarePlus = [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  key: "1lielz"
}], ["path", {
  d: "M12 7v6",
  key: "lw1j43"
}], ["path", {
  d: "M9 10h6",
  key: "9gxzsh"
}]];
var MessageSquareQuote = [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  key: "1lielz"
}], ["path", {
  d: "M8 12a2 2 0 0 0 2-2V8H8",
  key: "1jfesj"
}], ["path", {
  d: "M14 12a2 2 0 0 0 2-2V8h-2",
  key: "1dq9mh"
}]];
var MessageSquareReply = [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  key: "1lielz"
}], ["path", {
  d: "m10 7-3 3 3 3",
  key: "1eugdv"
}], ["path", {
  d: "M17 13v-1a2 2 0 0 0-2-2H7",
  key: "ernfh3"
}]];
var MessageSquareShare = [["path", {
  d: "M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",
  key: "tqtdkg"
}], ["path", {
  d: "M16 3h5v5",
  key: "1806ms"
}], ["path", {
  d: "m16 8 5-5",
  key: "15mbrl"
}]];
var MessageSquareText = [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  key: "1lielz"
}], ["path", {
  d: "M13 8H7",
  key: "14i4kc"
}], ["path", {
  d: "M17 12H7",
  key: "16if0g"
}]];
var MessageSquareWarning = [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  key: "1lielz"
}], ["path", {
  d: "M12 7v2",
  key: "stiyo7"
}], ["path", {
  d: "M12 13h.01",
  key: "y0uutt"
}]];
var MessageSquareX = [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  key: "1lielz"
}], ["path", {
  d: "m14.5 7.5-5 5",
  key: "3lb6iw"
}], ["path", {
  d: "m9.5 7.5 5 5",
  key: "ko136h"
}]];
var MessageSquare = [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  key: "1lielz"
}]];
var MessagesSquare = [["path", {
  d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",
  key: "p1xzt8"
}], ["path", {
  d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",
  key: "1cx29u"
}]];
var MicVocal = [["path", {
  d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",
  key: "80a601"
}], ["path", {
  d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",
  key: "j0ngtp"
}], ["circle", {
  cx: "16",
  cy: "7",
  r: "5",
  key: "d08jfb"
}]];
var MicOff = [["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}], ["path", {
  d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",
  key: "80xlxr"
}], ["path", {
  d: "M5 10v2a7 7 0 0 0 12 5",
  key: "p2k8kg"
}], ["path", {
  d: "M15 9.34V5a3 3 0 0 0-5.68-1.33",
  key: "1gzdoj"
}], ["path", {
  d: "M9 9v3a3 3 0 0 0 5.12 2.12",
  key: "r2i35w"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "19",
  y2: "22",
  key: "x3vr5v"
}]];
var Mic = [["path", {
  d: "M12 19v3",
  key: "npa21l"
}], ["path", {
  d: "M19 10v2a7 7 0 0 1-14 0v-2",
  key: "1vc78b"
}], ["rect", {
  x: "9",
  y: "2",
  width: "6",
  height: "13",
  rx: "3",
  key: "s6n7sd"
}]];
var Microchip = [["path", {
  d: "M18 12h2",
  key: "quuxs7"
}], ["path", {
  d: "M18 16h2",
  key: "zsn3lv"
}], ["path", {
  d: "M18 20h2",
  key: "9x5y9y"
}], ["path", {
  d: "M18 4h2",
  key: "1luxfb"
}], ["path", {
  d: "M18 8h2",
  key: "nxqzg"
}], ["path", {
  d: "M4 12h2",
  key: "1ltxp0"
}], ["path", {
  d: "M4 16h2",
  key: "8a5zha"
}], ["path", {
  d: "M4 20h2",
  key: "27dk57"
}], ["path", {
  d: "M4 4h2",
  key: "10groj"
}], ["path", {
  d: "M4 8h2",
  key: "18vq6w"
}], ["path", {
  d: "M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z",
  key: "1681fp"
}]];
var Microscope = [["path", {
  d: "M6 18h8",
  key: "1borvv"
}], ["path", {
  d: "M3 22h18",
  key: "8prr45"
}], ["path", {
  d: "M14 22a7 7 0 1 0 0-14h-1",
  key: "1jwaiy"
}], ["path", {
  d: "M9 14h2",
  key: "197e7h"
}], ["path", {
  d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",
  key: "1bmzmy"
}], ["path", {
  d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",
  key: "1drr47"
}]];
var Microwave = [["rect", {
  width: "20",
  height: "15",
  x: "2",
  y: "4",
  rx: "2",
  key: "2no95f"
}], ["rect", {
  width: "8",
  height: "7",
  x: "6",
  y: "8",
  rx: "1",
  key: "zh9wx"
}], ["path", {
  d: "M18 8v7",
  key: "o5zi4n"
}], ["path", {
  d: "M6 19v2",
  key: "1loha6"
}], ["path", {
  d: "M18 19v2",
  key: "1dawf0"
}]];
var Milestone = [["path", {
  d: "M12 13v8",
  key: "1l5pq0"
}], ["path", {
  d: "M12 3v3",
  key: "1n5kay"
}], ["path", {
  d: "M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z",
  key: "1btarq"
}]];
var MilkOff = [["path", {
  d: "M8 2h8",
  key: "1ssgc1"
}], ["path", {
  d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",
  key: "y0ejgx"
}], ["path", {
  d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",
  key: "iaxqsy"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}]];
var Milk = [["path", {
  d: "M8 2h8",
  key: "1ssgc1"
}], ["path", {
  d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",
  key: "qtp12x"
}], ["path", {
  d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",
  key: "ygeh44"
}]];
var Minimize2 = [["path", {
  d: "m14 10 7-7",
  key: "oa77jy"
}], ["path", {
  d: "M20 10h-6V4",
  key: "mjg0md"
}], ["path", {
  d: "m3 21 7-7",
  key: "tjx5ai"
}], ["path", {
  d: "M4 14h6v6",
  key: "rmj7iw"
}]];
var Minimize = [["path", {
  d: "M8 3v3a2 2 0 0 1-2 2H3",
  key: "hohbtr"
}], ["path", {
  d: "M21 8h-3a2 2 0 0 1-2-2V3",
  key: "5jw1f3"
}], ["path", {
  d: "M3 16h3a2 2 0 0 1 2 2v3",
  key: "198tvr"
}], ["path", {
  d: "M16 21v-3a2 2 0 0 1 2-2h3",
  key: "ph8mxp"
}]];
var Minus = [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}]];
var MonitorCheck = [["path", {
  d: "m9 10 2 2 4-4",
  key: "1gnqz4"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2",
  key: "48i651"
}], ["path", {
  d: "M12 17v4",
  key: "1riwvh"
}], ["path", {
  d: "M8 21h8",
  key: "1ev6f3"
}]];
var MonitorCog = [["path", {
  d: "M12 17v4",
  key: "1riwvh"
}], ["path", {
  d: "m14.305 7.53.923-.382",
  key: "1mlnsw"
}], ["path", {
  d: "m15.228 4.852-.923-.383",
  key: "82mpwg"
}], ["path", {
  d: "m16.852 3.228-.383-.924",
  key: "ln4sir"
}], ["path", {
  d: "m16.852 8.772-.383.923",
  key: "1dejw0"
}], ["path", {
  d: "m19.148 3.228.383-.924",
  key: "192kgf"
}], ["path", {
  d: "m19.53 9.696-.382-.924",
  key: "fiavlr"
}], ["path", {
  d: "m20.772 4.852.924-.383",
  key: "1j8mgp"
}], ["path", {
  d: "m20.772 7.148.924.383",
  key: "zix9be"
}], ["path", {
  d: "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",
  key: "1tnzv8"
}], ["path", {
  d: "M8 21h8",
  key: "1ev6f3"
}], ["circle", {
  cx: "18",
  cy: "6",
  r: "3",
  key: "1h7g24"
}]];
var MonitorDot = [["circle", {
  cx: "19",
  cy: "6",
  r: "3",
  key: "108a5v"
}], ["path", {
  d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",
  key: "1fet9y"
}], ["path", {
  d: "M12 17v4",
  key: "1riwvh"
}], ["path", {
  d: "M8 21h8",
  key: "1ev6f3"
}]];
var MonitorDown = [["path", {
  d: "M12 13V7",
  key: "h0r20n"
}], ["path", {
  d: "m15 10-3 3-3-3",
  key: "lzhmyn"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2",
  key: "48i651"
}], ["path", {
  d: "M12 17v4",
  key: "1riwvh"
}], ["path", {
  d: "M8 21h8",
  key: "1ev6f3"
}]];
var MonitorOff = [["path", {
  d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",
  key: "k0q8oc"
}], ["path", {
  d: "M22 15V5a2 2 0 0 0-2-2H9",
  key: "cp1ac0"
}], ["path", {
  d: "M8 21h8",
  key: "1ev6f3"
}], ["path", {
  d: "M12 17v4",
  key: "1riwvh"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]];
var MonitorPause = [["path", {
  d: "M10 13V7",
  key: "1u13u9"
}], ["path", {
  d: "M14 13V7",
  key: "1vj9om"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2",
  key: "48i651"
}], ["path", {
  d: "M12 17v4",
  key: "1riwvh"
}], ["path", {
  d: "M8 21h8",
  key: "1ev6f3"
}]];
var MonitorPlay = [["path", {
  d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",
  key: "1pctta"
}], ["path", {
  d: "M12 17v4",
  key: "1riwvh"
}], ["path", {
  d: "M8 21h8",
  key: "1ev6f3"
}], ["rect", {
  x: "2",
  y: "3",
  width: "20",
  height: "14",
  rx: "2",
  key: "x3v2xh"
}]];
var MonitorSmartphone = [["path", {
  d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
  key: "10dyio"
}], ["path", {
  d: "M10 19v-3.96 3.15",
  key: "1irgej"
}], ["path", {
  d: "M7 19h5",
  key: "qswx4l"
}], ["rect", {
  width: "6",
  height: "10",
  x: "16",
  y: "12",
  rx: "2",
  key: "1egngj"
}]];
var MonitorSpeaker = [["path", {
  d: "M5.5 20H8",
  key: "1k40s5"
}], ["path", {
  d: "M17 9h.01",
  key: "1j24nn"
}], ["rect", {
  width: "10",
  height: "16",
  x: "12",
  y: "4",
  rx: "2",
  key: "ixliua"
}], ["path", {
  d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",
  key: "1mp6e1"
}], ["circle", {
  cx: "17",
  cy: "15",
  r: "1",
  key: "tqvash"
}]];
var MonitorStop = [["path", {
  d: "M12 17v4",
  key: "1riwvh"
}], ["path", {
  d: "M8 21h8",
  key: "1ev6f3"
}], ["rect", {
  x: "2",
  y: "3",
  width: "20",
  height: "14",
  rx: "2",
  key: "x3v2xh"
}], ["rect", {
  x: "9",
  y: "7",
  width: "6",
  height: "6",
  rx: "1",
  key: "5m2oou"
}]];
var MonitorUp = [["path", {
  d: "m9 10 3-3 3 3",
  key: "11gsxs"
}], ["path", {
  d: "M12 13V7",
  key: "h0r20n"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2",
  key: "48i651"
}], ["path", {
  d: "M12 17v4",
  key: "1riwvh"
}], ["path", {
  d: "M8 21h8",
  key: "1ev6f3"
}]];
var MonitorX = [["path", {
  d: "m14.5 12.5-5-5",
  key: "1jahn5"
}], ["path", {
  d: "m9.5 12.5 5-5",
  key: "1k2t7b"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2",
  key: "48i651"
}], ["path", {
  d: "M12 17v4",
  key: "1riwvh"
}], ["path", {
  d: "M8 21h8",
  key: "1ev6f3"
}]];
var Monitor = [["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2",
  key: "48i651"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "21",
  y2: "21",
  key: "1svkeh"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "17",
  y2: "21",
  key: "vw1qmm"
}]];
var Moon = [["path", {
  d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
  key: "a7tn18"
}]];
var MoonStar = [["path", {
  d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",
  key: "4ay0iu"
}], ["path", {
  d: "M20 3v4",
  key: "1olli1"
}], ["path", {
  d: "M22 5h-4",
  key: "1gvqau"
}]];
var MountainSnow = [["path", {
  d: "m8 3 4 8 5-5 5 15H2L8 3z",
  key: "otkl63"
}], ["path", {
  d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",
  key: "1pvmmp"
}]];
var Mountain = [["path", {
  d: "m8 3 4 8 5-5 5 15H2L8 3z",
  key: "otkl63"
}]];
var MouseOff = [["path", {
  d: "M12 6v.343",
  key: "1gyhex"
}], ["path", {
  d: "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218",
  key: "ukzz01"
}], ["path", {
  d: "M19 13.343V9A7 7 0 0 0 8.56 2.902",
  key: "104jy9"
}], ["path", {
  d: "M22 22 2 2",
  key: "1r8tn9"
}]];
var MousePointer2 = [["path", {
  d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
  key: "edeuup"
}]];
var MousePointerBan = [["path", {
  d: "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z",
  key: "11pp1i"
}], ["circle", {
  cx: "16",
  cy: "16",
  r: "6",
  key: "qoo3c4"
}], ["path", {
  d: "m11.8 11.8 8.4 8.4",
  key: "oogvdj"
}]];
var MousePointer = [["path", {
  d: "M12.586 12.586 19 19",
  key: "ea5xo7"
}], ["path", {
  d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",
  key: "277e5u"
}]];
var Mouse = [["rect", {
  x: "5",
  y: "2",
  width: "14",
  height: "20",
  rx: "7",
  key: "11ol66"
}], ["path", {
  d: "M12 6v4",
  key: "16clxf"
}]];
var MousePointerClick = [["path", {
  d: "M14 4.1 12 6",
  key: "ita8i4"
}], ["path", {
  d: "m5.1 8-2.9-.8",
  key: "1go3kf"
}], ["path", {
  d: "m6 12-1.9 2",
  key: "mnht97"
}], ["path", {
  d: "M7.2 2.2 8 5.1",
  key: "1cfko1"
}], ["path", {
  d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
  key: "s0h3yz"
}]];
var Move3d = [["path", {
  d: "M5 3v16h16",
  key: "1mqmf9"
}], ["path", {
  d: "m5 19 6-6",
  key: "jh6hbb"
}], ["path", {
  d: "m2 6 3-3 3 3",
  key: "tkyvxa"
}], ["path", {
  d: "m18 16 3 3-3 3",
  key: "1d4glt"
}]];
var MoveDiagonal2 = [["path", {
  d: "M19 13v6h-6",
  key: "1hxl6d"
}], ["path", {
  d: "M5 11V5h6",
  key: "12e2xe"
}], ["path", {
  d: "m5 5 14 14",
  key: "11anup"
}]];
var MoveDiagonal = [["path", {
  d: "M11 19H5v-6",
  key: "8awifj"
}], ["path", {
  d: "M13 5h6v6",
  key: "7voy1q"
}], ["path", {
  d: "M19 5 5 19",
  key: "wwaj1z"
}]];
var MoveDownLeft = [["path", {
  d: "M11 19H5V13",
  key: "1akmht"
}], ["path", {
  d: "M19 5L5 19",
  key: "72u4yj"
}]];
var MoveDownRight = [["path", {
  d: "M19 13V19H13",
  key: "10vkzq"
}], ["path", {
  d: "M5 5L19 19",
  key: "5zm2fv"
}]];
var MoveDown = [["path", {
  d: "M8 18L12 22L16 18",
  key: "cskvfv"
}], ["path", {
  d: "M12 2V22",
  key: "r89rzk"
}]];
var MoveLeft = [["path", {
  d: "M6 8L2 12L6 16",
  key: "kyvwex"
}], ["path", {
  d: "M2 12H22",
  key: "1m8cig"
}]];
var MoveRight = [["path", {
  d: "M18 8L22 12L18 16",
  key: "1r0oui"
}], ["path", {
  d: "M2 12H22",
  key: "1m8cig"
}]];
var MoveHorizontal = [["path", {
  d: "m18 8 4 4-4 4",
  key: "1ak13k"
}], ["path", {
  d: "M2 12h20",
  key: "9i4pu4"
}], ["path", {
  d: "m6 8-4 4 4 4",
  key: "15zrgr"
}]];
var MoveUpLeft = [["path", {
  d: "M5 11V5H11",
  key: "3q78g9"
}], ["path", {
  d: "M5 5L19 19",
  key: "5zm2fv"
}]];
var MoveUpRight = [["path", {
  d: "M13 5H19V11",
  key: "1n1gyv"
}], ["path", {
  d: "M19 5L5 19",
  key: "72u4yj"
}]];
var MoveUp = [["path", {
  d: "M8 6L12 2L16 6",
  key: "1yvkyx"
}], ["path", {
  d: "M12 2V22",
  key: "r89rzk"
}]];
var Move = [["path", {
  d: "M12 2v20",
  key: "t6zp3m"
}], ["path", {
  d: "m15 19-3 3-3-3",
  key: "11eu04"
}], ["path", {
  d: "m19 9 3 3-3 3",
  key: "1mg7y2"
}], ["path", {
  d: "M2 12h20",
  key: "9i4pu4"
}], ["path", {
  d: "m5 9-3 3 3 3",
  key: "j64kie"
}], ["path", {
  d: "m9 5 3-3 3 3",
  key: "l8vdw6"
}]];
var MoveVertical = [["path", {
  d: "M12 2v20",
  key: "t6zp3m"
}], ["path", {
  d: "m8 18 4 4 4-4",
  key: "bh5tu3"
}], ["path", {
  d: "m8 6 4-4 4 4",
  key: "ybng9g"
}]];
var Music3 = [["circle", {
  cx: "12",
  cy: "18",
  r: "4",
  key: "m3r9ws"
}], ["path", {
  d: "M16 18V2",
  key: "40x2m5"
}]];
var Music2 = [["circle", {
  cx: "8",
  cy: "18",
  r: "4",
  key: "1fc0mg"
}], ["path", {
  d: "M12 18V2l7 4",
  key: "g04rme"
}]];
var Music4 = [["path", {
  d: "M9 18V5l12-2v13",
  key: "1jmyc2"
}], ["path", {
  d: "m9 9 12-2",
  key: "1e64n2"
}], ["circle", {
  cx: "6",
  cy: "18",
  r: "3",
  key: "fqmcym"
}], ["circle", {
  cx: "18",
  cy: "16",
  r: "3",
  key: "1hluhg"
}]];
var Music = [["path", {
  d: "M9 18V5l12-2v13",
  key: "1jmyc2"
}], ["circle", {
  cx: "6",
  cy: "18",
  r: "3",
  key: "fqmcym"
}], ["circle", {
  cx: "18",
  cy: "16",
  r: "3",
  key: "1hluhg"
}]];
var Navigation2Off = [["path", {
  d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17",
  key: "qoq2o2"
}], ["path", {
  d: "M14.53 8.88 12 2l-1.17 3.17",
  key: "k3sjzy"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}]];
var Navigation2 = [["polygon", {
  points: "12 2 19 21 12 17 5 21 12 2",
  key: "x8c0qg"
}]];
var Navigation = [["polygon", {
  points: "3 11 22 2 13 21 11 13 3 11",
  key: "1ltx0t"
}]];
var NavigationOff = [["path", {
  d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43",
  key: "1vdtb7"
}], ["path", {
  d: "M17.39 11.73 22 2l-9.73 4.61",
  key: "tya3r6"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}]];
var Network = [["rect", {
  x: "16",
  y: "16",
  width: "6",
  height: "6",
  rx: "1",
  key: "4q2zg0"
}], ["rect", {
  x: "2",
  y: "16",
  width: "6",
  height: "6",
  rx: "1",
  key: "8cvhb9"
}], ["rect", {
  x: "9",
  y: "2",
  width: "6",
  height: "6",
  rx: "1",
  key: "1egb70"
}], ["path", {
  d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
  key: "1jsf9p"
}], ["path", {
  d: "M12 12V8",
  key: "2874zd"
}]];
var Nfc = [["path", {
  d: "M6 8.32a7.43 7.43 0 0 1 0 7.36",
  key: "9iaqei"
}], ["path", {
  d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58",
  key: "1yha7l"
}], ["path", {
  d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",
  key: "4iu2gk"
}], ["path", {
  d: "M16.37 2a20.16 20.16 0 0 1 0 20",
  key: "sap9u2"
}]];
var Newspaper = [["path", {
  d: "M15 18h-5",
  key: "95g1m2"
}], ["path", {
  d: "M18 14h-8",
  key: "sponae"
}], ["path", {
  d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",
  key: "39pd36"
}], ["rect", {
  width: "8",
  height: "4",
  x: "10",
  y: "6",
  rx: "1",
  key: "aywv1n"
}]];
var NonBinary = [["path", {
  d: "M12 2v10",
  key: "mnfbl"
}], ["path", {
  d: "m8.5 4 7 4",
  key: "m1xjk3"
}], ["path", {
  d: "m8.5 8 7-4",
  key: "t0m5j6"
}], ["circle", {
  cx: "12",
  cy: "17",
  r: "5",
  key: "qbz8iq"
}]];
var NotebookPen = [["path", {
  d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",
  key: "re6nr2"
}], ["path", {
  d: "M2 6h4",
  key: "aawbzj"
}], ["path", {
  d: "M2 10h4",
  key: "l0bgd4"
}], ["path", {
  d: "M2 14h4",
  key: "1gsvsf"
}], ["path", {
  d: "M2 18h4",
  key: "1bu2t1"
}], ["path", {
  d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
  key: "pqwjuv"
}]];
var NotebookTabs = [["path", {
  d: "M2 6h4",
  key: "aawbzj"
}], ["path", {
  d: "M2 10h4",
  key: "l0bgd4"
}], ["path", {
  d: "M2 14h4",
  key: "1gsvsf"
}], ["path", {
  d: "M2 18h4",
  key: "1bu2t1"
}], ["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2",
  key: "1nb95v"
}], ["path", {
  d: "M15 2v20",
  key: "dcj49h"
}], ["path", {
  d: "M15 7h5",
  key: "1xj5lc"
}], ["path", {
  d: "M15 12h5",
  key: "w5shd9"
}], ["path", {
  d: "M15 17h5",
  key: "1qaofu"
}]];
var NotebookText = [["path", {
  d: "M2 6h4",
  key: "aawbzj"
}], ["path", {
  d: "M2 10h4",
  key: "l0bgd4"
}], ["path", {
  d: "M2 14h4",
  key: "1gsvsf"
}], ["path", {
  d: "M2 18h4",
  key: "1bu2t1"
}], ["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2",
  key: "1nb95v"
}], ["path", {
  d: "M9.5 8h5",
  key: "11mslq"
}], ["path", {
  d: "M9.5 12H16",
  key: "ktog6x"
}], ["path", {
  d: "M9.5 16H14",
  key: "p1seyn"
}]];
var Notebook = [["path", {
  d: "M2 6h4",
  key: "aawbzj"
}], ["path", {
  d: "M2 10h4",
  key: "l0bgd4"
}], ["path", {
  d: "M2 14h4",
  key: "1gsvsf"
}], ["path", {
  d: "M2 18h4",
  key: "1bu2t1"
}], ["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2",
  key: "1nb95v"
}], ["path", {
  d: "M16 2v20",
  key: "rotuqe"
}]];
var NotepadTextDashed = [["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M12 2v4",
  key: "3427ic"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v2",
  key: "j91f56"
}], ["path", {
  d: "M20 12v2",
  key: "w8o0tu"
}], ["path", {
  d: "M20 18v2a2 2 0 0 1-2 2h-1",
  key: "1c9ggx"
}], ["path", {
  d: "M13 22h-2",
  key: "191ugt"
}], ["path", {
  d: "M7 22H6a2 2 0 0 1-2-2v-2",
  key: "1rt9px"
}], ["path", {
  d: "M4 14v-2",
  key: "1v0sqh"
}], ["path", {
  d: "M4 8V6a2 2 0 0 1 2-2h2",
  key: "1mwabg"
}], ["path", {
  d: "M8 10h6",
  key: "3oa6kw"
}], ["path", {
  d: "M8 14h8",
  key: "1fgep2"
}], ["path", {
  d: "M8 18h5",
  key: "17enja"
}]];
var NotepadText = [["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M12 2v4",
  key: "3427ic"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["rect", {
  width: "16",
  height: "18",
  x: "4",
  y: "4",
  rx: "2",
  key: "1u9h20"
}], ["path", {
  d: "M8 10h6",
  key: "3oa6kw"
}], ["path", {
  d: "M8 14h8",
  key: "1fgep2"
}], ["path", {
  d: "M8 18h5",
  key: "17enja"
}]];
var NutOff = [["path", {
  d: "M12 4V2",
  key: "1k5q1u"
}], ["path", {
  d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",
  key: "1xcvy9"
}], ["path", {
  d: "M19 10v3.343",
  key: "163tfc"
}], ["path", {
  d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",
  key: "17914v"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}]];
var Nut = [["path", {
  d: "M12 4V2",
  key: "1k5q1u"
}], ["path", {
  d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",
  key: "1tgyif"
}], ["path", {
  d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",
  key: "tnsqj"
}]];
var OctagonAlert = [["path", {
  d: "M12 16h.01",
  key: "1drbdi"
}], ["path", {
  d: "M12 8v4",
  key: "1got3b"
}], ["path", {
  d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",
  key: "1fd625"
}]];
var OctagonMinus = [["path", {
  d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
  key: "2d38gg"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}]];
var OctagonPause = [["path", {
  d: "M10 15V9",
  key: "1lckn7"
}], ["path", {
  d: "M14 15V9",
  key: "1muqhk"
}], ["path", {
  d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
  key: "2d38gg"
}]];
var OctagonX = [["path", {
  d: "m15 9-6 6",
  key: "1uzhvr"
}], ["path", {
  d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
  key: "2d38gg"
}], ["path", {
  d: "m9 9 6 6",
  key: "z0biqf"
}]];
var Octagon = [["path", {
  d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",
  key: "2d38gg"
}]];
var Omega = [["path", {
  d: "M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21",
  key: "1x94xo"
}]];
var Option = [["path", {
  d: "M3 3h6l6 18h6",
  key: "ph9rgk"
}], ["path", {
  d: "M14 3h7",
  key: "16f0ms"
}]];
var Orbit = [["path", {
  d: "M20.341 6.484A10 10 0 0 1 10.266 21.85",
  key: "1enhxb"
}], ["path", {
  d: "M3.659 17.516A10 10 0 0 1 13.74 2.152",
  key: "1crzgf"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}], ["circle", {
  cx: "19",
  cy: "5",
  r: "2",
  key: "mhkx31"
}], ["circle", {
  cx: "5",
  cy: "19",
  r: "2",
  key: "v8kfzx"
}]];
var Origami = [["path", {
  d: "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025",
  key: "1bx4vc"
}], ["path", {
  d: "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009",
  key: "1h3km6"
}], ["path", {
  d: "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027",
  key: "1hj4wg"
}]];
var Package2 = [["path", {
  d: "M12 3v6",
  key: "1holv5"
}], ["path", {
  d: "M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z",
  key: "187q7i"
}], ["path", {
  d: "M3.054 9.013h17.893",
  key: "grwhos"
}]];
var PackageCheck = [["path", {
  d: "m16 16 2 2 4-4",
  key: "gfu2re"
}], ["path", {
  d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
  key: "e7tb2h"
}], ["path", {
  d: "m7.5 4.27 9 5.15",
  key: "1c824w"
}], ["polyline", {
  points: "3.29 7 12 12 20.71 7",
  key: "ousv84"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "12",
  key: "a4e8g8"
}]];
var PackageMinus = [["path", {
  d: "M16 16h6",
  key: "100bgy"
}], ["path", {
  d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
  key: "e7tb2h"
}], ["path", {
  d: "m7.5 4.27 9 5.15",
  key: "1c824w"
}], ["polyline", {
  points: "3.29 7 12 12 20.71 7",
  key: "ousv84"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "12",
  key: "a4e8g8"
}]];
var PackageOpen = [["path", {
  d: "M12 22v-9",
  key: "x3hkom"
}], ["path", {
  d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",
  key: "2ntwy6"
}], ["path", {
  d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",
  key: "1pmm1c"
}], ["path", {
  d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",
  key: "12ttoo"
}]];
var PackagePlus = [["path", {
  d: "M16 16h6",
  key: "100bgy"
}], ["path", {
  d: "M19 13v6",
  key: "85cyf1"
}], ["path", {
  d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
  key: "e7tb2h"
}], ["path", {
  d: "m7.5 4.27 9 5.15",
  key: "1c824w"
}], ["polyline", {
  points: "3.29 7 12 12 20.71 7",
  key: "ousv84"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "12",
  key: "a4e8g8"
}]];
var PackageSearch = [["path", {
  d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
  key: "e7tb2h"
}], ["path", {
  d: "m7.5 4.27 9 5.15",
  key: "1c824w"
}], ["polyline", {
  points: "3.29 7 12 12 20.71 7",
  key: "ousv84"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "12",
  key: "a4e8g8"
}], ["circle", {
  cx: "18.5",
  cy: "15.5",
  r: "2.5",
  key: "b5zd12"
}], ["path", {
  d: "M20.27 17.27 22 19",
  key: "1l4muz"
}]];
var PackageX = [["path", {
  d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
  key: "e7tb2h"
}], ["path", {
  d: "m7.5 4.27 9 5.15",
  key: "1c824w"
}], ["polyline", {
  points: "3.29 7 12 12 20.71 7",
  key: "ousv84"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "12",
  key: "a4e8g8"
}], ["path", {
  d: "m17 13 5 5m-5 0 5-5",
  key: "im3w4b"
}]];
var PaintBucket = [["path", {
  d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",
  key: "irua1i"
}], ["path", {
  d: "m5 2 5 5",
  key: "1lls2c"
}], ["path", {
  d: "M2 13h15",
  key: "1hkzvu"
}], ["path", {
  d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",
  key: "xk76lq"
}]];
var Package = [["path", {
  d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
  key: "1a0edw"
}], ["path", {
  d: "M12 22V12",
  key: "d0xqtd"
}], ["polyline", {
  points: "3.29 7 12 12 20.71 7",
  key: "ousv84"
}], ["path", {
  d: "m7.5 4.27 9 5.15",
  key: "1c824w"
}]];
var PaintRoller = [["rect", {
  width: "16",
  height: "6",
  x: "2",
  y: "2",
  rx: "2",
  key: "jcyz7m"
}], ["path", {
  d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",
  key: "1b9h7c"
}], ["rect", {
  width: "4",
  height: "6",
  x: "8",
  y: "16",
  rx: "1",
  key: "d6e7yl"
}]];
var PaintbrushVertical = [["path", {
  d: "M10 2v2",
  key: "7u0qdc"
}], ["path", {
  d: "M14 2v4",
  key: "qmzblu"
}], ["path", {
  d: "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z",
  key: "ycvu00"
}], ["path", {
  d: "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1",
  key: "iw4wnp"
}]];
var Paintbrush = [["path", {
  d: "m14.622 17.897-10.68-2.913",
  key: "vj2p1u"
}], ["path", {
  d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",
  key: "18tc5c"
}], ["path", {
  d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",
  key: "ytzfxy"
}]];
var Palette = [["path", {
  d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
  key: "e79jfc"
}], ["circle", {
  cx: "13.5",
  cy: "6.5",
  r: ".5",
  fill: "currentColor",
  key: "1okk4w"
}], ["circle", {
  cx: "17.5",
  cy: "10.5",
  r: ".5",
  fill: "currentColor",
  key: "f64h9f"
}], ["circle", {
  cx: "6.5",
  cy: "12.5",
  r: ".5",
  fill: "currentColor",
  key: "qy21gx"
}], ["circle", {
  cx: "8.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor",
  key: "fotxhn"
}]];
var Panda = [["path", {
  d: "M11.25 17.25h1.5L12 18z",
  key: "1wmwwj"
}], ["path", {
  d: "m15 12 2 2",
  key: "k60wz4"
}], ["path", {
  d: "M18 6.5a.5.5 0 0 0-.5-.5",
  key: "1ch4h4"
}], ["path", {
  d: "M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83",
  key: "1c660l"
}], ["path", {
  d: "M6 6.5a.495.495 0 0 1 .5-.5",
  key: "eviuep"
}], ["path", {
  d: "m9 12-2 2",
  key: "326nkw"
}]];
var PanelBottomClose = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M3 15h18",
  key: "5xshup"
}], ["path", {
  d: "m15 8-3 3-3-3",
  key: "1oxy1z"
}]];
var PanelBottomDashed = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M14 15h1",
  key: "171nev"
}], ["path", {
  d: "M19 15h2",
  key: "1vnucp"
}], ["path", {
  d: "M3 15h2",
  key: "8bym0q"
}], ["path", {
  d: "M9 15h1",
  key: "1tg3ks"
}]];
var PanelBottomOpen = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M3 15h18",
  key: "5xshup"
}], ["path", {
  d: "m9 10 3-3 3 3",
  key: "11gsxs"
}]];
var PanelLeftClose = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M9 3v18",
  key: "fh3hqa"
}], ["path", {
  d: "m16 15-3-3 3-3",
  key: "14y99z"
}]];
var PanelBottom = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M3 15h18",
  key: "5xshup"
}]];
var PanelLeftDashed = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M9 14v1",
  key: "askpd8"
}], ["path", {
  d: "M9 19v2",
  key: "16tejx"
}], ["path", {
  d: "M9 3v2",
  key: "1noubl"
}], ["path", {
  d: "M9 9v1",
  key: "19ebxg"
}]];
var PanelLeftOpen = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M9 3v18",
  key: "fh3hqa"
}], ["path", {
  d: "m14 9 3 3-3 3",
  key: "8010ee"
}]];
var PanelLeft = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M9 3v18",
  key: "fh3hqa"
}]];
var PanelRightClose = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M15 3v18",
  key: "14nvp0"
}], ["path", {
  d: "m8 9 3 3-3 3",
  key: "12hl5m"
}]];
var PanelRightDashed = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M15 14v1",
  key: "ilsfch"
}], ["path", {
  d: "M15 19v2",
  key: "1fst2f"
}], ["path", {
  d: "M15 3v2",
  key: "z204g4"
}], ["path", {
  d: "M15 9v1",
  key: "z2a8b1"
}]];
var PanelRightOpen = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M15 3v18",
  key: "14nvp0"
}], ["path", {
  d: "m10 15-3-3 3-3",
  key: "1pgupc"
}]];
var PanelRight = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M15 3v18",
  key: "14nvp0"
}]];
var PanelTopClose = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M3 9h18",
  key: "1pudct"
}], ["path", {
  d: "m9 16 3-3 3 3",
  key: "1idcnm"
}]];
var PanelTopDashed = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M14 9h1",
  key: "l0svgy"
}], ["path", {
  d: "M19 9h2",
  key: "te2zfg"
}], ["path", {
  d: "M3 9h2",
  key: "1h4ldw"
}], ["path", {
  d: "M9 9h1",
  key: "15jzuz"
}]];
var PanelTopOpen = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M3 9h18",
  key: "1pudct"
}], ["path", {
  d: "m15 14-3 3-3-3",
  key: "g215vf"
}]];
var PanelTop = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M3 9h18",
  key: "1pudct"
}]];
var PanelsLeftBottom = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M9 3v18",
  key: "fh3hqa"
}], ["path", {
  d: "M9 15h12",
  key: "5ijen5"
}]];
var PanelsRightBottom = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M3 15h12",
  key: "1wkqb3"
}], ["path", {
  d: "M15 3v18",
  key: "14nvp0"
}]];
var PanelsTopLeft = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M3 9h18",
  key: "1pudct"
}], ["path", {
  d: "M9 21V9",
  key: "1oto5p"
}]];
var Paperclip = [["path", {
  d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
  key: "1miecu"
}]];
var Parentheses = [["path", {
  d: "M8 21s-4-3-4-9 4-9 4-9",
  key: "uto9ud"
}], ["path", {
  d: "M16 3s4 3 4 9-4 9-4 9",
  key: "4w2vsq"
}]];
var ParkingMeter = [["path", {
  d: "M11 15h2",
  key: "199qp6"
}], ["path", {
  d: "M12 12v3",
  key: "158kv8"
}], ["path", {
  d: "M12 19v3",
  key: "npa21l"
}], ["path", {
  d: "M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z",
  key: "1jofit"
}], ["path", {
  d: "M9 9a3 3 0 1 1 6 0",
  key: "jdoeu8"
}]];
var PartyPopper = [["path", {
  d: "M5.8 11.3 2 22l10.7-3.79",
  key: "gwxi1d"
}], ["path", {
  d: "M4 3h.01",
  key: "1vcuye"
}], ["path", {
  d: "M22 8h.01",
  key: "1mrtc2"
}], ["path", {
  d: "M15 2h.01",
  key: "1cjtqr"
}], ["path", {
  d: "M22 20h.01",
  key: "1mrys2"
}], ["path", {
  d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
  key: "hbicv8"
}], ["path", {
  d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",
  key: "1i94pl"
}], ["path", {
  d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",
  key: "1cofks"
}], ["path", {
  d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
  key: "4kbmks"
}]];
var Pause = [["rect", {
  x: "14",
  y: "4",
  width: "4",
  height: "16",
  rx: "1",
  key: "zuxfzm"
}], ["rect", {
  x: "6",
  y: "4",
  width: "4",
  height: "16",
  rx: "1",
  key: "1okwgv"
}]];
var PawPrint = [["circle", {
  cx: "11",
  cy: "4",
  r: "2",
  key: "vol9p0"
}], ["circle", {
  cx: "18",
  cy: "8",
  r: "2",
  key: "17gozi"
}], ["circle", {
  cx: "20",
  cy: "16",
  r: "2",
  key: "1v9bxh"
}], ["path", {
  d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",
  key: "1ydw1z"
}]];
var PcCase = [["rect", {
  width: "14",
  height: "20",
  x: "5",
  y: "2",
  rx: "2",
  key: "1uq1d7"
}], ["path", {
  d: "M15 14h.01",
  key: "1kp3bh"
}], ["path", {
  d: "M9 6h6",
  key: "dgm16u"
}], ["path", {
  d: "M9 10h6",
  key: "9gxzsh"
}]];
var PenLine = [["path", {
  d: "M12 20h9",
  key: "t2du7b"
}], ["path", {
  d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
  key: "1ykcvy"
}]];
var PenOff = [["path", {
  d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",
  key: "bjo8r8"
}], ["path", {
  d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",
  key: "16h5ne"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]];
var PenTool = [["path", {
  d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",
  key: "nt11vn"
}], ["path", {
  d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",
  key: "15qc1e"
}], ["path", {
  d: "m2.3 2.3 7.286 7.286",
  key: "1wuzzi"
}], ["circle", {
  cx: "11",
  cy: "11",
  r: "2",
  key: "xmgehs"
}]];
var Pen = [["path", {
  d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
  key: "1a8usu"
}]];
var PencilLine = [["path", {
  d: "M12 20h9",
  key: "t2du7b"
}], ["path", {
  d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
  key: "1ykcvy"
}], ["path", {
  d: "m15 5 3 3",
  key: "1w25hb"
}]];
var PencilOff = [["path", {
  d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982",
  key: "bjo8r8"
}], ["path", {
  d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353",
  key: "16h5ne"
}], ["path", {
  d: "m15 5 4 4",
  key: "1mk7zo"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]];
var PencilRuler = [["path", {
  d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",
  key: "orapub"
}], ["path", {
  d: "m8 6 2-2",
  key: "115y1s"
}], ["path", {
  d: "m18 16 2-2",
  key: "ee94s4"
}], ["path", {
  d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",
  key: "cfq27r"
}], ["path", {
  d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
  key: "1a8usu"
}], ["path", {
  d: "m15 5 4 4",
  key: "1mk7zo"
}]];
var Pencil = [["path", {
  d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
  key: "1a8usu"
}], ["path", {
  d: "m15 5 4 4",
  key: "1mk7zo"
}]];
var Pentagon = [["path", {
  d: "M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z",
  key: "2hea0t"
}]];
var Percent = [["line", {
  x1: "19",
  x2: "5",
  y1: "5",
  y2: "19",
  key: "1x9vlm"
}], ["circle", {
  cx: "6.5",
  cy: "6.5",
  r: "2.5",
  key: "4mh3h7"
}], ["circle", {
  cx: "17.5",
  cy: "17.5",
  r: "2.5",
  key: "1mdrzq"
}]];
var PersonStanding = [["circle", {
  cx: "12",
  cy: "5",
  r: "1",
  key: "gxeob9"
}], ["path", {
  d: "m9 20 3-6 3 6",
  key: "se2kox"
}], ["path", {
  d: "m6 8 6 2 6-2",
  key: "4o3us4"
}], ["path", {
  d: "M12 10v4",
  key: "1kjpxc"
}]];
var PhilippinePeso = [["path", {
  d: "M20 11H4",
  key: "6ut86h"
}], ["path", {
  d: "M20 7H4",
  key: "zbl0bi"
}], ["path", {
  d: "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7",
  key: "1ana5r"
}]];
var PhoneCall = [["path", {
  d: "M13 2a9 9 0 0 1 9 9",
  key: "1itnx2"
}], ["path", {
  d: "M13 6a5 5 0 0 1 5 5",
  key: "11nki7"
}], ["path", {
  d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
  key: "9njp5v"
}]];
var PhoneForwarded = [["path", {
  d: "M14 6h8",
  key: "yd68k4"
}], ["path", {
  d: "m18 2 4 4-4 4",
  key: "pucp1d"
}], ["path", {
  d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
  key: "9njp5v"
}]];
var PhoneIncoming = [["path", {
  d: "M16 2v6h6",
  key: "1mfrl5"
}], ["path", {
  d: "m22 2-6 6",
  key: "6f0sa0"
}], ["path", {
  d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
  key: "9njp5v"
}]];
var PhoneMissed = [["path", {
  d: "m16 2 6 6",
  key: "1gw87d"
}], ["path", {
  d: "m22 2-6 6",
  key: "6f0sa0"
}], ["path", {
  d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
  key: "9njp5v"
}]];
var PhoneOff = [["path", {
  d: "M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272",
  key: "1wngk7"
}], ["path", {
  d: "M22 2 2 22",
  key: "y4kqgn"
}], ["path", {
  d: "M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473",
  key: "10hv5p"
}]];
var PhoneOutgoing = [["path", {
  d: "m16 8 6-6",
  key: "oawc05"
}], ["path", {
  d: "M22 8V2h-6",
  key: "oqy2zc"
}], ["path", {
  d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
  key: "9njp5v"
}]];
var Phone = [["path", {
  d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
  key: "9njp5v"
}]];
var Pi = [["line", {
  x1: "9",
  x2: "9",
  y1: "4",
  y2: "20",
  key: "ovs5a5"
}], ["path", {
  d: "M4 7c0-1.7 1.3-3 3-3h13",
  key: "10pag4"
}], ["path", {
  d: "M18 20c-1.7 0-3-1.3-3-3V4",
  key: "1gaosr"
}]];
var Piano = [["path", {
  d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",
  key: "lag0yf"
}], ["path", {
  d: "M2 14h20",
  key: "myj16y"
}], ["path", {
  d: "M6 14v4",
  key: "9ng0ue"
}], ["path", {
  d: "M10 14v4",
  key: "1v8uk5"
}], ["path", {
  d: "M14 14v4",
  key: "1tqops"
}], ["path", {
  d: "M18 14v4",
  key: "18uqwm"
}]];
var Pickaxe = [["path", {
  d: "M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",
  key: "we99rg"
}], ["path", {
  d: "M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",
  key: "1w6hck"
}], ["path", {
  d: "M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",
  key: "15hgfx"
}], ["path", {
  d: "M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",
  key: "452b4h"
}]];
var PictureInPicture2 = [["path", {
  d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",
  key: "daa4of"
}], ["rect", {
  width: "10",
  height: "7",
  x: "12",
  y: "13",
  rx: "2",
  key: "1nb8gs"
}]];
var PictureInPicture = [["path", {
  d: "M2 10h6V4",
  key: "zwrco"
}], ["path", {
  d: "m2 4 6 6",
  key: "ug085t"
}], ["path", {
  d: "M21 10V7a2 2 0 0 0-2-2h-7",
  key: "git5jr"
}], ["path", {
  d: "M3 14v2a2 2 0 0 0 2 2h3",
  key: "1f7fh3"
}], ["rect", {
  x: "12",
  y: "14",
  width: "10",
  height: "7",
  rx: "1",
  key: "1wjs3o"
}]];
var PiggyBank = [["path", {
  d: "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",
  key: "1piglc"
}], ["path", {
  d: "M16 10h.01",
  key: "1m94wz"
}], ["path", {
  d: "M2 8v1a2 2 0 0 0 2 2h1",
  key: "1env43"
}]];
var PilcrowLeft = [["path", {
  d: "M14 3v11",
  key: "mlfb7b"
}], ["path", {
  d: "M14 9h-3a3 3 0 0 1 0-6h9",
  key: "1ulc19"
}], ["path", {
  d: "M18 3v11",
  key: "1phi0r"
}], ["path", {
  d: "M22 18H2l4-4",
  key: "yt65j9"
}], ["path", {
  d: "m6 22-4-4",
  key: "6jgyf5"
}]];
var PilcrowRight = [["path", {
  d: "M10 3v11",
  key: "o3l5kj"
}], ["path", {
  d: "M10 9H7a1 1 0 0 1 0-6h8",
  key: "1wb1nc"
}], ["path", {
  d: "M14 3v11",
  key: "mlfb7b"
}], ["path", {
  d: "m18 14 4 4H2",
  key: "4r8io1"
}], ["path", {
  d: "m22 18-4 4",
  key: "1hjjrd"
}]];
var Pilcrow = [["path", {
  d: "M13 4v16",
  key: "8vvj80"
}], ["path", {
  d: "M17 4v16",
  key: "7dpous"
}], ["path", {
  d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13",
  key: "sh4n9v"
}]];
var PillBottle = [["path", {
  d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4",
  key: "17ldeb"
}], ["path", {
  d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7",
  key: "nc37y6"
}], ["rect", {
  width: "16",
  height: "5",
  x: "4",
  y: "2",
  rx: "1",
  key: "3jeezo"
}]];
var Pill = [["path", {
  d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",
  key: "wa1lgi"
}], ["path", {
  d: "m8.5 8.5 7 7",
  key: "rvfmvr"
}]];
var PinOff = [["path", {
  d: "M12 17v5",
  key: "bb1du9"
}], ["path", {
  d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",
  key: "znwnzq"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",
  key: "c9qhm2"
}]];
var Pin = [["path", {
  d: "M12 17v5",
  key: "bb1du9"
}], ["path", {
  d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
  key: "1nkz8b"
}]];
var Pipette = [["path", {
  d: "m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",
  key: "1y3wsu"
}], ["path", {
  d: "m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",
  key: "110lr1"
}], ["path", {
  d: "m2 22 .414-.414",
  key: "jhxm08"
}]];
var Pizza = [["path", {
  d: "m12 14-1 1",
  key: "11onhr"
}], ["path", {
  d: "m13.75 18.25-1.25 1.42",
  key: "1yisr3"
}], ["path", {
  d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12",
  key: "1qtqk6"
}], ["path", {
  d: "M18.8 9.3a1 1 0 0 0 2.1 7.7",
  key: "fbbbr2"
}], ["path", {
  d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",
  key: "1hyfdd"
}]];
var PlaneTakeoff = [["path", {
  d: "M2 22h20",
  key: "272qi7"
}], ["path", {
  d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",
  key: "fkigj9"
}]];
var PlaneLanding = [["path", {
  d: "M2 22h20",
  key: "272qi7"
}], ["path", {
  d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",
  key: "1ma21e"
}]];
var Plane = [["path", {
  d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
  key: "1v9wt8"
}]];
var Play = [["polygon", {
  points: "6 3 20 12 6 21 6 3",
  key: "1oa8hb"
}]];
var Plug2 = [["path", {
  d: "M9 2v6",
  key: "17ngun"
}], ["path", {
  d: "M15 2v6",
  key: "s7yy2p"
}], ["path", {
  d: "M12 17v5",
  key: "bb1du9"
}], ["path", {
  d: "M5 8h14",
  key: "pcz4l3"
}], ["path", {
  d: "M6 11V8h12v3a6 6 0 1 1-12 0Z",
  key: "wtfw2c"
}]];
var PlugZap = [["path", {
  d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",
  key: "goz73y"
}], ["path", {
  d: "m2 22 3-3",
  key: "19mgm9"
}], ["path", {
  d: "M7.5 13.5 10 11",
  key: "7xgeeb"
}], ["path", {
  d: "M10.5 16.5 13 14",
  key: "10btkg"
}], ["path", {
  d: "m18 3-4 4h6l-4 4",
  key: "16psg9"
}]];
var Plug = [["path", {
  d: "M12 22v-5",
  key: "1ega77"
}], ["path", {
  d: "M9 8V2",
  key: "14iosj"
}], ["path", {
  d: "M15 8V2",
  key: "18g5xt"
}], ["path", {
  d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",
  key: "osxo6l"
}]];
var Plus = [["path", {
  d: "M5 12h14",
  key: "1ays0h"
}], ["path", {
  d: "M12 5v14",
  key: "s699le"
}]];
var PocketKnife = [["path", {
  d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",
  key: "19w3oe"
}], ["path", {
  d: "M18 6h.01",
  key: "1v4wsw"
}], ["path", {
  d: "M6 18h.01",
  key: "uhywen"
}], ["path", {
  d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",
  key: "6fykxj"
}], ["path", {
  d: "M18 11.66V22a4 4 0 0 0 4-4V6",
  key: "1utzek"
}]];
var Pocket = [["path", {
  d: "M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z",
  key: "1uodqw"
}], ["path", {
  d: "m8 10 4 4 4-4",
  key: "1mxd5q"
}]];
var Podcast = [["path", {
  d: "M16.85 18.58a9 9 0 1 0-9.7 0",
  key: "d71mpg"
}], ["path", {
  d: "M8 14a5 5 0 1 1 8 0",
  key: "fc81rn"
}], ["circle", {
  cx: "12",
  cy: "11",
  r: "1",
  key: "1gvufo"
}], ["path", {
  d: "M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z",
  key: "za5kbj"
}]];
var PointerOff = [["path", {
  d: "M10 4.5V4a2 2 0 0 0-2.41-1.957",
  key: "jsi14n"
}], ["path", {
  d: "M13.9 8.4a2 2 0 0 0-1.26-1.295",
  key: "hirc7f"
}], ["path", {
  d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",
  key: "1jxb2e"
}], ["path", {
  d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",
  key: "10r7hm"
}], ["path", {
  d: "M6 6v8",
  key: "tv5xkp"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]];
var Pointer = [["path", {
  d: "M22 14a8 8 0 0 1-8 8",
  key: "56vcr3"
}], ["path", {
  d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2",
  key: "1agjmk"
}], ["path", {
  d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1",
  key: "wdbh2u"
}], ["path", {
  d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10",
  key: "1ibuk9"
}], ["path", {
  d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
  key: "g6ys72"
}]];
var Popcorn = [["path", {
  d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",
  key: "10td1f"
}], ["path", {
  d: "M10 22 9 8",
  key: "yjptiv"
}], ["path", {
  d: "m14 22 1-14",
  key: "8jwc8b"
}], ["path", {
  d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",
  key: "1qo33t"
}]];
var Popsicle = [["path", {
  d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",
  key: "1o68ps"
}], ["path", {
  d: "m22 22-5.5-5.5",
  key: "17o70y"
}]];
var PoundSterling = [["path", {
  d: "M18 7c0-5.333-8-5.333-8 0",
  key: "1prm2n"
}], ["path", {
  d: "M10 7v14",
  key: "18tmcs"
}], ["path", {
  d: "M6 21h12",
  key: "4dkmi1"
}], ["path", {
  d: "M6 13h10",
  key: "ybwr4a"
}]];
var PowerOff = [["path", {
  d: "M18.36 6.64A9 9 0 0 1 20.77 15",
  key: "dxknvb"
}], ["path", {
  d: "M6.16 6.16a9 9 0 1 0 12.68 12.68",
  key: "1x7qb5"
}], ["path", {
  d: "M12 2v4",
  key: "3427ic"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]];
var Power = [["path", {
  d: "M12 2v10",
  key: "mnfbl"
}], ["path", {
  d: "M18.4 6.6a9 9 0 1 1-12.77.04",
  key: "obofu9"
}]];
var Presentation = [["path", {
  d: "M2 3h20",
  key: "91anmk"
}], ["path", {
  d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",
  key: "2k9sn8"
}], ["path", {
  d: "m7 21 5-5 5 5",
  key: "bip4we"
}]];
var PrinterCheck = [["path", {
  d: "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5",
  key: "qeb09x"
}], ["path", {
  d: "m16 19 2 2 4-4",
  key: "1b14m6"
}], ["path", {
  d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2",
  key: "1md90i"
}], ["path", {
  d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
  key: "1itne7"
}]];
var Printer = [["path", {
  d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
  key: "143wyd"
}], ["path", {
  d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",
  key: "1itne7"
}], ["rect", {
  x: "6",
  y: "14",
  width: "12",
  height: "8",
  rx: "1",
  key: "1ue0tg"
}]];
var Proportions = [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2",
  key: "18n3k1"
}], ["path", {
  d: "M12 9v11",
  key: "1fnkrn"
}], ["path", {
  d: "M2 9h13a2 2 0 0 1 2 2v9",
  key: "11z3ex"
}]];
var Projector = [["path", {
  d: "M5 7 3 5",
  key: "1yys58"
}], ["path", {
  d: "M9 6V3",
  key: "1ptz9u"
}], ["path", {
  d: "m13 7 2-2",
  key: "1w3vmq"
}], ["circle", {
  cx: "9",
  cy: "13",
  r: "3",
  key: "1mma13"
}], ["path", {
  d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",
  key: "2frwzc"
}], ["path", {
  d: "M16 16h2",
  key: "dnq2od"
}]];
var Puzzle = [["path", {
  d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
  key: "w46dr5"
}]];
var QrCode = [["rect", {
  width: "5",
  height: "5",
  x: "3",
  y: "3",
  rx: "1",
  key: "1tu5fj"
}], ["rect", {
  width: "5",
  height: "5",
  x: "16",
  y: "3",
  rx: "1",
  key: "1v8r4q"
}], ["rect", {
  width: "5",
  height: "5",
  x: "3",
  y: "16",
  rx: "1",
  key: "1x03jg"
}], ["path", {
  d: "M21 16h-3a2 2 0 0 0-2 2v3",
  key: "177gqh"
}], ["path", {
  d: "M21 21v.01",
  key: "ents32"
}], ["path", {
  d: "M12 7v3a2 2 0 0 1-2 2H7",
  key: "8crl2c"
}], ["path", {
  d: "M3 12h.01",
  key: "nlz23k"
}], ["path", {
  d: "M12 3h.01",
  key: "n36tog"
}], ["path", {
  d: "M12 16v.01",
  key: "133mhm"
}], ["path", {
  d: "M16 12h1",
  key: "1slzba"
}], ["path", {
  d: "M21 12v.01",
  key: "1lwtk9"
}], ["path", {
  d: "M12 21v-1",
  key: "1880an"
}]];
var Pyramid = [["path", {
  d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",
  key: "aenxs0"
}], ["path", {
  d: "M12 2v20",
  key: "t6zp3m"
}]];
var Quote = [["path", {
  d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
  key: "rib7q0"
}], ["path", {
  d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
  key: "1ymkrd"
}]];
var Rabbit = [["path", {
  d: "M13 16a3 3 0 0 1 2.24 5",
  key: "1epib5"
}], ["path", {
  d: "M18 12h.01",
  key: "yjnet6"
}], ["path", {
  d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",
  key: "ue9ozu"
}], ["path", {
  d: "M20 8.54V4a2 2 0 1 0-4 0v3",
  key: "49iql8"
}], ["path", {
  d: "M7.612 12.524a3 3 0 1 0-1.6 4.3",
  key: "1e33i0"
}]];
var Radar = [["path", {
  d: "M19.07 4.93A10 10 0 0 0 6.99 3.34",
  key: "z3du51"
}], ["path", {
  d: "M4 6h.01",
  key: "oypzma"
}], ["path", {
  d: "M2.29 9.62A10 10 0 1 0 21.31 8.35",
  key: "qzzz0"
}], ["path", {
  d: "M16.24 7.76A6 6 0 1 0 8.23 16.67",
  key: "1yjesh"
}], ["path", {
  d: "M12 18h.01",
  key: "mhygvu"
}], ["path", {
  d: "M17.99 11.66A6 6 0 0 1 15.77 16.67",
  key: "1u2y91"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}], ["path", {
  d: "m13.41 10.59 5.66-5.66",
  key: "mhq4k0"
}]];
var Radiation = [["path", {
  d: "M12 12h.01",
  key: "1mp3jc"
}], ["path", {
  d: "M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z",
  key: "1y4lzb"
}], ["path", {
  d: "M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z",
  key: "163ggk"
}], ["path", {
  d: "M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z",
  key: "1l9i0b"
}]];
var Radical = [["path", {
  d: "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21",
  key: "1mqj8i"
}]];
var RadioReceiver = [["path", {
  d: "M5 16v2",
  key: "g5qcv5"
}], ["path", {
  d: "M19 16v2",
  key: "1gbaio"
}], ["rect", {
  width: "20",
  height: "8",
  x: "2",
  y: "8",
  rx: "2",
  key: "vjsjur"
}], ["path", {
  d: "M18 12h.01",
  key: "yjnet6"
}]];
var Radio = [["path", {
  d: "M16.247 7.761a6 6 0 0 1 0 8.478",
  key: "1fwjs5"
}], ["path", {
  d: "M19.075 4.933a10 10 0 0 1 0 14.134",
  key: "ehdyv1"
}], ["path", {
  d: "M4.925 19.067a10 10 0 0 1 0-14.134",
  key: "1q22gi"
}], ["path", {
  d: "M7.753 16.239a6 6 0 0 1 0-8.478",
  key: "r2q7qm"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}]];
var RadioTower = [["path", {
  d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9",
  key: "s0qx1y"
}], ["path", {
  d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",
  key: "1idnkw"
}], ["circle", {
  cx: "12",
  cy: "9",
  r: "2",
  key: "1092wv"
}], ["path", {
  d: "M16.2 4.8c2 2 2.26 5.11.8 7.47",
  key: "ojru2q"
}], ["path", {
  d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1",
  key: "rhi7fg"
}], ["path", {
  d: "M9.5 18h5",
  key: "mfy3pd"
}], ["path", {
  d: "m8 22 4-11 4 11",
  key: "25yftu"
}]];
var Radius = [["path", {
  d: "M20.34 17.52a10 10 0 1 0-2.82 2.82",
  key: "fydyku"
}], ["circle", {
  cx: "19",
  cy: "19",
  r: "2",
  key: "17f5cg"
}], ["path", {
  d: "m13.41 13.41 4.18 4.18",
  key: "1gqbwc"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}]];
var RailSymbol = [["path", {
  d: "M5 15h14",
  key: "m0yey3"
}], ["path", {
  d: "M5 9h14",
  key: "7tsvo6"
}], ["path", {
  d: "m14 20-5-5 6-6-5-5",
  key: "1jo42i"
}]];
var Rainbow = [["path", {
  d: "M22 17a10 10 0 0 0-20 0",
  key: "ozegv"
}], ["path", {
  d: "M6 17a6 6 0 0 1 12 0",
  key: "5giftw"
}], ["path", {
  d: "M10 17a2 2 0 0 1 4 0",
  key: "gnsikk"
}]];
var Rat = [["path", {
  d: "M13 22H4a2 2 0 0 1 0-4h12",
  key: "bt3f23"
}], ["path", {
  d: "M13.236 18a3 3 0 0 0-2.2-5",
  key: "1tbvmo"
}], ["path", {
  d: "M16 9h.01",
  key: "1bdo4e"
}], ["path", {
  d: "M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3",
  key: "9ch7kn"
}], ["path", {
  d: "M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18",
  key: "3s7e9i"
}]];
var Ratio = [["rect", {
  width: "12",
  height: "20",
  x: "6",
  y: "2",
  rx: "2",
  key: "1oxtiu"
}], ["rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "6",
  rx: "2",
  key: "9lu3g6"
}]];
var ReceiptCent = [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
  key: "q3az6g"
}], ["path", {
  d: "M12 6.5v11",
  key: "ecfhkf"
}], ["path", {
  d: "M15 9.4a4 4 0 1 0 0 5.2",
  key: "1makmb"
}]];
var ReceiptIndianRupee = [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
  key: "q3az6g"
}], ["path", {
  d: "M8 7h8",
  key: "i86dvs"
}], ["path", {
  d: "M12 17.5 8 15h1a4 4 0 0 0 0-8",
  key: "grpkl4"
}], ["path", {
  d: "M8 11h8",
  key: "vwpz6n"
}]];
var ReceiptEuro = [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
  key: "q3az6g"
}], ["path", {
  d: "M8 12h5",
  key: "1g6qi8"
}], ["path", {
  d: "M16 9.5a4 4 0 1 0 0 5.2",
  key: "b2px4r"
}]];
var ReceiptPoundSterling = [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
  key: "q3az6g"
}], ["path", {
  d: "M8 13h5",
  key: "1k9z8w"
}], ["path", {
  d: "M10 17V9.5a2.5 2.5 0 0 1 5 0",
  key: "1dzgp0"
}], ["path", {
  d: "M8 17h7",
  key: "8mjdqu"
}]];
var ReceiptJapaneseYen = [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
  key: "q3az6g"
}], ["path", {
  d: "m12 10 3-3",
  key: "1mc12w"
}], ["path", {
  d: "m9 7 3 3v7.5",
  key: "39i0xv"
}], ["path", {
  d: "M9 11h6",
  key: "1fldmi"
}], ["path", {
  d: "M9 15h6",
  key: "cctwl0"
}]];
var ReceiptRussianRuble = [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
  key: "q3az6g"
}], ["path", {
  d: "M8 15h5",
  key: "vxg57a"
}], ["path", {
  d: "M8 11h5a2 2 0 1 0 0-4h-3v10",
  key: "1usi5u"
}]];
var ReceiptSwissFranc = [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
  key: "q3az6g"
}], ["path", {
  d: "M10 17V7h5",
  key: "k7jq18"
}], ["path", {
  d: "M10 11h4",
  key: "1i0mka"
}], ["path", {
  d: "M8 15h5",
  key: "vxg57a"
}]];
var Receipt = [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
  key: "q3az6g"
}], ["path", {
  d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
  key: "1h4pet"
}], ["path", {
  d: "M12 17.5v-11",
  key: "1jc1ny"
}]];
var ReceiptText = [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
  key: "q3az6g"
}], ["path", {
  d: "M14 8H8",
  key: "1l3xfs"
}], ["path", {
  d: "M16 12H8",
  key: "1fr5h0"
}], ["path", {
  d: "M13 16H8",
  key: "wsln4y"
}]];
var RectangleCircle = [["path", {
  d: "M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z",
  key: "1m5n7q"
}], ["circle", {
  cx: "14",
  cy: "12",
  r: "8",
  key: "1pag6k"
}]];
var RectangleEllipsis = [["rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "6",
  rx: "2",
  key: "9lu3g6"
}], ["path", {
  d: "M12 12h.01",
  key: "1mp3jc"
}], ["path", {
  d: "M17 12h.01",
  key: "1m0b6t"
}], ["path", {
  d: "M7 12h.01",
  key: "eqddd0"
}]];
var RectangleGoggles = [["path", {
  d: "M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
  key: "d5y1f"
}]];
var RectangleHorizontal = [["rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "6",
  rx: "2",
  key: "9lu3g6"
}]];
var RectangleVertical = [["rect", {
  width: "12",
  height: "20",
  x: "6",
  y: "2",
  rx: "2",
  key: "1oxtiu"
}]];
var Recycle = [["path", {
  d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
  key: "x6z5xu"
}], ["path", {
  d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
  key: "1x4zh5"
}], ["path", {
  d: "m14 16-3 3 3 3",
  key: "f6jyew"
}], ["path", {
  d: "M8.293 13.596 7.196 9.5 3.1 10.598",
  key: "wf1obh"
}], ["path", {
  d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
  key: "9tzpgr"
}], ["path", {
  d: "m13.378 9.633 4.096 1.098 1.097-4.096",
  key: "1oe83g"
}]];
var Redo2 = [["path", {
  d: "m15 14 5-5-5-5",
  key: "12vg1m"
}], ["path", {
  d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",
  key: "6uklza"
}]];
var RedoDot = [["circle", {
  cx: "12",
  cy: "17",
  r: "1",
  key: "1ixnty"
}], ["path", {
  d: "M21 7v6h-6",
  key: "3ptur4"
}], ["path", {
  d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",
  key: "1kgawr"
}]];
var Redo = [["path", {
  d: "M21 7v6h-6",
  key: "3ptur4"
}], ["path", {
  d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",
  key: "1kgawr"
}]];
var RefreshCcwDot = [["path", {
  d: "M3 2v6h6",
  key: "18ldww"
}], ["path", {
  d: "M21 12A9 9 0 0 0 6 5.3L3 8",
  key: "1pbrqz"
}], ["path", {
  d: "M21 22v-6h-6",
  key: "usdfbe"
}], ["path", {
  d: "M3 12a9 9 0 0 0 15 6.7l3-2.7",
  key: "1hosoe"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "1",
  key: "41hilf"
}]];
var RefreshCcw = [["path", {
  d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
  key: "14sxne"
}], ["path", {
  d: "M3 3v5h5",
  key: "1xhq8a"
}], ["path", {
  d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
  key: "1hlbsb"
}], ["path", {
  d: "M16 16h5v5",
  key: "ccwih5"
}]];
var RefreshCwOff = [["path", {
  d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",
  key: "1krf6h"
}], ["path", {
  d: "M8 16H3v5",
  key: "1cv678"
}], ["path", {
  d: "M3 12C3 9.51 4 7.26 5.64 5.64",
  key: "ruvoct"
}], ["path", {
  d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",
  key: "19q130"
}], ["path", {
  d: "M21 12c0 1-.16 1.97-.47 2.87",
  key: "4w8emr"
}], ["path", {
  d: "M21 3v5h-5",
  key: "1q7to0"
}], ["path", {
  d: "M22 22 2 2",
  key: "1r8tn9"
}]];
var RefreshCw = [["path", {
  d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
  key: "v9h5vc"
}], ["path", {
  d: "M21 3v5h-5",
  key: "1q7to0"
}], ["path", {
  d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
  key: "3uifl3"
}], ["path", {
  d: "M8 16H3v5",
  key: "1cv678"
}]];
var Refrigerator = [["path", {
  d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",
  key: "fpq118"
}], ["path", {
  d: "M5 10h14",
  key: "elsbfy"
}], ["path", {
  d: "M15 7v6",
  key: "1nx30x"
}]];
var Regex = [["path", {
  d: "M17 3v10",
  key: "15fgeh"
}], ["path", {
  d: "m12.67 5.5 8.66 5",
  key: "1gpheq"
}], ["path", {
  d: "m12.67 10.5 8.66-5",
  key: "1dkfa6"
}], ["path", {
  d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",
  key: "swwfx4"
}]];
var RemoveFormatting = [["path", {
  d: "M4 7V4h16v3",
  key: "9msm58"
}], ["path", {
  d: "M5 20h6",
  key: "1h6pxn"
}], ["path", {
  d: "M13 4 8 20",
  key: "kqq6aj"
}], ["path", {
  d: "m15 15 5 5",
  key: "me55sn"
}], ["path", {
  d: "m20 15-5 5",
  key: "11p7ol"
}]];
var Repeat1 = [["path", {
  d: "m17 2 4 4-4 4",
  key: "nntrym"
}], ["path", {
  d: "M3 11v-1a4 4 0 0 1 4-4h14",
  key: "84bu3i"
}], ["path", {
  d: "m7 22-4-4 4-4",
  key: "1wqhfi"
}], ["path", {
  d: "M21 13v1a4 4 0 0 1-4 4H3",
  key: "1rx37r"
}], ["path", {
  d: "M11 10h1v4",
  key: "70cz1p"
}]];
var Repeat2 = [["path", {
  d: "m2 9 3-3 3 3",
  key: "1ltn5i"
}], ["path", {
  d: "M13 18H7a2 2 0 0 1-2-2V6",
  key: "1r6tfw"
}], ["path", {
  d: "m22 15-3 3-3-3",
  key: "4rnwn2"
}], ["path", {
  d: "M11 6h6a2 2 0 0 1 2 2v10",
  key: "2f72bc"
}]];
var ReplaceAll = [["path", {
  d: "M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",
  key: "1yyzbs"
}], ["path", {
  d: "M14 4a2 2 0 0 1 2-2",
  key: "1w2hp7"
}], ["path", {
  d: "M16 10a2 2 0 0 1-2-2",
  key: "shjach"
}], ["path", {
  d: "M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2",
  key: "zfj4xr"
}], ["path", {
  d: "M20 2a2 2 0 0 1 2 2",
  key: "188mtx"
}], ["path", {
  d: "M22 8a2 2 0 0 1-2 2",
  key: "ddf4tu"
}], ["path", {
  d: "m3 7 3 3 3-3",
  key: "x25e72"
}], ["path", {
  d: "M6 10V5a 3 3 0 0 1 3-3h1",
  key: "1ageje"
}], ["rect", {
  x: "2",
  y: "14",
  width: "8",
  height: "8",
  rx: "2",
  key: "4rksxw"
}]];
var Repeat = [["path", {
  d: "m17 2 4 4-4 4",
  key: "nntrym"
}], ["path", {
  d: "M3 11v-1a4 4 0 0 1 4-4h14",
  key: "84bu3i"
}], ["path", {
  d: "m7 22-4-4 4-4",
  key: "1wqhfi"
}], ["path", {
  d: "M21 13v1a4 4 0 0 1-4 4H3",
  key: "1rx37r"
}]];
var Replace = [["path", {
  d: "M14 4a2 2 0 0 1 2-2",
  key: "1w2hp7"
}], ["path", {
  d: "M16 10a2 2 0 0 1-2-2",
  key: "shjach"
}], ["path", {
  d: "M20 2a2 2 0 0 1 2 2",
  key: "188mtx"
}], ["path", {
  d: "M22 8a2 2 0 0 1-2 2",
  key: "ddf4tu"
}], ["path", {
  d: "m3 7 3 3 3-3",
  key: "x25e72"
}], ["path", {
  d: "M6 10V5a3 3 0 0 1 3-3h1",
  key: "3y3t5z"
}], ["rect", {
  x: "2",
  y: "14",
  width: "8",
  height: "8",
  rx: "2",
  key: "4rksxw"
}]];
var ReplyAll = [["path", {
  d: "m12 17-5-5 5-5",
  key: "1s3y5u"
}], ["path", {
  d: "M22 18v-2a4 4 0 0 0-4-4H7",
  key: "1fcyog"
}], ["path", {
  d: "m7 17-5-5 5-5",
  key: "1ed8i2"
}]];
var Reply = [["path", {
  d: "M20 18v-2a4 4 0 0 0-4-4H4",
  key: "5vmcpk"
}], ["path", {
  d: "m9 17-5-5 5-5",
  key: "nvlc11"
}]];
var Rewind = [["polygon", {
  points: "11 19 2 12 11 5 11 19",
  key: "14yba5"
}], ["polygon", {
  points: "22 19 13 12 22 5 22 19",
  key: "1pi1cj"
}]];
var Ribbon = [["path", {
  d: "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22",
  key: "1rnhq3"
}], ["path", {
  d: "m12 18 2.57-3.5",
  key: "116vt7"
}], ["path", {
  d: "M6.243 9.016a7 7 0 0 1 11.507-.009",
  key: "10dq0b"
}], ["path", {
  d: "M9.35 14.53 12 11.22",
  key: "tdsyp2"
}], ["path", {
  d: "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z",
  key: "nmifey"
}]];
var Rocket = [["path", {
  d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
  key: "m3kijz"
}], ["path", {
  d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
  key: "1fmvmk"
}], ["path", {
  d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
  key: "1f8sc4"
}], ["path", {
  d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
  key: "qeys4"
}]];
var RockingChair = [["polyline", {
  points: "3.5 2 6.5 12.5 18 12.5",
  key: "y3iy52"
}], ["line", {
  x1: "9.5",
  x2: "5.5",
  y1: "12.5",
  y2: "20",
  key: "19vg5i"
}], ["line", {
  x1: "15",
  x2: "18.5",
  y1: "12.5",
  y2: "20",
  key: "1inpmv"
}], ["path", {
  d: "M2.75 18a13 13 0 0 0 18.5 0",
  key: "1nquas"
}]];
var Rotate3d = [["path", {
  d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",
  key: "10n0gc"
}], ["path", {
  d: "m15.194 13.707 3.814 1.86-1.86 3.814",
  key: "16shm9"
}], ["path", {
  d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",
  key: "1lxi77"
}]];
var RollerCoaster = [["path", {
  d: "M6 19V5",
  key: "1r845m"
}], ["path", {
  d: "M10 19V6.8",
  key: "9j2tfs"
}], ["path", {
  d: "M14 19v-7.8",
  key: "10s8qv"
}], ["path", {
  d: "M18 5v4",
  key: "1tajlv"
}], ["path", {
  d: "M18 19v-6",
  key: "ielfq3"
}], ["path", {
  d: "M22 19V9",
  key: "158nzp"
}], ["path", {
  d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",
  key: "1930oh"
}]];
var RotateCcwKey = [["path", {
  d: "m14.5 9.5 1 1",
  key: "159eiq"
}], ["path", {
  d: "m15.5 8.5-4 4",
  key: "iirg3q"
}], ["path", {
  d: "M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8",
  key: "g2jlw"
}], ["path", {
  d: "M3 3v5h5",
  key: "1xhq8a"
}], ["circle", {
  cx: "10",
  cy: "14",
  r: "2",
  key: "1239so"
}]];
var RotateCcwSquare = [["path", {
  d: "M20 9V7a2 2 0 0 0-2-2h-6",
  key: "19z8uc"
}], ["path", {
  d: "m15 2-3 3 3 3",
  key: "177bxs"
}], ["path", {
  d: "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2",
  key: "d36hnl"
}]];
var RotateCcw = [["path", {
  d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
  key: "1357e3"
}], ["path", {
  d: "M3 3v5h5",
  key: "1xhq8a"
}]];
var RotateCwSquare = [["path", {
  d: "M12 5H6a2 2 0 0 0-2 2v3",
  key: "l96uqu"
}], ["path", {
  d: "m9 8 3-3-3-3",
  key: "1gzgc3"
}], ["path", {
  d: "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",
  key: "1w2k5h"
}]];
var RotateCw = [["path", {
  d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
  key: "1p45f6"
}], ["path", {
  d: "M21 3v5h-5",
  key: "1q7to0"
}]];
var RouteOff = [["circle", {
  cx: "6",
  cy: "19",
  r: "3",
  key: "1kj8tv"
}], ["path", {
  d: "M9 19h8.5c.4 0 .9-.1 1.3-.2",
  key: "1effex"
}], ["path", {
  d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",
  key: "k9y2ds"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3",
  key: "11nlu2"
}], ["path", {
  d: "M15 5h-4.3",
  key: "6537je"
}], ["circle", {
  cx: "18",
  cy: "5",
  r: "3",
  key: "gq8acd"
}]];
var Route = [["circle", {
  cx: "6",
  cy: "19",
  r: "3",
  key: "1kj8tv"
}], ["path", {
  d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",
  key: "1d8sl"
}], ["circle", {
  cx: "18",
  cy: "5",
  r: "3",
  key: "gq8acd"
}]];
var Router = [["rect", {
  width: "20",
  height: "8",
  x: "2",
  y: "14",
  rx: "2",
  key: "w68u3i"
}], ["path", {
  d: "M6.01 18H6",
  key: "19vcac"
}], ["path", {
  d: "M10.01 18H10",
  key: "uamcmx"
}], ["path", {
  d: "M15 10v4",
  key: "qjz1xs"
}], ["path", {
  d: "M17.84 7.17a4 4 0 0 0-5.66 0",
  key: "1rif40"
}], ["path", {
  d: "M20.66 4.34a8 8 0 0 0-11.31 0",
  key: "6a5xfq"
}]];
var Rows2 = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M3 12h18",
  key: "1i2n21"
}]];
var Rows3 = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M21 9H3",
  key: "1338ky"
}], ["path", {
  d: "M21 15H3",
  key: "9uk58r"
}]];
var Rows4 = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M21 7.5H3",
  key: "1hm9pq"
}], ["path", {
  d: "M21 12H3",
  key: "2avoz0"
}], ["path", {
  d: "M21 16.5H3",
  key: "n7jzkj"
}]];
var Rss = [["path", {
  d: "M4 11a9 9 0 0 1 9 9",
  key: "pv89mb"
}], ["path", {
  d: "M4 4a16 16 0 0 1 16 16",
  key: "k0647b"
}], ["circle", {
  cx: "5",
  cy: "19",
  r: "1",
  key: "bfqh0e"
}]];
var Ruler = [["path", {
  d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
  key: "icamh8"
}], ["path", {
  d: "m14.5 12.5 2-2",
  key: "inckbg"
}], ["path", {
  d: "m11.5 9.5 2-2",
  key: "fmmyf7"
}], ["path", {
  d: "m8.5 6.5 2-2",
  key: "vc6u1g"
}], ["path", {
  d: "m17.5 15.5 2-2",
  key: "wo5hmg"
}]];
var RulerDimensionLine = [["path", {
  d: "M12 15v-3.014",
  key: "aw6ppf"
}], ["path", {
  d: "M16 15v-3.014",
  key: "9e0vc7"
}], ["path", {
  d: "M20 6H4",
  key: "1lfz86"
}], ["path", {
  d: "M20 8V4",
  key: "1l2g47"
}], ["path", {
  d: "M4 8V4",
  key: "sppxzt"
}], ["path", {
  d: "M8 15v-3.014",
  key: "when08"
}], ["rect", {
  x: "3",
  y: "12",
  width: "18",
  height: "7",
  rx: "1",
  key: "1ucwdz"
}]];
var RussianRuble = [["path", {
  d: "M6 11h8a4 4 0 0 0 0-8H9v18",
  key: "18ai8t"
}], ["path", {
  d: "M6 15h8",
  key: "1y8f6l"
}]];
var Sailboat = [["path", {
  d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",
  key: "1404fh"
}], ["path", {
  d: "M21 14 10 2 3 14h18Z",
  key: "1nzg7v"
}], ["path", {
  d: "M10 2v16",
  key: "1labyt"
}]];
var Salad = [["path", {
  d: "M7 21h10",
  key: "1b0cd5"
}], ["path", {
  d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",
  key: "4rw317"
}], ["path", {
  d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",
  key: "10xrj0"
}], ["path", {
  d: "m13 12 4-4",
  key: "1hckqy"
}], ["path", {
  d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",
  key: "1p4srx"
}]];
var Sandwich = [["path", {
  d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777",
  key: "f1wd0e"
}], ["path", {
  d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25",
  key: "1pfu07"
}], ["path", {
  d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9",
  key: "1oq9qw"
}], ["path", {
  d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2",
  key: "1fnwu5"
}], ["rect", {
  width: "20",
  height: "4",
  x: "2",
  y: "11",
  rx: "1",
  key: "itshg"
}]];
var SatelliteDish = [["path", {
  d: "M4 10a7.31 7.31 0 0 0 10 10Z",
  key: "1fzpp3"
}], ["path", {
  d: "m9 15 3-3",
  key: "88sc13"
}], ["path", {
  d: "M17 13a6 6 0 0 0-6-6",
  key: "15cc6u"
}], ["path", {
  d: "M21 13A10 10 0 0 0 11 3",
  key: "11nf8s"
}]];
var Satellite = [["path", {
  d: "m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",
  key: "dzhfyz"
}], ["path", {
  d: "M16.5 7.5 19 5",
  key: "1ltcjm"
}], ["path", {
  d: "m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",
  key: "nfoymv"
}], ["path", {
  d: "M9 21a6 6 0 0 0-6-6",
  key: "1iajcf"
}], ["path", {
  d: "M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",
  key: "nv9zqy"
}]];
var SaudiRiyal = [["path", {
  d: "m20 19.5-5.5 1.2",
  key: "1aenhr"
}], ["path", {
  d: "M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2",
  key: "2rtezt"
}], ["path", {
  d: "m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2",
  key: "1kbm92"
}], ["path", {
  d: "M20 10 4 13.5",
  key: "8nums9"
}]];
var SaveAll = [["path", {
  d: "M10 2v3a1 1 0 0 0 1 1h5",
  key: "1xspal"
}], ["path", {
  d: "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6",
  key: "1ra60u"
}], ["path", {
  d: "M18 22H4a2 2 0 0 1-2-2V6",
  key: "pblm9e"
}], ["path", {
  d: "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",
  key: "1yve0x"
}]];
var SaveOff = [["path", {
  d: "M13 13H8a1 1 0 0 0-1 1v7",
  key: "h8g396"
}], ["path", {
  d: "M14 8h1",
  key: "1lfen6"
}], ["path", {
  d: "M17 21v-4",
  key: "1yknxs"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41",
  key: "1t4vdl"
}], ["path", {
  d: "M29.5 11.5s5 5 4 5",
  key: "zzn4i6"
}], ["path", {
  d: "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15",
  key: "24cby9"
}]];
var Save = [["path", {
  d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
  key: "1c8476"
}], ["path", {
  d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
  key: "1ydtos"
}], ["path", {
  d: "M7 3v4a1 1 0 0 0 1 1h7",
  key: "t51u73"
}]];
var Scale3d = [["path", {
  d: "M5 7v11a1 1 0 0 0 1 1h11",
  key: "13dt1j"
}], ["path", {
  d: "M5.293 18.707 11 13",
  key: "ezgbsx"
}], ["circle", {
  cx: "19",
  cy: "19",
  r: "2",
  key: "17f5cg"
}], ["circle", {
  cx: "5",
  cy: "5",
  r: "2",
  key: "1gwv83"
}]];
var Scale = [["path", {
  d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
  key: "7g6ntu"
}], ["path", {
  d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
  key: "ijws7r"
}], ["path", {
  d: "M7 21h10",
  key: "1b0cd5"
}], ["path", {
  d: "M12 3v18",
  key: "108xh3"
}], ["path", {
  d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",
  key: "3gwbw2"
}]];
var Scaling = [["path", {
  d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
  key: "1m0v6g"
}], ["path", {
  d: "M14 15H9v-5",
  key: "pi4jk9"
}], ["path", {
  d: "M16 3h5v5",
  key: "1806ms"
}], ["path", {
  d: "M21 3 9 15",
  key: "15kdhq"
}]];
var ScanBarcode = [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2",
  key: "aa7l1z"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2",
  key: "4qcy5o"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2",
  key: "6vwrx8"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2",
  key: "ioqczr"
}], ["path", {
  d: "M8 7v10",
  key: "23sfjj"
}], ["path", {
  d: "M12 7v10",
  key: "jspqdw"
}], ["path", {
  d: "M17 7v10",
  key: "578dap"
}]];
var ScanEye = [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2",
  key: "aa7l1z"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2",
  key: "4qcy5o"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2",
  key: "6vwrx8"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2",
  key: "ioqczr"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "1",
  key: "41hilf"
}], ["path", {
  d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",
  key: "11ak4c"
}]];
var ScanFace = [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2",
  key: "aa7l1z"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2",
  key: "4qcy5o"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2",
  key: "6vwrx8"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2",
  key: "ioqczr"
}], ["path", {
  d: "M8 14s1.5 2 4 2 4-2 4-2",
  key: "1y1vjs"
}], ["path", {
  d: "M9 9h.01",
  key: "1q5me6"
}], ["path", {
  d: "M15 9h.01",
  key: "x1ddxp"
}]];
var ScanHeart = [["path", {
  d: "M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z",
  key: "1algrk"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2",
  key: "4qcy5o"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2",
  key: "6vwrx8"
}], ["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2",
  key: "aa7l1z"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2",
  key: "ioqczr"
}]];
var ScanLine = [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2",
  key: "aa7l1z"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2",
  key: "4qcy5o"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2",
  key: "6vwrx8"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2",
  key: "ioqczr"
}], ["path", {
  d: "M7 12h10",
  key: "b7w52i"
}]];
var ScanQrCode = [["path", {
  d: "M17 12v4a1 1 0 0 1-1 1h-4",
  key: "uk4fdo"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2",
  key: "4qcy5o"
}], ["path", {
  d: "M17 8V7",
  key: "q2g9wo"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2",
  key: "6vwrx8"
}], ["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2",
  key: "aa7l1z"
}], ["path", {
  d: "M7 17h.01",
  key: "19xn7k"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2",
  key: "ioqczr"
}], ["rect", {
  x: "7",
  y: "7",
  width: "5",
  height: "5",
  rx: "1",
  key: "m9kyts"
}]];
var ScanSearch = [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2",
  key: "aa7l1z"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2",
  key: "4qcy5o"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2",
  key: "6vwrx8"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2",
  key: "ioqczr"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}], ["path", {
  d: "m16 16-1.9-1.9",
  key: "1dq9hf"
}]];
var ScanText = [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2",
  key: "aa7l1z"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2",
  key: "4qcy5o"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2",
  key: "6vwrx8"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2",
  key: "ioqczr"
}], ["path", {
  d: "M7 8h8",
  key: "1jbsf9"
}], ["path", {
  d: "M7 12h10",
  key: "b7w52i"
}], ["path", {
  d: "M7 16h6",
  key: "1vyc9m"
}]];
var Scan = [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2",
  key: "aa7l1z"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2",
  key: "4qcy5o"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2",
  key: "6vwrx8"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2",
  key: "ioqczr"
}]];
var School = [["path", {
  d: "M14 22v-4a2 2 0 1 0-4 0v4",
  key: "hhkicm"
}], ["path", {
  d: "m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10",
  key: "1xqip1"
}], ["path", {
  d: "M18 5v17",
  key: "1sw6gf"
}], ["path", {
  d: "m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6",
  key: "9d2mlk"
}], ["path", {
  d: "M6 5v17",
  key: "1xfsm0"
}], ["circle", {
  cx: "12",
  cy: "9",
  r: "2",
  key: "1092wv"
}]];
var ScissorsLineDashed = [["path", {
  d: "M5.42 9.42 8 12",
  key: "12pkuq"
}], ["circle", {
  cx: "4",
  cy: "8",
  r: "2",
  key: "107mxr"
}], ["path", {
  d: "m14 6-8.58 8.58",
  key: "gvzu5l"
}], ["circle", {
  cx: "4",
  cy: "16",
  r: "2",
  key: "1ehqvc"
}], ["path", {
  d: "M10.8 14.8 14 18",
  key: "ax7m9r"
}], ["path", {
  d: "M16 12h-2",
  key: "10asgb"
}], ["path", {
  d: "M22 12h-2",
  key: "14jgyd"
}]];
var Scissors = [["circle", {
  cx: "6",
  cy: "6",
  r: "3",
  key: "1lh9wr"
}], ["path", {
  d: "M8.12 8.12 12 12",
  key: "1alkpv"
}], ["path", {
  d: "M20 4 8.12 15.88",
  key: "xgtan2"
}], ["circle", {
  cx: "6",
  cy: "18",
  r: "3",
  key: "fqmcym"
}], ["path", {
  d: "M14.8 14.8 20 20",
  key: "ptml3r"
}]];
var ScreenShareOff = [["path", {
  d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",
  key: "i8wdob"
}], ["path", {
  d: "M8 21h8",
  key: "1ev6f3"
}], ["path", {
  d: "M12 17v4",
  key: "1riwvh"
}], ["path", {
  d: "m22 3-5 5",
  key: "12jva0"
}], ["path", {
  d: "m17 3 5 5",
  key: "k36vhe"
}]];
var ScreenShare = [["path", {
  d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",
  key: "i8wdob"
}], ["path", {
  d: "M8 21h8",
  key: "1ev6f3"
}], ["path", {
  d: "M12 17v4",
  key: "1riwvh"
}], ["path", {
  d: "m17 8 5-5",
  key: "fqif7o"
}], ["path", {
  d: "M17 3h5v5",
  key: "1o3tu8"
}]];
var ScrollText = [["path", {
  d: "M15 12h-5",
  key: "r7krc0"
}], ["path", {
  d: "M15 8h-5",
  key: "1khuty"
}], ["path", {
  d: "M19 17V5a2 2 0 0 0-2-2H4",
  key: "zz82l3"
}], ["path", {
  d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
  key: "1ph1d7"
}]];
var Scroll = [["path", {
  d: "M19 17V5a2 2 0 0 0-2-2H4",
  key: "zz82l3"
}], ["path", {
  d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
  key: "1ph1d7"
}]];
var SearchCheck = [["path", {
  d: "m8 11 2 2 4-4",
  key: "1sed1v"
}], ["circle", {
  cx: "11",
  cy: "11",
  r: "8",
  key: "4ej97u"
}], ["path", {
  d: "m21 21-4.3-4.3",
  key: "1qie3q"
}]];
var SearchCode = [["path", {
  d: "m13 13.5 2-2.5-2-2.5",
  key: "1rvxrh"
}], ["path", {
  d: "m21 21-4.3-4.3",
  key: "1qie3q"
}], ["path", {
  d: "M9 8.5 7 11l2 2.5",
  key: "6ffwbx"
}], ["circle", {
  cx: "11",
  cy: "11",
  r: "8",
  key: "4ej97u"
}]];
var SearchSlash = [["path", {
  d: "m13.5 8.5-5 5",
  key: "1cs55j"
}], ["circle", {
  cx: "11",
  cy: "11",
  r: "8",
  key: "4ej97u"
}], ["path", {
  d: "m21 21-4.3-4.3",
  key: "1qie3q"
}]];
var SearchX = [["path", {
  d: "m13.5 8.5-5 5",
  key: "1cs55j"
}], ["path", {
  d: "m8.5 8.5 5 5",
  key: "a8mexj"
}], ["circle", {
  cx: "11",
  cy: "11",
  r: "8",
  key: "4ej97u"
}], ["path", {
  d: "m21 21-4.3-4.3",
  key: "1qie3q"
}]];
var Search = [["path", {
  d: "m21 21-4.34-4.34",
  key: "14j7rj"
}], ["circle", {
  cx: "11",
  cy: "11",
  r: "8",
  key: "4ej97u"
}]];
var Section = [["path", {
  d: "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0",
  key: "vqan6v"
}], ["path", {
  d: "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0",
  key: "wdjd8o"
}]];
var SendHorizontal = [["path", {
  d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
  key: "117uat"
}], ["path", {
  d: "M6 12h16",
  key: "s4cdu5"
}]];
var SendToBack = [["rect", {
  x: "14",
  y: "14",
  width: "8",
  height: "8",
  rx: "2",
  key: "1b0bso"
}], ["rect", {
  x: "2",
  y: "2",
  width: "8",
  height: "8",
  rx: "2",
  key: "1x09vl"
}], ["path", {
  d: "M7 14v1a2 2 0 0 0 2 2h1",
  key: "pao6x6"
}], ["path", {
  d: "M14 7h1a2 2 0 0 1 2 2v1",
  key: "19tdru"
}]];
var Send = [["path", {
  d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
  key: "1ffxy3"
}], ["path", {
  d: "m21.854 2.147-10.94 10.939",
  key: "12cjpa"
}]];
var SeparatorHorizontal = [["path", {
  d: "m16 16-4 4-4-4",
  key: "3dv8je"
}], ["path", {
  d: "M3 12h18",
  key: "1i2n21"
}], ["path", {
  d: "m8 8 4-4 4 4",
  key: "2bscm2"
}]];
var SeparatorVertical = [["path", {
  d: "M12 3v18",
  key: "108xh3"
}], ["path", {
  d: "m16 16 4-4-4-4",
  key: "1js579"
}], ["path", {
  d: "m8 8-4 4 4 4",
  key: "1whems"
}]];
var ServerCog = [["path", {
  d: "m10.852 14.772-.383.923",
  key: "11vil6"
}], ["path", {
  d: "M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923",
  key: "1v3clb"
}], ["path", {
  d: "m13.148 9.228.383-.923",
  key: "t2zzyc"
}], ["path", {
  d: "m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544",
  key: "1bxfiv"
}], ["path", {
  d: "m14.772 10.852.923-.383",
  key: "k9m8cz"
}], ["path", {
  d: "m14.772 13.148.923.383",
  key: "1xvhww"
}], ["path", {
  d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",
  key: "tn8das"
}], ["path", {
  d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",
  key: "1g2pve"
}], ["path", {
  d: "M6 18h.01",
  key: "uhywen"
}], ["path", {
  d: "M6 6h.01",
  key: "1utrut"
}], ["path", {
  d: "m9.228 10.852-.923-.383",
  key: "1wtb30"
}], ["path", {
  d: "m9.228 13.148-.923.383",
  key: "1a830x"
}]];
var ServerCrash = [["path", {
  d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",
  key: "4b9dqc"
}], ["path", {
  d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",
  key: "22nnkd"
}], ["path", {
  d: "M6 6h.01",
  key: "1utrut"
}], ["path", {
  d: "M6 18h.01",
  key: "uhywen"
}], ["path", {
  d: "m13 6-4 6h6l-4 6",
  key: "14hqih"
}]];
var ServerOff = [["path", {
  d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",
  key: "bt2siv"
}], ["path", {
  d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",
  key: "1hjrv1"
}], ["path", {
  d: "M22 17v-1a2 2 0 0 0-2-2h-1",
  key: "1iynyr"
}], ["path", {
  d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",
  key: "161ggg"
}], ["path", {
  d: "M6 18h.01",
  key: "uhywen"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]];
var Server = [["rect", {
  width: "20",
  height: "8",
  x: "2",
  y: "2",
  rx: "2",
  ry: "2",
  key: "ngkwjq"
}], ["rect", {
  width: "20",
  height: "8",
  x: "2",
  y: "14",
  rx: "2",
  ry: "2",
  key: "iecqi9"
}], ["line", {
  x1: "6",
  x2: "6.01",
  y1: "6",
  y2: "6",
  key: "16zg32"
}], ["line", {
  x1: "6",
  x2: "6.01",
  y1: "18",
  y2: "18",
  key: "nzw8ys"
}]];
var Settings2 = [["path", {
  d: "M14 17H5",
  key: "gfn3mx"
}], ["path", {
  d: "M19 7h-9",
  key: "6i9tg"
}], ["circle", {
  cx: "17",
  cy: "17",
  r: "3",
  key: "18b49y"
}], ["circle", {
  cx: "7",
  cy: "7",
  r: "3",
  key: "dfmy0x"
}]];
var Settings = [["path", {
  d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
  key: "1qme2f"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}]];
var Share2 = [["circle", {
  cx: "18",
  cy: "5",
  r: "3",
  key: "gq8acd"
}], ["circle", {
  cx: "6",
  cy: "12",
  r: "3",
  key: "w7nqdw"
}], ["circle", {
  cx: "18",
  cy: "19",
  r: "3",
  key: "1xt0gg"
}], ["line", {
  x1: "8.59",
  x2: "15.42",
  y1: "13.51",
  y2: "17.49",
  key: "47mynk"
}], ["line", {
  x1: "15.41",
  x2: "8.59",
  y1: "6.51",
  y2: "10.49",
  key: "1n3mei"
}]];
var Shapes = [["path", {
  d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
  key: "1bo67w"
}], ["rect", {
  x: "3",
  y: "14",
  width: "7",
  height: "7",
  rx: "1",
  key: "1bkyp8"
}], ["circle", {
  cx: "17.5",
  cy: "17.5",
  r: "3.5",
  key: "w3z12y"
}]];
var Share = [["path", {
  d: "M12 2v13",
  key: "1km8f5"
}], ["path", {
  d: "m16 6-4-4-4 4",
  key: "13yo43"
}], ["path", {
  d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
  key: "1b2hhj"
}]];
var Sheet = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}], ["line", {
  x1: "3",
  x2: "21",
  y1: "9",
  y2: "9",
  key: "1vqk6q"
}], ["line", {
  x1: "3",
  x2: "21",
  y1: "15",
  y2: "15",
  key: "o2sbyz"
}], ["line", {
  x1: "9",
  x2: "9",
  y1: "9",
  y2: "21",
  key: "1ib60c"
}], ["line", {
  x1: "15",
  x2: "15",
  y1: "9",
  y2: "21",
  key: "1n26ft"
}]];
var Shell = [["path", {
  d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",
  key: "1cn552"
}]];
var ShieldAlert = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}], ["path", {
  d: "M12 8v4",
  key: "1got3b"
}], ["path", {
  d: "M12 16h.01",
  key: "1drbdi"
}]];
var ShieldBan = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}], ["path", {
  d: "m4.243 5.21 14.39 12.472",
  key: "1c9a7c"
}]];
var ShieldCheck = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}], ["path", {
  d: "m9 12 2 2 4-4",
  key: "dzmm74"
}]];
var ShieldEllipsis = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}], ["path", {
  d: "M8 12h.01",
  key: "czm47f"
}], ["path", {
  d: "M12 12h.01",
  key: "1mp3jc"
}], ["path", {
  d: "M16 12h.01",
  key: "1l6xoz"
}]];
var ShieldMinus = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}], ["path", {
  d: "M9 12h6",
  key: "1c52cq"
}]];
var ShieldHalf = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}], ["path", {
  d: "M12 22V2",
  key: "zs6s6o"
}]];
var ShieldOff = [["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",
  key: "1jlk70"
}], ["path", {
  d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",
  key: "18rp1v"
}]];
var ShieldPlus = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}], ["path", {
  d: "M9 12h6",
  key: "1c52cq"
}], ["path", {
  d: "M12 9v6",
  key: "199k2o"
}]];
var ShieldQuestionMark = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}], ["path", {
  d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",
  key: "mhlwft"
}], ["path", {
  d: "M12 17h.01",
  key: "p32p05"
}]];
var ShieldUser = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}], ["path", {
  d: "M6.376 18.91a6 6 0 0 1 11.249.003",
  key: "hnjrf2"
}], ["circle", {
  cx: "12",
  cy: "11",
  r: "4",
  key: "1gt34v"
}]];
var ShieldX = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}], ["path", {
  d: "m14.5 9.5-5 5",
  key: "17q4r4"
}], ["path", {
  d: "m9.5 9.5 5 5",
  key: "18nt4w"
}]];
var Shield = [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}]];
var ShipWheel = [["circle", {
  cx: "12",
  cy: "12",
  r: "8",
  key: "46899m"
}], ["path", {
  d: "M12 2v7.5",
  key: "1e5rl5"
}], ["path", {
  d: "m19 5-5.23 5.23",
  key: "1ezxxf"
}], ["path", {
  d: "M22 12h-7.5",
  key: "le1719"
}], ["path", {
  d: "m19 19-5.23-5.23",
  key: "p3fmgn"
}], ["path", {
  d: "M12 14.5V22",
  key: "dgcmos"
}], ["path", {
  d: "M10.23 13.77 5 19",
  key: "qwopd4"
}], ["path", {
  d: "M9.5 12H2",
  key: "r7bup8"
}], ["path", {
  d: "M10.23 10.23 5 5",
  key: "k2y7lj"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2.5",
  key: "ix0uyj"
}]];
var Ship = [["path", {
  d: "M12 10.189V14",
  key: "1p8cqu"
}], ["path", {
  d: "M12 2v3",
  key: "qbqxhf"
}], ["path", {
  d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",
  key: "qpkstq"
}], ["path", {
  d: "M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",
  key: "7tigtc"
}], ["path", {
  d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
  key: "1924j5"
}]];
var Shirt = [["path", {
  d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
  key: "1wgbhj"
}]];
var ShoppingBag = [["path", {
  d: "M16 10a4 4 0 0 1-8 0",
  key: "1ltviw"
}], ["path", {
  d: "M3.103 6.034h17.794",
  key: "awc11p"
}], ["path", {
  d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
  key: "o988cm"
}]];
var ShoppingBasket = [["path", {
  d: "m15 11-1 9",
  key: "5wnq3a"
}], ["path", {
  d: "m19 11-4-7",
  key: "cnml18"
}], ["path", {
  d: "M2 11h20",
  key: "3eubbj"
}], ["path", {
  d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",
  key: "yiazzp"
}], ["path", {
  d: "M4.5 15.5h15",
  key: "13mye1"
}], ["path", {
  d: "m5 11 4-7",
  key: "116ra9"
}], ["path", {
  d: "m9 11 1 9",
  key: "1ojof7"
}]];
var ShoppingCart = [["circle", {
  cx: "8",
  cy: "21",
  r: "1",
  key: "jimo8o"
}], ["circle", {
  cx: "19",
  cy: "21",
  r: "1",
  key: "13723u"
}], ["path", {
  d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
  key: "9zh506"
}]];
var Shovel = [["path", {
  d: "M2 22v-5l5-5 5 5-5 5z",
  key: "1fh25c"
}], ["path", {
  d: "M9.5 14.5 16 8",
  key: "1smz5x"
}], ["path", {
  d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",
  key: "1q8uv5"
}]];
var ShowerHead = [["path", {
  d: "m4 4 2.5 2.5",
  key: "uv2vmf"
}], ["path", {
  d: "M13.5 6.5a4.95 4.95 0 0 0-7 7",
  key: "frdkwv"
}], ["path", {
  d: "M15 5 5 15",
  key: "1ag8rq"
}], ["path", {
  d: "M14 17v.01",
  key: "eokfpp"
}], ["path", {
  d: "M10 16v.01",
  key: "14uyyl"
}], ["path", {
  d: "M13 13v.01",
  key: "1v1k97"
}], ["path", {
  d: "M16 10v.01",
  key: "5169yg"
}], ["path", {
  d: "M11 20v.01",
  key: "cj92p8"
}], ["path", {
  d: "M17 14v.01",
  key: "11cswd"
}], ["path", {
  d: "M20 11v.01",
  key: "19e0od"
}]];
var Shredder = [["path", {
  d: "M10 22v-5",
  key: "sfixh4"
}], ["path", {
  d: "M14 19v-2",
  key: "pdve8j"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M18 20v-3",
  key: "uox2gk"
}], ["path", {
  d: "M2 13h20",
  key: "5evz65"
}], ["path", {
  d: "M20 13V7l-5-5H6a2 2 0 0 0-2 2v9",
  key: "1rnpe2"
}], ["path", {
  d: "M6 20v-3",
  key: "c6pdcb"
}]];
var Shrimp = [["path", {
  d: "M11 12h.01",
  key: "1lr4k6"
}], ["path", {
  d: "M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1",
  key: "fatpdi"
}], ["path", {
  d: "M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8",
  key: "kehrqe"
}], ["path", {
  d: "M14 8a8.5 8.5 0 0 1 0 8",
  key: "1imjx2"
}], ["path", {
  d: "M16 16c2 0 4.5-4 4-6",
  key: "z0nejz"
}]];
var Shrink = [["path", {
  d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8",
  key: "17vawe"
}], ["path", {
  d: "M9 19.8V15m0 0H4.2M9 15l-6 6",
  key: "chjx8e"
}], ["path", {
  d: "M15 4.2V9m0 0h4.8M15 9l6-6",
  key: "lav6yq"
}], ["path", {
  d: "M9 4.2V9m0 0H4.2M9 9 3 3",
  key: "1pxi2q"
}]];
var Shrub = [["path", {
  d: "M12 22v-7l-2-2",
  key: "eqv9mc"
}], ["path", {
  d: "M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z",
  key: "ubcgy"
}], ["path", {
  d: "m14 14-2 2",
  key: "847xa2"
}]];
var Shuffle = [["path", {
  d: "m18 14 4 4-4 4",
  key: "10pe0f"
}], ["path", {
  d: "m18 2 4 4-4 4",
  key: "pucp1d"
}], ["path", {
  d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
  key: "1ailkh"
}], ["path", {
  d: "M2 6h1.972a4 4 0 0 1 3.6 2.2",
  key: "km57vx"
}], ["path", {
  d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",
  key: "os18l9"
}]];
var Sigma = [["path", {
  d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",
  key: "wuwx1p"
}]];
var SignalHigh = [["path", {
  d: "M2 20h.01",
  key: "4haj6o"
}], ["path", {
  d: "M7 20v-4",
  key: "j294jx"
}], ["path", {
  d: "M12 20v-8",
  key: "i3yub9"
}], ["path", {
  d: "M17 20V8",
  key: "1tkaf5"
}]];
var SignalLow = [["path", {
  d: "M2 20h.01",
  key: "4haj6o"
}], ["path", {
  d: "M7 20v-4",
  key: "j294jx"
}]];
var SignalZero = [["path", {
  d: "M2 20h.01",
  key: "4haj6o"
}]];
var SignalMedium = [["path", {
  d: "M2 20h.01",
  key: "4haj6o"
}], ["path", {
  d: "M7 20v-4",
  key: "j294jx"
}], ["path", {
  d: "M12 20v-8",
  key: "i3yub9"
}]];
var Signal = [["path", {
  d: "M2 20h.01",
  key: "4haj6o"
}], ["path", {
  d: "M7 20v-4",
  key: "j294jx"
}], ["path", {
  d: "M12 20v-8",
  key: "i3yub9"
}], ["path", {
  d: "M17 20V8",
  key: "1tkaf5"
}], ["path", {
  d: "M22 4v16",
  key: "sih9yq"
}]];
var Signature = [["path", {
  d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284",
  key: "y32ogt"
}], ["path", {
  d: "M3 21h18",
  key: "itz85i"
}]];
var SignpostBig = [["path", {
  d: "M10 9H4L2 7l2-2h6",
  key: "1hq7x2"
}], ["path", {
  d: "M14 5h6l2 2-2 2h-6",
  key: "bv62ej"
}], ["path", {
  d: "M10 22V4a2 2 0 1 1 4 0v18",
  key: "eqpcf2"
}], ["path", {
  d: "M8 22h8",
  key: "rmew8v"
}]];
var Signpost = [["path", {
  d: "M12 13v8",
  key: "1l5pq0"
}], ["path", {
  d: "M12 3v3",
  key: "1n5kay"
}], ["path", {
  d: "M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z",
  key: "gqqp9m"
}]];
var Siren = [["path", {
  d: "M7 18v-6a5 5 0 1 1 10 0v6",
  key: "pcx96s"
}], ["path", {
  d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",
  key: "1b4s83"
}], ["path", {
  d: "M21 12h1",
  key: "jtio3y"
}], ["path", {
  d: "M18.5 4.5 18 5",
  key: "g5sp9y"
}], ["path", {
  d: "M2 12h1",
  key: "1uaihz"
}], ["path", {
  d: "M12 2v1",
  key: "11qlp1"
}], ["path", {
  d: "m4.929 4.929.707.707",
  key: "1i51kw"
}], ["path", {
  d: "M12 12v6",
  key: "3ahymv"
}]];
var SkipBack = [["polygon", {
  points: "19 20 9 12 19 4 19 20",
  key: "o2sva"
}], ["line", {
  x1: "5",
  x2: "5",
  y1: "19",
  y2: "5",
  key: "1ocqjk"
}]];
var SkipForward = [["polygon", {
  points: "5 4 15 12 5 20 5 4",
  key: "16p6eg"
}], ["line", {
  x1: "19",
  x2: "19",
  y1: "5",
  y2: "19",
  key: "futhcm"
}]];
var Skull = [["path", {
  d: "m12.5 17-.5-1-.5 1h1z",
  key: "3me087"
}], ["path", {
  d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",
  key: "1o5pge"
}], ["circle", {
  cx: "15",
  cy: "12",
  r: "1",
  key: "1tmaij"
}], ["circle", {
  cx: "9",
  cy: "12",
  r: "1",
  key: "1vctgf"
}]];
var Slack = [["rect", {
  width: "3",
  height: "8",
  x: "13",
  y: "2",
  rx: "1.5",
  key: "diqz80"
}], ["path", {
  d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",
  key: "183iwg"
}], ["rect", {
  width: "3",
  height: "8",
  x: "8",
  y: "14",
  rx: "1.5",
  key: "hqg7r1"
}], ["path", {
  d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",
  key: "76g71w"
}], ["rect", {
  width: "8",
  height: "3",
  x: "14",
  y: "13",
  rx: "1.5",
  key: "1kmz0a"
}], ["path", {
  d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",
  key: "jc4sz0"
}], ["rect", {
  width: "8",
  height: "3",
  x: "2",
  y: "8",
  rx: "1.5",
  key: "1omvl4"
}], ["path", {
  d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",
  key: "16f3cl"
}]];
var Slash = [["path", {
  d: "M22 2 2 22",
  key: "y4kqgn"
}]];
var Slice = [["path", {
  d: "M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14",
  key: "1sllp5"
}]];
var SlidersHorizontal = [["line", {
  x1: "21",
  x2: "14",
  y1: "4",
  y2: "4",
  key: "obuewd"
}], ["line", {
  x1: "10",
  x2: "3",
  y1: "4",
  y2: "4",
  key: "1q6298"
}], ["line", {
  x1: "21",
  x2: "12",
  y1: "12",
  y2: "12",
  key: "1iu8h1"
}], ["line", {
  x1: "8",
  x2: "3",
  y1: "12",
  y2: "12",
  key: "ntss68"
}], ["line", {
  x1: "21",
  x2: "16",
  y1: "20",
  y2: "20",
  key: "14d8ph"
}], ["line", {
  x1: "12",
  x2: "3",
  y1: "20",
  y2: "20",
  key: "m0wm8r"
}], ["line", {
  x1: "14",
  x2: "14",
  y1: "2",
  y2: "6",
  key: "14e1ph"
}], ["line", {
  x1: "8",
  x2: "8",
  y1: "10",
  y2: "14",
  key: "1i6ji0"
}], ["line", {
  x1: "16",
  x2: "16",
  y1: "18",
  y2: "22",
  key: "1lctlv"
}]];
var SlidersVertical = [["line", {
  x1: "4",
  x2: "4",
  y1: "21",
  y2: "14",
  key: "1p332r"
}], ["line", {
  x1: "4",
  x2: "4",
  y1: "10",
  y2: "3",
  key: "gb41h5"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "21",
  y2: "12",
  key: "hf2csr"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "3",
  key: "1kfi7u"
}], ["line", {
  x1: "20",
  x2: "20",
  y1: "21",
  y2: "16",
  key: "1lhrwl"
}], ["line", {
  x1: "20",
  x2: "20",
  y1: "12",
  y2: "3",
  key: "16vvfq"
}], ["line", {
  x1: "2",
  x2: "6",
  y1: "14",
  y2: "14",
  key: "1uebub"
}], ["line", {
  x1: "10",
  x2: "14",
  y1: "8",
  y2: "8",
  key: "1yglbp"
}], ["line", {
  x1: "18",
  x2: "22",
  y1: "16",
  y2: "16",
  key: "1jxqpz"
}]];
var SmartphoneCharging = [["rect", {
  width: "14",
  height: "20",
  x: "5",
  y: "2",
  rx: "2",
  ry: "2",
  key: "1yt0o3"
}], ["path", {
  d: "M12.667 8 10 12h4l-2.667 4",
  key: "h9lk2d"
}]];
var SmartphoneNfc = [["rect", {
  width: "7",
  height: "12",
  x: "2",
  y: "6",
  rx: "1",
  key: "5nje8w"
}], ["path", {
  d: "M13 8.32a7.43 7.43 0 0 1 0 7.36",
  key: "1g306n"
}], ["path", {
  d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58",
  key: "uqvjvo"
}], ["path", {
  d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",
  key: "ujntz3"
}]];
var Smartphone = [["rect", {
  width: "14",
  height: "20",
  x: "5",
  y: "2",
  rx: "2",
  ry: "2",
  key: "1yt0o3"
}], ["path", {
  d: "M12 18h.01",
  key: "mhygvu"
}]];
var SmilePlus = [["path", {
  d: "M22 11v1a10 10 0 1 1-9-10",
  key: "ew0xw9"
}], ["path", {
  d: "M8 14s1.5 2 4 2 4-2 4-2",
  key: "1y1vjs"
}], ["line", {
  x1: "9",
  x2: "9.01",
  y1: "9",
  y2: "9",
  key: "yxxnd0"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "9",
  y2: "9",
  key: "1p4y9e"
}], ["path", {
  d: "M16 5h6",
  key: "1vod17"
}], ["path", {
  d: "M19 2v6",
  key: "4bpg5p"
}]];
var Smile = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["path", {
  d: "M8 14s1.5 2 4 2 4-2 4-2",
  key: "1y1vjs"
}], ["line", {
  x1: "9",
  x2: "9.01",
  y1: "9",
  y2: "9",
  key: "yxxnd0"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "9",
  y2: "9",
  key: "1p4y9e"
}]];
var Snail = [["path", {
  d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",
  key: "hneq2s"
}], ["circle", {
  cx: "10",
  cy: "13",
  r: "8",
  key: "194lz3"
}], ["path", {
  d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",
  key: "ixqyt7"
}], ["path", {
  d: "M18 3 19.1 5.2",
  key: "9tjm43"
}], ["path", {
  d: "M22 3 20.9 5.2",
  key: "j3odrs"
}]];
var Snowflake = [["path", {
  d: "m10 20-1.25-2.5L6 18",
  key: "18frcb"
}], ["path", {
  d: "M10 4 8.75 6.5 6 6",
  key: "7mghy3"
}], ["path", {
  d: "m14 20 1.25-2.5L18 18",
  key: "1chtki"
}], ["path", {
  d: "m14 4 1.25 2.5L18 6",
  key: "1b4wsy"
}], ["path", {
  d: "m17 21-3-6h-4",
  key: "15hhxa"
}], ["path", {
  d: "m17 3-3 6 1.5 3",
  key: "11697g"
}], ["path", {
  d: "M2 12h6.5L10 9",
  key: "kv9z4n"
}], ["path", {
  d: "m20 10-1.5 2 1.5 2",
  key: "1swlpi"
}], ["path", {
  d: "M22 12h-6.5L14 15",
  key: "1mxi28"
}], ["path", {
  d: "m4 10 1.5 2L4 14",
  key: "k9enpj"
}], ["path", {
  d: "m7 21 3-6-1.5-3",
  key: "j8hb9u"
}], ["path", {
  d: "m7 3 3 6h4",
  key: "1otusx"
}]];
var SoapDispenserDroplet = [["path", {
  d: "M10.5 2v4",
  key: "1xt6in"
}], ["path", {
  d: "M14 2H7a2 2 0 0 0-2 2",
  key: "e6xig3"
}], ["path", {
  d: "M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19",
  key: "adq7uc"
}], ["path", {
  d: "M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",
  key: "t9hm96"
}]];
var Sofa = [["path", {
  d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",
  key: "1dgpiv"
}], ["path", {
  d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
  key: "xacw8m"
}], ["path", {
  d: "M4 18v2",
  key: "jwo5n2"
}], ["path", {
  d: "M20 18v2",
  key: "1ar1qi"
}], ["path", {
  d: "M12 4v9",
  key: "oqhhn3"
}]];
var Soup = [["path", {
  d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",
  key: "4rw317"
}], ["path", {
  d: "M7 21h10",
  key: "1b0cd5"
}], ["path", {
  d: "M19.5 12 22 6",
  key: "shfsr5"
}], ["path", {
  d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",
  key: "rpc6vp"
}], ["path", {
  d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",
  key: "1lf63m"
}], ["path", {
  d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",
  key: "97tijn"
}]];
var Space = [["path", {
  d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",
  key: "lt2kga"
}]];
var Spade = [["path", {
  d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",
  key: "40bo9n"
}], ["path", {
  d: "M12 18v4",
  key: "jadmvz"
}]];
var Sparkle = [["path", {
  d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
  key: "4pj2yx"
}]];
var Sparkles = [["path", {
  d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
  key: "4pj2yx"
}], ["path", {
  d: "M20 3v4",
  key: "1olli1"
}], ["path", {
  d: "M22 5h-4",
  key: "1gvqau"
}], ["path", {
  d: "M4 17v2",
  key: "vumght"
}], ["path", {
  d: "M5 18H3",
  key: "zchphs"
}]];
var Speaker = [["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2",
  key: "1nb95v"
}], ["path", {
  d: "M12 6h.01",
  key: "1vi96p"
}], ["circle", {
  cx: "12",
  cy: "14",
  r: "4",
  key: "1jruaj"
}], ["path", {
  d: "M12 14h.01",
  key: "1etili"
}]];
var Speech = [["path", {
  d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",
  key: "11atix"
}], ["path", {
  d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",
  key: "yol142"
}], ["path", {
  d: "M17 15a3.5 3.5 0 0 0-.025-4.975",
  key: "ssbmkc"
}]];
var SpellCheck2 = [["path", {
  d: "m6 16 6-12 6 12",
  key: "1b4byz"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}], ["path", {
  d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",
  key: "8mdmtu"
}]];
var SpellCheck = [["path", {
  d: "m6 16 6-12 6 12",
  key: "1b4byz"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}], ["path", {
  d: "m16 20 2 2 4-4",
  key: "13tcca"
}]];
var SplinePointer = [["path", {
  d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
  key: "xwnzip"
}], ["path", {
  d: "M5 17A12 12 0 0 1 17 5",
  key: "1okkup"
}], ["circle", {
  cx: "19",
  cy: "5",
  r: "2",
  key: "mhkx31"
}], ["circle", {
  cx: "5",
  cy: "19",
  r: "2",
  key: "v8kfzx"
}]];
var Spline = [["circle", {
  cx: "19",
  cy: "5",
  r: "2",
  key: "mhkx31"
}], ["circle", {
  cx: "5",
  cy: "19",
  r: "2",
  key: "v8kfzx"
}], ["path", {
  d: "M5 17A12 12 0 0 1 17 5",
  key: "1okkup"
}]];
var Split = [["path", {
  d: "M16 3h5v5",
  key: "1806ms"
}], ["path", {
  d: "M8 3H3v5",
  key: "15dfkv"
}], ["path", {
  d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",
  key: "1qrqzj"
}], ["path", {
  d: "m15 9 6-6",
  key: "ko1vev"
}]];
var Spool = [["path", {
  d: "M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66",
  key: "13vns8"
}], ["path", {
  d: "m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178",
  key: "s8x3u0"
}]];
var SprayCan = [["path", {
  d: "M3 3h.01",
  key: "159qn6"
}], ["path", {
  d: "M7 5h.01",
  key: "1hq22a"
}], ["path", {
  d: "M11 7h.01",
  key: "1osv80"
}], ["path", {
  d: "M3 7h.01",
  key: "1xzrh3"
}], ["path", {
  d: "M7 9h.01",
  key: "19b3jx"
}], ["path", {
  d: "M3 11h.01",
  key: "1eifu7"
}], ["rect", {
  width: "4",
  height: "4",
  x: "15",
  y: "5",
  key: "mri9e4"
}], ["path", {
  d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",
  key: "aib6hk"
}], ["path", {
  d: "m13 14 8-2",
  key: "1d7bmk"
}], ["path", {
  d: "m13 19 8-2",
  key: "1y2vml"
}]];
var Sprout = [["path", {
  d: "M7 20h10",
  key: "e6iznv"
}], ["path", {
  d: "M10 20c5.5-2.5.8-6.4 3-10",
  key: "161w41"
}], ["path", {
  d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
  key: "9gtqwd"
}], ["path", {
  d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
  key: "bkxnd2"
}]];
var SquareActivity = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M17 12h-2l-2 5-2-10-2 5H7",
  key: "15hlnc"
}]];
var SquareArrowDownLeft = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "m16 8-8 8",
  key: "166keh"
}], ["path", {
  d: "M16 16H8V8",
  key: "1w2ppm"
}]];
var SquareArrowDownRight = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "m8 8 8 8",
  key: "1imecy"
}], ["path", {
  d: "M16 8v8H8",
  key: "1lbpgo"
}]];
var SquareArrowDown = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M12 8v8",
  key: "napkw2"
}], ["path", {
  d: "m8 12 4 4 4-4",
  key: "k98ssh"
}]];
var SquareArrowLeft = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "m12 8-4 4 4 4",
  key: "15vm53"
}], ["path", {
  d: "M16 12H8",
  key: "1fr5h0"
}]];
var SquareArrowOutDownLeft = [["path", {
  d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",
  key: "14qz4y"
}], ["path", {
  d: "m3 21 9-9",
  key: "1jfql5"
}], ["path", {
  d: "M9 21H3v-6",
  key: "wtvkvv"
}]];
var SquareArrowOutDownRight = [["path", {
  d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
  key: "14rsvq"
}], ["path", {
  d: "m21 21-9-9",
  key: "1et2py"
}], ["path", {
  d: "M21 15v6h-6",
  key: "1jko0i"
}]];
var SquareArrowOutUpLeft = [["path", {
  d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",
  key: "14mv1t"
}], ["path", {
  d: "m3 3 9 9",
  key: "rks13r"
}], ["path", {
  d: "M3 9V3h6",
  key: "ira0h2"
}]];
var SquareArrowOutUpRight = [["path", {
  d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",
  key: "y09zxi"
}], ["path", {
  d: "m21 3-9 9",
  key: "mpx6sq"
}], ["path", {
  d: "M15 3h6v6",
  key: "1q9fwt"
}]];
var SquareArrowRight = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}], ["path", {
  d: "m12 16 4-4-4-4",
  key: "1i9zcv"
}]];
var SquareArrowUpLeft = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M8 16V8h8",
  key: "19xb1h"
}], ["path", {
  d: "M16 16 8 8",
  key: "1qdy8n"
}]];
var SquareArrowUpRight = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M8 8h8v8",
  key: "b65dnt"
}], ["path", {
  d: "m8 16 8-8",
  key: "13b9ih"
}]];
var SquareArrowUp = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "m16 12-4-4-4 4",
  key: "177agl"
}], ["path", {
  d: "M12 16V8",
  key: "1sbj14"
}]];
var SquareAsterisk = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M12 8v8",
  key: "napkw2"
}], ["path", {
  d: "m8.5 14 7-4",
  key: "12hpby"
}], ["path", {
  d: "m8.5 10 7 4",
  key: "wwy2dy"
}]];
var SquareBottomDashedScissors = [["path", {
  d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",
  key: "1vzg26"
}], ["path", {
  d: "M10 22H8",
  key: "euku7a"
}], ["path", {
  d: "M16 22h-2",
  key: "18d249"
}], ["circle", {
  cx: "8",
  cy: "8",
  r: "2",
  key: "14cg06"
}], ["path", {
  d: "M9.414 9.414 12 12",
  key: "qz4lzr"
}], ["path", {
  d: "M14.8 14.8 18 18",
  key: "11flf1"
}], ["circle", {
  cx: "8",
  cy: "16",
  r: "2",
  key: "1acxsx"
}], ["path", {
  d: "m18 6-8.586 8.586",
  key: "11kzk1"
}]];
var SquareChartGantt = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M9 8h7",
  key: "kbo1nt"
}], ["path", {
  d: "M8 12h6",
  key: "ikassy"
}], ["path", {
  d: "M11 16h5",
  key: "oq65wt"
}]];
var SquareCheckBig = [["path", {
  d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",
  key: "2acyp4"
}], ["path", {
  d: "m9 11 3 3L22 4",
  key: "1pflzl"
}]];
var SquareCheck = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "m9 12 2 2 4-4",
  key: "dzmm74"
}]];
var SquareChevronLeft = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "m14 16-4-4 4-4",
  key: "ojs7w8"
}]];
var SquareChevronDown = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "m16 10-4 4-4-4",
  key: "894hmk"
}]];
var SquareChevronRight = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "m10 8 4 4-4 4",
  key: "1wy4r4"
}]];
var SquareCode = [["path", {
  d: "m10 9-3 3 3 3",
  key: "1oro0q"
}], ["path", {
  d: "m14 15 3-3-3-3",
  key: "bz13h7"
}], ["rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  key: "h1oib"
}]];
var SquareChevronUp = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "m8 14 4-4 4 4",
  key: "fy2ptz"
}]];
var SquareDashedBottomCode = [["path", {
  d: "M10 9.5 8 12l2 2.5",
  key: "3mjy60"
}], ["path", {
  d: "M14 21h1",
  key: "v9vybs"
}], ["path", {
  d: "m14 9.5 2 2.5-2 2.5",
  key: "1bir2l"
}], ["path", {
  d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",
  key: "as5y1o"
}], ["path", {
  d: "M9 21h1",
  key: "15o7lz"
}]];
var SquareDashedBottom = [["path", {
  d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",
  key: "as5y1o"
}], ["path", {
  d: "M9 21h1",
  key: "15o7lz"
}], ["path", {
  d: "M14 21h1",
  key: "v9vybs"
}]];
var SquareDashedKanban = [["path", {
  d: "M8 7v7",
  key: "1x2jlm"
}], ["path", {
  d: "M12 7v4",
  key: "xawao1"
}], ["path", {
  d: "M16 7v9",
  key: "1hp2iy"
}], ["path", {
  d: "M5 3a2 2 0 0 0-2 2",
  key: "y57alp"
}], ["path", {
  d: "M9 3h1",
  key: "1yesri"
}], ["path", {
  d: "M14 3h1",
  key: "1ec4yj"
}], ["path", {
  d: "M19 3a2 2 0 0 1 2 2",
  key: "18rm91"
}], ["path", {
  d: "M21 9v1",
  key: "mxsmne"
}], ["path", {
  d: "M21 14v1",
  key: "169vum"
}], ["path", {
  d: "M21 19a2 2 0 0 1-2 2",
  key: "1j7049"
}], ["path", {
  d: "M14 21h1",
  key: "v9vybs"
}], ["path", {
  d: "M9 21h1",
  key: "15o7lz"
}], ["path", {
  d: "M5 21a2 2 0 0 1-2-2",
  key: "sbafld"
}], ["path", {
  d: "M3 14v1",
  key: "vnatye"
}], ["path", {
  d: "M3 9v1",
  key: "1r0deq"
}]];
var SquareDashedMousePointer = [["path", {
  d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
  key: "xwnzip"
}], ["path", {
  d: "M5 3a2 2 0 0 0-2 2",
  key: "y57alp"
}], ["path", {
  d: "M19 3a2 2 0 0 1 2 2",
  key: "18rm91"
}], ["path", {
  d: "M5 21a2 2 0 0 1-2-2",
  key: "sbafld"
}], ["path", {
  d: "M9 3h1",
  key: "1yesri"
}], ["path", {
  d: "M9 21h2",
  key: "1qve2z"
}], ["path", {
  d: "M14 3h1",
  key: "1ec4yj"
}], ["path", {
  d: "M3 9v1",
  key: "1r0deq"
}], ["path", {
  d: "M21 9v2",
  key: "p14lih"
}], ["path", {
  d: "M3 14v1",
  key: "vnatye"
}]];
var SquareDashedTopSolid = [["path", {
  d: "M14 21h1",
  key: "v9vybs"
}], ["path", {
  d: "M21 14v1",
  key: "169vum"
}], ["path", {
  d: "M21 19a2 2 0 0 1-2 2",
  key: "1j7049"
}], ["path", {
  d: "M21 9v1",
  key: "mxsmne"
}], ["path", {
  d: "M3 14v1",
  key: "vnatye"
}], ["path", {
  d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",
  key: "89voep"
}], ["path", {
  d: "M3 9v1",
  key: "1r0deq"
}], ["path", {
  d: "M5 21a2 2 0 0 1-2-2",
  key: "sbafld"
}], ["path", {
  d: "M9 21h1",
  key: "15o7lz"
}]];
var SquareDashed = [["path", {
  d: "M5 3a2 2 0 0 0-2 2",
  key: "y57alp"
}], ["path", {
  d: "M19 3a2 2 0 0 1 2 2",
  key: "18rm91"
}], ["path", {
  d: "M21 19a2 2 0 0 1-2 2",
  key: "1j7049"
}], ["path", {
  d: "M5 21a2 2 0 0 1-2-2",
  key: "sbafld"
}], ["path", {
  d: "M9 3h1",
  key: "1yesri"
}], ["path", {
  d: "M9 21h1",
  key: "15o7lz"
}], ["path", {
  d: "M14 3h1",
  key: "1ec4yj"
}], ["path", {
  d: "M14 21h1",
  key: "v9vybs"
}], ["path", {
  d: "M3 9v1",
  key: "1r0deq"
}], ["path", {
  d: "M21 9v1",
  key: "mxsmne"
}], ["path", {
  d: "M3 14v1",
  key: "vnatye"
}], ["path", {
  d: "M21 14v1",
  key: "169vum"
}]];
var SquareDivide = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "12",
  y2: "12",
  key: "1jonct"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "16",
  y2: "16",
  key: "aqc6ln"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "8",
  key: "1mkcni"
}]];
var SquareDot = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "1",
  key: "41hilf"
}]];
var SquareEqual = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M7 10h10",
  key: "1101jm"
}], ["path", {
  d: "M7 14h10",
  key: "1mhdw3"
}]];
var SquareFunction = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}], ["path", {
  d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",
  key: "m1af9g"
}], ["path", {
  d: "M9 11.2h5.7",
  key: "3zgcl2"
}]];
var SquareKanban = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M8 7v7",
  key: "1x2jlm"
}], ["path", {
  d: "M12 7v4",
  key: "xawao1"
}], ["path", {
  d: "M16 7v9",
  key: "1hp2iy"
}]];
var SquareLibrary = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M7 7v10",
  key: "d5nglc"
}], ["path", {
  d: "M11 7v10",
  key: "pptsnr"
}], ["path", {
  d: "m15 7 2 10",
  key: "1m7qm5"
}]];
var SquareM = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M8 16V8l4 4 4-4v8",
  key: "141u4e"
}]];
var SquareMenu = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M7 8h10",
  key: "1jw688"
}], ["path", {
  d: "M7 12h10",
  key: "b7w52i"
}], ["path", {
  d: "M7 16h10",
  key: "wp8him"
}]];
var SquareMinus = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}]];
var SquareMousePointer = [["path", {
  d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
  key: "xwnzip"
}], ["path", {
  d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",
  key: "14rsvq"
}]];
var SquareParking = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M9 17V7h4a3 3 0 0 1 0 6H9",
  key: "1dfk2c"
}]];
var SquareParkingOff = [["path", {
  d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",
  key: "9l1ft6"
}], ["path", {
  d: "M3 8.7V19a2 2 0 0 0 2 2h10.3",
  key: "17knke"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M13 13a3 3 0 1 0 0-6H9v2",
  key: "uoagbd"
}], ["path", {
  d: "M9 17v-2.3",
  key: "1jxgo2"
}]];
var SquarePen = [["path", {
  d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
  key: "1m0v6g"
}], ["path", {
  d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
  key: "ohrbg2"
}]];
var SquarePercent = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "m15 9-6 6",
  key: "1uzhvr"
}], ["path", {
  d: "M9 9h.01",
  key: "1q5me6"
}], ["path", {
  d: "M15 15h.01",
  key: "lqbp3k"
}]];
var SquarePi = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M7 7h10",
  key: "udp07y"
}], ["path", {
  d: "M10 7v10",
  key: "i1d9ee"
}], ["path", {
  d: "M16 17a2 2 0 0 1-2-2V7",
  key: "ftwdc7"
}]];
var SquarePilcrow = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17",
  key: "1l9586"
}], ["path", {
  d: "M12 7v10",
  key: "jspqdw"
}], ["path", {
  d: "M16 7v10",
  key: "lavkr4"
}]];
var SquarePlay = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "m9 8 6 4-6 4Z",
  key: "f1r3lt"
}]];
var SquarePlus = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}], ["path", {
  d: "M12 8v8",
  key: "napkw2"
}]];
var SquarePower = [["path", {
  d: "M12 7v4",
  key: "xawao1"
}], ["path", {
  d: "M7.998 9.003a5 5 0 1 0 8-.005",
  key: "1pek45"
}], ["rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  key: "h1oib"
}]];
var SquareRadical = [["path", {
  d: "M7 12h2l2 5 2-10h4",
  key: "1fxv6h"
}], ["rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  key: "h1oib"
}]];
var SquareRoundCorner = [["path", {
  d: "M21 11a8 8 0 0 0-8-8",
  key: "1lxwo5"
}], ["path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
  key: "1dv2y5"
}]];
var SquareScissors = [["rect", {
  width: "20",
  height: "20",
  x: "2",
  y: "2",
  rx: "2",
  key: "1btzen"
}], ["circle", {
  cx: "8",
  cy: "8",
  r: "2",
  key: "14cg06"
}], ["path", {
  d: "M9.414 9.414 12 12",
  key: "qz4lzr"
}], ["path", {
  d: "M14.8 14.8 18 18",
  key: "11flf1"
}], ["circle", {
  cx: "8",
  cy: "16",
  r: "2",
  key: "1acxsx"
}], ["path", {
  d: "m18 6-8.586 8.586",
  key: "11kzk1"
}]];
var SquareSigma = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M16 8.9V7H8l4 5-4 5h8v-1.9",
  key: "9nih0i"
}]];
var SquareSlash = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["line", {
  x1: "9",
  x2: "15",
  y1: "15",
  y2: "9",
  key: "1dfufj"
}]];
var SquareSplitHorizontal = [["path", {
  d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",
  key: "lubmu8"
}], ["path", {
  d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",
  key: "1ag34g"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "4",
  y2: "20",
  key: "1tx1rr"
}]];
var SquareSplitVertical = [["path", {
  d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",
  key: "1pi83i"
}], ["path", {
  d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",
  key: "ido5k7"
}], ["line", {
  x1: "4",
  x2: "20",
  y1: "12",
  y2: "12",
  key: "1e0a9i"
}]];
var SquareSquare = [["rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2",
  key: "h1oib"
}], ["rect", {
  x: "8",
  y: "8",
  width: "8",
  height: "8",
  rx: "1",
  key: "z9xiuo"
}]];
var SquareStack = [["path", {
  d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",
  key: "4i38lg"
}], ["path", {
  d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",
  key: "mlte4a"
}], ["rect", {
  width: "8",
  height: "8",
  x: "14",
  y: "14",
  rx: "2",
  key: "1fa9i4"
}]];
var SquareTerminal = [["path", {
  d: "m7 11 2-2-2-2",
  key: "1lz0vl"
}], ["path", {
  d: "M11 13h4",
  key: "1p7l4v"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}]];
var SquareUserRound = [["path", {
  d: "M18 21a6 6 0 0 0-12 0",
  key: "kaz2du"
}], ["circle", {
  cx: "12",
  cy: "11",
  r: "4",
  key: "1gt34v"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}]];
var SquareUser = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3",
  key: "ilqhr7"
}], ["path", {
  d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",
  key: "1m6ac2"
}]];
var SquareX = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}], ["path", {
  d: "m15 9-6 6",
  key: "1uzhvr"
}], ["path", {
  d: "m9 9 6 6",
  key: "z0biqf"
}]];
var Square = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}]];
var SquaresExclude = [["path", {
  d: "M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0",
  key: "1mcohs"
}], ["path", {
  d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2",
  key: "1r1efp"
}]];
var SquaresIntersect = [["path", {
  d: "M10 22a2 2 0 0 1-2-2",
  key: "i7yj1i"
}], ["path", {
  d: "M14 2a2 2 0 0 1 2 2",
  key: "170a0m"
}], ["path", {
  d: "M16 22h-2",
  key: "18d249"
}], ["path", {
  d: "M2 10V8",
  key: "7yj4fe"
}], ["path", {
  d: "M2 4a2 2 0 0 1 2-2",
  key: "ddgnws"
}], ["path", {
  d: "M20 8a2 2 0 0 1 2 2",
  key: "1770vt"
}], ["path", {
  d: "M22 14v2",
  key: "iot8ja"
}], ["path", {
  d: "M22 20a2 2 0 0 1-2 2",
  key: "qj8q6g"
}], ["path", {
  d: "M4 16a2 2 0 0 1-2-2",
  key: "1dnafg"
}], ["path", {
  d: "M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z",
  key: "ci6f0b"
}], ["path", {
  d: "M8 2h2",
  key: "1gmkwm"
}]];
var SquaresSubtract = [["path", {
  d: "M10 22a2 2 0 0 1-2-2",
  key: "i7yj1i"
}], ["path", {
  d: "M16 22h-2",
  key: "18d249"
}], ["path", {
  d: "M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z",
  key: "1njgbb"
}], ["path", {
  d: "M20 8a2 2 0 0 1 2 2",
  key: "1770vt"
}], ["path", {
  d: "M22 14v2",
  key: "iot8ja"
}], ["path", {
  d: "M22 20a2 2 0 0 1-2 2",
  key: "qj8q6g"
}]];
var SquaresUnite = [["path", {
  d: "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z",
  key: "17jnth"
}]];
var Squircle = [["path", {
  d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",
  key: "garfkc"
}]];
var Squirrel = [["path", {
  d: "M15.236 22a3 3 0 0 0-2.2-5",
  key: "21bitc"
}], ["path", {
  d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",
  key: "oh0fg0"
}], ["path", {
  d: "M18 13h.01",
  key: "9veqaj"
}], ["path", {
  d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",
  key: "980v8a"
}]];
var SquircleDashed = [["path", {
  d: "M13.77 3.043a34 34 0 0 0-3.54 0",
  key: "1oaobr"
}], ["path", {
  d: "M13.771 20.956a33 33 0 0 1-3.541.001",
  key: "95iq0j"
}], ["path", {
  d: "M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44",
  key: "1u6qty"
}], ["path", {
  d: "M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438",
  key: "1ew6g6"
}], ["path", {
  d: "M20.957 10.23a33 33 0 0 1 0 3.54",
  key: "1l9npr"
}], ["path", {
  d: "M3.043 10.23a34 34 0 0 0 .001 3.541",
  key: "1it6jm"
}], ["path", {
  d: "M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438",
  key: "14uchd"
}], ["path", {
  d: "M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44",
  key: "8k4agb"
}]];
var Stamp = [["path", {
  d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13",
  key: "i9gjdv"
}], ["path", {
  d: "M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z",
  key: "1vzg3v"
}], ["path", {
  d: "M5 22h14",
  key: "ehvnwv"
}]];
var StarHalf = [["path", {
  d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2",
  key: "2ksp49"
}]];
var StarOff = [["path", {
  d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",
  key: "16m0ql"
}], ["path", {
  d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",
  key: "1vt8nq"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}]];
var Star = [["path", {
  d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
  key: "r04s7s"
}]];
var StepBack = [["line", {
  x1: "18",
  x2: "18",
  y1: "20",
  y2: "4",
  key: "cun8e5"
}], ["polygon", {
  points: "14,20 4,12 14,4",
  key: "ypakod"
}]];
var StepForward = [["line", {
  x1: "6",
  x2: "6",
  y1: "4",
  y2: "20",
  key: "fy8qot"
}], ["polygon", {
  points: "10,4 20,12 10,20",
  key: "1mc1pf"
}]];
var Stethoscope = [["path", {
  d: "M11 2v2",
  key: "1539x4"
}], ["path", {
  d: "M5 2v2",
  key: "1yf1q8"
}], ["path", {
  d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
  key: "rb5t3r"
}], ["path", {
  d: "M8 15a6 6 0 0 0 12 0v-3",
  key: "x18d4x"
}], ["circle", {
  cx: "20",
  cy: "10",
  r: "2",
  key: "ts1r5v"
}]];
var Sticker = [["path", {
  d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",
  key: "1wis1t"
}], ["path", {
  d: "M14 3v4a2 2 0 0 0 2 2h4",
  key: "36rjfy"
}], ["path", {
  d: "M8 13h.01",
  key: "1sbv64"
}], ["path", {
  d: "M16 13h.01",
  key: "wip0gl"
}], ["path", {
  d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1",
  key: "1vvgv3"
}]];
var StickyNote = [["path", {
  d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",
  key: "qazsjp"
}], ["path", {
  d: "M15 3v4a2 2 0 0 0 2 2h4",
  key: "40519r"
}]];
var Store = [["path", {
  d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",
  key: "ztvudi"
}], ["path", {
  d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
  key: "1b2hhj"
}], ["path", {
  d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",
  key: "2ebpfo"
}], ["path", {
  d: "M2 7h20",
  key: "1fcdvo"
}], ["path", {
  d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",
  key: "6c3vgh"
}]];
var StretchHorizontal = [["rect", {
  width: "20",
  height: "6",
  x: "2",
  y: "4",
  rx: "2",
  key: "qdearl"
}], ["rect", {
  width: "20",
  height: "6",
  x: "2",
  y: "14",
  rx: "2",
  key: "1xrn6j"
}]];
var StretchVertical = [["rect", {
  width: "6",
  height: "20",
  x: "4",
  y: "2",
  rx: "2",
  key: "19qu7m"
}], ["rect", {
  width: "6",
  height: "20",
  x: "14",
  y: "2",
  rx: "2",
  key: "24v0nk"
}]];
var Strikethrough = [["path", {
  d: "M16 4H9a3 3 0 0 0-2.83 4",
  key: "43sutm"
}], ["path", {
  d: "M14 12a4 4 0 0 1 0 8H6",
  key: "nlfj13"
}], ["line", {
  x1: "4",
  x2: "20",
  y1: "12",
  y2: "12",
  key: "1e0a9i"
}]];
var Subscript = [["path", {
  d: "m4 5 8 8",
  key: "1eunvl"
}], ["path", {
  d: "m12 5-8 8",
  key: "1ah0jp"
}], ["path", {
  d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",
  key: "e8ta8j"
}]];
var SunDim = [["circle", {
  cx: "12",
  cy: "12",
  r: "4",
  key: "4exip2"
}], ["path", {
  d: "M12 4h.01",
  key: "1ujb9j"
}], ["path", {
  d: "M20 12h.01",
  key: "1ykeid"
}], ["path", {
  d: "M12 20h.01",
  key: "zekei9"
}], ["path", {
  d: "M4 12h.01",
  key: "158zrr"
}], ["path", {
  d: "M17.657 6.343h.01",
  key: "31pqzk"
}], ["path", {
  d: "M17.657 17.657h.01",
  key: "jehnf4"
}], ["path", {
  d: "M6.343 17.657h.01",
  key: "gdk6ow"
}], ["path", {
  d: "M6.343 6.343h.01",
  key: "1uurf0"
}]];
var SunMedium = [["circle", {
  cx: "12",
  cy: "12",
  r: "4",
  key: "4exip2"
}], ["path", {
  d: "M12 3v1",
  key: "1asbbs"
}], ["path", {
  d: "M12 20v1",
  key: "1wcdkc"
}], ["path", {
  d: "M3 12h1",
  key: "lp3yf2"
}], ["path", {
  d: "M20 12h1",
  key: "1vloll"
}], ["path", {
  d: "m18.364 5.636-.707.707",
  key: "1hakh0"
}], ["path", {
  d: "m6.343 17.657-.707.707",
  key: "18m9nf"
}], ["path", {
  d: "m5.636 5.636.707.707",
  key: "1xv1c5"
}], ["path", {
  d: "m17.657 17.657.707.707",
  key: "vl76zb"
}]];
var SunMoon = [["path", {
  d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",
  key: "1fu5g2"
}], ["path", {
  d: "M12 2v2",
  key: "tus03m"
}], ["path", {
  d: "M12 20v2",
  key: "1lh1kg"
}], ["path", {
  d: "m4.9 4.9 1.4 1.4",
  key: "b9915j"
}], ["path", {
  d: "m17.7 17.7 1.4 1.4",
  key: "qc3ed3"
}], ["path", {
  d: "M2 12h2",
  key: "1t8f8n"
}], ["path", {
  d: "M20 12h2",
  key: "1q8mjw"
}], ["path", {
  d: "m6.3 17.7-1.4 1.4",
  key: "5gca6"
}], ["path", {
  d: "m19.1 4.9-1.4 1.4",
  key: "wpu9u6"
}]];
var SunSnow = [["path", {
  d: "M10 21v-1",
  key: "1u8rkd"
}], ["path", {
  d: "M10 4V3",
  key: "pkzwkn"
}], ["path", {
  d: "M10 9a3 3 0 0 0 0 6",
  key: "gv75dk"
}], ["path", {
  d: "m14 20 1.25-2.5L18 18",
  key: "1chtki"
}], ["path", {
  d: "m14 4 1.25 2.5L18 6",
  key: "1b4wsy"
}], ["path", {
  d: "m17 21-3-6 1.5-3H22",
  key: "o5qa3v"
}], ["path", {
  d: "m17 3-3 6 1.5 3",
  key: "11697g"
}], ["path", {
  d: "M2 12h1",
  key: "1uaihz"
}], ["path", {
  d: "m20 10-1.5 2 1.5 2",
  key: "1swlpi"
}], ["path", {
  d: "m3.64 18.36.7-.7",
  key: "105rm9"
}], ["path", {
  d: "m4.34 6.34-.7-.7",
  key: "d3unjp"
}]];
var Sun = [["circle", {
  cx: "12",
  cy: "12",
  r: "4",
  key: "4exip2"
}], ["path", {
  d: "M12 2v2",
  key: "tus03m"
}], ["path", {
  d: "M12 20v2",
  key: "1lh1kg"
}], ["path", {
  d: "m4.93 4.93 1.41 1.41",
  key: "149t6j"
}], ["path", {
  d: "m17.66 17.66 1.41 1.41",
  key: "ptbguv"
}], ["path", {
  d: "M2 12h2",
  key: "1t8f8n"
}], ["path", {
  d: "M20 12h2",
  key: "1q8mjw"
}], ["path", {
  d: "m6.34 17.66-1.41 1.41",
  key: "1m8zz5"
}], ["path", {
  d: "m19.07 4.93-1.41 1.41",
  key: "1shlcs"
}]];
var Sunrise = [["path", {
  d: "M12 2v8",
  key: "1q4o3n"
}], ["path", {
  d: "m4.93 10.93 1.41 1.41",
  key: "2a7f42"
}], ["path", {
  d: "M2 18h2",
  key: "j10viu"
}], ["path", {
  d: "M20 18h2",
  key: "wocana"
}], ["path", {
  d: "m19.07 10.93-1.41 1.41",
  key: "15zs5n"
}], ["path", {
  d: "M22 22H2",
  key: "19qnx5"
}], ["path", {
  d: "m8 6 4-4 4 4",
  key: "ybng9g"
}], ["path", {
  d: "M16 18a4 4 0 0 0-8 0",
  key: "1lzouq"
}]];
var Sunset = [["path", {
  d: "M12 10V2",
  key: "16sf7g"
}], ["path", {
  d: "m4.93 10.93 1.41 1.41",
  key: "2a7f42"
}], ["path", {
  d: "M2 18h2",
  key: "j10viu"
}], ["path", {
  d: "M20 18h2",
  key: "wocana"
}], ["path", {
  d: "m19.07 10.93-1.41 1.41",
  key: "15zs5n"
}], ["path", {
  d: "M22 22H2",
  key: "19qnx5"
}], ["path", {
  d: "m16 6-4 4-4-4",
  key: "6wukr"
}], ["path", {
  d: "M16 18a4 4 0 0 0-8 0",
  key: "1lzouq"
}]];
var Superscript = [["path", {
  d: "m4 19 8-8",
  key: "hr47gm"
}], ["path", {
  d: "m12 19-8-8",
  key: "1dhhmo"
}], ["path", {
  d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",
  key: "1dfcux"
}]];
var SwatchBook = [["path", {
  d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",
  key: "1ldrpk"
}], ["path", {
  d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",
  key: "11i5po"
}], ["path", {
  d: "M 7 17h.01",
  key: "1euzgo"
}], ["path", {
  d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",
  key: "o2gii7"
}]];
var SwissFranc = [["path", {
  d: "M10 21V3h8",
  key: "br2l0g"
}], ["path", {
  d: "M6 16h9",
  key: "2py0wn"
}], ["path", {
  d: "M10 9.5h7",
  key: "13dmhz"
}]];
var SwitchCamera = [["path", {
  d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",
  key: "mtk2lu"
}], ["path", {
  d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",
  key: "120jsl"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3",
  key: "1v7zrd"
}], ["path", {
  d: "m18 22-3-3 3-3",
  key: "kgdoj7"
}], ["path", {
  d: "m6 2 3 3-3 3",
  key: "1fnbkv"
}]];
var Sword = [["polyline", {
  points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5",
  key: "1hfsw2"
}], ["line", {
  x1: "13",
  x2: "19",
  y1: "19",
  y2: "13",
  key: "1vrmhu"
}], ["line", {
  x1: "16",
  x2: "20",
  y1: "16",
  y2: "20",
  key: "1bron3"
}], ["line", {
  x1: "19",
  x2: "21",
  y1: "21",
  y2: "19",
  key: "13pww6"
}]];
var Swords = [["polyline", {
  points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5",
  key: "1hfsw2"
}], ["line", {
  x1: "13",
  x2: "19",
  y1: "19",
  y2: "13",
  key: "1vrmhu"
}], ["line", {
  x1: "16",
  x2: "20",
  y1: "16",
  y2: "20",
  key: "1bron3"
}], ["line", {
  x1: "19",
  x2: "21",
  y1: "21",
  y2: "19",
  key: "13pww6"
}], ["polyline", {
  points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5",
  key: "hbey2j"
}], ["line", {
  x1: "5",
  x2: "9",
  y1: "14",
  y2: "18",
  key: "1hf58s"
}], ["line", {
  x1: "7",
  x2: "4",
  y1: "17",
  y2: "20",
  key: "pidxm4"
}], ["line", {
  x1: "3",
  x2: "5",
  y1: "19",
  y2: "21",
  key: "1pehsh"
}]];
var Syringe = [["path", {
  d: "m18 2 4 4",
  key: "22kx64"
}], ["path", {
  d: "m17 7 3-3",
  key: "1w1zoj"
}], ["path", {
  d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",
  key: "1exhtz"
}], ["path", {
  d: "m9 11 4 4",
  key: "rovt3i"
}], ["path", {
  d: "m5 19-3 3",
  key: "59f2uf"
}], ["path", {
  d: "m14 4 6 6",
  key: "yqp9t2"
}]];
var Table2 = [["path", {
  d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
  key: "gugj83"
}]];
var TableCellsMerge = [["path", {
  d: "M12 21v-6",
  key: "lihzve"
}], ["path", {
  d: "M12 9V3",
  key: "da5inc"
}], ["path", {
  d: "M3 15h18",
  key: "5xshup"
}], ["path", {
  d: "M3 9h18",
  key: "1pudct"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}]];
var TableCellsSplit = [["path", {
  d: "M12 15V9",
  key: "8c7uyn"
}], ["path", {
  d: "M3 15h18",
  key: "5xshup"
}], ["path", {
  d: "M3 9h18",
  key: "1pudct"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}]];
var TableColumnsSplit = [["path", {
  d: "M14 14v2",
  key: "w2a1xv"
}], ["path", {
  d: "M14 20v2",
  key: "1lq872"
}], ["path", {
  d: "M14 2v2",
  key: "6buw04"
}], ["path", {
  d: "M14 8v2",
  key: "i67w9a"
}], ["path", {
  d: "M2 15h8",
  key: "82wtch"
}], ["path", {
  d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",
  key: "up0l64"
}], ["path", {
  d: "M2 9h8",
  key: "yelfik"
}], ["path", {
  d: "M22 15h-4",
  key: "1es58f"
}], ["path", {
  d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",
  key: "pdjoqf"
}], ["path", {
  d: "M22 9h-4",
  key: "1luja7"
}], ["path", {
  d: "M5 3v18",
  key: "14hmio"
}]];
var TableOfContents = [["path", {
  d: "M16 12H3",
  key: "1a2rj7"
}], ["path", {
  d: "M16 18H3",
  key: "12xzn7"
}], ["path", {
  d: "M16 6H3",
  key: "1wxfjs"
}], ["path", {
  d: "M21 12h.01",
  key: "msek7k"
}], ["path", {
  d: "M21 18h.01",
  key: "1e8rq1"
}], ["path", {
  d: "M21 6h.01",
  key: "1koanj"
}]];
var TableProperties = [["path", {
  d: "M15 3v18",
  key: "14nvp0"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M21 9H3",
  key: "1338ky"
}], ["path", {
  d: "M21 15H3",
  key: "9uk58r"
}]];
var TableRowsSplit = [["path", {
  d: "M14 10h2",
  key: "1lstlu"
}], ["path", {
  d: "M15 22v-8",
  key: "1fwwgm"
}], ["path", {
  d: "M15 2v4",
  key: "1044rn"
}], ["path", {
  d: "M2 10h2",
  key: "1r8dkt"
}], ["path", {
  d: "M20 10h2",
  key: "1ug425"
}], ["path", {
  d: "M3 19h18",
  key: "awlh7x"
}], ["path", {
  d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",
  key: "ibqhof"
}], ["path", {
  d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",
  key: "1uenja"
}], ["path", {
  d: "M8 10h2",
  key: "66od0"
}], ["path", {
  d: "M9 22v-8",
  key: "fmnu31"
}], ["path", {
  d: "M9 2v4",
  key: "j1yeou"
}]];
var Table = [["path", {
  d: "M12 3v18",
  key: "108xh3"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M3 9h18",
  key: "1pudct"
}], ["path", {
  d: "M3 15h18",
  key: "5xshup"
}]];
var TabletSmartphone = [["rect", {
  width: "10",
  height: "14",
  x: "3",
  y: "8",
  rx: "2",
  key: "1vrsiq"
}], ["path", {
  d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",
  key: "1j4zmg"
}], ["path", {
  d: "M8 18h.01",
  key: "lrp35t"
}]];
var Tablet = [["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2",
  ry: "2",
  key: "76otgf"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "18",
  y2: "18",
  key: "1dp563"
}]];
var Tablets = [["circle", {
  cx: "7",
  cy: "7",
  r: "5",
  key: "x29byf"
}], ["circle", {
  cx: "17",
  cy: "17",
  r: "5",
  key: "1op1d2"
}], ["path", {
  d: "M12 17h10",
  key: "ls21zv"
}], ["path", {
  d: "m3.46 10.54 7.08-7.08",
  key: "1rehiu"
}]];
var Tag = [["path", {
  d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
  key: "vktsd0"
}], ["circle", {
  cx: "7.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor",
  key: "kqv944"
}]];
var Tags = [["path", {
  d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",
  key: "1cbfv1"
}], ["path", {
  d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",
  key: "135mg7"
}], ["circle", {
  cx: "6.5",
  cy: "9.5",
  r: ".5",
  fill: "currentColor",
  key: "5pm5xn"
}]];
var Tally1 = [["path", {
  d: "M4 4v16",
  key: "6qkkli"
}]];
var Tally2 = [["path", {
  d: "M4 4v16",
  key: "6qkkli"
}], ["path", {
  d: "M9 4v16",
  key: "81ygyz"
}]];
var Tally3 = [["path", {
  d: "M4 4v16",
  key: "6qkkli"
}], ["path", {
  d: "M9 4v16",
  key: "81ygyz"
}], ["path", {
  d: "M14 4v16",
  key: "12vmem"
}]];
var Tally4 = [["path", {
  d: "M4 4v16",
  key: "6qkkli"
}], ["path", {
  d: "M9 4v16",
  key: "81ygyz"
}], ["path", {
  d: "M14 4v16",
  key: "12vmem"
}], ["path", {
  d: "M19 4v16",
  key: "8ij5ei"
}]];
var Tally5 = [["path", {
  d: "M4 4v16",
  key: "6qkkli"
}], ["path", {
  d: "M9 4v16",
  key: "81ygyz"
}], ["path", {
  d: "M14 4v16",
  key: "12vmem"
}], ["path", {
  d: "M19 4v16",
  key: "8ij5ei"
}], ["path", {
  d: "M22 6 2 18",
  key: "h9moai"
}]];
var Tangent = [["circle", {
  cx: "17",
  cy: "4",
  r: "2",
  key: "y5j2s2"
}], ["path", {
  d: "M15.59 5.41 5.41 15.59",
  key: "l0vprr"
}], ["circle", {
  cx: "4",
  cy: "17",
  r: "2",
  key: "9p4efm"
}], ["path", {
  d: "M12 22s-4-9-1.5-11.5S22 12 22 12",
  key: "1twk4o"
}]];
var Target = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "6",
  key: "1vlfrh"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}]];
var Telescope = [["path", {
  d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",
  key: "k4qptu"
}], ["path", {
  d: "m13.56 11.747 4.332-.924",
  key: "19l80z"
}], ["path", {
  d: "m16 21-3.105-6.21",
  key: "7oh9d"
}], ["path", {
  d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",
  key: "m7xp4m"
}], ["path", {
  d: "m6.158 8.633 1.114 4.456",
  key: "74o979"
}], ["path", {
  d: "m8 21 3.105-6.21",
  key: "1fvxut"
}], ["circle", {
  cx: "12",
  cy: "13",
  r: "2",
  key: "1c1ljs"
}]];
var TentTree = [["circle", {
  cx: "4",
  cy: "4",
  r: "2",
  key: "bt5ra8"
}], ["path", {
  d: "m14 5 3-3 3 3",
  key: "1sorif"
}], ["path", {
  d: "m14 10 3-3 3 3",
  key: "1jyi9h"
}], ["path", {
  d: "M17 14V2",
  key: "8ymqnk"
}], ["path", {
  d: "M17 14H7l-5 8h20Z",
  key: "13ar7p"
}], ["path", {
  d: "M8 14v8",
  key: "1ghmqk"
}], ["path", {
  d: "m9 14 5 8",
  key: "13pgi6"
}]];
var Tent = [["path", {
  d: "M3.5 21 14 3",
  key: "1szst5"
}], ["path", {
  d: "M20.5 21 10 3",
  key: "1310c3"
}], ["path", {
  d: "M15.5 21 12 15l-3.5 6",
  key: "1ddtfw"
}], ["path", {
  d: "M2 21h20",
  key: "1nyx9w"
}]];
var Terminal = [["path", {
  d: "M12 19h8",
  key: "baeox8"
}], ["path", {
  d: "m4 17 6-6-6-6",
  key: "1yngyt"
}]];
var TestTubeDiagonal = [["path", {
  d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3",
  key: "1ub6xw"
}], ["path", {
  d: "m16 2 6 6",
  key: "1gw87d"
}], ["path", {
  d: "M12 16H4",
  key: "1cjfip"
}]];
var TestTube = [["path", {
  d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",
  key: "125lnx"
}], ["path", {
  d: "M8.5 2h7",
  key: "csnxdl"
}], ["path", {
  d: "M14.5 16h-5",
  key: "1ox875"
}]];
var TestTubes = [["path", {
  d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2",
  key: "1hjrqt"
}], ["path", {
  d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2",
  key: "16lc8n"
}], ["path", {
  d: "M3 2h7",
  key: "7s29d5"
}], ["path", {
  d: "M14 2h7",
  key: "7sicin"
}], ["path", {
  d: "M9 16H4",
  key: "1bfye3"
}], ["path", {
  d: "M20 16h-5",
  key: "ddnjpe"
}]];
var TextCursorInput = [["path", {
  d: "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6",
  key: "1528k5"
}], ["path", {
  d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",
  key: "13ksps"
}], ["path", {
  d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",
  key: "1n9rhb"
}], ["path", {
  d: "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1",
  key: "1mj8rg"
}], ["path", {
  d: "M9 6v12",
  key: "velyjx"
}]];
var TextCursor = [["path", {
  d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",
  key: "uvaxm9"
}], ["path", {
  d: "M7 22h1a4 4 0 0 0 4-4v-1",
  key: "11xy8d"
}], ["path", {
  d: "M7 2h1a4 4 0 0 1 4 4v1",
  key: "1uw06m"
}]];
var TextQuote = [["path", {
  d: "M17 6H3",
  key: "16j9eg"
}], ["path", {
  d: "M21 12H8",
  key: "scolzb"
}], ["path", {
  d: "M21 18H8",
  key: "1wfozv"
}], ["path", {
  d: "M3 12v6",
  key: "fv4c87"
}]];
var TextSearch = [["path", {
  d: "M21 6H3",
  key: "1jwq7v"
}], ["path", {
  d: "M10 12H3",
  key: "1ulcyk"
}], ["path", {
  d: "M10 18H3",
  key: "13769t"
}], ["circle", {
  cx: "17",
  cy: "15",
  r: "3",
  key: "1upz2a"
}], ["path", {
  d: "m21 19-1.9-1.9",
  key: "dwi7p8"
}]];
var TextSelect = [["path", {
  d: "M14 21h1",
  key: "v9vybs"
}], ["path", {
  d: "M14 3h1",
  key: "1ec4yj"
}], ["path", {
  d: "M19 3a2 2 0 0 1 2 2",
  key: "18rm91"
}], ["path", {
  d: "M21 14v1",
  key: "169vum"
}], ["path", {
  d: "M21 19a2 2 0 0 1-2 2",
  key: "1j7049"
}], ["path", {
  d: "M21 9v1",
  key: "mxsmne"
}], ["path", {
  d: "M3 14v1",
  key: "vnatye"
}], ["path", {
  d: "M3 9v1",
  key: "1r0deq"
}], ["path", {
  d: "M5 21a2 2 0 0 1-2-2",
  key: "sbafld"
}], ["path", {
  d: "M5 3a2 2 0 0 0-2 2",
  key: "y57alp"
}], ["path", {
  d: "M7 12h10",
  key: "b7w52i"
}], ["path", {
  d: "M7 16h6",
  key: "1vyc9m"
}], ["path", {
  d: "M7 8h8",
  key: "1jbsf9"
}], ["path", {
  d: "M9 21h1",
  key: "15o7lz"
}], ["path", {
  d: "M9 3h1",
  key: "1yesri"
}]];
var Text = [["path", {
  d: "M15 18H3",
  key: "olowqp"
}], ["path", {
  d: "M17 6H3",
  key: "16j9eg"
}], ["path", {
  d: "M21 12H3",
  key: "2avoz0"
}]];
var Theater = [["path", {
  d: "M2 10s3-3 3-8",
  key: "3xiif0"
}], ["path", {
  d: "M22 10s-3-3-3-8",
  key: "ioaa5q"
}], ["path", {
  d: "M10 2c0 4.4-3.6 8-8 8",
  key: "16fkpi"
}], ["path", {
  d: "M14 2c0 4.4 3.6 8 8 8",
  key: "b9eulq"
}], ["path", {
  d: "M2 10s2 2 2 5",
  key: "1au1lb"
}], ["path", {
  d: "M22 10s-2 2-2 5",
  key: "qi2y5e"
}], ["path", {
  d: "M8 15h8",
  key: "45n4r"
}], ["path", {
  d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",
  key: "1vsc2m"
}], ["path", {
  d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",
  key: "hrha4u"
}]];
var ThermometerSnowflake = [["path", {
  d: "m10 20-1.25-2.5L6 18",
  key: "18frcb"
}], ["path", {
  d: "M10 4 8.75 6.5 6 6",
  key: "7mghy3"
}], ["path", {
  d: "M10.585 15H10",
  key: "4nqulp"
}], ["path", {
  d: "M2 12h6.5L10 9",
  key: "kv9z4n"
}], ["path", {
  d: "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z",
  key: "yu0u2z"
}], ["path", {
  d: "m4 10 1.5 2L4 14",
  key: "k9enpj"
}], ["path", {
  d: "m7 21 3-6-1.5-3",
  key: "j8hb9u"
}], ["path", {
  d: "m7 3 3 6h2",
  key: "1bbqgq"
}]];
var ThermometerSun = [["path", {
  d: "M12 9a4 4 0 0 0-2 7.5",
  key: "1jvsq6"
}], ["path", {
  d: "M12 3v2",
  key: "1w22ol"
}], ["path", {
  d: "m6.6 18.4-1.4 1.4",
  key: "w2yidj"
}], ["path", {
  d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
  key: "iof6y5"
}], ["path", {
  d: "M4 13H2",
  key: "118le4"
}], ["path", {
  d: "M6.34 7.34 4.93 5.93",
  key: "1brd51"
}]];
var Thermometer = [["path", {
  d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",
  key: "17jzev"
}]];
var ThumbsDown = [["path", {
  d: "M17 14V2",
  key: "8ymqnk"
}], ["path", {
  d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
  key: "m61m77"
}]];
var ThumbsUp = [["path", {
  d: "M7 10v12",
  key: "1qc93n"
}], ["path", {
  d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
  key: "emmmcr"
}]];
var TicketCheck = [["path", {
  d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
  key: "qn84l0"
}], ["path", {
  d: "m9 12 2 2 4-4",
  key: "dzmm74"
}]];
var TicketMinus = [["path", {
  d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
  key: "qn84l0"
}], ["path", {
  d: "M9 12h6",
  key: "1c52cq"
}]];
var TicketPercent = [["path", {
  d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
  key: "1l48ns"
}], ["path", {
  d: "M9 9h.01",
  key: "1q5me6"
}], ["path", {
  d: "m15 9-6 6",
  key: "1uzhvr"
}], ["path", {
  d: "M15 15h.01",
  key: "lqbp3k"
}]];
var TicketPlus = [["path", {
  d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
  key: "qn84l0"
}], ["path", {
  d: "M9 12h6",
  key: "1c52cq"
}], ["path", {
  d: "M12 9v6",
  key: "199k2o"
}]];
var TicketSlash = [["path", {
  d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
  key: "qn84l0"
}], ["path", {
  d: "m9.5 14.5 5-5",
  key: "qviqfa"
}]];
var Ticket = [["path", {
  d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
  key: "qn84l0"
}], ["path", {
  d: "M13 5v2",
  key: "dyzc3o"
}], ["path", {
  d: "M13 17v2",
  key: "1ont0d"
}], ["path", {
  d: "M13 11v2",
  key: "1wjjxi"
}]];
var TicketsPlane = [["path", {
  d: "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12",
  key: "16muxl"
}], ["path", {
  d: "m12 13.5 3.75.5",
  key: "1i9qhk"
}], ["path", {
  d: "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8",
  key: "12lg5p"
}], ["path", {
  d: "M6 10V8",
  key: "1y41hn"
}], ["path", {
  d: "M6 14v1",
  key: "cao2tf"
}], ["path", {
  d: "M6 19v2",
  key: "1loha6"
}], ["rect", {
  x: "2",
  y: "8",
  width: "20",
  height: "13",
  rx: "2",
  key: "p3bz5l"
}]];
var TicketX = [["path", {
  d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
  key: "qn84l0"
}], ["path", {
  d: "m9.5 14.5 5-5",
  key: "qviqfa"
}], ["path", {
  d: "m9.5 9.5 5 5",
  key: "18nt4w"
}]];
var Tickets = [["path", {
  d: "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8",
  key: "12lg5p"
}], ["path", {
  d: "M6 10V8",
  key: "1y41hn"
}], ["path", {
  d: "M6 14v1",
  key: "cao2tf"
}], ["path", {
  d: "M6 19v2",
  key: "1loha6"
}], ["rect", {
  x: "2",
  y: "8",
  width: "20",
  height: "13",
  rx: "2",
  key: "p3bz5l"
}]];
var TimerOff = [["path", {
  d: "M10 2h4",
  key: "n1abiw"
}], ["path", {
  d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",
  key: "10he05"
}], ["path", {
  d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",
  key: "15f7sh"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M12 12v-2",
  key: "fwoke6"
}]];
var TimerReset = [["path", {
  d: "M10 2h4",
  key: "n1abiw"
}], ["path", {
  d: "M12 14v-4",
  key: "1evpnu"
}], ["path", {
  d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",
  key: "1ts96g"
}], ["path", {
  d: "M9 17H4v5",
  key: "8t5av"
}]];
var Timer = [["line", {
  x1: "10",
  x2: "14",
  y1: "2",
  y2: "2",
  key: "14vaq8"
}], ["line", {
  x1: "12",
  x2: "15",
  y1: "14",
  y2: "11",
  key: "17fdiu"
}], ["circle", {
  cx: "12",
  cy: "14",
  r: "8",
  key: "1e1u0o"
}]];
var ToggleLeft = [["circle", {
  cx: "9",
  cy: "12",
  r: "3",
  key: "u3jwor"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "5",
  rx: "7",
  key: "g7kal2"
}]];
var ToggleRight = [["circle", {
  cx: "15",
  cy: "12",
  r: "3",
  key: "1afu0r"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "5",
  rx: "7",
  key: "g7kal2"
}]];
var Toilet = [["path", {
  d: "M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18",
  key: "kc4kqr"
}], ["path", {
  d: "M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8",
  key: "1tqs57"
}]];
var Tornado = [["path", {
  d: "M21 4H3",
  key: "1hwok0"
}], ["path", {
  d: "M18 8H6",
  key: "41n648"
}], ["path", {
  d: "M19 12H9",
  key: "1g4lpz"
}], ["path", {
  d: "M16 16h-6",
  key: "1j5d54"
}], ["path", {
  d: "M11 20H9",
  key: "39obr8"
}]];
var Torus = [["ellipse", {
  cx: "12",
  cy: "11",
  rx: "3",
  ry: "2",
  key: "1b2qxu"
}], ["ellipse", {
  cx: "12",
  cy: "12.5",
  rx: "10",
  ry: "8.5",
  key: "h8emeu"
}]];
var TouchpadOff = [["path", {
  d: "M12 20v-6",
  key: "1rm09r"
}], ["path", {
  d: "M19.656 14H22",
  key: "170xzr"
}], ["path", {
  d: "M2 14h12",
  key: "d8icqz"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",
  key: "s23sx2"
}], ["path", {
  d: "M9.656 4H20a2 2 0 0 1 2 2v10.344",
  key: "ovjcvl"
}]];
var Touchpad = [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2",
  key: "18n3k1"
}], ["path", {
  d: "M2 14h20",
  key: "myj16y"
}], ["path", {
  d: "M12 20v-6",
  key: "1rm09r"
}]];
var TowerControl = [["path", {
  d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",
  key: "1pledb"
}], ["path", {
  d: "M8 13v9",
  key: "hmv0ci"
}], ["path", {
  d: "M16 22v-9",
  key: "ylnf1u"
}], ["path", {
  d: "m9 6 1 7",
  key: "dpdgam"
}], ["path", {
  d: "m15 6-1 7",
  key: "ls7zgu"
}], ["path", {
  d: "M12 6V2",
  key: "1pj48d"
}], ["path", {
  d: "M13 2h-2",
  key: "mj6ths"
}]];
var ToyBrick = [["rect", {
  width: "18",
  height: "12",
  x: "3",
  y: "8",
  rx: "1",
  key: "158fvp"
}], ["path", {
  d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",
  key: "s0042v"
}], ["path", {
  d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",
  key: "9wmeh2"
}]];
var Tractor = [["path", {
  d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20",
  key: "she1j9"
}], ["path", {
  d: "M16 18h-5",
  key: "bq60fd"
}], ["path", {
  d: "M18 5a1 1 0 0 0-1 1v5.573",
  key: "1kv8ia"
}], ["path", {
  d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246",
  key: "1q1ert"
}], ["path", {
  d: "M4 11V4",
  key: "9ft8pt"
}], ["path", {
  d: "M7 15h.01",
  key: "k5ht0j"
}], ["path", {
  d: "M8 10.1V4",
  key: "1jgyzo"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "2",
  key: "1emm8v"
}], ["circle", {
  cx: "7",
  cy: "15",
  r: "5",
  key: "ddtuc"
}]];
var TrafficCone = [["path", {
  d: "M16.05 10.966a5 2.5 0 0 1-8.1 0",
  key: "m5jpwb"
}], ["path", {
  d: "m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04",
  key: "rbg3g8"
}], ["path", {
  d: "M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z",
  key: "vap8c8"
}], ["path", {
  d: "M9.194 6.57a5 2.5 0 0 0 5.61 0",
  key: "15hn5c"
}]];
var TrainFrontTunnel = [["path", {
  d: "M2 22V12a10 10 0 1 1 20 0v10",
  key: "o0fyp0"
}], ["path", {
  d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",
  key: "m8q3n9"
}], ["path", {
  d: "M10 15h.01",
  key: "44in9x"
}], ["path", {
  d: "M14 15h.01",
  key: "5mohn5"
}], ["path", {
  d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",
  key: "hckbmu"
}], ["path", {
  d: "m9 19-2 3",
  key: "iij7hm"
}], ["path", {
  d: "m15 19 2 3",
  key: "npx8sa"
}]];
var TrainFront = [["path", {
  d: "M8 3.1V7a4 4 0 0 0 8 0V3.1",
  key: "1v71zp"
}], ["path", {
  d: "m9 15-1-1",
  key: "1yrq24"
}], ["path", {
  d: "m15 15 1-1",
  key: "1t0d6s"
}], ["path", {
  d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",
  key: "1p0hjs"
}], ["path", {
  d: "m8 19-2 3",
  key: "13i0xs"
}], ["path", {
  d: "m16 19 2 3",
  key: "xo31yx"
}]];
var TrainTrack = [["path", {
  d: "M2 17 17 2",
  key: "18b09t"
}], ["path", {
  d: "m2 14 8 8",
  key: "1gv9hu"
}], ["path", {
  d: "m5 11 8 8",
  key: "189pqp"
}], ["path", {
  d: "m8 8 8 8",
  key: "1imecy"
}], ["path", {
  d: "m11 5 8 8",
  key: "ummqn6"
}], ["path", {
  d: "m14 2 8 8",
  key: "1vk7dn"
}], ["path", {
  d: "M7 22 22 7",
  key: "15mb1i"
}]];
var TramFront = [["rect", {
  width: "16",
  height: "16",
  x: "4",
  y: "3",
  rx: "2",
  key: "1wxw4b"
}], ["path", {
  d: "M4 11h16",
  key: "mpoxn0"
}], ["path", {
  d: "M12 3v8",
  key: "1h2ygw"
}], ["path", {
  d: "m8 19-2 3",
  key: "13i0xs"
}], ["path", {
  d: "m18 22-2-3",
  key: "1p0ohu"
}], ["path", {
  d: "M8 15h.01",
  key: "a7atzg"
}], ["path", {
  d: "M16 15h.01",
  key: "rnfrdf"
}]];
var Transgender = [["path", {
  d: "M12 16v6",
  key: "c8a4gj"
}], ["path", {
  d: "M14 20h-4",
  key: "m8m19d"
}], ["path", {
  d: "M18 2h4v4",
  key: "1341mj"
}], ["path", {
  d: "m2 2 7.17 7.17",
  key: "13q8l2"
}], ["path", {
  d: "M2 5.355V2h3.357",
  key: "18136r"
}], ["path", {
  d: "m22 2-7.17 7.17",
  key: "1epvy4"
}], ["path", {
  d: "M8 5 5 8",
  key: "mgbjhz"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "4",
  key: "4exip2"
}]];
var Trash2 = [["path", {
  d: "M3 6h18",
  key: "d0wm0j"
}], ["path", {
  d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
  key: "4alrt4"
}], ["path", {
  d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
  key: "v07s0e"
}], ["line", {
  x1: "10",
  x2: "10",
  y1: "11",
  y2: "17",
  key: "1uufr5"
}], ["line", {
  x1: "14",
  x2: "14",
  y1: "11",
  y2: "17",
  key: "xtxkd"
}]];
var Trash = [["path", {
  d: "M3 6h18",
  key: "d0wm0j"
}], ["path", {
  d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
  key: "4alrt4"
}], ["path", {
  d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
  key: "v07s0e"
}]];
var TreeDeciduous = [["path", {
  d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",
  key: "oadzkq"
}], ["path", {
  d: "M12 19v3",
  key: "npa21l"
}]];
var TreePalm = [["path", {
  d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",
  key: "foxbe7"
}], ["path", {
  d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",
  key: "18arnh"
}], ["path", {
  d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",
  key: "ywahnh"
}], ["path", {
  d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",
  key: "ft0feo"
}]];
var TreePine = [["path", {
  d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
  key: "cpyugq"
}], ["path", {
  d: "M12 22v-3",
  key: "kmzjlo"
}]];
var Trees = [["path", {
  d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",
  key: "1l6gj6"
}], ["path", {
  d: "M7 16v6",
  key: "1a82de"
}], ["path", {
  d: "M13 19v3",
  key: "13sx9i"
}], ["path", {
  d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
  key: "1sj9kv"
}]];
var Trello = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2",
  key: "1m3agn"
}], ["rect", {
  width: "3",
  height: "9",
  x: "7",
  y: "7",
  key: "14n3xi"
}], ["rect", {
  width: "3",
  height: "5",
  x: "14",
  y: "7",
  key: "s4azjd"
}]];
var TrendingDown = [["path", {
  d: "M16 17h6v-6",
  key: "t6n2it"
}], ["path", {
  d: "m22 17-8.5-8.5-5 5L2 7",
  key: "x473p"
}]];
var TrendingUp = [["path", {
  d: "M16 7h6v6",
  key: "box55l"
}], ["path", {
  d: "m22 7-8.5 8.5-5-5L2 17",
  key: "1t1m79"
}]];
var TrendingUpDown = [["path", {
  d: "M14.828 14.828 21 21",
  key: "ar5fw7"
}], ["path", {
  d: "M21 16v5h-5",
  key: "1ck2sf"
}], ["path", {
  d: "m21 3-9 9-4-4-6 6",
  key: "1h02xo"
}], ["path", {
  d: "M21 8V3h-5",
  key: "1qoq8a"
}]];
var TriangleAlert = [["path", {
  d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
  key: "wmoenq"
}], ["path", {
  d: "M12 9v4",
  key: "juzpu7"
}], ["path", {
  d: "M12 17h.01",
  key: "p32p05"
}]];
var TriangleDashed = [["path", {
  d: "M10.17 4.193a2 2 0 0 1 3.666.013",
  key: "pltmmw"
}], ["path", {
  d: "M14 21h2",
  key: "v4qezv"
}], ["path", {
  d: "m15.874 7.743 1 1.732",
  key: "10m0iw"
}], ["path", {
  d: "m18.849 12.952 1 1.732",
  key: "zadnam"
}], ["path", {
  d: "M21.824 18.18a2 2 0 0 1-1.835 2.824",
  key: "fvwuk4"
}], ["path", {
  d: "M4.024 21a2 2 0 0 1-1.839-2.839",
  key: "1e1kah"
}], ["path", {
  d: "m5.136 12.952-1 1.732",
  key: "1u4ldi"
}], ["path", {
  d: "M8 21h2",
  key: "i9zjee"
}], ["path", {
  d: "m8.102 7.743-1 1.732",
  key: "1zzo4u"
}]];
var TriangleRight = [["path", {
  d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",
  key: "183wce"
}]];
var Triangle = [["path", {
  d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
  key: "14u9p9"
}]];
var Trophy = [["path", {
  d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
  key: "1n3hpd"
}], ["path", {
  d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
  key: "rfe1zi"
}], ["path", {
  d: "M18 9h1.5a1 1 0 0 0 0-5H18",
  key: "7xy6bh"
}], ["path", {
  d: "M4 22h16",
  key: "57wxv0"
}], ["path", {
  d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
  key: "1mhfuq"
}], ["path", {
  d: "M6 9H4.5a1 1 0 0 1 0-5H6",
  key: "tex48p"
}]];
var TruckElectric = [["path", {
  d: "M14 19V7a2 2 0 0 0-2-2H9",
  key: "15peso"
}], ["path", {
  d: "M15 19H9",
  key: "18q6dt"
}], ["path", {
  d: "M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14",
  key: "1dkp3j"
}], ["path", {
  d: "M2 13v5a1 1 0 0 0 1 1h2",
  key: "pkmmzz"
}], ["path", {
  d: "M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02",
  key: "1n26pd"
}], ["circle", {
  cx: "17",
  cy: "19",
  r: "2",
  key: "1nxcgd"
}], ["circle", {
  cx: "7",
  cy: "19",
  r: "2",
  key: "gzo7y7"
}]];
var Truck = [["path", {
  d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
  key: "wrbu53"
}], ["path", {
  d: "M15 18H9",
  key: "1lyqi6"
}], ["path", {
  d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
  key: "lysw3i"
}], ["circle", {
  cx: "17",
  cy: "18",
  r: "2",
  key: "332jqn"
}], ["circle", {
  cx: "7",
  cy: "18",
  r: "2",
  key: "19iecd"
}]];
var Turtle = [["path", {
  d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",
  key: "1lbbv7"
}], ["path", {
  d: "M4.82 7.9 8 10",
  key: "m9wose"
}], ["path", {
  d: "M15.18 7.9 12 10",
  key: "p8dp2u"
}], ["path", {
  d: "M16.93 10H20a2 2 0 0 1 0 4H2",
  key: "12nsm7"
}]];
var TvMinimalPlay = [["path", {
  d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",
  key: "1pctta"
}], ["path", {
  d: "M7 21h10",
  key: "1b0cd5"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2",
  key: "48i651"
}]];
var TvMinimal = [["path", {
  d: "M7 21h10",
  key: "1b0cd5"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2",
  key: "48i651"
}]];
var Tv = [["path", {
  d: "m17 2-5 5-5-5",
  key: "16satq"
}], ["rect", {
  width: "20",
  height: "15",
  x: "2",
  y: "7",
  rx: "2",
  key: "1e6viu"
}]];
var Twitch = [["path", {
  d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",
  key: "c0yzno"
}]];
var Twitter = [["path", {
  d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
  key: "pff0z6"
}]];
var TypeOutline = [["path", {
  d: "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z",
  key: "1reda3"
}]];
var Type = [["path", {
  d: "M12 4v16",
  key: "1654pz"
}], ["path", {
  d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",
  key: "e0r10z"
}], ["path", {
  d: "M9 20h6",
  key: "s66wpe"
}]];
var UmbrellaOff = [["path", {
  d: "M12 2v1",
  key: "11qlp1"
}], ["path", {
  d: "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",
  key: "eki10q"
}], ["path", {
  d: "M17.5 12H22A10 10 0 0 0 9.004 3.455",
  key: "n2ayka"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]];
var Umbrella = [["path", {
  d: "M22 12a10.06 10.06 1 0 0-20 0Z",
  key: "1teyop"
}], ["path", {
  d: "M12 12v8a2 2 0 0 0 4 0",
  key: "ulpmoc"
}], ["path", {
  d: "M12 2v1",
  key: "11qlp1"
}]];
var Underline = [["path", {
  d: "M6 4v6a6 6 0 0 0 12 0V4",
  key: "9kb039"
}], ["line", {
  x1: "4",
  x2: "20",
  y1: "20",
  y2: "20",
  key: "nun2al"
}]];
var Undo2 = [["path", {
  d: "M9 14 4 9l5-5",
  key: "102s5s"
}], ["path", {
  d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
  key: "f3b9sd"
}]];
var UndoDot = [["path", {
  d: "M21 17a9 9 0 0 0-15-6.7L3 13",
  key: "8mp6z9"
}], ["path", {
  d: "M3 7v6h6",
  key: "1v2h90"
}], ["circle", {
  cx: "12",
  cy: "17",
  r: "1",
  key: "1ixnty"
}]];
var Undo = [["path", {
  d: "M3 7v6h6",
  key: "1v2h90"
}], ["path", {
  d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",
  key: "1r6uu6"
}]];
var UnfoldHorizontal = [["path", {
  d: "M16 12h6",
  key: "15xry1"
}], ["path", {
  d: "M8 12H2",
  key: "1jqql6"
}], ["path", {
  d: "M12 2v2",
  key: "tus03m"
}], ["path", {
  d: "M12 8v2",
  key: "1woqiv"
}], ["path", {
  d: "M12 14v2",
  key: "8jcxud"
}], ["path", {
  d: "M12 20v2",
  key: "1lh1kg"
}], ["path", {
  d: "m19 15 3-3-3-3",
  key: "wjy7rq"
}], ["path", {
  d: "m5 9-3 3 3 3",
  key: "j64kie"
}]];
var UnfoldVertical = [["path", {
  d: "M12 22v-6",
  key: "6o8u61"
}], ["path", {
  d: "M12 8V2",
  key: "1wkif3"
}], ["path", {
  d: "M4 12H2",
  key: "rhcxmi"
}], ["path", {
  d: "M10 12H8",
  key: "s88cx1"
}], ["path", {
  d: "M16 12h-2",
  key: "10asgb"
}], ["path", {
  d: "M22 12h-2",
  key: "14jgyd"
}], ["path", {
  d: "m15 19-3 3-3-3",
  key: "11eu04"
}], ["path", {
  d: "m15 5-3-3-3 3",
  key: "itvq4r"
}]];
var Ungroup = [["rect", {
  width: "8",
  height: "6",
  x: "5",
  y: "4",
  rx: "1",
  key: "nzclkv"
}], ["rect", {
  width: "8",
  height: "6",
  x: "11",
  y: "14",
  rx: "1",
  key: "4tytwb"
}]];
var University = [["path", {
  d: "M14 21v-3a2 2 0 0 0-4 0v3",
  key: "1rgiei"
}], ["path", {
  d: "M18 12h.01",
  key: "yjnet6"
}], ["path", {
  d: "M18 16h.01",
  key: "plv8zi"
}], ["path", {
  d: "M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z",
  key: "1ogmi3"
}], ["path", {
  d: "M6 12h.01",
  key: "c2rlol"
}], ["path", {
  d: "M6 16h.01",
  key: "1pmjb7"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "2",
  key: "1yojzk"
}]];
var Unlink = [["path", {
  d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",
  key: "yqzxt4"
}], ["path", {
  d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",
  key: "4qinb0"
}], ["line", {
  x1: "8",
  x2: "8",
  y1: "2",
  y2: "5",
  key: "1041cp"
}], ["line", {
  x1: "2",
  x2: "5",
  y1: "8",
  y2: "8",
  key: "14m1p5"
}], ["line", {
  x1: "16",
  x2: "16",
  y1: "19",
  y2: "22",
  key: "rzdirn"
}], ["line", {
  x1: "19",
  x2: "22",
  y1: "16",
  y2: "16",
  key: "ox905f"
}]];
var Unlink2 = [["path", {
  d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",
  key: "1re2ne"
}]];
var Unplug = [["path", {
  d: "m19 5 3-3",
  key: "yk6iyv"
}], ["path", {
  d: "m2 22 3-3",
  key: "19mgm9"
}], ["path", {
  d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",
  key: "goz73y"
}], ["path", {
  d: "M7.5 13.5 10 11",
  key: "7xgeeb"
}], ["path", {
  d: "M10.5 16.5 13 14",
  key: "10btkg"
}], ["path", {
  d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",
  key: "1snsnr"
}]];
var Upload = [["path", {
  d: "M12 3v12",
  key: "1x0j5s"
}], ["path", {
  d: "m17 8-5-5-5 5",
  key: "7q97r8"
}], ["path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
  key: "ih7n3h"
}]];
var Usb = [["circle", {
  cx: "10",
  cy: "7",
  r: "1",
  key: "dypaad"
}], ["circle", {
  cx: "4",
  cy: "20",
  r: "1",
  key: "22iqad"
}], ["path", {
  d: "M4.7 19.3 19 5",
  key: "1enqfc"
}], ["path", {
  d: "m21 3-3 1 2 2Z",
  key: "d3ov82"
}], ["path", {
  d: "M9.26 7.68 5 12l2 5",
  key: "1esawj"
}], ["path", {
  d: "m10 14 5 2 3.5-3.5",
  key: "v8oal5"
}], ["path", {
  d: "m18 12 1-1 1 1-1 1Z",
  key: "1bh22v"
}]];
var UserCog = [["path", {
  d: "M10 15H6a4 4 0 0 0-4 4v2",
  key: "1nfge6"
}], ["path", {
  d: "m14.305 16.53.923-.382",
  key: "1itpsq"
}], ["path", {
  d: "m15.228 13.852-.923-.383",
  key: "eplpkm"
}], ["path", {
  d: "m16.852 12.228-.383-.923",
  key: "13v3q0"
}], ["path", {
  d: "m16.852 17.772-.383.924",
  key: "1i8mnm"
}], ["path", {
  d: "m19.148 12.228.383-.923",
  key: "1q8j1v"
}], ["path", {
  d: "m19.53 18.696-.382-.924",
  key: "vk1qj3"
}], ["path", {
  d: "m20.772 13.852.924-.383",
  key: "n880s0"
}], ["path", {
  d: "m20.772 16.148.924.383",
  key: "1g6xey"
}], ["circle", {
  cx: "18",
  cy: "15",
  r: "3",
  key: "gjjjvw"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4",
  key: "nufk8"
}]];
var UserCheck = [["path", {
  d: "m16 11 2 2 4-4",
  key: "9rsbq5"
}], ["path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
  key: "1yyitq"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4",
  key: "nufk8"
}]];
var UserLock = [["circle", {
  cx: "10",
  cy: "7",
  r: "4",
  key: "e45bow"
}], ["path", {
  d: "M10.3 15H7a4 4 0 0 0-4 4v2",
  key: "3bnktk"
}], ["path", {
  d: "M15 15.5V14a2 2 0 0 1 4 0v1.5",
  key: "12ym5i"
}], ["rect", {
  width: "8",
  height: "5",
  x: "13",
  y: "16",
  rx: ".899",
  key: "4p176n"
}]];
var UserMinus = [["path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
  key: "1yyitq"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4",
  key: "nufk8"
}], ["line", {
  x1: "22",
  x2: "16",
  y1: "11",
  y2: "11",
  key: "1shjgl"
}]];
var UserPlus = [["path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
  key: "1yyitq"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4",
  key: "nufk8"
}], ["line", {
  x1: "19",
  x2: "19",
  y1: "8",
  y2: "14",
  key: "1bvyxn"
}], ["line", {
  x1: "22",
  x2: "16",
  y1: "11",
  y2: "11",
  key: "1shjgl"
}]];
var UserPen = [["path", {
  d: "M11.5 15H7a4 4 0 0 0-4 4v2",
  key: "15lzij"
}], ["path", {
  d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
  key: "1817ys"
}], ["circle", {
  cx: "10",
  cy: "7",
  r: "4",
  key: "e45bow"
}]];
var UserRoundCheck = [["path", {
  d: "M2 21a8 8 0 0 1 13.292-6",
  key: "bjp14o"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "5",
  key: "o932ke"
}], ["path", {
  d: "m16 19 2 2 4-4",
  key: "1b14m6"
}]];
var UserRoundCog = [["path", {
  d: "m14.305 19.53.923-.382",
  key: "3m78fa"
}], ["path", {
  d: "m15.228 16.852-.923-.383",
  key: "npixar"
}], ["path", {
  d: "m16.852 15.228-.383-.923",
  key: "5xggr7"
}], ["path", {
  d: "m16.852 20.772-.383.924",
  key: "dpfhf9"
}], ["path", {
  d: "m19.148 15.228.383-.923",
  key: "1reyyz"
}], ["path", {
  d: "m19.53 21.696-.382-.924",
  key: "1goivc"
}], ["path", {
  d: "M2 21a8 8 0 0 1 10.434-7.62",
  key: "1yezr2"
}], ["path", {
  d: "m20.772 16.852.924-.383",
  key: "htqkph"
}], ["path", {
  d: "m20.772 19.148.924.383",
  key: "9w9pjp"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "5",
  key: "o932ke"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3",
  key: "1xkwt0"
}]];
var UserRoundMinus = [["path", {
  d: "M2 21a8 8 0 0 1 13.292-6",
  key: "bjp14o"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "5",
  key: "o932ke"
}], ["path", {
  d: "M22 19h-6",
  key: "vcuq98"
}]];
var UserRoundPen = [["path", {
  d: "M2 21a8 8 0 0 1 10.821-7.487",
  key: "1c8h7z"
}], ["path", {
  d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
  key: "1817ys"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "5",
  key: "o932ke"
}]];
var UserRoundPlus = [["path", {
  d: "M2 21a8 8 0 0 1 13.292-6",
  key: "bjp14o"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "5",
  key: "o932ke"
}], ["path", {
  d: "M19 16v6",
  key: "tddt3s"
}], ["path", {
  d: "M22 19h-6",
  key: "vcuq98"
}]];
var UserRoundSearch = [["circle", {
  cx: "10",
  cy: "8",
  r: "5",
  key: "o932ke"
}], ["path", {
  d: "M2 21a8 8 0 0 1 10.434-7.62",
  key: "1yezr2"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3",
  key: "1xkwt0"
}], ["path", {
  d: "m22 22-1.9-1.9",
  key: "1e5ubv"
}]];
var UserRoundX = [["path", {
  d: "M2 21a8 8 0 0 1 11.873-7",
  key: "74fkxq"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "5",
  key: "o932ke"
}], ["path", {
  d: "m17 17 5 5",
  key: "p7ous7"
}], ["path", {
  d: "m22 17-5 5",
  key: "gqnmv0"
}]];
var UserRound = [["circle", {
  cx: "12",
  cy: "8",
  r: "5",
  key: "1hypcn"
}], ["path", {
  d: "M20 21a8 8 0 0 0-16 0",
  key: "rfgkzh"
}]];
var UserSearch = [["circle", {
  cx: "10",
  cy: "7",
  r: "4",
  key: "e45bow"
}], ["path", {
  d: "M10.3 15H7a4 4 0 0 0-4 4v2",
  key: "3bnktk"
}], ["circle", {
  cx: "17",
  cy: "17",
  r: "3",
  key: "18b49y"
}], ["path", {
  d: "m21 21-1.9-1.9",
  key: "1g2n9r"
}]];
var UserX = [["path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
  key: "1yyitq"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4",
  key: "nufk8"
}], ["line", {
  x1: "17",
  x2: "22",
  y1: "8",
  y2: "13",
  key: "3nzzx3"
}], ["line", {
  x1: "22",
  x2: "17",
  y1: "8",
  y2: "13",
  key: "1swrse"
}]];
var User = [["path", {
  d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
  key: "975kel"
}], ["circle", {
  cx: "12",
  cy: "7",
  r: "4",
  key: "17ys0d"
}]];
var UsersRound = [["path", {
  d: "M18 21a8 8 0 0 0-16 0",
  key: "3ypg7q"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "5",
  key: "o932ke"
}], ["path", {
  d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",
  key: "10s06x"
}]];
var Users = [["path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
  key: "1yyitq"
}], ["path", {
  d: "M16 3.128a4 4 0 0 1 0 7.744",
  key: "16gr8j"
}], ["path", {
  d: "M22 21v-2a4 4 0 0 0-3-3.87",
  key: "kshegd"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4",
  key: "nufk8"
}]];
var UtensilsCrossed = [["path", {
  d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",
  key: "n7qcjb"
}], ["path", {
  d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",
  key: "d0u48b"
}], ["path", {
  d: "m2.1 21.8 6.4-6.3",
  key: "yn04lh"
}], ["path", {
  d: "m19 5-7 7",
  key: "194lzd"
}]];
var Utensils = [["path", {
  d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",
  key: "cjf0a3"
}], ["path", {
  d: "M7 2v20",
  key: "1473qp"
}], ["path", {
  d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",
  key: "j28e5"
}]];
var UtilityPole = [["path", {
  d: "M12 2v20",
  key: "t6zp3m"
}], ["path", {
  d: "M2 5h20",
  key: "1fs1ex"
}], ["path", {
  d: "M3 3v2",
  key: "9imdir"
}], ["path", {
  d: "M7 3v2",
  key: "n0os7"
}], ["path", {
  d: "M17 3v2",
  key: "1l2re6"
}], ["path", {
  d: "M21 3v2",
  key: "1duuac"
}], ["path", {
  d: "m19 5-7 7-7-7",
  key: "133zxf"
}]];
var Variable = [["path", {
  d: "M8 21s-4-3-4-9 4-9 4-9",
  key: "uto9ud"
}], ["path", {
  d: "M16 3s4 3 4 9-4 9-4 9",
  key: "4w2vsq"
}], ["line", {
  x1: "15",
  x2: "9",
  y1: "9",
  y2: "15",
  key: "f7djnv"
}], ["line", {
  x1: "9",
  x2: "15",
  y1: "9",
  y2: "15",
  key: "1shsy8"
}]];
var Vault = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["circle", {
  cx: "7.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor",
  key: "kqv944"
}], ["path", {
  d: "m7.9 7.9 2.7 2.7",
  key: "hpeyl3"
}], ["circle", {
  cx: "16.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor",
  key: "w0ekpg"
}], ["path", {
  d: "m13.4 10.6 2.7-2.7",
  key: "264c1n"
}], ["circle", {
  cx: "7.5",
  cy: "16.5",
  r: ".5",
  fill: "currentColor",
  key: "nkw3mc"
}], ["path", {
  d: "m7.9 16.1 2.7-2.7",
  key: "p81g5e"
}], ["circle", {
  cx: "16.5",
  cy: "16.5",
  r: ".5",
  fill: "currentColor",
  key: "fubopw"
}], ["path", {
  d: "m13.4 13.4 2.7 2.7",
  key: "abhel3"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2",
  key: "1c9p78"
}]];
var VenetianMask = [["path", {
  d: "M18 11c-1.5 0-2.5.5-3 2",
  key: "1fod00"
}], ["path", {
  d: "M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z",
  key: "d70hit"
}], ["path", {
  d: "M6 11c1.5 0 2.5.5 3 2",
  key: "136fht"
}]];
var Vegan = [["path", {
  d: "M16 8q6 0 6-6-6 0-6 6",
  key: "qsyyc4"
}], ["path", {
  d: "M17.41 3.59a10 10 0 1 0 3 3",
  key: "41m9h7"
}], ["path", {
  d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",
  key: "qiv7li"
}]];
var VenusAndMars = [["path", {
  d: "M10 20h4",
  key: "ni2waw"
}], ["path", {
  d: "M12 16v6",
  key: "c8a4gj"
}], ["path", {
  d: "M17 2h4v4",
  key: "vhe59"
}], ["path", {
  d: "m21 2-5.46 5.46",
  key: "19kypf"
}], ["circle", {
  cx: "12",
  cy: "11",
  r: "5",
  key: "16gxyc"
}]];
var Venus = [["path", {
  d: "M12 15v7",
  key: "t2xh3l"
}], ["path", {
  d: "M9 19h6",
  key: "456am0"
}], ["circle", {
  cx: "12",
  cy: "9",
  r: "6",
  key: "1nw4tq"
}]];
var VibrateOff = [["path", {
  d: "m2 8 2 2-2 2 2 2-2 2",
  key: "sv1b1"
}], ["path", {
  d: "m22 8-2 2 2 2-2 2 2 2",
  key: "101i4y"
}], ["path", {
  d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",
  key: "1hbad5"
}], ["path", {
  d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34",
  key: "1x5tf0"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}]];
var Vibrate = [["path", {
  d: "m2 8 2 2-2 2 2 2-2 2",
  key: "sv1b1"
}], ["path", {
  d: "m22 8-2 2 2 2-2 2 2 2",
  key: "101i4y"
}], ["rect", {
  width: "8",
  height: "14",
  x: "8",
  y: "5",
  rx: "1",
  key: "1oyrl4"
}]];
var VideoOff = [["path", {
  d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",
  key: "w8jjjt"
}], ["path", {
  d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",
  key: "1xawa7"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]];
var Video = [["path", {
  d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
  key: "ftymec"
}], ["rect", {
  x: "2",
  y: "6",
  width: "14",
  height: "12",
  rx: "2",
  key: "158x01"
}]];
var Videotape = [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2",
  key: "18n3k1"
}], ["path", {
  d: "M2 8h20",
  key: "d11cs7"
}], ["circle", {
  cx: "8",
  cy: "14",
  r: "2",
  key: "1k2qr5"
}], ["path", {
  d: "M8 12h8",
  key: "1wcyev"
}], ["circle", {
  cx: "16",
  cy: "14",
  r: "2",
  key: "14k7lr"
}]];
var View = [["path", {
  d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",
  key: "mrq65r"
}], ["path", {
  d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",
  key: "be3xqs"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "1",
  key: "41hilf"
}], ["path", {
  d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",
  key: "11ak4c"
}]];
var Voicemail = [["circle", {
  cx: "6",
  cy: "12",
  r: "4",
  key: "1ehtga"
}], ["circle", {
  cx: "18",
  cy: "12",
  r: "4",
  key: "4vafl8"
}], ["line", {
  x1: "6",
  x2: "18",
  y1: "16",
  y2: "16",
  key: "pmt8us"
}]];
var Volleyball = [["path", {
  d: "M11.1 7.1a16.55 16.55 0 0 1 10.9 4",
  key: "2880wi"
}], ["path", {
  d: "M12 12a12.6 12.6 0 0 1-8.7 5",
  key: "113sja"
}], ["path", {
  d: "M16.8 13.6a16.55 16.55 0 0 1-9 7.5",
  key: "1qmsgl"
}], ["path", {
  d: "M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10",
  key: "1bmeqp"
}], ["path", {
  d: "M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5",
  key: "iekzv9"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]];
var Volume1 = [["path", {
  d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
  key: "uqj9uw"
}], ["path", {
  d: "M16 9a5 5 0 0 1 0 6",
  key: "1q6k2b"
}]];
var Volume2 = [["path", {
  d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
  key: "uqj9uw"
}], ["path", {
  d: "M16 9a5 5 0 0 1 0 6",
  key: "1q6k2b"
}], ["path", {
  d: "M19.364 18.364a9 9 0 0 0 0-12.728",
  key: "ijwkga"
}]];
var VolumeOff = [["path", {
  d: "M16 9a5 5 0 0 1 .95 2.293",
  key: "1fgyg8"
}], ["path", {
  d: "M19.364 5.636a9 9 0 0 1 1.889 9.96",
  key: "l3zxae"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}], ["path", {
  d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11",
  key: "1gbwow"
}], ["path", {
  d: "M9.828 4.172A.686.686 0 0 1 11 4.657v.686",
  key: "s2je0y"
}]];
var VolumeX = [["path", {
  d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
  key: "uqj9uw"
}], ["line", {
  x1: "22",
  x2: "16",
  y1: "9",
  y2: "15",
  key: "1ewh16"
}], ["line", {
  x1: "16",
  x2: "22",
  y1: "9",
  y2: "15",
  key: "5ykzw1"
}]];
var Volume = [["path", {
  d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
  key: "uqj9uw"
}]];
var Vote = [["path", {
  d: "m9 12 2 2 4-4",
  key: "dzmm74"
}], ["path", {
  d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",
  key: "1ezoue"
}], ["path", {
  d: "M22 19H2",
  key: "nuriw5"
}]];
var WalletCards = [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  key: "afitv7"
}], ["path", {
  d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",
  key: "4125el"
}], ["path", {
  d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",
  key: "1dpki6"
}]];
var WalletMinimal = [["path", {
  d: "M17 14h.01",
  key: "7oqj8z"
}], ["path", {
  d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",
  key: "u1rqew"
}]];
var Wallet = [["path", {
  d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
  key: "18etb6"
}], ["path", {
  d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",
  key: "xoc0q4"
}]];
var Wallpaper = [["circle", {
  cx: "8",
  cy: "9",
  r: "2",
  key: "gjzl9d"
}], ["path", {
  d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",
  key: "69xh40"
}], ["path", {
  d: "M8 21h8",
  key: "1ev6f3"
}], ["path", {
  d: "M12 17v4",
  key: "1riwvh"
}]];
var WandSparkles = [["path", {
  d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
  key: "ul74o6"
}], ["path", {
  d: "m14 7 3 3",
  key: "1r5n42"
}], ["path", {
  d: "M5 6v4",
  key: "ilb8ba"
}], ["path", {
  d: "M19 14v4",
  key: "blhpug"
}], ["path", {
  d: "M10 2v2",
  key: "7u0qdc"
}], ["path", {
  d: "M7 8H3",
  key: "zfb6yr"
}], ["path", {
  d: "M21 16h-4",
  key: "1cnmox"
}], ["path", {
  d: "M11 3H9",
  key: "1obp7u"
}]];
var Wand = [["path", {
  d: "M15 4V2",
  key: "z1p9b7"
}], ["path", {
  d: "M15 16v-2",
  key: "px0unx"
}], ["path", {
  d: "M8 9h2",
  key: "1g203m"
}], ["path", {
  d: "M20 9h2",
  key: "19tzq7"
}], ["path", {
  d: "M17.8 11.8 19 13",
  key: "yihg8r"
}], ["path", {
  d: "M15 9h.01",
  key: "x1ddxp"
}], ["path", {
  d: "M17.8 6.2 19 5",
  key: "fd4us0"
}], ["path", {
  d: "m3 21 9-9",
  key: "1jfql5"
}], ["path", {
  d: "M12.2 6.2 11 5",
  key: "i3da3b"
}]];
var Warehouse = [["path", {
  d: "M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11",
  key: "pb2vm6"
}], ["path", {
  d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z",
  key: "doq5xv"
}], ["path", {
  d: "M6 13h12",
  key: "yf64js"
}], ["path", {
  d: "M6 17h12",
  key: "1jwigz"
}]];
var WashingMachine = [["path", {
  d: "M3 6h3",
  key: "155dbl"
}], ["path", {
  d: "M17 6h.01",
  key: "e2y6kg"
}], ["rect", {
  width: "18",
  height: "20",
  x: "3",
  y: "2",
  rx: "2",
  key: "od3kk9"
}], ["circle", {
  cx: "12",
  cy: "13",
  r: "5",
  key: "nlbqau"
}], ["path", {
  d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",
  key: "17lach"
}]];
var WavesLadder = [["path", {
  d: "M19 5a2 2 0 0 0-2 2v11",
  key: "s41o68"
}], ["path", {
  d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
  key: "rd2r6e"
}], ["path", {
  d: "M7 13h10",
  key: "1rwob1"
}], ["path", {
  d: "M7 9h10",
  key: "12czzb"
}], ["path", {
  d: "M9 5a2 2 0 0 0-2 2v11",
  key: "x0q4gh"
}]];
var Watch = [["circle", {
  cx: "12",
  cy: "12",
  r: "6",
  key: "1vlfrh"
}], ["polyline", {
  points: "12 10 12 12 13 13",
  key: "19dquz"
}], ["path", {
  d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",
  key: "18k57s"
}], ["path", {
  d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",
  key: "16ny36"
}]];
var Waves = [["path", {
  d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
  key: "knzxuh"
}], ["path", {
  d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
  key: "2jd2cc"
}], ["path", {
  d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
  key: "rd2r6e"
}]];
var Waypoints = [["circle", {
  cx: "12",
  cy: "4.5",
  r: "2.5",
  key: "r5ysbb"
}], ["path", {
  d: "m10.2 6.3-3.9 3.9",
  key: "1nzqf6"
}], ["circle", {
  cx: "4.5",
  cy: "12",
  r: "2.5",
  key: "jydg6v"
}], ["path", {
  d: "M7 12h10",
  key: "b7w52i"
}], ["circle", {
  cx: "19.5",
  cy: "12",
  r: "2.5",
  key: "1piiel"
}], ["path", {
  d: "m13.8 17.7 3.9-3.9",
  key: "1wyg1y"
}], ["circle", {
  cx: "12",
  cy: "19.5",
  r: "2.5",
  key: "13o1pw"
}]];
var Webcam = [["circle", {
  cx: "12",
  cy: "10",
  r: "8",
  key: "1gshiw"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3",
  key: "ilqhr7"
}], ["path", {
  d: "M7 22h10",
  key: "10w4w3"
}], ["path", {
  d: "M12 22v-4",
  key: "1utk9m"
}]];
var WebhookOff = [["path", {
  d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",
  key: "1tvl6x"
}], ["path", {
  d: "M9 3.4a4 4 0 0 1 6.52.66",
  key: "q04jfq"
}], ["path", {
  d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",
  key: "azowf0"
}], ["path", {
  d: "M20.3 20.3a4 4 0 0 1-2.3.7",
  key: "5joiws"
}], ["path", {
  d: "M18.6 13a4 4 0 0 1 3.357 3.414",
  key: "cangb8"
}], ["path", {
  d: "m12 6 .6 1",
  key: "tpjl1n"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]];
var Webhook = [["path", {
  d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
  key: "q3hayz"
}], ["path", {
  d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",
  key: "1go1hn"
}], ["path", {
  d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",
  key: "qlwsc0"
}]];
var Weight = [["circle", {
  cx: "12",
  cy: "5",
  r: "3",
  key: "rqqgnr"
}], ["path", {
  d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",
  key: "56o5sh"
}]];
var WheatOff = [["path", {
  d: "m2 22 10-10",
  key: "28ilpk"
}], ["path", {
  d: "m16 8-1.17 1.17",
  key: "1qqm82"
}], ["path", {
  d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
  key: "1rdhi6"
}], ["path", {
  d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",
  key: "4wz8re"
}], ["path", {
  d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",
  key: "rves66"
}], ["path", {
  d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",
  key: "19rau1"
}], ["path", {
  d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
  key: "tc8ph9"
}], ["path", {
  d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",
  key: "ak46r"
}], ["path", {
  d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",
  key: "1tw520"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}]];
var Wheat = [["path", {
  d: "M2 22 16 8",
  key: "60hf96"
}], ["path", {
  d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
  key: "1rdhi6"
}], ["path", {
  d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
  key: "1sdzmb"
}], ["path", {
  d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
  key: "eoatbi"
}], ["path", {
  d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",
  key: "19rau1"
}], ["path", {
  d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
  key: "tc8ph9"
}], ["path", {
  d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
  key: "2m8kc5"
}], ["path", {
  d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
  key: "vex3ng"
}]];
var WholeWord = [["circle", {
  cx: "7",
  cy: "12",
  r: "3",
  key: "12clwm"
}], ["path", {
  d: "M10 9v6",
  key: "17i7lo"
}], ["circle", {
  cx: "17",
  cy: "12",
  r: "3",
  key: "gl7c2s"
}], ["path", {
  d: "M14 7v8",
  key: "dl84cr"
}], ["path", {
  d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",
  key: "lt2kga"
}]];
var WifiCog = [["path", {
  d: "m14.305 19.53.923-.382",
  key: "3m78fa"
}], ["path", {
  d: "m15.228 16.852-.923-.383",
  key: "npixar"
}], ["path", {
  d: "m16.852 15.228-.383-.923",
  key: "5xggr7"
}], ["path", {
  d: "m16.852 20.772-.383.924",
  key: "dpfhf9"
}], ["path", {
  d: "m19.148 15.228.383-.923",
  key: "1reyyz"
}], ["path", {
  d: "m19.53 21.696-.382-.924",
  key: "1goivc"
}], ["path", {
  d: "M2 7.82a15 15 0 0 1 20 0",
  key: "1ovjuk"
}], ["path", {
  d: "m20.772 16.852.924-.383",
  key: "htqkph"
}], ["path", {
  d: "m20.772 19.148.924.383",
  key: "9w9pjp"
}], ["path", {
  d: "M5 11.858a10 10 0 0 1 11.5-1.785",
  key: "3sn16i"
}], ["path", {
  d: "M8.5 15.429a5 5 0 0 1 2.413-1.31",
  key: "1pxovh"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3",
  key: "1xkwt0"
}]];
var WifiHigh = [["path", {
  d: "M12 20h.01",
  key: "zekei9"
}], ["path", {
  d: "M5 12.859a10 10 0 0 1 14 0",
  key: "1x1e6c"
}], ["path", {
  d: "M8.5 16.429a5 5 0 0 1 7 0",
  key: "1bycff"
}]];
var WifiLow = [["path", {
  d: "M12 20h.01",
  key: "zekei9"
}], ["path", {
  d: "M8.5 16.429a5 5 0 0 1 7 0",
  key: "1bycff"
}]];
var WifiOff = [["path", {
  d: "M12 20h.01",
  key: "zekei9"
}], ["path", {
  d: "M8.5 16.429a5 5 0 0 1 7 0",
  key: "1bycff"
}], ["path", {
  d: "M5 12.859a10 10 0 0 1 5.17-2.69",
  key: "1dl1wf"
}], ["path", {
  d: "M19 12.859a10 10 0 0 0-2.007-1.523",
  key: "4k23kn"
}], ["path", {
  d: "M2 8.82a15 15 0 0 1 4.177-2.643",
  key: "1grhjp"
}], ["path", {
  d: "M22 8.82a15 15 0 0 0-11.288-3.764",
  key: "z3jwby"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]];
var WifiPen = [["path", {
  d: "M2 8.82a15 15 0 0 1 20 0",
  key: "dnpr2z"
}], ["path", {
  d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
  key: "1817ys"
}], ["path", {
  d: "M5 12.859a10 10 0 0 1 10.5-2.222",
  key: "rpb7oy"
}], ["path", {
  d: "M8.5 16.429a5 5 0 0 1 3-1.406",
  key: "r8bmzl"
}]];
var WifiZero = [["path", {
  d: "M12 20h.01",
  key: "zekei9"
}]];
var Wifi = [["path", {
  d: "M12 20h.01",
  key: "zekei9"
}], ["path", {
  d: "M2 8.82a15 15 0 0 1 20 0",
  key: "dnpr2z"
}], ["path", {
  d: "M5 12.859a10 10 0 0 1 14 0",
  key: "1x1e6c"
}], ["path", {
  d: "M8.5 16.429a5 5 0 0 1 7 0",
  key: "1bycff"
}]];
var WindArrowDown = [["path", {
  d: "M10 2v8",
  key: "d4bbey"
}], ["path", {
  d: "M12.8 21.6A2 2 0 1 0 14 18H2",
  key: "19kp1d"
}], ["path", {
  d: "M17.5 10a2.5 2.5 0 1 1 2 4H2",
  key: "19kpjc"
}], ["path", {
  d: "m6 6 4 4 4-4",
  key: "k13n16"
}]];
var Wind = [["path", {
  d: "M12.8 19.6A2 2 0 1 0 14 16H2",
  key: "148xed"
}], ["path", {
  d: "M17.5 8a2.5 2.5 0 1 1 2 4H2",
  key: "1u4tom"
}], ["path", {
  d: "M9.8 4.4A2 2 0 1 1 11 8H2",
  key: "75valh"
}]];
var WineOff = [["path", {
  d: "M8 22h8",
  key: "rmew8v"
}], ["path", {
  d: "M7 10h3m7 0h-1.343",
  key: "v48bem"
}], ["path", {
  d: "M12 15v7",
  key: "t2xh3l"
}], ["path", {
  d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",
  key: "1ymjlu"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22",
  key: "a6p6uj"
}]];
var Wine = [["path", {
  d: "M8 22h8",
  key: "rmew8v"
}], ["path", {
  d: "M7 10h10",
  key: "1101jm"
}], ["path", {
  d: "M12 15v7",
  key: "t2xh3l"
}], ["path", {
  d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",
  key: "10ffi3"
}]];
var Workflow = [["rect", {
  width: "8",
  height: "8",
  x: "3",
  y: "3",
  rx: "2",
  key: "by2w9f"
}], ["path", {
  d: "M7 11v4a2 2 0 0 0 2 2h4",
  key: "xkn7yn"
}], ["rect", {
  width: "8",
  height: "8",
  x: "13",
  y: "13",
  rx: "2",
  key: "1cgmvn"
}]];
var Worm = [["path", {
  d: "m19 12-1.5 3",
  key: "9bcu4o"
}], ["path", {
  d: "M19.63 18.81 22 20",
  key: "121v98"
}], ["path", {
  d: "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z",
  key: "1tij6q"
}]];
var WrapText = [["path", {
  d: "m16 16-2 2 2 2",
  key: "kkc6pm"
}], ["path", {
  d: "M3 12h15a3 3 0 1 1 0 6h-4",
  key: "1cl7v7"
}], ["path", {
  d: "M3 18h7",
  key: "sq21v6"
}], ["path", {
  d: "M3 6h18",
  key: "d0wm0j"
}]];
var Wrench = [["path", {
  d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
  key: "cbrjhi"
}]];
var X = [["path", {
  d: "M18 6 6 18",
  key: "1bl5f8"
}], ["path", {
  d: "m6 6 12 12",
  key: "d8bk6v"
}]];
var Youtube = [["path", {
  d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
  key: "1q2vi4"
}], ["path", {
  d: "m10 15 5-3-5-3z",
  key: "1jp15x"
}]];
var ZapOff = [["path", {
  d: "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",
  key: "193nxd"
}], ["path", {
  d: "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",
  key: "27a7lr"
}], ["path", {
  d: "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",
  key: "1e0qe9"
}], ["path", {
  d: "m2 2 20 20",
  key: "1ooewy"
}]];
var Zap = [["path", {
  d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
  key: "1xq2db"
}]];
var ZoomIn = [["circle", {
  cx: "11",
  cy: "11",
  r: "8",
  key: "4ej97u"
}], ["line", {
  x1: "21",
  x2: "16.65",
  y1: "21",
  y2: "16.65",
  key: "13gj7c"
}], ["line", {
  x1: "11",
  x2: "11",
  y1: "8",
  y2: "14",
  key: "1vmskp"
}], ["line", {
  x1: "8",
  x2: "14",
  y1: "11",
  y2: "11",
  key: "durymu"
}]];
var ZoomOut = [["circle", {
  cx: "11",
  cy: "11",
  r: "8",
  key: "4ej97u"
}], ["line", {
  x1: "21",
  x2: "16.65",
  y1: "21",
  y2: "16.65",
  key: "13gj7c"
}], ["line", {
  x1: "8",
  x2: "14",
  y1: "11",
  y2: "11",
  key: "durymu"
}]];
var lucideIcons = Object.freeze({
  __proto__: null,
  AArrowDown,
  AArrowUp,
  ALargeSmall,
  Accessibility,
  Activity,
  AirVent,
  Airplay,
  AlarmClockCheck,
  AlarmClockMinus,
  AlarmClockOff,
  AlarmClockPlus,
  AlarmClock,
  AlarmSmoke,
  Album,
  AlignCenterHorizontal,
  AlignCenterVertical,
  AlignCenter,
  AlignEndHorizontal,
  AlignEndVertical,
  AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignJustify,
  AlignLeft,
  AlignRight,
  AlignStartHorizontal,
  AlignStartVertical,
  AlignVerticalDistributeCenter,
  AlignVerticalDistributeEnd,
  AlignVerticalDistributeStart,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalSpaceAround,
  AlignVerticalSpaceBetween,
  Ambulance,
  Ampersand,
  Ampersands,
  Amphora,
  Anchor,
  Angry,
  Annoyed,
  Antenna,
  Anvil,
  Aperture,
  AppWindowMac,
  AppWindow,
  Apple,
  ArchiveRestore,
  Archive,
  ArchiveX,
  Armchair,
  ArrowBigDownDash,
  ArrowBigDown,
  ArrowBigLeftDash,
  ArrowBigLeft,
  ArrowBigRightDash,
  ArrowBigRight,
  ArrowBigUpDash,
  ArrowBigUp,
  ArrowDown01,
  ArrowDown10,
  ArrowDownAZ,
  ArrowDownFromLine,
  ArrowDownLeft,
  ArrowDownNarrowWide,
  ArrowDownRight,
  ArrowDownToDot,
  ArrowDownToLine,
  ArrowDownUp,
  ArrowDownWideNarrow,
  ArrowDownZA,
  ArrowDown,
  ArrowLeftFromLine,
  ArrowLeftRight,
  ArrowLeftToLine,
  ArrowRightFromLine,
  ArrowLeft,
  ArrowRightLeft,
  ArrowRightToLine,
  ArrowUp01,
  ArrowRight,
  ArrowUp10,
  ArrowUpAZ,
  ArrowUpFromDot,
  ArrowUpDown,
  ArrowUpFromLine,
  ArrowUpNarrowWide,
  ArrowUpLeft,
  ArrowUpRight,
  ArrowUpWideNarrow,
  ArrowUpToLine,
  ArrowUpZA,
  ArrowUp,
  ArrowsUpFromLine,
  Asterisk,
  AtSign,
  Atom,
  AudioLines,
  AudioWaveform,
  Award,
  Axe,
  Axis3d,
  Baby,
  Backpack,
  BadgeAlert,
  BadgeCent,
  BadgeCheck,
  BadgeDollarSign,
  BadgeEuro,
  BadgeIndianRupee,
  BadgeInfo,
  BadgeJapaneseYen,
  BadgeMinus,
  BadgePlus,
  BadgePercent,
  BadgePoundSterling,
  BadgeQuestionMark,
  BadgeRussianRuble,
  BadgeSwissFranc,
  BadgeX,
  Badge,
  BaggageClaim,
  Ban,
  Banana,
  Bandage,
  BanknoteArrowDown,
  BanknoteArrowUp,
  BanknoteX,
  Banknote,
  Barcode,
  Baseline,
  Barrel,
  Bath,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryPlus,
  BatteryWarning,
  Battery,
  Beaker,
  BeanOff,
  Bean,
  BedDouble,
  BedSingle,
  Bed,
  Beef,
  BeerOff,
  Beer,
  BellDot,
  BellElectric,
  BellMinus,
  BellOff,
  BellPlus,
  BellRing,
  Bell,
  BetweenHorizontalEnd,
  BetweenHorizontalStart,
  BetweenVerticalEnd,
  BetweenVerticalStart,
  BicepsFlexed,
  Bike,
  Binary,
  Binoculars,
  Biohazard,
  Bird,
  Bitcoin,
  Blend,
  Blinds,
  Blocks,
  BluetoothConnected,
  BluetoothOff,
  BluetoothSearching,
  Bluetooth,
  Bold,
  Bolt,
  Bomb,
  Bone,
  BookA,
  BookAlert,
  BookAudio,
  BookCheck,
  BookCopy,
  BookDashed,
  BookDown,
  BookHeadphones,
  BookHeart,
  BookImage,
  BookKey,
  BookLock,
  BookMarked,
  BookMinus,
  BookOpenCheck,
  BookOpenText,
  BookOpen,
  BookPlus,
  BookText,
  BookType,
  BookUp2,
  BookUp,
  BookUser,
  BookX,
  Book,
  BookmarkCheck,
  BookmarkMinus,
  BookmarkPlus,
  BookmarkX,
  Bookmark,
  BoomBox,
  BotMessageSquare,
  BotOff,
  Bot,
  BowArrow,
  Box,
  Boxes,
  Braces,
  Brackets,
  BrainCircuit,
  BrainCog,
  Brain,
  BrickWallFire,
  BrickWall,
  BriefcaseBusiness,
  BriefcaseConveyorBelt,
  BriefcaseMedical,
  Briefcase,
  BringToFront,
  BrushCleaning,
  Brush,
  Bubbles,
  BugOff,
  BugPlay,
  Bug,
  Building2,
  Building,
  BusFront,
  Bus,
  CableCar,
  Cable,
  CakeSlice,
  Cake,
  Calculator,
  Calendar1,
  CalendarArrowDown,
  CalendarArrowUp,
  CalendarCheck2,
  CalendarCheck,
  CalendarClock,
  CalendarCog,
  CalendarDays,
  CalendarFold,
  CalendarHeart,
  CalendarMinus2,
  CalendarMinus,
  CalendarOff,
  CalendarPlus2,
  CalendarPlus,
  CalendarRange,
  CalendarSearch,
  CalendarSync,
  CalendarX2,
  CalendarX,
  Calendar,
  Camera,
  CameraOff,
  CandyOff,
  CandyCane,
  Candy,
  Cannabis,
  CaptionsOff,
  Captions,
  CarFront,
  CarTaxiFront,
  Car,
  Caravan,
  CardSim,
  Carrot,
  CaseLower,
  CaseSensitive,
  CaseUpper,
  CassetteTape,
  Cast,
  Castle,
  Cat,
  Cctv,
  ChartArea,
  ChartBarBig,
  ChartBarDecreasing,
  ChartBarIncreasing,
  ChartBarStacked,
  ChartBar,
  ChartColumnBig,
  ChartCandlestick,
  ChartColumnDecreasing,
  ChartColumnIncreasing,
  ChartColumn,
  ChartColumnStacked,
  ChartGantt,
  ChartLine,
  ChartNetwork,
  ChartNoAxesColumnDecreasing,
  ChartNoAxesColumnIncreasing,
  ChartNoAxesColumn,
  ChartNoAxesCombined,
  ChartNoAxesGantt,
  ChartPie,
  ChartScatter,
  ChartSpline,
  CheckCheck,
  CheckLine,
  Check,
  ChefHat,
  Cherry,
  ChevronDown,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsDownUp,
  ChevronsDown,
  ChevronsLeftRightEllipsis,
  ChevronsLeftRight,
  ChevronsLeft,
  ChevronsRightLeft,
  ChevronsRight,
  ChevronsUpDown,
  ChevronsUp,
  Chrome,
  Church,
  CigaretteOff,
  Cigarette,
  CircleArrowDown,
  CircleAlert,
  CircleArrowLeft,
  CircleArrowOutDownLeft,
  CircleArrowOutDownRight,
  CircleArrowOutUpLeft,
  CircleArrowOutUpRight,
  CircleArrowRight,
  CircleArrowUp,
  CircleCheckBig,
  CircleCheck,
  CircleChevronDown,
  CircleChevronLeft,
  CircleChevronRight,
  CircleChevronUp,
  CircleDashed,
  CircleDivide,
  CircleDollarSign,
  CircleDotDashed,
  CircleDot,
  CircleEllipsis,
  CircleEqual,
  CircleFadingArrowUp,
  CircleFadingPlus,
  CircleGauge,
  CircleMinus,
  CircleOff,
  CircleParkingOff,
  CircleParking,
  CirclePause,
  CirclePercent,
  CirclePlay,
  CirclePlus,
  CirclePoundSterling,
  CirclePower,
  CircleQuestionMark,
  CircleSlash2,
  CircleSlash,
  CircleSmall,
  CircleStop,
  CircleUserRound,
  CircleUser,
  CircleX,
  Circle,
  CircuitBoard,
  Citrus,
  Clapperboard,
  ClipboardCheck,
  ClipboardCopy,
  ClipboardList,
  ClipboardMinus,
  ClipboardPaste,
  ClipboardPenLine,
  ClipboardPen,
  ClipboardPlus,
  ClipboardType,
  ClipboardX,
  Clipboard,
  Clock1,
  Clock10,
  Clock11,
  Clock12,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock7,
  Clock6,
  Clock8,
  Clock9,
  ClockAlert,
  ClockArrowDown,
  ClockArrowUp,
  ClockFading,
  ClockPlus,
  Clock,
  CloudAlert,
  CloudCheck,
  CloudCog,
  CloudDownload,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoonRain,
  CloudMoon,
  CloudOff,
  CloudRainWind,
  CloudRain,
  CloudSnow,
  CloudSunRain,
  CloudUpload,
  CloudSun,
  Cloud,
  Cloudy,
  Clover,
  Club,
  CodeXml,
  Code,
  Codepen,
  Codesandbox,
  Coffee,
  Cog,
  Coins,
  Columns2,
  Columns3Cog,
  Columns3,
  Columns4,
  Combine,
  Command,
  Compass,
  Component: Component2,
  Computer,
  ConciergeBell,
  Cone,
  Construction,
  ContactRound,
  Contact,
  Container,
  Contrast,
  Cookie,
  CookingPot,
  CopyCheck,
  CopyMinus,
  CopyPlus,
  CopySlash,
  CopyX,
  Copy,
  Copyleft,
  Copyright,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftUp,
  CornerLeftDown,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreativeCommons,
  CreditCard,
  Croissant,
  Crop,
  Cross,
  Crosshair,
  Crown,
  Cuboid,
  CupSoda,
  Currency,
  Cylinder,
  Dam,
  DatabaseBackup,
  DatabaseZap,
  Database,
  DecimalsArrowLeft,
  DecimalsArrowRight,
  Delete,
  Dessert,
  Diameter,
  DiamondMinus,
  DiamondPercent,
  DiamondPlus,
  Diamond,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Dices,
  Diff,
  Disc2,
  Disc3,
  DiscAlbum,
  Disc,
  Divide,
  DnaOff,
  Dna,
  Dock,
  Dog,
  DollarSign,
  Donut,
  DoorClosedLocked,
  DoorClosed,
  DoorOpen,
  Dot,
  Download,
  DraftingCompass,
  Drama,
  Dribbble,
  Drill,
  Drone,
  DropletOff,
  Droplet,
  Droplets,
  Drum,
  Drumstick,
  Dumbbell,
  EarOff,
  Ear,
  EarthLock,
  Earth,
  Eclipse,
  EggFried,
  EggOff,
  Egg,
  EllipsisVertical,
  Ellipsis,
  EqualApproximately,
  EqualNot,
  Equal,
  Eraser,
  Euro,
  EthernetPort,
  Expand,
  ExternalLink,
  EyeClosed,
  EyeOff,
  Eye,
  Facebook,
  Factory,
  Fan,
  FastForward,
  Feather,
  Fence,
  FerrisWheel,
  FileArchive,
  Figma,
  FileAudio2,
  FileAudio,
  FileAxis3d,
  FileBadge2,
  FileBadge,
  FileBox,
  FileChartColumnIncreasing,
  FileChartColumn,
  FileChartLine,
  FileChartPie,
  FileCheck2,
  FileCheck,
  FileClock,
  FileCode2,
  FileCode,
  FileCog,
  FileDiff,
  FileDigit,
  FileDown,
  FileHeart,
  FileImage,
  FileJson2,
  FileInput,
  FileJson,
  FileKey,
  FileKey2,
  FileLock,
  FileLock2,
  FileMinus2,
  FileMusic,
  FileMinus,
  FileOutput,
  FilePenLine,
  FilePen,
  FilePlus2,
  FilePlus,
  FileQuestionMark,
  FileSearch2,
  FileScan,
  FileSearch,
  FileSliders,
  FileSpreadsheet,
  FileStack,
  FileSymlink,
  FileTerminal,
  FileText,
  FileType2,
  FileType,
  FileUser,
  FileUp,
  FileVideo2,
  FileVideo,
  FileVolume2,
  FileVolume,
  FileWarning,
  FileX2,
  FileX,
  File,
  Files,
  Film,
  Fingerprint,
  FireExtinguisher,
  FishOff,
  FishSymbol,
  Fish,
  FlagOff,
  FlagTriangleLeft,
  FlagTriangleRight,
  Flag,
  FlameKindling,
  Flame,
  FlashlightOff,
  FlaskConicalOff,
  Flashlight,
  FlaskConical,
  FlaskRound,
  FlipHorizontal2,
  FlipHorizontal,
  FlipVertical2,
  Flower2,
  FlipVertical,
  Flower,
  Focus,
  FoldHorizontal,
  FoldVertical,
  FolderArchive,
  FolderCheck,
  FolderClock,
  FolderClosed,
  FolderCode,
  FolderCog,
  FolderDot,
  FolderGit2,
  FolderDown,
  FolderGit,
  FolderHeart,
  FolderInput,
  FolderKanban,
  FolderKey,
  FolderLock,
  FolderMinus,
  FolderOpenDot,
  FolderOpen,
  FolderOutput,
  FolderPen,
  FolderRoot,
  FolderPlus,
  FolderSearch2,
  FolderSearch,
  FolderSymlink,
  FolderSync,
  FolderTree,
  FolderUp,
  FolderX,
  Folder,
  Folders,
  Footprints,
  Forklift,
  Forward,
  Frame,
  Framer,
  Frown,
  Fuel,
  Fullscreen,
  FunnelPlus,
  FunnelX,
  Funnel,
  GalleryHorizontalEnd,
  GalleryHorizontal,
  GalleryThumbnails,
  GalleryVerticalEnd,
  GalleryVertical,
  Gamepad2,
  Gamepad,
  Gauge,
  Gavel,
  Gem,
  GeorgianLari,
  Ghost,
  Gift,
  GitBranchPlus,
  GitBranch,
  GitCommitVertical,
  GitCommitHorizontal,
  GitCompareArrows,
  GitCompare,
  GitFork,
  GitGraph,
  GitMerge,
  GitPullRequestArrow,
  GitPullRequestClosed,
  GitPullRequestCreateArrow,
  GitPullRequestCreate,
  GitPullRequestDraft,
  GitPullRequest,
  Github,
  Gitlab,
  GlassWater,
  Glasses,
  GlobeLock,
  Globe,
  Goal,
  Gpu,
  Grab,
  GraduationCap,
  Grape,
  Grid2x2Check,
  Grid2x2Plus,
  Grid2x2X,
  Grid3x2,
  Grid3x3,
  GripHorizontal,
  Grid2x2,
  GripVertical,
  Grip,
  Group,
  Guitar,
  Ham,
  Hamburger,
  Hammer,
  HandCoins,
  HandHeart,
  HandHelping,
  HandMetal,
  HandPlatter,
  Hand,
  Handshake,
  HardDriveDownload,
  HardDriveUpload,
  HardDrive,
  HardHat,
  Hash,
  Haze,
  HdmiPort,
  Heading2,
  Heading1,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Headphones,
  Heading,
  HeadphoneOff,
  Headset,
  HeartCrack,
  HeartHandshake,
  HeartMinus,
  HeartOff,
  HeartPlus,
  HeartPulse,
  Heart,
  Heater,
  Hexagon,
  Highlighter,
  History,
  HopOff,
  Hop,
  Hospital,
  Hotel,
  Hourglass,
  HousePlug,
  HousePlus,
  HouseWifi,
  House,
  IceCreamBowl,
  IceCreamCone,
  IdCardLanyard,
  IdCard,
  ImageDown,
  ImageMinus,
  ImageOff,
  ImagePlay,
  ImagePlus,
  ImageUp,
  ImageUpscale,
  Image,
  Images,
  Import,
  Inbox,
  IndentDecrease,
  IndentIncrease,
  IndianRupee,
  Infinity,
  Info,
  InspectionPanel,
  Instagram,
  Italic,
  IterationCcw,
  IterationCw,
  JapaneseYen,
  Joystick,
  Kanban,
  KeyRound,
  KeySquare,
  Key,
  KeyboardMusic,
  KeyboardOff,
  Keyboard,
  LampCeiling,
  LampDesk,
  LampFloor,
  LampWallDown,
  LampWallUp,
  Lamp,
  LandPlot,
  Landmark,
  Languages,
  LaptopMinimalCheck,
  LaptopMinimal,
  Laptop,
  LassoSelect,
  Lasso,
  Laugh,
  Layers2,
  Layers,
  LayoutDashboard,
  LayoutGrid,
  LayoutList,
  LayoutPanelLeft,
  LayoutPanelTop,
  LayoutTemplate,
  Leaf,
  LeafyGreen,
  Lectern,
  LetterText,
  LibraryBig,
  Library,
  LifeBuoy,
  Ligature,
  LightbulbOff,
  Lightbulb,
  LineSquiggle,
  Link2Off,
  Link2,
  Link,
  Linkedin,
  ListCheck,
  ListChecks,
  ListCollapse,
  ListEnd,
  ListFilterPlus,
  ListFilter,
  ListMinus,
  ListMusic,
  ListOrdered,
  ListPlus,
  ListRestart,
  ListStart,
  ListTodo,
  ListTree,
  ListVideo,
  ListX,
  List,
  LoaderCircle,
  LoaderPinwheel,
  Loader,
  LocateFixed,
  LocateOff,
  Locate,
  LocationEdit,
  LockKeyholeOpen,
  LockKeyhole,
  LockOpen,
  LogIn,
  Lock,
  LogOut,
  Logs,
  Lollipop,
  Magnet,
  MailCheck,
  Luggage,
  MailMinus,
  MailOpen,
  MailPlus,
  MailQuestionMark,
  MailSearch,
  MailX,
  MailWarning,
  Mail,
  Mailbox,
  Mails,
  MapPinCheckInside,
  MapPinCheck,
  MapPinHouse,
  MapPinMinusInside,
  MapPinMinus,
  MapPinOff,
  MapPinPlusInside,
  MapPinPlus,
  MapPinXInside,
  MapPinX,
  MapPin,
  MapPinned,
  MapPlus,
  Map,
  MarsStroke,
  Mars,
  Martini,
  Maximize2,
  Maximize,
  Medal,
  MegaphoneOff,
  Megaphone,
  Meh,
  MemoryStick,
  Menu,
  Merge,
  MessageCircleCode,
  MessageCircleDashed,
  MessageCircleHeart,
  MessageCircleMore,
  MessageCircleOff,
  MessageCirclePlus,
  MessageCircleQuestionMark,
  MessageCircleReply,
  MessageCircleWarning,
  MessageCircleX,
  MessageCircle,
  MessageSquareCode,
  MessageSquareDashed,
  MessageSquareDiff,
  MessageSquareDot,
  MessageSquareHeart,
  MessageSquareLock,
  MessageSquareMore,
  MessageSquareOff,
  MessageSquarePlus,
  MessageSquareQuote,
  MessageSquareReply,
  MessageSquareShare,
  MessageSquareText,
  MessageSquareWarning,
  MessageSquareX,
  MessageSquare,
  MessagesSquare,
  MicVocal,
  MicOff,
  Mic,
  Microchip,
  Microscope,
  Microwave,
  Milestone,
  MilkOff,
  Milk,
  Minimize2,
  Minimize,
  Minus,
  MonitorCheck,
  MonitorCog,
  MonitorDot,
  MonitorDown,
  MonitorOff,
  MonitorPause,
  MonitorPlay,
  MonitorSmartphone,
  MonitorSpeaker,
  MonitorStop,
  MonitorUp,
  MonitorX,
  Monitor,
  Moon,
  MoonStar,
  MountainSnow,
  Mountain,
  MouseOff,
  MousePointer2,
  MousePointerBan,
  MousePointer,
  Mouse,
  MousePointerClick,
  Move3d,
  MoveDiagonal2,
  MoveDiagonal,
  MoveDownLeft,
  MoveDownRight,
  MoveDown,
  MoveLeft,
  MoveRight,
  MoveHorizontal,
  MoveUpLeft,
  MoveUpRight,
  MoveUp,
  Move,
  MoveVertical,
  Music3,
  Music2,
  Music4,
  Music,
  Navigation2Off,
  Navigation2,
  Navigation,
  NavigationOff,
  Network,
  Nfc,
  Newspaper,
  NonBinary,
  NotebookPen,
  NotebookTabs,
  NotebookText,
  Notebook,
  NotepadTextDashed,
  NotepadText,
  NutOff,
  Nut,
  OctagonAlert,
  OctagonMinus,
  OctagonPause,
  OctagonX,
  Octagon,
  Omega,
  Option,
  Orbit,
  Origami,
  Package2,
  PackageCheck,
  PackageMinus,
  PackageOpen,
  PackagePlus,
  PackageSearch,
  PackageX,
  PaintBucket,
  Package,
  PaintRoller,
  PaintbrushVertical,
  Paintbrush,
  Palette,
  Panda,
  PanelBottomClose,
  PanelBottomDashed,
  PanelBottomOpen,
  PanelLeftClose,
  PanelBottom,
  PanelLeftDashed,
  PanelLeftOpen,
  PanelLeft,
  PanelRightClose,
  PanelRightDashed,
  PanelRightOpen,
  PanelRight,
  PanelTopClose,
  PanelTopDashed,
  PanelTopOpen,
  PanelTop,
  PanelsLeftBottom,
  PanelsRightBottom,
  PanelsTopLeft,
  Paperclip,
  Parentheses,
  ParkingMeter,
  PartyPopper,
  Pause,
  PawPrint,
  PcCase,
  PenLine,
  PenOff,
  PenTool,
  Pen,
  PencilLine,
  PencilOff,
  PencilRuler,
  Pencil,
  Pentagon,
  Percent,
  PersonStanding,
  PhilippinePeso,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  Phone,
  Pi,
  Piano,
  Pickaxe,
  PictureInPicture2,
  PictureInPicture,
  PiggyBank,
  PilcrowLeft,
  PilcrowRight,
  Pilcrow,
  PillBottle,
  Pill,
  PinOff,
  Pin,
  Pipette,
  Pizza,
  PlaneTakeoff,
  PlaneLanding,
  Plane,
  Play,
  Plug2,
  PlugZap,
  Plug,
  Plus,
  PocketKnife,
  Pocket,
  Podcast,
  PointerOff,
  Pointer,
  Popcorn,
  Popsicle,
  PoundSterling,
  PowerOff,
  Power,
  Presentation,
  PrinterCheck,
  Printer,
  Proportions,
  Projector,
  Puzzle,
  QrCode,
  Pyramid,
  Quote,
  Rabbit,
  Radar,
  Radiation,
  Radical,
  RadioReceiver,
  Radio,
  RadioTower,
  Radius,
  RailSymbol,
  Rainbow,
  Rat,
  Ratio,
  ReceiptCent,
  ReceiptIndianRupee,
  ReceiptEuro,
  ReceiptPoundSterling,
  ReceiptJapaneseYen,
  ReceiptRussianRuble,
  ReceiptSwissFranc,
  Receipt,
  ReceiptText,
  RectangleCircle,
  RectangleEllipsis,
  RectangleGoggles,
  RectangleHorizontal,
  RectangleVertical,
  Recycle,
  Redo2,
  RedoDot,
  Redo,
  RefreshCcwDot,
  RefreshCcw,
  RefreshCwOff,
  RefreshCw,
  Refrigerator,
  Regex,
  RemoveFormatting,
  Repeat1,
  Repeat2,
  ReplaceAll,
  Repeat,
  Replace,
  ReplyAll,
  Reply,
  Rewind,
  Ribbon,
  Rocket,
  RockingChair,
  Rotate3d,
  RollerCoaster,
  RotateCcwKey,
  RotateCcwSquare,
  RotateCcw,
  RotateCwSquare,
  RotateCw,
  RouteOff,
  Route,
  Router,
  Rows2,
  Rows3,
  Rows4,
  Rss,
  Ruler,
  RulerDimensionLine,
  RussianRuble,
  Sailboat,
  Salad,
  Sandwich,
  SatelliteDish,
  Satellite,
  SaudiRiyal,
  SaveAll,
  SaveOff,
  Save,
  Scale3d,
  Scale,
  Scaling,
  ScanBarcode,
  ScanEye,
  ScanFace,
  ScanHeart,
  ScanLine,
  ScanQrCode,
  ScanSearch,
  ScanText,
  Scan,
  School,
  ScissorsLineDashed,
  Scissors,
  ScreenShareOff,
  ScreenShare,
  ScrollText,
  Scroll,
  SearchCheck,
  SearchCode,
  SearchSlash,
  SearchX,
  Search,
  Section,
  SendHorizontal,
  SendToBack,
  Send,
  SeparatorHorizontal,
  SeparatorVertical,
  ServerCog,
  ServerCrash,
  ServerOff,
  Server,
  Settings2,
  Settings,
  Share2,
  Shapes,
  Share,
  Sheet,
  Shell,
  ShieldAlert,
  ShieldBan,
  ShieldCheck,
  ShieldEllipsis,
  ShieldMinus,
  ShieldHalf,
  ShieldOff,
  ShieldPlus,
  ShieldQuestionMark,
  ShieldUser,
  ShieldX,
  Shield,
  ShipWheel,
  Ship,
  Shirt,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  Shovel,
  ShowerHead,
  Shredder,
  Shrimp,
  Shrink,
  Shrub,
  Shuffle,
  Sigma,
  SignalHigh,
  SignalLow,
  SignalZero,
  SignalMedium,
  Signal,
  Signature,
  SignpostBig,
  Signpost,
  Siren,
  SkipBack,
  SkipForward,
  Skull,
  Slack,
  Slash,
  Slice,
  SlidersHorizontal,
  SlidersVertical,
  SmartphoneCharging,
  SmartphoneNfc,
  Smartphone,
  SmilePlus,
  Smile,
  Snail,
  Snowflake,
  SoapDispenserDroplet,
  Sofa,
  Soup,
  Space,
  Spade,
  Sparkle,
  Sparkles,
  Speaker,
  Speech,
  SpellCheck2,
  SpellCheck,
  SplinePointer,
  Spline,
  Split,
  Spool,
  SprayCan,
  Sprout,
  SquareActivity,
  SquareArrowDownLeft,
  SquareArrowDownRight,
  SquareArrowDown,
  SquareArrowLeft,
  SquareArrowOutDownLeft,
  SquareArrowOutDownRight,
  SquareArrowOutUpLeft,
  SquareArrowOutUpRight,
  SquareArrowRight,
  SquareArrowUpLeft,
  SquareArrowUpRight,
  SquareArrowUp,
  SquareAsterisk,
  SquareBottomDashedScissors,
  SquareChartGantt,
  SquareCheckBig,
  SquareCheck,
  SquareChevronLeft,
  SquareChevronDown,
  SquareChevronRight,
  SquareCode,
  SquareChevronUp,
  SquareDashedBottomCode,
  SquareDashedBottom,
  SquareDashedKanban,
  SquareDashedMousePointer,
  SquareDashedTopSolid,
  SquareDashed,
  SquareDivide,
  SquareDot,
  SquareEqual,
  SquareFunction,
  SquareKanban,
  SquareLibrary,
  SquareM,
  SquareMenu,
  SquareMinus,
  SquareMousePointer,
  SquareParking,
  SquareParkingOff,
  SquarePen,
  SquarePercent,
  SquarePi,
  SquarePilcrow,
  SquarePlay,
  SquarePlus,
  SquarePower,
  SquareRadical,
  SquareRoundCorner,
  SquareScissors,
  SquareSigma,
  SquareSlash,
  SquareSplitHorizontal,
  SquareSplitVertical,
  SquareSquare,
  SquareStack,
  SquareTerminal,
  SquareUserRound,
  SquareUser,
  SquareX,
  Square,
  SquaresExclude,
  SquaresIntersect,
  SquaresSubtract,
  SquaresUnite,
  Squircle,
  Squirrel,
  SquircleDashed,
  Stamp,
  StarHalf,
  StarOff,
  Star,
  StepBack,
  StepForward,
  Stethoscope,
  Sticker,
  StickyNote,
  Store,
  StretchHorizontal,
  StretchVertical,
  Strikethrough,
  Subscript,
  SunDim,
  SunMedium,
  SunMoon,
  SunSnow,
  Sun,
  Sunrise,
  Sunset,
  Superscript,
  SwatchBook,
  SwissFranc,
  SwitchCamera,
  Sword,
  Swords,
  Syringe,
  Table2,
  TableCellsMerge,
  TableCellsSplit,
  TableColumnsSplit,
  TableOfContents,
  TableProperties,
  TableRowsSplit,
  Table,
  TabletSmartphone,
  Tablet,
  Tablets,
  Tag,
  Tags,
  Tally1,
  Tally2,
  Tally3,
  Tally4,
  Tally5,
  Tangent,
  Target,
  Telescope,
  TentTree,
  Tent,
  Terminal,
  TestTubeDiagonal,
  TestTube,
  TestTubes,
  TextCursorInput,
  TextCursor,
  TextQuote,
  TextSearch,
  TextSelect,
  Text,
  Theater,
  ThermometerSnowflake,
  ThermometerSun,
  Thermometer,
  ThumbsDown,
  ThumbsUp,
  TicketCheck,
  TicketMinus,
  TicketPercent,
  TicketPlus,
  TicketSlash,
  Ticket,
  TicketsPlane,
  TicketX,
  Tickets,
  TimerOff,
  TimerReset,
  Timer,
  ToggleLeft,
  ToggleRight,
  Toilet,
  Tornado,
  Torus,
  TouchpadOff,
  Touchpad,
  TowerControl,
  ToyBrick,
  Tractor,
  TrafficCone,
  TrainFrontTunnel,
  TrainFront,
  TrainTrack,
  TramFront,
  Transgender,
  Trash2,
  Trash,
  TreeDeciduous,
  TreePalm,
  TreePine,
  Trees,
  Trello,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
  TriangleAlert,
  TriangleDashed,
  TriangleRight,
  Triangle,
  Trophy,
  TruckElectric,
  Truck,
  Turtle,
  TvMinimalPlay,
  TvMinimal,
  Tv,
  Twitch,
  Twitter,
  TypeOutline,
  Type,
  UmbrellaOff,
  Umbrella,
  Underline,
  Undo2,
  UndoDot,
  Undo,
  UnfoldHorizontal,
  UnfoldVertical,
  Ungroup,
  University,
  Unlink,
  Unlink2,
  Unplug,
  Upload,
  Usb,
  UserCog,
  UserCheck,
  UserLock,
  UserMinus,
  UserPlus,
  UserPen,
  UserRoundCheck,
  UserRoundCog,
  UserRoundMinus,
  UserRoundPen,
  UserRoundPlus,
  UserRoundSearch,
  UserRoundX,
  UserRound,
  UserSearch,
  UserX,
  User,
  UsersRound,
  Users,
  UtensilsCrossed,
  Utensils,
  UtilityPole,
  Variable,
  Vault,
  VenetianMask,
  Vegan,
  VenusAndMars,
  Venus,
  VibrateOff,
  Vibrate,
  VideoOff,
  Video,
  Videotape,
  View,
  Voicemail,
  Volleyball,
  Volume1,
  Volume2,
  VolumeOff,
  VolumeX,
  Volume,
  Vote,
  WalletCards,
  WalletMinimal,
  Wallet,
  Wallpaper,
  WandSparkles,
  Wand,
  Warehouse,
  WashingMachine,
  WavesLadder,
  Watch,
  Waves,
  Waypoints,
  Webcam,
  WebhookOff,
  Webhook,
  Weight,
  WheatOff,
  Wheat,
  WholeWord,
  WifiCog,
  WifiHigh,
  WifiLow,
  WifiOff,
  WifiPen,
  WifiZero,
  Wifi,
  WindArrowDown,
  Wind,
  WineOff,
  Wine,
  Workflow,
  Worm,
  WrapText,
  Wrench,
  X,
  Youtube,
  ZapOff,
  Zap,
  ZoomIn,
  ZoomOut
});
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var LUCIDE_ICONS = new InjectionToken("LucideIcons", {
  factory: () => new LucideIconProvider({})
});
var LucideIconProvider = class {
  constructor(icons) {
    this.icons = icons;
  }
  getIcon(name) {
    return this.hasIcon(name) ? this.icons[name] : null;
  }
  hasIcon(name) {
    return typeof this.icons === "object" && name in this.icons;
  }
};
var LucideIconConfig = class {
  constructor() {
    this.color = defaultAttributes.stroke;
    this.size = defaultAttributes.width;
    this.strokeWidth = defaultAttributes["stroke-width"];
    this.absoluteStrokeWidth = false;
  }
};
LucideIconConfig.ɵfac = function LucideIconConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LucideIconConfig)();
};
LucideIconConfig.ɵprov = ɵɵdefineInjectable({
  token: LucideIconConfig,
  factory: LucideIconConfig.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LucideIconConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function formatFixed(number, decimals = 3) {
  return parseFloat(number.toFixed(decimals)).toString(10);
}
var LucideAngularComponent = class {
  constructor(elem, renderer, changeDetector, iconProviders, iconConfig) {
    this.elem = elem;
    this.renderer = renderer;
    this.changeDetector = changeDetector;
    this.iconProviders = iconProviders;
    this.iconConfig = iconConfig;
    this.absoluteStrokeWidth = false;
    this.defaultSize = defaultAttributes.height;
  }
  get size() {
    return this._size ?? this.iconConfig.size;
  }
  set size(value) {
    if (value) {
      this._size = this.parseNumber(value);
    } else {
      delete this._size;
    }
  }
  get strokeWidth() {
    return this._strokeWidth ?? this.iconConfig.strokeWidth;
  }
  set strokeWidth(value) {
    if (value) {
      this._strokeWidth = this.parseNumber(value);
    } else {
      delete this._strokeWidth;
    }
  }
  ngOnChanges(changes) {
    if (changes.name || changes.img || changes.color || changes.size || changes.absoluteStrokeWidth || changes.strokeWidth || changes.class) {
      this.color = this.color ?? this.iconConfig.color;
      this.size = this.parseNumber(this.size ?? this.iconConfig.size);
      this.strokeWidth = this.parseNumber(this.strokeWidth ?? this.iconConfig.strokeWidth);
      this.absoluteStrokeWidth = this.absoluteStrokeWidth ?? this.iconConfig.absoluteStrokeWidth;
      const nameOrIcon = this.img ?? this.name;
      if (typeof nameOrIcon === "string") {
        const icoOfName = this.getIcon(this.toPascalCase(nameOrIcon));
        if (icoOfName) {
          this.replaceElement(icoOfName);
        } else {
          throw new Error(`The "${nameOrIcon}" icon has not been provided by any available icon providers.`);
        }
      } else if (Array.isArray(nameOrIcon)) {
        this.replaceElement(nameOrIcon);
      } else {
        throw new Error(`No icon name or image has been provided.`);
      }
    }
    this.changeDetector.markForCheck();
  }
  replaceElement(img) {
    const attributes = __spreadProps(__spreadValues({}, defaultAttributes), {
      width: this.size,
      height: this.size,
      stroke: this.color ?? this.iconConfig.color,
      "stroke-width": this.absoluteStrokeWidth ? formatFixed(this.strokeWidth / (this.size / this.defaultSize)) : this.strokeWidth.toString(10)
    });
    const icoElement = this.createElement(["svg", attributes, img]);
    icoElement.classList.add("lucide");
    if (typeof this.name === "string") {
      icoElement.classList.add(`lucide-${this.name.replace("_", "-")}`);
    }
    if (this.class) {
      icoElement.classList.add(...this.class.split(/ /).map((a) => a.trim()).filter((a) => a.length > 0));
    }
    const childElements = this.elem.nativeElement.childNodes;
    for (const child of childElements) {
      this.renderer.removeChild(this.elem.nativeElement, child);
    }
    this.renderer.appendChild(this.elem.nativeElement, icoElement);
  }
  toPascalCase(str) {
    return str.replace(/(\w)([a-z0-9]*)(_|-|\s*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
  }
  parseNumber(value) {
    if (typeof value === "string") {
      const parsedValue = parseInt(value, 10);
      if (isNaN(parsedValue)) {
        throw new Error(`${value} is not numeric.`);
      }
      return parsedValue;
    }
    return value;
  }
  getIcon(name) {
    for (const iconProvider of Array.isArray(this.iconProviders) ? this.iconProviders : [this.iconProviders]) {
      if (iconProvider.hasIcon(name)) {
        return iconProvider.getIcon(name);
      }
    }
    return null;
  }
  createElement([tag, attrs, children = []]) {
    const element = this.renderer.createElement(tag, "http://www.w3.org/2000/svg");
    Object.keys(attrs).forEach((name) => {
      const attrValue = typeof attrs[name] === "string" ? attrs[name] : attrs[name].toString(10);
      this.renderer.setAttribute(element, name, attrValue);
    });
    if (children.length) {
      children.forEach((child) => {
        const childElement = this.createElement(child);
        this.renderer.appendChild(element, childElement);
      });
    }
    return element;
  }
};
LucideAngularComponent.ɵfac = function LucideAngularComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LucideAngularComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(LUCIDE_ICONS), ɵɵdirectiveInject(LucideIconConfig));
};
LucideAngularComponent.ɵcmp = ɵɵdefineComponent({
  type: LucideAngularComponent,
  selectors: [["lucide-angular"], ["lucide-icon"], ["i-lucide"], ["span-lucide"]],
  inputs: {
    class: "class",
    name: "name",
    img: "img",
    color: "color",
    absoluteStrokeWidth: "absoluteStrokeWidth",
    size: "size",
    strokeWidth: "strokeWidth"
  },
  standalone: false,
  features: [ɵɵNgOnChangesFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function LucideAngularComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LucideAngularComponent, [{
    type: Component,
    args: [{
      selector: "lucide-angular, lucide-icon, i-lucide, span-lucide",
      template: "<ng-content></ng-content>"
    }]
  }], function() {
    return [{
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [ElementRef]
      }]
    }, {
      type: Renderer2,
      decorators: [{
        type: Inject,
        args: [Renderer2]
      }]
    }, {
      type: ChangeDetectorRef,
      decorators: [{
        type: Inject,
        args: [ChangeDetectorRef]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LUCIDE_ICONS]
      }]
    }, {
      type: LucideIconConfig,
      decorators: [{
        type: Inject,
        args: [LucideIconConfig]
      }]
    }];
  }, {
    class: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    img: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    absoluteStrokeWidth: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }]
  });
})();
var Icons = class {
  constructor(icons) {
    this.icons = icons;
  }
};
var legacyIconProviderFactory = (icons) => {
  return new LucideIconProvider(icons ?? {});
};
var LucideAngularModule = class _LucideAngularModule {
  static pick(icons) {
    return {
      ngModule: _LucideAngularModule,
      providers: [{
        provide: LUCIDE_ICONS,
        multi: true,
        useValue: new LucideIconProvider(icons)
      }, {
        provide: LUCIDE_ICONS,
        multi: true,
        useFactory: legacyIconProviderFactory,
        deps: [[new Optional(), Icons]]
      }]
    };
  }
};
LucideAngularModule.ɵfac = function LucideAngularModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LucideAngularModule)();
};
LucideAngularModule.ɵmod = ɵɵdefineNgModule({
  type: LucideAngularModule,
  declarations: [LucideAngularComponent],
  exports: [LucideAngularComponent]
});
LucideAngularModule.ɵinj = ɵɵdefineInjector({
  imports: [[]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LucideAngularModule, [{
    type: NgModule,
    args: [{
      declarations: [LucideAngularComponent],
      imports: [],
      exports: [LucideAngularComponent]
    }]
  }], null, null);
})();
export {
  AArrowDown,
  AArrowDown as AArrowDownIcon,
  AArrowUp,
  AArrowUp as AArrowUpIcon,
  ALargeSmall,
  ALargeSmall as ALargeSmallIcon,
  Accessibility,
  Accessibility as AccessibilityIcon,
  Activity,
  Activity as ActivityIcon,
  SquareActivity as ActivitySquare,
  SquareActivity as ActivitySquareIcon,
  AirVent,
  AirVent as AirVentIcon,
  Airplay,
  Airplay as AirplayIcon,
  AlarmClockCheck as AlarmCheck,
  AlarmClockCheck as AlarmCheckIcon,
  AlarmClock,
  AlarmClockCheck,
  AlarmClockCheck as AlarmClockCheckIcon,
  AlarmClock as AlarmClockIcon,
  AlarmClockMinus,
  AlarmClockMinus as AlarmClockMinusIcon,
  AlarmClockOff,
  AlarmClockOff as AlarmClockOffIcon,
  AlarmClockPlus,
  AlarmClockPlus as AlarmClockPlusIcon,
  AlarmClockMinus as AlarmMinus,
  AlarmClockMinus as AlarmMinusIcon,
  AlarmClockPlus as AlarmPlus,
  AlarmClockPlus as AlarmPlusIcon,
  AlarmSmoke,
  AlarmSmoke as AlarmSmokeIcon,
  Album,
  Album as AlbumIcon,
  CircleAlert as AlertCircle,
  CircleAlert as AlertCircleIcon,
  OctagonAlert as AlertOctagon,
  OctagonAlert as AlertOctagonIcon,
  TriangleAlert as AlertTriangle,
  TriangleAlert as AlertTriangleIcon,
  AlignCenter,
  AlignCenterHorizontal,
  AlignCenterHorizontal as AlignCenterHorizontalIcon,
  AlignCenter as AlignCenterIcon,
  AlignCenterVertical,
  AlignCenterVertical as AlignCenterVerticalIcon,
  AlignEndHorizontal,
  AlignEndHorizontal as AlignEndHorizontalIcon,
  AlignEndVertical,
  AlignEndVertical as AlignEndVerticalIcon,
  AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeCenter as AlignHorizontalDistributeCenterIcon,
  AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeEnd as AlignHorizontalDistributeEndIcon,
  AlignHorizontalDistributeStart,
  AlignHorizontalDistributeStart as AlignHorizontalDistributeStartIcon,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyCenter as AlignHorizontalJustifyCenterIcon,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyEnd as AlignHorizontalJustifyEndIcon,
  AlignHorizontalJustifyStart,
  AlignHorizontalJustifyStart as AlignHorizontalJustifyStartIcon,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceAround as AlignHorizontalSpaceAroundIcon,
  AlignHorizontalSpaceBetween,
  AlignHorizontalSpaceBetween as AlignHorizontalSpaceBetweenIcon,
  AlignJustify,
  AlignJustify as AlignJustifyIcon,
  AlignLeft,
  AlignLeft as AlignLeftIcon,
  AlignRight,
  AlignRight as AlignRightIcon,
  AlignStartHorizontal,
  AlignStartHorizontal as AlignStartHorizontalIcon,
  AlignStartVertical,
  AlignStartVertical as AlignStartVerticalIcon,
  AlignVerticalDistributeCenter,
  AlignVerticalDistributeCenter as AlignVerticalDistributeCenterIcon,
  AlignVerticalDistributeEnd,
  AlignVerticalDistributeEnd as AlignVerticalDistributeEndIcon,
  AlignVerticalDistributeStart,
  AlignVerticalDistributeStart as AlignVerticalDistributeStartIcon,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyCenter as AlignVerticalJustifyCenterIcon,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyEnd as AlignVerticalJustifyEndIcon,
  AlignVerticalJustifyStart,
  AlignVerticalJustifyStart as AlignVerticalJustifyStartIcon,
  AlignVerticalSpaceAround,
  AlignVerticalSpaceAround as AlignVerticalSpaceAroundIcon,
  AlignVerticalSpaceBetween,
  AlignVerticalSpaceBetween as AlignVerticalSpaceBetweenIcon,
  Ambulance,
  Ambulance as AmbulanceIcon,
  Ampersand,
  Ampersand as AmpersandIcon,
  Ampersands,
  Ampersands as AmpersandsIcon,
  Amphora,
  Amphora as AmphoraIcon,
  Anchor,
  Anchor as AnchorIcon,
  Angry,
  Angry as AngryIcon,
  Annoyed,
  Annoyed as AnnoyedIcon,
  Antenna,
  Antenna as AntennaIcon,
  Anvil,
  Anvil as AnvilIcon,
  Aperture,
  Aperture as ApertureIcon,
  AppWindow,
  AppWindow as AppWindowIcon,
  AppWindowMac,
  AppWindowMac as AppWindowMacIcon,
  Apple,
  Apple as AppleIcon,
  Archive,
  Archive as ArchiveIcon,
  ArchiveRestore,
  ArchiveRestore as ArchiveRestoreIcon,
  ArchiveX,
  ArchiveX as ArchiveXIcon,
  ChartArea as AreaChart,
  ChartArea as AreaChartIcon,
  Armchair,
  Armchair as ArmchairIcon,
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowBigDownDash as ArrowBigDownDashIcon,
  ArrowBigDown as ArrowBigDownIcon,
  ArrowBigLeft,
  ArrowBigLeftDash,
  ArrowBigLeftDash as ArrowBigLeftDashIcon,
  ArrowBigLeft as ArrowBigLeftIcon,
  ArrowBigRight,
  ArrowBigRightDash,
  ArrowBigRightDash as ArrowBigRightDashIcon,
  ArrowBigRight as ArrowBigRightIcon,
  ArrowBigUp,
  ArrowBigUpDash,
  ArrowBigUpDash as ArrowBigUpDashIcon,
  ArrowBigUp as ArrowBigUpIcon,
  ArrowDown,
  ArrowDown01,
  ArrowDown01 as ArrowDown01Icon,
  ArrowDown10,
  ArrowDown10 as ArrowDown10Icon,
  ArrowDownAZ,
  ArrowDownAZ as ArrowDownAZIcon,
  ArrowDownAZ as ArrowDownAz,
  ArrowDownAZ as ArrowDownAzIcon,
  CircleArrowDown as ArrowDownCircle,
  CircleArrowDown as ArrowDownCircleIcon,
  ArrowDownFromLine,
  ArrowDownFromLine as ArrowDownFromLineIcon,
  ArrowDown as ArrowDownIcon,
  ArrowDownLeft,
  CircleArrowOutDownLeft as ArrowDownLeftFromCircle,
  CircleArrowOutDownLeft as ArrowDownLeftFromCircleIcon,
  SquareArrowOutDownLeft as ArrowDownLeftFromSquare,
  SquareArrowOutDownLeft as ArrowDownLeftFromSquareIcon,
  ArrowDownLeft as ArrowDownLeftIcon,
  SquareArrowDownLeft as ArrowDownLeftSquare,
  SquareArrowDownLeft as ArrowDownLeftSquareIcon,
  ArrowDownNarrowWide,
  ArrowDownNarrowWide as ArrowDownNarrowWideIcon,
  ArrowDownRight,
  CircleArrowOutDownRight as ArrowDownRightFromCircle,
  CircleArrowOutDownRight as ArrowDownRightFromCircleIcon,
  SquareArrowOutDownRight as ArrowDownRightFromSquare,
  SquareArrowOutDownRight as ArrowDownRightFromSquareIcon,
  ArrowDownRight as ArrowDownRightIcon,
  SquareArrowDownRight as ArrowDownRightSquare,
  SquareArrowDownRight as ArrowDownRightSquareIcon,
  SquareArrowDown as ArrowDownSquare,
  SquareArrowDown as ArrowDownSquareIcon,
  ArrowDownToDot,
  ArrowDownToDot as ArrowDownToDotIcon,
  ArrowDownToLine,
  ArrowDownToLine as ArrowDownToLineIcon,
  ArrowDownUp,
  ArrowDownUp as ArrowDownUpIcon,
  ArrowDownWideNarrow,
  ArrowDownWideNarrow as ArrowDownWideNarrowIcon,
  ArrowDownZA,
  ArrowDownZA as ArrowDownZAIcon,
  ArrowDownZA as ArrowDownZa,
  ArrowDownZA as ArrowDownZaIcon,
  ArrowLeft,
  CircleArrowLeft as ArrowLeftCircle,
  CircleArrowLeft as ArrowLeftCircleIcon,
  ArrowLeftFromLine,
  ArrowLeftFromLine as ArrowLeftFromLineIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowLeftRight,
  ArrowLeftRight as ArrowLeftRightIcon,
  SquareArrowLeft as ArrowLeftSquare,
  SquareArrowLeft as ArrowLeftSquareIcon,
  ArrowLeftToLine,
  ArrowLeftToLine as ArrowLeftToLineIcon,
  ArrowRight,
  CircleArrowRight as ArrowRightCircle,
  CircleArrowRight as ArrowRightCircleIcon,
  ArrowRightFromLine,
  ArrowRightFromLine as ArrowRightFromLineIcon,
  ArrowRight as ArrowRightIcon,
  ArrowRightLeft,
  ArrowRightLeft as ArrowRightLeftIcon,
  SquareArrowRight as ArrowRightSquare,
  SquareArrowRight as ArrowRightSquareIcon,
  ArrowRightToLine,
  ArrowRightToLine as ArrowRightToLineIcon,
  ArrowUp,
  ArrowUp01,
  ArrowUp01 as ArrowUp01Icon,
  ArrowUp10,
  ArrowUp10 as ArrowUp10Icon,
  ArrowUpAZ,
  ArrowUpAZ as ArrowUpAZIcon,
  ArrowUpAZ as ArrowUpAz,
  ArrowUpAZ as ArrowUpAzIcon,
  CircleArrowUp as ArrowUpCircle,
  CircleArrowUp as ArrowUpCircleIcon,
  ArrowUpDown,
  ArrowUpDown as ArrowUpDownIcon,
  ArrowUpFromDot,
  ArrowUpFromDot as ArrowUpFromDotIcon,
  ArrowUpFromLine,
  ArrowUpFromLine as ArrowUpFromLineIcon,
  ArrowUp as ArrowUpIcon,
  ArrowUpLeft,
  CircleArrowOutUpLeft as ArrowUpLeftFromCircle,
  CircleArrowOutUpLeft as ArrowUpLeftFromCircleIcon,
  SquareArrowOutUpLeft as ArrowUpLeftFromSquare,
  SquareArrowOutUpLeft as ArrowUpLeftFromSquareIcon,
  ArrowUpLeft as ArrowUpLeftIcon,
  SquareArrowUpLeft as ArrowUpLeftSquare,
  SquareArrowUpLeft as ArrowUpLeftSquareIcon,
  ArrowUpNarrowWide,
  ArrowUpNarrowWide as ArrowUpNarrowWideIcon,
  ArrowUpRight,
  CircleArrowOutUpRight as ArrowUpRightFromCircle,
  CircleArrowOutUpRight as ArrowUpRightFromCircleIcon,
  SquareArrowOutUpRight as ArrowUpRightFromSquare,
  SquareArrowOutUpRight as ArrowUpRightFromSquareIcon,
  ArrowUpRight as ArrowUpRightIcon,
  SquareArrowUpRight as ArrowUpRightSquare,
  SquareArrowUpRight as ArrowUpRightSquareIcon,
  SquareArrowUp as ArrowUpSquare,
  SquareArrowUp as ArrowUpSquareIcon,
  ArrowUpToLine,
  ArrowUpToLine as ArrowUpToLineIcon,
  ArrowUpWideNarrow,
  ArrowUpWideNarrow as ArrowUpWideNarrowIcon,
  ArrowUpZA,
  ArrowUpZA as ArrowUpZAIcon,
  ArrowUpZA as ArrowUpZa,
  ArrowUpZA as ArrowUpZaIcon,
  ArrowsUpFromLine,
  ArrowsUpFromLine as ArrowsUpFromLineIcon,
  Asterisk,
  Asterisk as AsteriskIcon,
  SquareAsterisk as AsteriskSquare,
  SquareAsterisk as AsteriskSquareIcon,
  AtSign,
  AtSign as AtSignIcon,
  Atom,
  Atom as AtomIcon,
  AudioLines,
  AudioLines as AudioLinesIcon,
  AudioWaveform,
  AudioWaveform as AudioWaveformIcon,
  Award,
  Award as AwardIcon,
  Axe,
  Axe as AxeIcon,
  Axis3d as Axis3D,
  Axis3d as Axis3DIcon,
  Axis3d,
  Axis3d as Axis3dIcon,
  Baby,
  Baby as BabyIcon,
  Backpack,
  Backpack as BackpackIcon,
  Badge,
  BadgeAlert,
  BadgeAlert as BadgeAlertIcon,
  BadgeCent,
  BadgeCent as BadgeCentIcon,
  BadgeCheck,
  BadgeCheck as BadgeCheckIcon,
  BadgeDollarSign,
  BadgeDollarSign as BadgeDollarSignIcon,
  BadgeEuro,
  BadgeEuro as BadgeEuroIcon,
  BadgeQuestionMark as BadgeHelp,
  BadgeQuestionMark as BadgeHelpIcon,
  Badge as BadgeIcon,
  BadgeIndianRupee,
  BadgeIndianRupee as BadgeIndianRupeeIcon,
  BadgeInfo,
  BadgeInfo as BadgeInfoIcon,
  BadgeJapaneseYen,
  BadgeJapaneseYen as BadgeJapaneseYenIcon,
  BadgeMinus,
  BadgeMinus as BadgeMinusIcon,
  BadgePercent,
  BadgePercent as BadgePercentIcon,
  BadgePlus,
  BadgePlus as BadgePlusIcon,
  BadgePoundSterling,
  BadgePoundSterling as BadgePoundSterlingIcon,
  BadgeQuestionMark,
  BadgeQuestionMark as BadgeQuestionMarkIcon,
  BadgeRussianRuble,
  BadgeRussianRuble as BadgeRussianRubleIcon,
  BadgeSwissFranc,
  BadgeSwissFranc as BadgeSwissFrancIcon,
  BadgeX,
  BadgeX as BadgeXIcon,
  BaggageClaim,
  BaggageClaim as BaggageClaimIcon,
  Ban,
  Ban as BanIcon,
  Banana,
  Banana as BananaIcon,
  Bandage,
  Bandage as BandageIcon,
  Banknote,
  BanknoteArrowDown,
  BanknoteArrowDown as BanknoteArrowDownIcon,
  BanknoteArrowUp,
  BanknoteArrowUp as BanknoteArrowUpIcon,
  Banknote as BanknoteIcon,
  BanknoteX,
  BanknoteX as BanknoteXIcon,
  ChartNoAxesColumnIncreasing as BarChart,
  ChartNoAxesColumn as BarChart2,
  ChartNoAxesColumn as BarChart2Icon,
  ChartColumn as BarChart3,
  ChartColumn as BarChart3Icon,
  ChartColumnIncreasing as BarChart4,
  ChartColumnIncreasing as BarChart4Icon,
  ChartColumnBig as BarChartBig,
  ChartColumnBig as BarChartBigIcon,
  ChartBar as BarChartHorizontal,
  ChartBarBig as BarChartHorizontalBig,
  ChartBarBig as BarChartHorizontalBigIcon,
  ChartBar as BarChartHorizontalIcon,
  ChartNoAxesColumnIncreasing as BarChartIcon,
  Barcode,
  Barcode as BarcodeIcon,
  Barrel,
  Barrel as BarrelIcon,
  Baseline,
  Baseline as BaselineIcon,
  Bath,
  Bath as BathIcon,
  Battery,
  BatteryCharging,
  BatteryCharging as BatteryChargingIcon,
  BatteryFull,
  BatteryFull as BatteryFullIcon,
  Battery as BatteryIcon,
  BatteryLow,
  BatteryLow as BatteryLowIcon,
  BatteryMedium,
  BatteryMedium as BatteryMediumIcon,
  BatteryPlus,
  BatteryPlus as BatteryPlusIcon,
  BatteryWarning,
  BatteryWarning as BatteryWarningIcon,
  Beaker,
  Beaker as BeakerIcon,
  Bean,
  Bean as BeanIcon,
  BeanOff,
  BeanOff as BeanOffIcon,
  Bed,
  BedDouble,
  BedDouble as BedDoubleIcon,
  Bed as BedIcon,
  BedSingle,
  BedSingle as BedSingleIcon,
  Beef,
  Beef as BeefIcon,
  Beer,
  Beer as BeerIcon,
  BeerOff,
  BeerOff as BeerOffIcon,
  Bell,
  BellDot,
  BellDot as BellDotIcon,
  BellElectric,
  BellElectric as BellElectricIcon,
  Bell as BellIcon,
  BellMinus,
  BellMinus as BellMinusIcon,
  BellOff,
  BellOff as BellOffIcon,
  BellPlus,
  BellPlus as BellPlusIcon,
  BellRing,
  BellRing as BellRingIcon,
  BetweenHorizontalEnd as BetweenHorizonalEnd,
  BetweenHorizontalEnd as BetweenHorizonalEndIcon,
  BetweenHorizontalStart as BetweenHorizonalStart,
  BetweenHorizontalStart as BetweenHorizonalStartIcon,
  BetweenHorizontalEnd,
  BetweenHorizontalEnd as BetweenHorizontalEndIcon,
  BetweenHorizontalStart,
  BetweenHorizontalStart as BetweenHorizontalStartIcon,
  BetweenVerticalEnd,
  BetweenVerticalEnd as BetweenVerticalEndIcon,
  BetweenVerticalStart,
  BetweenVerticalStart as BetweenVerticalStartIcon,
  BicepsFlexed,
  BicepsFlexed as BicepsFlexedIcon,
  Bike,
  Bike as BikeIcon,
  Binary,
  Binary as BinaryIcon,
  Binoculars,
  Binoculars as BinocularsIcon,
  Biohazard,
  Biohazard as BiohazardIcon,
  Bird,
  Bird as BirdIcon,
  Bitcoin,
  Bitcoin as BitcoinIcon,
  Blend,
  Blend as BlendIcon,
  Blinds,
  Blinds as BlindsIcon,
  Blocks,
  Blocks as BlocksIcon,
  Bluetooth,
  BluetoothConnected,
  BluetoothConnected as BluetoothConnectedIcon,
  Bluetooth as BluetoothIcon,
  BluetoothOff,
  BluetoothOff as BluetoothOffIcon,
  BluetoothSearching,
  BluetoothSearching as BluetoothSearchingIcon,
  Bold,
  Bold as BoldIcon,
  Bolt,
  Bolt as BoltIcon,
  Bomb,
  Bomb as BombIcon,
  Bone,
  Bone as BoneIcon,
  Book,
  BookA,
  BookA as BookAIcon,
  BookAlert,
  BookAlert as BookAlertIcon,
  BookAudio,
  BookAudio as BookAudioIcon,
  BookCheck,
  BookCheck as BookCheckIcon,
  BookCopy,
  BookCopy as BookCopyIcon,
  BookDashed,
  BookDashed as BookDashedIcon,
  BookDown,
  BookDown as BookDownIcon,
  BookHeadphones,
  BookHeadphones as BookHeadphonesIcon,
  BookHeart,
  BookHeart as BookHeartIcon,
  Book as BookIcon,
  BookImage,
  BookImage as BookImageIcon,
  BookKey,
  BookKey as BookKeyIcon,
  BookLock,
  BookLock as BookLockIcon,
  BookMarked,
  BookMarked as BookMarkedIcon,
  BookMinus,
  BookMinus as BookMinusIcon,
  BookOpen,
  BookOpenCheck,
  BookOpenCheck as BookOpenCheckIcon,
  BookOpen as BookOpenIcon,
  BookOpenText,
  BookOpenText as BookOpenTextIcon,
  BookPlus,
  BookPlus as BookPlusIcon,
  BookDashed as BookTemplate,
  BookDashed as BookTemplateIcon,
  BookText,
  BookText as BookTextIcon,
  BookType,
  BookType as BookTypeIcon,
  BookUp,
  BookUp2,
  BookUp2 as BookUp2Icon,
  BookUp as BookUpIcon,
  BookUser,
  BookUser as BookUserIcon,
  BookX,
  BookX as BookXIcon,
  Bookmark,
  BookmarkCheck,
  BookmarkCheck as BookmarkCheckIcon,
  Bookmark as BookmarkIcon,
  BookmarkMinus,
  BookmarkMinus as BookmarkMinusIcon,
  BookmarkPlus,
  BookmarkPlus as BookmarkPlusIcon,
  BookmarkX,
  BookmarkX as BookmarkXIcon,
  BoomBox,
  BoomBox as BoomBoxIcon,
  Bot,
  Bot as BotIcon,
  BotMessageSquare,
  BotMessageSquare as BotMessageSquareIcon,
  BotOff,
  BotOff as BotOffIcon,
  BowArrow,
  BowArrow as BowArrowIcon,
  Box,
  Box as BoxIcon,
  SquareDashed as BoxSelect,
  SquareDashed as BoxSelectIcon,
  Boxes,
  Boxes as BoxesIcon,
  Braces,
  Braces as BracesIcon,
  Brackets,
  Brackets as BracketsIcon,
  Brain,
  BrainCircuit,
  BrainCircuit as BrainCircuitIcon,
  BrainCog,
  BrainCog as BrainCogIcon,
  Brain as BrainIcon,
  BrickWall,
  BrickWallFire,
  BrickWallFire as BrickWallFireIcon,
  BrickWall as BrickWallIcon,
  Briefcase,
  BriefcaseBusiness,
  BriefcaseBusiness as BriefcaseBusinessIcon,
  BriefcaseConveyorBelt,
  BriefcaseConveyorBelt as BriefcaseConveyorBeltIcon,
  Briefcase as BriefcaseIcon,
  BriefcaseMedical,
  BriefcaseMedical as BriefcaseMedicalIcon,
  BringToFront,
  BringToFront as BringToFrontIcon,
  Brush,
  BrushCleaning,
  BrushCleaning as BrushCleaningIcon,
  Brush as BrushIcon,
  Bubbles,
  Bubbles as BubblesIcon,
  Bug,
  Bug as BugIcon,
  BugOff,
  BugOff as BugOffIcon,
  BugPlay,
  BugPlay as BugPlayIcon,
  Building,
  Building2,
  Building2 as Building2Icon,
  Building as BuildingIcon,
  Bus,
  BusFront,
  BusFront as BusFrontIcon,
  Bus as BusIcon,
  Cable,
  CableCar,
  CableCar as CableCarIcon,
  Cable as CableIcon,
  Cake,
  Cake as CakeIcon,
  CakeSlice,
  CakeSlice as CakeSliceIcon,
  Calculator,
  Calculator as CalculatorIcon,
  Calendar,
  Calendar1,
  Calendar1 as Calendar1Icon,
  CalendarArrowDown,
  CalendarArrowDown as CalendarArrowDownIcon,
  CalendarArrowUp,
  CalendarArrowUp as CalendarArrowUpIcon,
  CalendarCheck,
  CalendarCheck2,
  CalendarCheck2 as CalendarCheck2Icon,
  CalendarCheck as CalendarCheckIcon,
  CalendarClock,
  CalendarClock as CalendarClockIcon,
  CalendarCog,
  CalendarCog as CalendarCogIcon,
  CalendarDays,
  CalendarDays as CalendarDaysIcon,
  CalendarFold,
  CalendarFold as CalendarFoldIcon,
  CalendarHeart,
  CalendarHeart as CalendarHeartIcon,
  Calendar as CalendarIcon,
  CalendarMinus,
  CalendarMinus2,
  CalendarMinus2 as CalendarMinus2Icon,
  CalendarMinus as CalendarMinusIcon,
  CalendarOff,
  CalendarOff as CalendarOffIcon,
  CalendarPlus,
  CalendarPlus2,
  CalendarPlus2 as CalendarPlus2Icon,
  CalendarPlus as CalendarPlusIcon,
  CalendarRange,
  CalendarRange as CalendarRangeIcon,
  CalendarSearch,
  CalendarSearch as CalendarSearchIcon,
  CalendarSync,
  CalendarSync as CalendarSyncIcon,
  CalendarX,
  CalendarX2,
  CalendarX2 as CalendarX2Icon,
  CalendarX as CalendarXIcon,
  Camera,
  Camera as CameraIcon,
  CameraOff,
  CameraOff as CameraOffIcon,
  ChartCandlestick as CandlestickChart,
  ChartCandlestick as CandlestickChartIcon,
  Candy,
  CandyCane,
  CandyCane as CandyCaneIcon,
  Candy as CandyIcon,
  CandyOff,
  CandyOff as CandyOffIcon,
  Cannabis,
  Cannabis as CannabisIcon,
  Captions,
  Captions as CaptionsIcon,
  CaptionsOff,
  CaptionsOff as CaptionsOffIcon,
  Car,
  CarFront,
  CarFront as CarFrontIcon,
  Car as CarIcon,
  CarTaxiFront,
  CarTaxiFront as CarTaxiFrontIcon,
  Caravan,
  Caravan as CaravanIcon,
  CardSim,
  CardSim as CardSimIcon,
  Carrot,
  Carrot as CarrotIcon,
  CaseLower,
  CaseLower as CaseLowerIcon,
  CaseSensitive,
  CaseSensitive as CaseSensitiveIcon,
  CaseUpper,
  CaseUpper as CaseUpperIcon,
  CassetteTape,
  CassetteTape as CassetteTapeIcon,
  Cast,
  Cast as CastIcon,
  Castle,
  Castle as CastleIcon,
  Cat,
  Cat as CatIcon,
  Cctv,
  Cctv as CctvIcon,
  ChartArea,
  ChartArea as ChartAreaIcon,
  ChartBar,
  ChartBarBig,
  ChartBarBig as ChartBarBigIcon,
  ChartBarDecreasing,
  ChartBarDecreasing as ChartBarDecreasingIcon,
  ChartBar as ChartBarIcon,
  ChartBarIncreasing,
  ChartBarIncreasing as ChartBarIncreasingIcon,
  ChartBarStacked,
  ChartBarStacked as ChartBarStackedIcon,
  ChartCandlestick,
  ChartCandlestick as ChartCandlestickIcon,
  ChartColumn,
  ChartColumnBig,
  ChartColumnBig as ChartColumnBigIcon,
  ChartColumnDecreasing,
  ChartColumnDecreasing as ChartColumnDecreasingIcon,
  ChartColumn as ChartColumnIcon,
  ChartColumnIncreasing,
  ChartColumnIncreasing as ChartColumnIncreasingIcon,
  ChartColumnStacked,
  ChartColumnStacked as ChartColumnStackedIcon,
  ChartGantt,
  ChartGantt as ChartGanttIcon,
  ChartLine,
  ChartLine as ChartLineIcon,
  ChartNetwork,
  ChartNetwork as ChartNetworkIcon,
  ChartNoAxesColumn,
  ChartNoAxesColumnDecreasing,
  ChartNoAxesColumnDecreasing as ChartNoAxesColumnDecreasingIcon,
  ChartNoAxesColumn as ChartNoAxesColumnIcon,
  ChartNoAxesColumnIncreasing,
  ChartNoAxesColumnIncreasing as ChartNoAxesColumnIncreasingIcon,
  ChartNoAxesCombined,
  ChartNoAxesCombined as ChartNoAxesCombinedIcon,
  ChartNoAxesGantt,
  ChartNoAxesGantt as ChartNoAxesGanttIcon,
  ChartPie,
  ChartPie as ChartPieIcon,
  ChartScatter,
  ChartScatter as ChartScatterIcon,
  ChartSpline,
  ChartSpline as ChartSplineIcon,
  Check,
  CheckCheck,
  CheckCheck as CheckCheckIcon,
  CircleCheckBig as CheckCircle,
  CircleCheck as CheckCircle2,
  CircleCheck as CheckCircle2Icon,
  CircleCheckBig as CheckCircleIcon,
  Check as CheckIcon,
  CheckLine,
  CheckLine as CheckLineIcon,
  SquareCheckBig as CheckSquare,
  SquareCheck as CheckSquare2,
  SquareCheck as CheckSquare2Icon,
  SquareCheckBig as CheckSquareIcon,
  ChefHat,
  ChefHat as ChefHatIcon,
  Cherry,
  Cherry as CherryIcon,
  ChevronDown,
  CircleChevronDown as ChevronDownCircle,
  CircleChevronDown as ChevronDownCircleIcon,
  ChevronDown as ChevronDownIcon,
  SquareChevronDown as ChevronDownSquare,
  SquareChevronDown as ChevronDownSquareIcon,
  ChevronFirst,
  ChevronFirst as ChevronFirstIcon,
  ChevronLast,
  ChevronLast as ChevronLastIcon,
  ChevronLeft,
  CircleChevronLeft as ChevronLeftCircle,
  CircleChevronLeft as ChevronLeftCircleIcon,
  ChevronLeft as ChevronLeftIcon,
  SquareChevronLeft as ChevronLeftSquare,
  SquareChevronLeft as ChevronLeftSquareIcon,
  ChevronRight,
  CircleChevronRight as ChevronRightCircle,
  CircleChevronRight as ChevronRightCircleIcon,
  ChevronRight as ChevronRightIcon,
  SquareChevronRight as ChevronRightSquare,
  SquareChevronRight as ChevronRightSquareIcon,
  ChevronUp,
  CircleChevronUp as ChevronUpCircle,
  CircleChevronUp as ChevronUpCircleIcon,
  ChevronUp as ChevronUpIcon,
  SquareChevronUp as ChevronUpSquare,
  SquareChevronUp as ChevronUpSquareIcon,
  ChevronsDown,
  ChevronsDown as ChevronsDownIcon,
  ChevronsDownUp,
  ChevronsDownUp as ChevronsDownUpIcon,
  ChevronsLeft,
  ChevronsLeft as ChevronsLeftIcon,
  ChevronsLeftRight,
  ChevronsLeftRightEllipsis,
  ChevronsLeftRightEllipsis as ChevronsLeftRightEllipsisIcon,
  ChevronsLeftRight as ChevronsLeftRightIcon,
  ChevronsRight,
  ChevronsRight as ChevronsRightIcon,
  ChevronsRightLeft,
  ChevronsRightLeft as ChevronsRightLeftIcon,
  ChevronsUp,
  ChevronsUpDown,
  ChevronsUpDown as ChevronsUpDownIcon,
  ChevronsUp as ChevronsUpIcon,
  Chrome,
  Chrome as ChromeIcon,
  Church,
  Church as ChurchIcon,
  Cigarette,
  Cigarette as CigaretteIcon,
  CigaretteOff,
  CigaretteOff as CigaretteOffIcon,
  Circle,
  CircleAlert,
  CircleAlert as CircleAlertIcon,
  CircleArrowDown,
  CircleArrowDown as CircleArrowDownIcon,
  CircleArrowLeft,
  CircleArrowLeft as CircleArrowLeftIcon,
  CircleArrowOutDownLeft,
  CircleArrowOutDownLeft as CircleArrowOutDownLeftIcon,
  CircleArrowOutDownRight,
  CircleArrowOutDownRight as CircleArrowOutDownRightIcon,
  CircleArrowOutUpLeft,
  CircleArrowOutUpLeft as CircleArrowOutUpLeftIcon,
  CircleArrowOutUpRight,
  CircleArrowOutUpRight as CircleArrowOutUpRightIcon,
  CircleArrowRight,
  CircleArrowRight as CircleArrowRightIcon,
  CircleArrowUp,
  CircleArrowUp as CircleArrowUpIcon,
  CircleCheck,
  CircleCheckBig,
  CircleCheckBig as CircleCheckBigIcon,
  CircleCheck as CircleCheckIcon,
  CircleChevronDown,
  CircleChevronDown as CircleChevronDownIcon,
  CircleChevronLeft,
  CircleChevronLeft as CircleChevronLeftIcon,
  CircleChevronRight,
  CircleChevronRight as CircleChevronRightIcon,
  CircleChevronUp,
  CircleChevronUp as CircleChevronUpIcon,
  CircleDashed,
  CircleDashed as CircleDashedIcon,
  CircleDivide,
  CircleDivide as CircleDivideIcon,
  CircleDollarSign,
  CircleDollarSign as CircleDollarSignIcon,
  CircleDot,
  CircleDotDashed,
  CircleDotDashed as CircleDotDashedIcon,
  CircleDot as CircleDotIcon,
  CircleEllipsis,
  CircleEllipsis as CircleEllipsisIcon,
  CircleEqual,
  CircleEqual as CircleEqualIcon,
  CircleFadingArrowUp,
  CircleFadingArrowUp as CircleFadingArrowUpIcon,
  CircleFadingPlus,
  CircleFadingPlus as CircleFadingPlusIcon,
  CircleGauge,
  CircleGauge as CircleGaugeIcon,
  CircleQuestionMark as CircleHelp,
  CircleQuestionMark as CircleHelpIcon,
  Circle as CircleIcon,
  CircleMinus,
  CircleMinus as CircleMinusIcon,
  CircleOff,
  CircleOff as CircleOffIcon,
  CircleParking,
  CircleParking as CircleParkingIcon,
  CircleParkingOff,
  CircleParkingOff as CircleParkingOffIcon,
  CirclePause,
  CirclePause as CirclePauseIcon,
  CirclePercent,
  CirclePercent as CirclePercentIcon,
  CirclePlay,
  CirclePlay as CirclePlayIcon,
  CirclePlus,
  CirclePlus as CirclePlusIcon,
  CirclePoundSterling,
  CirclePoundSterling as CirclePoundSterlingIcon,
  CirclePower,
  CirclePower as CirclePowerIcon,
  CircleQuestionMark,
  CircleQuestionMark as CircleQuestionMarkIcon,
  CircleSlash,
  CircleSlash2,
  CircleSlash2 as CircleSlash2Icon,
  CircleSlash as CircleSlashIcon,
  CircleSlash2 as CircleSlashed,
  CircleSlash2 as CircleSlashedIcon,
  CircleSmall,
  CircleSmall as CircleSmallIcon,
  CircleStop,
  CircleStop as CircleStopIcon,
  CircleUser,
  CircleUser as CircleUserIcon,
  CircleUserRound,
  CircleUserRound as CircleUserRoundIcon,
  CircleX,
  CircleX as CircleXIcon,
  CircuitBoard,
  CircuitBoard as CircuitBoardIcon,
  Citrus,
  Citrus as CitrusIcon,
  Clapperboard,
  Clapperboard as ClapperboardIcon,
  Clipboard,
  ClipboardCheck,
  ClipboardCheck as ClipboardCheckIcon,
  ClipboardCopy,
  ClipboardCopy as ClipboardCopyIcon,
  ClipboardPen as ClipboardEdit,
  ClipboardPen as ClipboardEditIcon,
  Clipboard as ClipboardIcon,
  ClipboardList,
  ClipboardList as ClipboardListIcon,
  ClipboardMinus,
  ClipboardMinus as ClipboardMinusIcon,
  ClipboardPaste,
  ClipboardPaste as ClipboardPasteIcon,
  ClipboardPen,
  ClipboardPen as ClipboardPenIcon,
  ClipboardPenLine,
  ClipboardPenLine as ClipboardPenLineIcon,
  ClipboardPlus,
  ClipboardPlus as ClipboardPlusIcon,
  ClipboardPenLine as ClipboardSignature,
  ClipboardPenLine as ClipboardSignatureIcon,
  ClipboardType,
  ClipboardType as ClipboardTypeIcon,
  ClipboardX,
  ClipboardX as ClipboardXIcon,
  Clock,
  Clock1,
  Clock10,
  Clock10 as Clock10Icon,
  Clock11,
  Clock11 as Clock11Icon,
  Clock12,
  Clock12 as Clock12Icon,
  Clock1 as Clock1Icon,
  Clock2,
  Clock2 as Clock2Icon,
  Clock3,
  Clock3 as Clock3Icon,
  Clock4,
  Clock4 as Clock4Icon,
  Clock5,
  Clock5 as Clock5Icon,
  Clock6,
  Clock6 as Clock6Icon,
  Clock7,
  Clock7 as Clock7Icon,
  Clock8,
  Clock8 as Clock8Icon,
  Clock9,
  Clock9 as Clock9Icon,
  ClockAlert,
  ClockAlert as ClockAlertIcon,
  ClockArrowDown,
  ClockArrowDown as ClockArrowDownIcon,
  ClockArrowUp,
  ClockArrowUp as ClockArrowUpIcon,
  ClockFading,
  ClockFading as ClockFadingIcon,
  Clock as ClockIcon,
  ClockPlus,
  ClockPlus as ClockPlusIcon,
  Cloud,
  CloudAlert,
  CloudAlert as CloudAlertIcon,
  CloudCheck,
  CloudCheck as CloudCheckIcon,
  CloudCog,
  CloudCog as CloudCogIcon,
  CloudDownload,
  CloudDownload as CloudDownloadIcon,
  CloudDrizzle,
  CloudDrizzle as CloudDrizzleIcon,
  CloudFog,
  CloudFog as CloudFogIcon,
  CloudHail,
  CloudHail as CloudHailIcon,
  Cloud as CloudIcon,
  CloudLightning,
  CloudLightning as CloudLightningIcon,
  CloudMoon,
  CloudMoon as CloudMoonIcon,
  CloudMoonRain,
  CloudMoonRain as CloudMoonRainIcon,
  CloudOff,
  CloudOff as CloudOffIcon,
  CloudRain,
  CloudRain as CloudRainIcon,
  CloudRainWind,
  CloudRainWind as CloudRainWindIcon,
  CloudSnow,
  CloudSnow as CloudSnowIcon,
  CloudSun,
  CloudSun as CloudSunIcon,
  CloudSunRain,
  CloudSunRain as CloudSunRainIcon,
  CloudUpload,
  CloudUpload as CloudUploadIcon,
  Cloudy,
  Cloudy as CloudyIcon,
  Clover,
  Clover as CloverIcon,
  Club,
  Club as ClubIcon,
  Code,
  CodeXml as Code2,
  CodeXml as Code2Icon,
  Code as CodeIcon,
  SquareCode as CodeSquare,
  SquareCode as CodeSquareIcon,
  CodeXml,
  CodeXml as CodeXmlIcon,
  Codepen,
  Codepen as CodepenIcon,
  Codesandbox,
  Codesandbox as CodesandboxIcon,
  Coffee,
  Coffee as CoffeeIcon,
  Cog,
  Cog as CogIcon,
  Coins,
  Coins as CoinsIcon,
  Columns2 as Columns,
  Columns2,
  Columns2 as Columns2Icon,
  Columns3,
  Columns3Cog,
  Columns3Cog as Columns3CogIcon,
  Columns3 as Columns3Icon,
  Columns4,
  Columns4 as Columns4Icon,
  Columns2 as ColumnsIcon,
  Columns3Cog as ColumnsSettings,
  Columns3Cog as ColumnsSettingsIcon,
  Combine,
  Combine as CombineIcon,
  Command,
  Command as CommandIcon,
  Compass,
  Compass as CompassIcon,
  Component2 as Component,
  Component2 as ComponentIcon,
  Computer,
  Computer as ComputerIcon,
  ConciergeBell,
  ConciergeBell as ConciergeBellIcon,
  Cone,
  Cone as ConeIcon,
  Construction,
  Construction as ConstructionIcon,
  Contact,
  ContactRound as Contact2,
  ContactRound as Contact2Icon,
  Contact as ContactIcon,
  ContactRound,
  ContactRound as ContactRoundIcon,
  Container,
  Container as ContainerIcon,
  Contrast,
  Contrast as ContrastIcon,
  Cookie,
  Cookie as CookieIcon,
  CookingPot,
  CookingPot as CookingPotIcon,
  Copy,
  CopyCheck,
  CopyCheck as CopyCheckIcon,
  Copy as CopyIcon,
  CopyMinus,
  CopyMinus as CopyMinusIcon,
  CopyPlus,
  CopyPlus as CopyPlusIcon,
  CopySlash,
  CopySlash as CopySlashIcon,
  CopyX,
  CopyX as CopyXIcon,
  Copyleft,
  Copyleft as CopyleftIcon,
  Copyright,
  Copyright as CopyrightIcon,
  CornerDownLeft,
  CornerDownLeft as CornerDownLeftIcon,
  CornerDownRight,
  CornerDownRight as CornerDownRightIcon,
  CornerLeftDown,
  CornerLeftDown as CornerLeftDownIcon,
  CornerLeftUp,
  CornerLeftUp as CornerLeftUpIcon,
  CornerRightDown,
  CornerRightDown as CornerRightDownIcon,
  CornerRightUp,
  CornerRightUp as CornerRightUpIcon,
  CornerUpLeft,
  CornerUpLeft as CornerUpLeftIcon,
  CornerUpRight,
  CornerUpRight as CornerUpRightIcon,
  Cpu,
  Cpu as CpuIcon,
  CreativeCommons,
  CreativeCommons as CreativeCommonsIcon,
  CreditCard,
  CreditCard as CreditCardIcon,
  Croissant,
  Croissant as CroissantIcon,
  Crop,
  Crop as CropIcon,
  Cross,
  Cross as CrossIcon,
  Crosshair,
  Crosshair as CrosshairIcon,
  Crown,
  Crown as CrownIcon,
  Cuboid,
  Cuboid as CuboidIcon,
  CupSoda,
  CupSoda as CupSodaIcon,
  Braces as CurlyBraces,
  Braces as CurlyBracesIcon,
  Currency,
  Currency as CurrencyIcon,
  Cylinder,
  Cylinder as CylinderIcon,
  Dam,
  Dam as DamIcon,
  Database,
  DatabaseBackup,
  DatabaseBackup as DatabaseBackupIcon,
  Database as DatabaseIcon,
  DatabaseZap,
  DatabaseZap as DatabaseZapIcon,
  DecimalsArrowLeft,
  DecimalsArrowLeft as DecimalsArrowLeftIcon,
  DecimalsArrowRight,
  DecimalsArrowRight as DecimalsArrowRightIcon,
  Delete,
  Delete as DeleteIcon,
  Dessert,
  Dessert as DessertIcon,
  Diameter,
  Diameter as DiameterIcon,
  Diamond,
  Diamond as DiamondIcon,
  DiamondMinus,
  DiamondMinus as DiamondMinusIcon,
  DiamondPercent,
  DiamondPercent as DiamondPercentIcon,
  DiamondPlus,
  DiamondPlus as DiamondPlusIcon,
  Dice1,
  Dice1 as Dice1Icon,
  Dice2,
  Dice2 as Dice2Icon,
  Dice3,
  Dice3 as Dice3Icon,
  Dice4,
  Dice4 as Dice4Icon,
  Dice5,
  Dice5 as Dice5Icon,
  Dice6,
  Dice6 as Dice6Icon,
  Dices,
  Dices as DicesIcon,
  Diff,
  Diff as DiffIcon,
  Disc,
  Disc2,
  Disc2 as Disc2Icon,
  Disc3,
  Disc3 as Disc3Icon,
  DiscAlbum,
  DiscAlbum as DiscAlbumIcon,
  Disc as DiscIcon,
  Divide,
  CircleDivide as DivideCircle,
  CircleDivide as DivideCircleIcon,
  Divide as DivideIcon,
  SquareDivide as DivideSquare,
  SquareDivide as DivideSquareIcon,
  Dna,
  Dna as DnaIcon,
  DnaOff,
  DnaOff as DnaOffIcon,
  Dock,
  Dock as DockIcon,
  Dog,
  Dog as DogIcon,
  DollarSign,
  DollarSign as DollarSignIcon,
  Donut,
  Donut as DonutIcon,
  DoorClosed,
  DoorClosed as DoorClosedIcon,
  DoorClosedLocked,
  DoorClosedLocked as DoorClosedLockedIcon,
  DoorOpen,
  DoorOpen as DoorOpenIcon,
  Dot,
  Dot as DotIcon,
  SquareDot as DotSquare,
  SquareDot as DotSquareIcon,
  Download,
  CloudDownload as DownloadCloud,
  CloudDownload as DownloadCloudIcon,
  Download as DownloadIcon,
  DraftingCompass,
  DraftingCompass as DraftingCompassIcon,
  Drama,
  Drama as DramaIcon,
  Dribbble,
  Dribbble as DribbbleIcon,
  Drill,
  Drill as DrillIcon,
  Drone,
  Drone as DroneIcon,
  Droplet,
  Droplet as DropletIcon,
  DropletOff,
  DropletOff as DropletOffIcon,
  Droplets,
  Droplets as DropletsIcon,
  Drum,
  Drum as DrumIcon,
  Drumstick,
  Drumstick as DrumstickIcon,
  Dumbbell,
  Dumbbell as DumbbellIcon,
  Ear,
  Ear as EarIcon,
  EarOff,
  EarOff as EarOffIcon,
  Earth,
  Earth as EarthIcon,
  EarthLock,
  EarthLock as EarthLockIcon,
  Eclipse,
  Eclipse as EclipseIcon,
  SquarePen as Edit,
  Pen as Edit2,
  Pen as Edit2Icon,
  PenLine as Edit3,
  PenLine as Edit3Icon,
  SquarePen as EditIcon,
  Egg,
  EggFried,
  EggFried as EggFriedIcon,
  Egg as EggIcon,
  EggOff,
  EggOff as EggOffIcon,
  Ellipsis,
  Ellipsis as EllipsisIcon,
  EllipsisVertical,
  EllipsisVertical as EllipsisVerticalIcon,
  Equal,
  EqualApproximately,
  EqualApproximately as EqualApproximatelyIcon,
  Equal as EqualIcon,
  EqualNot,
  EqualNot as EqualNotIcon,
  SquareEqual as EqualSquare,
  SquareEqual as EqualSquareIcon,
  Eraser,
  Eraser as EraserIcon,
  EthernetPort,
  EthernetPort as EthernetPortIcon,
  Euro,
  Euro as EuroIcon,
  Expand,
  Expand as ExpandIcon,
  ExternalLink,
  ExternalLink as ExternalLinkIcon,
  Eye,
  EyeClosed,
  EyeClosed as EyeClosedIcon,
  Eye as EyeIcon,
  EyeOff,
  EyeOff as EyeOffIcon,
  Facebook,
  Facebook as FacebookIcon,
  Factory,
  Factory as FactoryIcon,
  Fan,
  Fan as FanIcon,
  FastForward,
  FastForward as FastForwardIcon,
  Feather,
  Feather as FeatherIcon,
  Fence,
  Fence as FenceIcon,
  FerrisWheel,
  FerrisWheel as FerrisWheelIcon,
  Figma,
  Figma as FigmaIcon,
  File,
  FileArchive,
  FileArchive as FileArchiveIcon,
  FileAudio,
  FileAudio2,
  FileAudio2 as FileAudio2Icon,
  FileAudio as FileAudioIcon,
  FileAxis3d as FileAxis3D,
  FileAxis3d as FileAxis3DIcon,
  FileAxis3d,
  FileAxis3d as FileAxis3dIcon,
  FileBadge,
  FileBadge2,
  FileBadge2 as FileBadge2Icon,
  FileBadge as FileBadgeIcon,
  FileChartColumnIncreasing as FileBarChart,
  FileChartColumn as FileBarChart2,
  FileChartColumn as FileBarChart2Icon,
  FileChartColumnIncreasing as FileBarChartIcon,
  FileBox,
  FileBox as FileBoxIcon,
  FileChartColumn,
  FileChartColumn as FileChartColumnIcon,
  FileChartColumnIncreasing,
  FileChartColumnIncreasing as FileChartColumnIncreasingIcon,
  FileChartLine,
  FileChartLine as FileChartLineIcon,
  FileChartPie,
  FileChartPie as FileChartPieIcon,
  FileCheck,
  FileCheck2,
  FileCheck2 as FileCheck2Icon,
  FileCheck as FileCheckIcon,
  FileClock,
  FileClock as FileClockIcon,
  FileCode,
  FileCode2,
  FileCode2 as FileCode2Icon,
  FileCode as FileCodeIcon,
  FileCog,
  FileCog as FileCog2,
  FileCog as FileCog2Icon,
  FileCog as FileCogIcon,
  FileDiff,
  FileDiff as FileDiffIcon,
  FileDigit,
  FileDigit as FileDigitIcon,
  FileDown,
  FileDown as FileDownIcon,
  FilePen as FileEdit,
  FilePen as FileEditIcon,
  FileHeart,
  FileHeart as FileHeartIcon,
  File as FileIcon,
  FileImage,
  FileImage as FileImageIcon,
  FileInput,
  FileInput as FileInputIcon,
  FileJson,
  FileJson2,
  FileJson2 as FileJson2Icon,
  FileJson as FileJsonIcon,
  FileKey,
  FileKey2,
  FileKey2 as FileKey2Icon,
  FileKey as FileKeyIcon,
  FileChartLine as FileLineChart,
  FileChartLine as FileLineChartIcon,
  FileLock,
  FileLock2,
  FileLock2 as FileLock2Icon,
  FileLock as FileLockIcon,
  FileMinus,
  FileMinus2,
  FileMinus2 as FileMinus2Icon,
  FileMinus as FileMinusIcon,
  FileMusic,
  FileMusic as FileMusicIcon,
  FileOutput,
  FileOutput as FileOutputIcon,
  FilePen,
  FilePen as FilePenIcon,
  FilePenLine,
  FilePenLine as FilePenLineIcon,
  FileChartPie as FilePieChart,
  FileChartPie as FilePieChartIcon,
  FilePlus,
  FilePlus2,
  FilePlus2 as FilePlus2Icon,
  FilePlus as FilePlusIcon,
  FileQuestionMark as FileQuestion,
  FileQuestionMark as FileQuestionIcon,
  FileQuestionMark,
  FileQuestionMark as FileQuestionMarkIcon,
  FileScan,
  FileScan as FileScanIcon,
  FileSearch,
  FileSearch2,
  FileSearch2 as FileSearch2Icon,
  FileSearch as FileSearchIcon,
  FilePenLine as FileSignature,
  FilePenLine as FileSignatureIcon,
  FileSliders,
  FileSliders as FileSlidersIcon,
  FileSpreadsheet,
  FileSpreadsheet as FileSpreadsheetIcon,
  FileStack,
  FileStack as FileStackIcon,
  FileSymlink,
  FileSymlink as FileSymlinkIcon,
  FileTerminal,
  FileTerminal as FileTerminalIcon,
  FileText,
  FileText as FileTextIcon,
  FileType,
  FileType2,
  FileType2 as FileType2Icon,
  FileType as FileTypeIcon,
  FileUp,
  FileUp as FileUpIcon,
  FileUser,
  FileUser as FileUserIcon,
  FileVideo,
  FileVideo2,
  FileVideo2 as FileVideo2Icon,
  FileVideo as FileVideoIcon,
  FileVolume,
  FileVolume2,
  FileVolume2 as FileVolume2Icon,
  FileVolume as FileVolumeIcon,
  FileWarning,
  FileWarning as FileWarningIcon,
  FileX,
  FileX2,
  FileX2 as FileX2Icon,
  FileX as FileXIcon,
  Files,
  Files as FilesIcon,
  Film,
  Film as FilmIcon,
  Funnel as Filter,
  Funnel as FilterIcon,
  FunnelX as FilterX,
  FunnelX as FilterXIcon,
  Fingerprint,
  Fingerprint as FingerprintIcon,
  FireExtinguisher,
  FireExtinguisher as FireExtinguisherIcon,
  Fish,
  Fish as FishIcon,
  FishOff,
  FishOff as FishOffIcon,
  FishSymbol,
  FishSymbol as FishSymbolIcon,
  Flag,
  Flag as FlagIcon,
  FlagOff,
  FlagOff as FlagOffIcon,
  FlagTriangleLeft,
  FlagTriangleLeft as FlagTriangleLeftIcon,
  FlagTriangleRight,
  FlagTriangleRight as FlagTriangleRightIcon,
  Flame,
  Flame as FlameIcon,
  FlameKindling,
  FlameKindling as FlameKindlingIcon,
  Flashlight,
  Flashlight as FlashlightIcon,
  FlashlightOff,
  FlashlightOff as FlashlightOffIcon,
  FlaskConical,
  FlaskConical as FlaskConicalIcon,
  FlaskConicalOff,
  FlaskConicalOff as FlaskConicalOffIcon,
  FlaskRound,
  FlaskRound as FlaskRoundIcon,
  FlipHorizontal,
  FlipHorizontal2,
  FlipHorizontal2 as FlipHorizontal2Icon,
  FlipHorizontal as FlipHorizontalIcon,
  FlipVertical,
  FlipVertical2,
  FlipVertical2 as FlipVertical2Icon,
  FlipVertical as FlipVerticalIcon,
  Flower,
  Flower2,
  Flower2 as Flower2Icon,
  Flower as FlowerIcon,
  Focus,
  Focus as FocusIcon,
  FoldHorizontal,
  FoldHorizontal as FoldHorizontalIcon,
  FoldVertical,
  FoldVertical as FoldVerticalIcon,
  Folder,
  FolderArchive,
  FolderArchive as FolderArchiveIcon,
  FolderCheck,
  FolderCheck as FolderCheckIcon,
  FolderClock,
  FolderClock as FolderClockIcon,
  FolderClosed,
  FolderClosed as FolderClosedIcon,
  FolderCode,
  FolderCode as FolderCodeIcon,
  FolderCog,
  FolderCog as FolderCog2,
  FolderCog as FolderCog2Icon,
  FolderCog as FolderCogIcon,
  FolderDot,
  FolderDot as FolderDotIcon,
  FolderDown,
  FolderDown as FolderDownIcon,
  FolderPen as FolderEdit,
  FolderPen as FolderEditIcon,
  FolderGit,
  FolderGit2,
  FolderGit2 as FolderGit2Icon,
  FolderGit as FolderGitIcon,
  FolderHeart,
  FolderHeart as FolderHeartIcon,
  Folder as FolderIcon,
  FolderInput,
  FolderInput as FolderInputIcon,
  FolderKanban,
  FolderKanban as FolderKanbanIcon,
  FolderKey,
  FolderKey as FolderKeyIcon,
  FolderLock,
  FolderLock as FolderLockIcon,
  FolderMinus,
  FolderMinus as FolderMinusIcon,
  FolderOpen,
  FolderOpenDot,
  FolderOpenDot as FolderOpenDotIcon,
  FolderOpen as FolderOpenIcon,
  FolderOutput,
  FolderOutput as FolderOutputIcon,
  FolderPen,
  FolderPen as FolderPenIcon,
  FolderPlus,
  FolderPlus as FolderPlusIcon,
  FolderRoot,
  FolderRoot as FolderRootIcon,
  FolderSearch,
  FolderSearch2,
  FolderSearch2 as FolderSearch2Icon,
  FolderSearch as FolderSearchIcon,
  FolderSymlink,
  FolderSymlink as FolderSymlinkIcon,
  FolderSync,
  FolderSync as FolderSyncIcon,
  FolderTree,
  FolderTree as FolderTreeIcon,
  FolderUp,
  FolderUp as FolderUpIcon,
  FolderX,
  FolderX as FolderXIcon,
  Folders,
  Folders as FoldersIcon,
  Footprints,
  Footprints as FootprintsIcon,
  Utensils as ForkKnife,
  UtensilsCrossed as ForkKnifeCrossed,
  UtensilsCrossed as ForkKnifeCrossedIcon,
  Utensils as ForkKnifeIcon,
  Forklift,
  Forklift as ForkliftIcon,
  RectangleEllipsis as FormInput,
  RectangleEllipsis as FormInputIcon,
  Forward,
  Forward as ForwardIcon,
  Frame,
  Frame as FrameIcon,
  Framer,
  Framer as FramerIcon,
  Frown,
  Frown as FrownIcon,
  Fuel,
  Fuel as FuelIcon,
  Fullscreen,
  Fullscreen as FullscreenIcon,
  SquareFunction as FunctionSquare,
  SquareFunction as FunctionSquareIcon,
  Funnel,
  Funnel as FunnelIcon,
  FunnelPlus,
  FunnelPlus as FunnelPlusIcon,
  FunnelX,
  FunnelX as FunnelXIcon,
  GalleryHorizontal,
  GalleryHorizontalEnd,
  GalleryHorizontalEnd as GalleryHorizontalEndIcon,
  GalleryHorizontal as GalleryHorizontalIcon,
  GalleryThumbnails,
  GalleryThumbnails as GalleryThumbnailsIcon,
  GalleryVertical,
  GalleryVerticalEnd,
  GalleryVerticalEnd as GalleryVerticalEndIcon,
  GalleryVertical as GalleryVerticalIcon,
  Gamepad,
  Gamepad2,
  Gamepad2 as Gamepad2Icon,
  Gamepad as GamepadIcon,
  ChartNoAxesGantt as GanttChart,
  ChartNoAxesGantt as GanttChartIcon,
  SquareChartGantt as GanttChartSquare,
  SquareChartGantt as GanttChartSquareIcon,
  Gauge,
  CircleGauge as GaugeCircle,
  CircleGauge as GaugeCircleIcon,
  Gauge as GaugeIcon,
  Gavel,
  Gavel as GavelIcon,
  Gem,
  Gem as GemIcon,
  GeorgianLari,
  GeorgianLari as GeorgianLariIcon,
  Ghost,
  Ghost as GhostIcon,
  Gift,
  Gift as GiftIcon,
  GitBranch,
  GitBranch as GitBranchIcon,
  GitBranchPlus,
  GitBranchPlus as GitBranchPlusIcon,
  GitCommitHorizontal as GitCommit,
  GitCommitHorizontal,
  GitCommitHorizontal as GitCommitHorizontalIcon,
  GitCommitHorizontal as GitCommitIcon,
  GitCommitVertical,
  GitCommitVertical as GitCommitVerticalIcon,
  GitCompare,
  GitCompareArrows,
  GitCompareArrows as GitCompareArrowsIcon,
  GitCompare as GitCompareIcon,
  GitFork,
  GitFork as GitForkIcon,
  GitGraph,
  GitGraph as GitGraphIcon,
  GitMerge,
  GitMerge as GitMergeIcon,
  GitPullRequest,
  GitPullRequestArrow,
  GitPullRequestArrow as GitPullRequestArrowIcon,
  GitPullRequestClosed,
  GitPullRequestClosed as GitPullRequestClosedIcon,
  GitPullRequestCreate,
  GitPullRequestCreateArrow,
  GitPullRequestCreateArrow as GitPullRequestCreateArrowIcon,
  GitPullRequestCreate as GitPullRequestCreateIcon,
  GitPullRequestDraft,
  GitPullRequestDraft as GitPullRequestDraftIcon,
  GitPullRequest as GitPullRequestIcon,
  Github,
  Github as GithubIcon,
  Gitlab,
  Gitlab as GitlabIcon,
  GlassWater,
  GlassWater as GlassWaterIcon,
  Glasses,
  Glasses as GlassesIcon,
  Globe,
  Earth as Globe2,
  Earth as Globe2Icon,
  Globe as GlobeIcon,
  GlobeLock,
  GlobeLock as GlobeLockIcon,
  Goal,
  Goal as GoalIcon,
  Gpu,
  Gpu as GpuIcon,
  Grab,
  Grab as GrabIcon,
  GraduationCap,
  GraduationCap as GraduationCapIcon,
  Grape,
  Grape as GrapeIcon,
  Grid3x3 as Grid,
  Grid2x2 as Grid2X2,
  Grid2x2Check as Grid2X2Check,
  Grid2x2Check as Grid2X2CheckIcon,
  Grid2x2 as Grid2X2Icon,
  Grid2x2Plus as Grid2X2Plus,
  Grid2x2Plus as Grid2X2PlusIcon,
  Grid2x2X as Grid2X2X,
  Grid2x2X as Grid2X2XIcon,
  Grid2x2,
  Grid2x2Check,
  Grid2x2Check as Grid2x2CheckIcon,
  Grid2x2 as Grid2x2Icon,
  Grid2x2Plus,
  Grid2x2Plus as Grid2x2PlusIcon,
  Grid2x2X,
  Grid2x2X as Grid2x2XIcon,
  Grid3x3 as Grid3X3,
  Grid3x3 as Grid3X3Icon,
  Grid3x2,
  Grid3x2 as Grid3x2Icon,
  Grid3x3,
  Grid3x3 as Grid3x3Icon,
  Grid3x3 as GridIcon,
  Grip,
  GripHorizontal,
  GripHorizontal as GripHorizontalIcon,
  Grip as GripIcon,
  GripVertical,
  GripVertical as GripVerticalIcon,
  Group,
  Group as GroupIcon,
  Guitar,
  Guitar as GuitarIcon,
  Ham,
  Ham as HamIcon,
  Hamburger,
  Hamburger as HamburgerIcon,
  Hammer,
  Hammer as HammerIcon,
  Hand,
  HandCoins,
  HandCoins as HandCoinsIcon,
  HandHeart,
  HandHeart as HandHeartIcon,
  HandHelping,
  HandHelping as HandHelpingIcon,
  Hand as HandIcon,
  HandMetal,
  HandMetal as HandMetalIcon,
  HandPlatter,
  HandPlatter as HandPlatterIcon,
  Handshake,
  Handshake as HandshakeIcon,
  HardDrive,
  HardDriveDownload,
  HardDriveDownload as HardDriveDownloadIcon,
  HardDrive as HardDriveIcon,
  HardDriveUpload,
  HardDriveUpload as HardDriveUploadIcon,
  HardHat,
  HardHat as HardHatIcon,
  Hash,
  Hash as HashIcon,
  Haze,
  Haze as HazeIcon,
  HdmiPort,
  HdmiPort as HdmiPortIcon,
  Heading,
  Heading1,
  Heading1 as Heading1Icon,
  Heading2,
  Heading2 as Heading2Icon,
  Heading3,
  Heading3 as Heading3Icon,
  Heading4,
  Heading4 as Heading4Icon,
  Heading5,
  Heading5 as Heading5Icon,
  Heading6,
  Heading6 as Heading6Icon,
  Heading as HeadingIcon,
  HeadphoneOff,
  HeadphoneOff as HeadphoneOffIcon,
  Headphones,
  Headphones as HeadphonesIcon,
  Headset,
  Headset as HeadsetIcon,
  Heart,
  HeartCrack,
  HeartCrack as HeartCrackIcon,
  HeartHandshake,
  HeartHandshake as HeartHandshakeIcon,
  Heart as HeartIcon,
  HeartMinus,
  HeartMinus as HeartMinusIcon,
  HeartOff,
  HeartOff as HeartOffIcon,
  HeartPlus,
  HeartPlus as HeartPlusIcon,
  HeartPulse,
  HeartPulse as HeartPulseIcon,
  Heater,
  Heater as HeaterIcon,
  CircleQuestionMark as HelpCircle,
  CircleQuestionMark as HelpCircleIcon,
  HandHelping as HelpingHand,
  HandHelping as HelpingHandIcon,
  Hexagon,
  Hexagon as HexagonIcon,
  Highlighter,
  Highlighter as HighlighterIcon,
  History,
  History as HistoryIcon,
  House as Home,
  House as HomeIcon,
  Hop,
  Hop as HopIcon,
  HopOff,
  HopOff as HopOffIcon,
  Hospital,
  Hospital as HospitalIcon,
  Hotel,
  Hotel as HotelIcon,
  Hourglass,
  Hourglass as HourglassIcon,
  House,
  House as HouseIcon,
  HousePlug,
  HousePlug as HousePlugIcon,
  HousePlus,
  HousePlus as HousePlusIcon,
  HouseWifi,
  HouseWifi as HouseWifiIcon,
  IceCreamCone as IceCream,
  IceCreamBowl as IceCream2,
  IceCreamBowl as IceCream2Icon,
  IceCreamBowl,
  IceCreamBowl as IceCreamBowlIcon,
  IceCreamCone,
  IceCreamCone as IceCreamConeIcon,
  IceCreamCone as IceCreamIcon,
  IdCard,
  IdCard as IdCardIcon,
  IdCardLanyard,
  IdCardLanyard as IdCardLanyardIcon,
  Image,
  ImageDown,
  ImageDown as ImageDownIcon,
  Image as ImageIcon,
  ImageMinus,
  ImageMinus as ImageMinusIcon,
  ImageOff,
  ImageOff as ImageOffIcon,
  ImagePlay,
  ImagePlay as ImagePlayIcon,
  ImagePlus,
  ImagePlus as ImagePlusIcon,
  ImageUp,
  ImageUp as ImageUpIcon,
  ImageUpscale,
  ImageUpscale as ImageUpscaleIcon,
  Images,
  Images as ImagesIcon,
  Import,
  Import as ImportIcon,
  Inbox,
  Inbox as InboxIcon,
  IndentIncrease as Indent,
  IndentDecrease,
  IndentDecrease as IndentDecreaseIcon,
  IndentIncrease as IndentIcon,
  IndentIncrease,
  IndentIncrease as IndentIncreaseIcon,
  IndianRupee,
  IndianRupee as IndianRupeeIcon,
  Infinity,
  Infinity as InfinityIcon,
  Info,
  Info as InfoIcon,
  SquareMousePointer as Inspect,
  SquareMousePointer as InspectIcon,
  InspectionPanel,
  InspectionPanel as InspectionPanelIcon,
  Instagram,
  Instagram as InstagramIcon,
  Italic,
  Italic as ItalicIcon,
  IterationCcw,
  IterationCcw as IterationCcwIcon,
  IterationCw,
  IterationCw as IterationCwIcon,
  JapaneseYen,
  JapaneseYen as JapaneseYenIcon,
  Joystick,
  Joystick as JoystickIcon,
  Kanban,
  Kanban as KanbanIcon,
  SquareKanban as KanbanSquare,
  SquareDashedKanban as KanbanSquareDashed,
  SquareDashedKanban as KanbanSquareDashedIcon,
  SquareKanban as KanbanSquareIcon,
  Key,
  Key as KeyIcon,
  KeyRound,
  KeyRound as KeyRoundIcon,
  KeySquare,
  KeySquare as KeySquareIcon,
  Keyboard,
  Keyboard as KeyboardIcon,
  KeyboardMusic,
  KeyboardMusic as KeyboardMusicIcon,
  KeyboardOff,
  KeyboardOff as KeyboardOffIcon,
  LUCIDE_ICONS,
  Lamp,
  LampCeiling,
  LampCeiling as LampCeilingIcon,
  LampDesk,
  LampDesk as LampDeskIcon,
  LampFloor,
  LampFloor as LampFloorIcon,
  Lamp as LampIcon,
  LampWallDown,
  LampWallDown as LampWallDownIcon,
  LampWallUp,
  LampWallUp as LampWallUpIcon,
  LandPlot,
  LandPlot as LandPlotIcon,
  Landmark,
  Landmark as LandmarkIcon,
  Languages,
  Languages as LanguagesIcon,
  Laptop,
  LaptopMinimal as Laptop2,
  LaptopMinimal as Laptop2Icon,
  Laptop as LaptopIcon,
  LaptopMinimal,
  LaptopMinimalCheck,
  LaptopMinimalCheck as LaptopMinimalCheckIcon,
  LaptopMinimal as LaptopMinimalIcon,
  Lasso,
  Lasso as LassoIcon,
  LassoSelect,
  LassoSelect as LassoSelectIcon,
  Laugh,
  Laugh as LaughIcon,
  Layers,
  Layers2,
  Layers2 as Layers2Icon,
  Layers as Layers3,
  Layers as Layers3Icon,
  Layers as LayersIcon,
  PanelsTopLeft as Layout,
  LayoutDashboard,
  LayoutDashboard as LayoutDashboardIcon,
  LayoutGrid,
  LayoutGrid as LayoutGridIcon,
  PanelsTopLeft as LayoutIcon,
  LayoutList,
  LayoutList as LayoutListIcon,
  LayoutPanelLeft,
  LayoutPanelLeft as LayoutPanelLeftIcon,
  LayoutPanelTop,
  LayoutPanelTop as LayoutPanelTopIcon,
  LayoutTemplate,
  LayoutTemplate as LayoutTemplateIcon,
  Leaf,
  Leaf as LeafIcon,
  LeafyGreen,
  LeafyGreen as LeafyGreenIcon,
  Lectern,
  Lectern as LecternIcon,
  LetterText,
  LetterText as LetterTextIcon,
  Library,
  LibraryBig,
  LibraryBig as LibraryBigIcon,
  Library as LibraryIcon,
  SquareLibrary as LibrarySquare,
  SquareLibrary as LibrarySquareIcon,
  LifeBuoy,
  LifeBuoy as LifeBuoyIcon,
  Ligature,
  Ligature as LigatureIcon,
  Lightbulb,
  Lightbulb as LightbulbIcon,
  LightbulbOff,
  LightbulbOff as LightbulbOffIcon,
  ChartLine as LineChart,
  ChartLine as LineChartIcon,
  LineSquiggle,
  LineSquiggle as LineSquiggleIcon,
  Link,
  Link2,
  Link2 as Link2Icon,
  Link2Off,
  Link2Off as Link2OffIcon,
  Link as LinkIcon,
  Linkedin,
  Linkedin as LinkedinIcon,
  List,
  ListCheck,
  ListCheck as ListCheckIcon,
  ListChecks,
  ListChecks as ListChecksIcon,
  ListCollapse,
  ListCollapse as ListCollapseIcon,
  ListEnd,
  ListEnd as ListEndIcon,
  ListFilter,
  ListFilter as ListFilterIcon,
  ListFilterPlus,
  ListFilterPlus as ListFilterPlusIcon,
  List as ListIcon,
  ListMinus,
  ListMinus as ListMinusIcon,
  ListMusic,
  ListMusic as ListMusicIcon,
  ListOrdered,
  ListOrdered as ListOrderedIcon,
  ListPlus,
  ListPlus as ListPlusIcon,
  ListRestart,
  ListRestart as ListRestartIcon,
  ListStart,
  ListStart as ListStartIcon,
  ListTodo,
  ListTodo as ListTodoIcon,
  ListTree,
  ListTree as ListTreeIcon,
  ListVideo,
  ListVideo as ListVideoIcon,
  ListX,
  ListX as ListXIcon,
  Loader,
  LoaderCircle as Loader2,
  LoaderCircle as Loader2Icon,
  LoaderCircle,
  LoaderCircle as LoaderCircleIcon,
  Loader as LoaderIcon,
  LoaderPinwheel,
  LoaderPinwheel as LoaderPinwheelIcon,
  Locate,
  LocateFixed,
  LocateFixed as LocateFixedIcon,
  Locate as LocateIcon,
  LocateOff,
  LocateOff as LocateOffIcon,
  LocationEdit,
  LocationEdit as LocationEditIcon,
  Lock,
  Lock as LockIcon,
  LockKeyhole,
  LockKeyhole as LockKeyholeIcon,
  LockKeyholeOpen,
  LockKeyholeOpen as LockKeyholeOpenIcon,
  LockOpen,
  LockOpen as LockOpenIcon,
  LogIn,
  LogIn as LogInIcon,
  LogOut,
  LogOut as LogOutIcon,
  Logs,
  Logs as LogsIcon,
  Lollipop,
  Lollipop as LollipopIcon,
  AArrowDown as LucideAArrowDown,
  AArrowUp as LucideAArrowUp,
  ALargeSmall as LucideALargeSmall,
  Accessibility as LucideAccessibility,
  Activity as LucideActivity,
  SquareActivity as LucideActivitySquare,
  AirVent as LucideAirVent,
  Airplay as LucideAirplay,
  AlarmClockCheck as LucideAlarmCheck,
  AlarmClock as LucideAlarmClock,
  AlarmClockCheck as LucideAlarmClockCheck,
  AlarmClockMinus as LucideAlarmClockMinus,
  AlarmClockOff as LucideAlarmClockOff,
  AlarmClockPlus as LucideAlarmClockPlus,
  AlarmClockMinus as LucideAlarmMinus,
  AlarmClockPlus as LucideAlarmPlus,
  AlarmSmoke as LucideAlarmSmoke,
  Album as LucideAlbum,
  CircleAlert as LucideAlertCircle,
  OctagonAlert as LucideAlertOctagon,
  TriangleAlert as LucideAlertTriangle,
  AlignCenter as LucideAlignCenter,
  AlignCenterHorizontal as LucideAlignCenterHorizontal,
  AlignCenterVertical as LucideAlignCenterVertical,
  AlignEndHorizontal as LucideAlignEndHorizontal,
  AlignEndVertical as LucideAlignEndVertical,
  AlignHorizontalDistributeCenter as LucideAlignHorizontalDistributeCenter,
  AlignHorizontalDistributeEnd as LucideAlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart as LucideAlignHorizontalDistributeStart,
  AlignHorizontalJustifyCenter as LucideAlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd as LucideAlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart as LucideAlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround as LucideAlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween as LucideAlignHorizontalSpaceBetween,
  AlignJustify as LucideAlignJustify,
  AlignLeft as LucideAlignLeft,
  AlignRight as LucideAlignRight,
  AlignStartHorizontal as LucideAlignStartHorizontal,
  AlignStartVertical as LucideAlignStartVertical,
  AlignVerticalDistributeCenter as LucideAlignVerticalDistributeCenter,
  AlignVerticalDistributeEnd as LucideAlignVerticalDistributeEnd,
  AlignVerticalDistributeStart as LucideAlignVerticalDistributeStart,
  AlignVerticalJustifyCenter as LucideAlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd as LucideAlignVerticalJustifyEnd,
  AlignVerticalJustifyStart as LucideAlignVerticalJustifyStart,
  AlignVerticalSpaceAround as LucideAlignVerticalSpaceAround,
  AlignVerticalSpaceBetween as LucideAlignVerticalSpaceBetween,
  Ambulance as LucideAmbulance,
  Ampersand as LucideAmpersand,
  Ampersands as LucideAmpersands,
  Amphora as LucideAmphora,
  Anchor as LucideAnchor,
  Angry as LucideAngry,
  LucideAngularComponent,
  LucideAngularModule,
  Annoyed as LucideAnnoyed,
  Antenna as LucideAntenna,
  Anvil as LucideAnvil,
  Aperture as LucideAperture,
  AppWindow as LucideAppWindow,
  AppWindowMac as LucideAppWindowMac,
  Apple as LucideApple,
  Archive as LucideArchive,
  ArchiveRestore as LucideArchiveRestore,
  ArchiveX as LucideArchiveX,
  ChartArea as LucideAreaChart,
  Armchair as LucideArmchair,
  ArrowBigDown as LucideArrowBigDown,
  ArrowBigDownDash as LucideArrowBigDownDash,
  ArrowBigLeft as LucideArrowBigLeft,
  ArrowBigLeftDash as LucideArrowBigLeftDash,
  ArrowBigRight as LucideArrowBigRight,
  ArrowBigRightDash as LucideArrowBigRightDash,
  ArrowBigUp as LucideArrowBigUp,
  ArrowBigUpDash as LucideArrowBigUpDash,
  ArrowDown as LucideArrowDown,
  ArrowDown01 as LucideArrowDown01,
  ArrowDown10 as LucideArrowDown10,
  ArrowDownAZ as LucideArrowDownAZ,
  ArrowDownAZ as LucideArrowDownAz,
  CircleArrowDown as LucideArrowDownCircle,
  ArrowDownFromLine as LucideArrowDownFromLine,
  ArrowDownLeft as LucideArrowDownLeft,
  CircleArrowOutDownLeft as LucideArrowDownLeftFromCircle,
  SquareArrowOutDownLeft as LucideArrowDownLeftFromSquare,
  SquareArrowDownLeft as LucideArrowDownLeftSquare,
  ArrowDownNarrowWide as LucideArrowDownNarrowWide,
  ArrowDownRight as LucideArrowDownRight,
  CircleArrowOutDownRight as LucideArrowDownRightFromCircle,
  SquareArrowOutDownRight as LucideArrowDownRightFromSquare,
  SquareArrowDownRight as LucideArrowDownRightSquare,
  SquareArrowDown as LucideArrowDownSquare,
  ArrowDownToDot as LucideArrowDownToDot,
  ArrowDownToLine as LucideArrowDownToLine,
  ArrowDownUp as LucideArrowDownUp,
  ArrowDownWideNarrow as LucideArrowDownWideNarrow,
  ArrowDownZA as LucideArrowDownZA,
  ArrowDownZA as LucideArrowDownZa,
  ArrowLeft as LucideArrowLeft,
  CircleArrowLeft as LucideArrowLeftCircle,
  ArrowLeftFromLine as LucideArrowLeftFromLine,
  ArrowLeftRight as LucideArrowLeftRight,
  SquareArrowLeft as LucideArrowLeftSquare,
  ArrowLeftToLine as LucideArrowLeftToLine,
  ArrowRight as LucideArrowRight,
  CircleArrowRight as LucideArrowRightCircle,
  ArrowRightFromLine as LucideArrowRightFromLine,
  ArrowRightLeft as LucideArrowRightLeft,
  SquareArrowRight as LucideArrowRightSquare,
  ArrowRightToLine as LucideArrowRightToLine,
  ArrowUp as LucideArrowUp,
  ArrowUp01 as LucideArrowUp01,
  ArrowUp10 as LucideArrowUp10,
  ArrowUpAZ as LucideArrowUpAZ,
  ArrowUpAZ as LucideArrowUpAz,
  CircleArrowUp as LucideArrowUpCircle,
  ArrowUpDown as LucideArrowUpDown,
  ArrowUpFromDot as LucideArrowUpFromDot,
  ArrowUpFromLine as LucideArrowUpFromLine,
  ArrowUpLeft as LucideArrowUpLeft,
  CircleArrowOutUpLeft as LucideArrowUpLeftFromCircle,
  SquareArrowOutUpLeft as LucideArrowUpLeftFromSquare,
  SquareArrowUpLeft as LucideArrowUpLeftSquare,
  ArrowUpNarrowWide as LucideArrowUpNarrowWide,
  ArrowUpRight as LucideArrowUpRight,
  CircleArrowOutUpRight as LucideArrowUpRightFromCircle,
  SquareArrowOutUpRight as LucideArrowUpRightFromSquare,
  SquareArrowUpRight as LucideArrowUpRightSquare,
  SquareArrowUp as LucideArrowUpSquare,
  ArrowUpToLine as LucideArrowUpToLine,
  ArrowUpWideNarrow as LucideArrowUpWideNarrow,
  ArrowUpZA as LucideArrowUpZA,
  ArrowUpZA as LucideArrowUpZa,
  ArrowsUpFromLine as LucideArrowsUpFromLine,
  Asterisk as LucideAsterisk,
  SquareAsterisk as LucideAsteriskSquare,
  AtSign as LucideAtSign,
  Atom as LucideAtom,
  AudioLines as LucideAudioLines,
  AudioWaveform as LucideAudioWaveform,
  Award as LucideAward,
  Axe as LucideAxe,
  Axis3d as LucideAxis3D,
  Axis3d as LucideAxis3d,
  Baby as LucideBaby,
  Backpack as LucideBackpack,
  Badge as LucideBadge,
  BadgeAlert as LucideBadgeAlert,
  BadgeCent as LucideBadgeCent,
  BadgeCheck as LucideBadgeCheck,
  BadgeDollarSign as LucideBadgeDollarSign,
  BadgeEuro as LucideBadgeEuro,
  BadgeQuestionMark as LucideBadgeHelp,
  BadgeIndianRupee as LucideBadgeIndianRupee,
  BadgeInfo as LucideBadgeInfo,
  BadgeJapaneseYen as LucideBadgeJapaneseYen,
  BadgeMinus as LucideBadgeMinus,
  BadgePercent as LucideBadgePercent,
  BadgePlus as LucideBadgePlus,
  BadgePoundSterling as LucideBadgePoundSterling,
  BadgeQuestionMark as LucideBadgeQuestionMark,
  BadgeRussianRuble as LucideBadgeRussianRuble,
  BadgeSwissFranc as LucideBadgeSwissFranc,
  BadgeX as LucideBadgeX,
  BaggageClaim as LucideBaggageClaim,
  Ban as LucideBan,
  Banana as LucideBanana,
  Bandage as LucideBandage,
  Banknote as LucideBanknote,
  BanknoteArrowDown as LucideBanknoteArrowDown,
  BanknoteArrowUp as LucideBanknoteArrowUp,
  BanknoteX as LucideBanknoteX,
  ChartNoAxesColumnIncreasing as LucideBarChart,
  ChartNoAxesColumn as LucideBarChart2,
  ChartColumn as LucideBarChart3,
  ChartColumnIncreasing as LucideBarChart4,
  ChartColumnBig as LucideBarChartBig,
  ChartBar as LucideBarChartHorizontal,
  ChartBarBig as LucideBarChartHorizontalBig,
  Barcode as LucideBarcode,
  Barrel as LucideBarrel,
  Baseline as LucideBaseline,
  Bath as LucideBath,
  Battery as LucideBattery,
  BatteryCharging as LucideBatteryCharging,
  BatteryFull as LucideBatteryFull,
  BatteryLow as LucideBatteryLow,
  BatteryMedium as LucideBatteryMedium,
  BatteryPlus as LucideBatteryPlus,
  BatteryWarning as LucideBatteryWarning,
  Beaker as LucideBeaker,
  Bean as LucideBean,
  BeanOff as LucideBeanOff,
  Bed as LucideBed,
  BedDouble as LucideBedDouble,
  BedSingle as LucideBedSingle,
  Beef as LucideBeef,
  Beer as LucideBeer,
  BeerOff as LucideBeerOff,
  Bell as LucideBell,
  BellDot as LucideBellDot,
  BellElectric as LucideBellElectric,
  BellMinus as LucideBellMinus,
  BellOff as LucideBellOff,
  BellPlus as LucideBellPlus,
  BellRing as LucideBellRing,
  BetweenHorizontalEnd as LucideBetweenHorizonalEnd,
  BetweenHorizontalStart as LucideBetweenHorizonalStart,
  BetweenHorizontalEnd as LucideBetweenHorizontalEnd,
  BetweenHorizontalStart as LucideBetweenHorizontalStart,
  BetweenVerticalEnd as LucideBetweenVerticalEnd,
  BetweenVerticalStart as LucideBetweenVerticalStart,
  BicepsFlexed as LucideBicepsFlexed,
  Bike as LucideBike,
  Binary as LucideBinary,
  Binoculars as LucideBinoculars,
  Biohazard as LucideBiohazard,
  Bird as LucideBird,
  Bitcoin as LucideBitcoin,
  Blend as LucideBlend,
  Blinds as LucideBlinds,
  Blocks as LucideBlocks,
  Bluetooth as LucideBluetooth,
  BluetoothConnected as LucideBluetoothConnected,
  BluetoothOff as LucideBluetoothOff,
  BluetoothSearching as LucideBluetoothSearching,
  Bold as LucideBold,
  Bolt as LucideBolt,
  Bomb as LucideBomb,
  Bone as LucideBone,
  Book as LucideBook,
  BookA as LucideBookA,
  BookAlert as LucideBookAlert,
  BookAudio as LucideBookAudio,
  BookCheck as LucideBookCheck,
  BookCopy as LucideBookCopy,
  BookDashed as LucideBookDashed,
  BookDown as LucideBookDown,
  BookHeadphones as LucideBookHeadphones,
  BookHeart as LucideBookHeart,
  BookImage as LucideBookImage,
  BookKey as LucideBookKey,
  BookLock as LucideBookLock,
  BookMarked as LucideBookMarked,
  BookMinus as LucideBookMinus,
  BookOpen as LucideBookOpen,
  BookOpenCheck as LucideBookOpenCheck,
  BookOpenText as LucideBookOpenText,
  BookPlus as LucideBookPlus,
  BookDashed as LucideBookTemplate,
  BookText as LucideBookText,
  BookType as LucideBookType,
  BookUp as LucideBookUp,
  BookUp2 as LucideBookUp2,
  BookUser as LucideBookUser,
  BookX as LucideBookX,
  Bookmark as LucideBookmark,
  BookmarkCheck as LucideBookmarkCheck,
  BookmarkMinus as LucideBookmarkMinus,
  BookmarkPlus as LucideBookmarkPlus,
  BookmarkX as LucideBookmarkX,
  BoomBox as LucideBoomBox,
  Bot as LucideBot,
  BotMessageSquare as LucideBotMessageSquare,
  BotOff as LucideBotOff,
  BowArrow as LucideBowArrow,
  Box as LucideBox,
  SquareDashed as LucideBoxSelect,
  Boxes as LucideBoxes,
  Braces as LucideBraces,
  Brackets as LucideBrackets,
  Brain as LucideBrain,
  BrainCircuit as LucideBrainCircuit,
  BrainCog as LucideBrainCog,
  BrickWall as LucideBrickWall,
  BrickWallFire as LucideBrickWallFire,
  Briefcase as LucideBriefcase,
  BriefcaseBusiness as LucideBriefcaseBusiness,
  BriefcaseConveyorBelt as LucideBriefcaseConveyorBelt,
  BriefcaseMedical as LucideBriefcaseMedical,
  BringToFront as LucideBringToFront,
  Brush as LucideBrush,
  BrushCleaning as LucideBrushCleaning,
  Bubbles as LucideBubbles,
  Bug as LucideBug,
  BugOff as LucideBugOff,
  BugPlay as LucideBugPlay,
  Building as LucideBuilding,
  Building2 as LucideBuilding2,
  Bus as LucideBus,
  BusFront as LucideBusFront,
  Cable as LucideCable,
  CableCar as LucideCableCar,
  Cake as LucideCake,
  CakeSlice as LucideCakeSlice,
  Calculator as LucideCalculator,
  Calendar as LucideCalendar,
  Calendar1 as LucideCalendar1,
  CalendarArrowDown as LucideCalendarArrowDown,
  CalendarArrowUp as LucideCalendarArrowUp,
  CalendarCheck as LucideCalendarCheck,
  CalendarCheck2 as LucideCalendarCheck2,
  CalendarClock as LucideCalendarClock,
  CalendarCog as LucideCalendarCog,
  CalendarDays as LucideCalendarDays,
  CalendarFold as LucideCalendarFold,
  CalendarHeart as LucideCalendarHeart,
  CalendarMinus as LucideCalendarMinus,
  CalendarMinus2 as LucideCalendarMinus2,
  CalendarOff as LucideCalendarOff,
  CalendarPlus as LucideCalendarPlus,
  CalendarPlus2 as LucideCalendarPlus2,
  CalendarRange as LucideCalendarRange,
  CalendarSearch as LucideCalendarSearch,
  CalendarSync as LucideCalendarSync,
  CalendarX as LucideCalendarX,
  CalendarX2 as LucideCalendarX2,
  Camera as LucideCamera,
  CameraOff as LucideCameraOff,
  ChartCandlestick as LucideCandlestickChart,
  Candy as LucideCandy,
  CandyCane as LucideCandyCane,
  CandyOff as LucideCandyOff,
  Cannabis as LucideCannabis,
  Captions as LucideCaptions,
  CaptionsOff as LucideCaptionsOff,
  Car as LucideCar,
  CarFront as LucideCarFront,
  CarTaxiFront as LucideCarTaxiFront,
  Caravan as LucideCaravan,
  CardSim as LucideCardSim,
  Carrot as LucideCarrot,
  CaseLower as LucideCaseLower,
  CaseSensitive as LucideCaseSensitive,
  CaseUpper as LucideCaseUpper,
  CassetteTape as LucideCassetteTape,
  Cast as LucideCast,
  Castle as LucideCastle,
  Cat as LucideCat,
  Cctv as LucideCctv,
  ChartArea as LucideChartArea,
  ChartBar as LucideChartBar,
  ChartBarBig as LucideChartBarBig,
  ChartBarDecreasing as LucideChartBarDecreasing,
  ChartBarIncreasing as LucideChartBarIncreasing,
  ChartBarStacked as LucideChartBarStacked,
  ChartCandlestick as LucideChartCandlestick,
  ChartColumn as LucideChartColumn,
  ChartColumnBig as LucideChartColumnBig,
  ChartColumnDecreasing as LucideChartColumnDecreasing,
  ChartColumnIncreasing as LucideChartColumnIncreasing,
  ChartColumnStacked as LucideChartColumnStacked,
  ChartGantt as LucideChartGantt,
  ChartLine as LucideChartLine,
  ChartNetwork as LucideChartNetwork,
  ChartNoAxesColumn as LucideChartNoAxesColumn,
  ChartNoAxesColumnDecreasing as LucideChartNoAxesColumnDecreasing,
  ChartNoAxesColumnIncreasing as LucideChartNoAxesColumnIncreasing,
  ChartNoAxesCombined as LucideChartNoAxesCombined,
  ChartNoAxesGantt as LucideChartNoAxesGantt,
  ChartPie as LucideChartPie,
  ChartScatter as LucideChartScatter,
  ChartSpline as LucideChartSpline,
  Check as LucideCheck,
  CheckCheck as LucideCheckCheck,
  CircleCheckBig as LucideCheckCircle,
  CircleCheck as LucideCheckCircle2,
  CheckLine as LucideCheckLine,
  SquareCheckBig as LucideCheckSquare,
  SquareCheck as LucideCheckSquare2,
  ChefHat as LucideChefHat,
  Cherry as LucideCherry,
  ChevronDown as LucideChevronDown,
  CircleChevronDown as LucideChevronDownCircle,
  SquareChevronDown as LucideChevronDownSquare,
  ChevronFirst as LucideChevronFirst,
  ChevronLast as LucideChevronLast,
  ChevronLeft as LucideChevronLeft,
  CircleChevronLeft as LucideChevronLeftCircle,
  SquareChevronLeft as LucideChevronLeftSquare,
  ChevronRight as LucideChevronRight,
  CircleChevronRight as LucideChevronRightCircle,
  SquareChevronRight as LucideChevronRightSquare,
  ChevronUp as LucideChevronUp,
  CircleChevronUp as LucideChevronUpCircle,
  SquareChevronUp as LucideChevronUpSquare,
  ChevronsDown as LucideChevronsDown,
  ChevronsDownUp as LucideChevronsDownUp,
  ChevronsLeft as LucideChevronsLeft,
  ChevronsLeftRight as LucideChevronsLeftRight,
  ChevronsLeftRightEllipsis as LucideChevronsLeftRightEllipsis,
  ChevronsRight as LucideChevronsRight,
  ChevronsRightLeft as LucideChevronsRightLeft,
  ChevronsUp as LucideChevronsUp,
  ChevronsUpDown as LucideChevronsUpDown,
  Chrome as LucideChrome,
  Church as LucideChurch,
  Cigarette as LucideCigarette,
  CigaretteOff as LucideCigaretteOff,
  Circle as LucideCircle,
  CircleAlert as LucideCircleAlert,
  CircleArrowDown as LucideCircleArrowDown,
  CircleArrowLeft as LucideCircleArrowLeft,
  CircleArrowOutDownLeft as LucideCircleArrowOutDownLeft,
  CircleArrowOutDownRight as LucideCircleArrowOutDownRight,
  CircleArrowOutUpLeft as LucideCircleArrowOutUpLeft,
  CircleArrowOutUpRight as LucideCircleArrowOutUpRight,
  CircleArrowRight as LucideCircleArrowRight,
  CircleArrowUp as LucideCircleArrowUp,
  CircleCheck as LucideCircleCheck,
  CircleCheckBig as LucideCircleCheckBig,
  CircleChevronDown as LucideCircleChevronDown,
  CircleChevronLeft as LucideCircleChevronLeft,
  CircleChevronRight as LucideCircleChevronRight,
  CircleChevronUp as LucideCircleChevronUp,
  CircleDashed as LucideCircleDashed,
  CircleDivide as LucideCircleDivide,
  CircleDollarSign as LucideCircleDollarSign,
  CircleDot as LucideCircleDot,
  CircleDotDashed as LucideCircleDotDashed,
  CircleEllipsis as LucideCircleEllipsis,
  CircleEqual as LucideCircleEqual,
  CircleFadingArrowUp as LucideCircleFadingArrowUp,
  CircleFadingPlus as LucideCircleFadingPlus,
  CircleGauge as LucideCircleGauge,
  CircleQuestionMark as LucideCircleHelp,
  CircleMinus as LucideCircleMinus,
  CircleOff as LucideCircleOff,
  CircleParking as LucideCircleParking,
  CircleParkingOff as LucideCircleParkingOff,
  CirclePause as LucideCirclePause,
  CirclePercent as LucideCirclePercent,
  CirclePlay as LucideCirclePlay,
  CirclePlus as LucideCirclePlus,
  CirclePoundSterling as LucideCirclePoundSterling,
  CirclePower as LucideCirclePower,
  CircleQuestionMark as LucideCircleQuestionMark,
  CircleSlash as LucideCircleSlash,
  CircleSlash2 as LucideCircleSlash2,
  CircleSlash2 as LucideCircleSlashed,
  CircleSmall as LucideCircleSmall,
  CircleStop as LucideCircleStop,
  CircleUser as LucideCircleUser,
  CircleUserRound as LucideCircleUserRound,
  CircleX as LucideCircleX,
  CircuitBoard as LucideCircuitBoard,
  Citrus as LucideCitrus,
  Clapperboard as LucideClapperboard,
  Clipboard as LucideClipboard,
  ClipboardCheck as LucideClipboardCheck,
  ClipboardCopy as LucideClipboardCopy,
  ClipboardPen as LucideClipboardEdit,
  ClipboardList as LucideClipboardList,
  ClipboardMinus as LucideClipboardMinus,
  ClipboardPaste as LucideClipboardPaste,
  ClipboardPen as LucideClipboardPen,
  ClipboardPenLine as LucideClipboardPenLine,
  ClipboardPlus as LucideClipboardPlus,
  ClipboardPenLine as LucideClipboardSignature,
  ClipboardType as LucideClipboardType,
  ClipboardX as LucideClipboardX,
  Clock as LucideClock,
  Clock1 as LucideClock1,
  Clock10 as LucideClock10,
  Clock11 as LucideClock11,
  Clock12 as LucideClock12,
  Clock2 as LucideClock2,
  Clock3 as LucideClock3,
  Clock4 as LucideClock4,
  Clock5 as LucideClock5,
  Clock6 as LucideClock6,
  Clock7 as LucideClock7,
  Clock8 as LucideClock8,
  Clock9 as LucideClock9,
  ClockAlert as LucideClockAlert,
  ClockArrowDown as LucideClockArrowDown,
  ClockArrowUp as LucideClockArrowUp,
  ClockFading as LucideClockFading,
  ClockPlus as LucideClockPlus,
  Cloud as LucideCloud,
  CloudAlert as LucideCloudAlert,
  CloudCheck as LucideCloudCheck,
  CloudCog as LucideCloudCog,
  CloudDownload as LucideCloudDownload,
  CloudDrizzle as LucideCloudDrizzle,
  CloudFog as LucideCloudFog,
  CloudHail as LucideCloudHail,
  CloudLightning as LucideCloudLightning,
  CloudMoon as LucideCloudMoon,
  CloudMoonRain as LucideCloudMoonRain,
  CloudOff as LucideCloudOff,
  CloudRain as LucideCloudRain,
  CloudRainWind as LucideCloudRainWind,
  CloudSnow as LucideCloudSnow,
  CloudSun as LucideCloudSun,
  CloudSunRain as LucideCloudSunRain,
  CloudUpload as LucideCloudUpload,
  Cloudy as LucideCloudy,
  Clover as LucideClover,
  Club as LucideClub,
  Code as LucideCode,
  CodeXml as LucideCode2,
  SquareCode as LucideCodeSquare,
  CodeXml as LucideCodeXml,
  Codepen as LucideCodepen,
  Codesandbox as LucideCodesandbox,
  Coffee as LucideCoffee,
  Cog as LucideCog,
  Coins as LucideCoins,
  Columns2 as LucideColumns,
  Columns2 as LucideColumns2,
  Columns3 as LucideColumns3,
  Columns3Cog as LucideColumns3Cog,
  Columns4 as LucideColumns4,
  Columns3Cog as LucideColumnsSettings,
  Combine as LucideCombine,
  Command as LucideCommand,
  Compass as LucideCompass,
  Component2 as LucideComponent,
  Computer as LucideComputer,
  ConciergeBell as LucideConciergeBell,
  Cone as LucideCone,
  Construction as LucideConstruction,
  Contact as LucideContact,
  ContactRound as LucideContact2,
  ContactRound as LucideContactRound,
  Container as LucideContainer,
  Contrast as LucideContrast,
  Cookie as LucideCookie,
  CookingPot as LucideCookingPot,
  Copy as LucideCopy,
  CopyCheck as LucideCopyCheck,
  CopyMinus as LucideCopyMinus,
  CopyPlus as LucideCopyPlus,
  CopySlash as LucideCopySlash,
  CopyX as LucideCopyX,
  Copyleft as LucideCopyleft,
  Copyright as LucideCopyright,
  CornerDownLeft as LucideCornerDownLeft,
  CornerDownRight as LucideCornerDownRight,
  CornerLeftDown as LucideCornerLeftDown,
  CornerLeftUp as LucideCornerLeftUp,
  CornerRightDown as LucideCornerRightDown,
  CornerRightUp as LucideCornerRightUp,
  CornerUpLeft as LucideCornerUpLeft,
  CornerUpRight as LucideCornerUpRight,
  Cpu as LucideCpu,
  CreativeCommons as LucideCreativeCommons,
  CreditCard as LucideCreditCard,
  Croissant as LucideCroissant,
  Crop as LucideCrop,
  Cross as LucideCross,
  Crosshair as LucideCrosshair,
  Crown as LucideCrown,
  Cuboid as LucideCuboid,
  CupSoda as LucideCupSoda,
  Braces as LucideCurlyBraces,
  Currency as LucideCurrency,
  Cylinder as LucideCylinder,
  Dam as LucideDam,
  Database as LucideDatabase,
  DatabaseBackup as LucideDatabaseBackup,
  DatabaseZap as LucideDatabaseZap,
  DecimalsArrowLeft as LucideDecimalsArrowLeft,
  DecimalsArrowRight as LucideDecimalsArrowRight,
  Delete as LucideDelete,
  Dessert as LucideDessert,
  Diameter as LucideDiameter,
  Diamond as LucideDiamond,
  DiamondMinus as LucideDiamondMinus,
  DiamondPercent as LucideDiamondPercent,
  DiamondPlus as LucideDiamondPlus,
  Dice1 as LucideDice1,
  Dice2 as LucideDice2,
  Dice3 as LucideDice3,
  Dice4 as LucideDice4,
  Dice5 as LucideDice5,
  Dice6 as LucideDice6,
  Dices as LucideDices,
  Diff as LucideDiff,
  Disc as LucideDisc,
  Disc2 as LucideDisc2,
  Disc3 as LucideDisc3,
  DiscAlbum as LucideDiscAlbum,
  Divide as LucideDivide,
  CircleDivide as LucideDivideCircle,
  SquareDivide as LucideDivideSquare,
  Dna as LucideDna,
  DnaOff as LucideDnaOff,
  Dock as LucideDock,
  Dog as LucideDog,
  DollarSign as LucideDollarSign,
  Donut as LucideDonut,
  DoorClosed as LucideDoorClosed,
  DoorClosedLocked as LucideDoorClosedLocked,
  DoorOpen as LucideDoorOpen,
  Dot as LucideDot,
  SquareDot as LucideDotSquare,
  Download as LucideDownload,
  CloudDownload as LucideDownloadCloud,
  DraftingCompass as LucideDraftingCompass,
  Drama as LucideDrama,
  Dribbble as LucideDribbble,
  Drill as LucideDrill,
  Drone as LucideDrone,
  Droplet as LucideDroplet,
  DropletOff as LucideDropletOff,
  Droplets as LucideDroplets,
  Drum as LucideDrum,
  Drumstick as LucideDrumstick,
  Dumbbell as LucideDumbbell,
  Ear as LucideEar,
  EarOff as LucideEarOff,
  Earth as LucideEarth,
  EarthLock as LucideEarthLock,
  Eclipse as LucideEclipse,
  SquarePen as LucideEdit,
  Pen as LucideEdit2,
  PenLine as LucideEdit3,
  Egg as LucideEgg,
  EggFried as LucideEggFried,
  EggOff as LucideEggOff,
  Ellipsis as LucideEllipsis,
  EllipsisVertical as LucideEllipsisVertical,
  Equal as LucideEqual,
  EqualApproximately as LucideEqualApproximately,
  EqualNot as LucideEqualNot,
  SquareEqual as LucideEqualSquare,
  Eraser as LucideEraser,
  EthernetPort as LucideEthernetPort,
  Euro as LucideEuro,
  Expand as LucideExpand,
  ExternalLink as LucideExternalLink,
  Eye as LucideEye,
  EyeClosed as LucideEyeClosed,
  EyeOff as LucideEyeOff,
  Facebook as LucideFacebook,
  Factory as LucideFactory,
  Fan as LucideFan,
  FastForward as LucideFastForward,
  Feather as LucideFeather,
  Fence as LucideFence,
  FerrisWheel as LucideFerrisWheel,
  Figma as LucideFigma,
  File as LucideFile,
  FileArchive as LucideFileArchive,
  FileAudio as LucideFileAudio,
  FileAudio2 as LucideFileAudio2,
  FileAxis3d as LucideFileAxis3D,
  FileAxis3d as LucideFileAxis3d,
  FileBadge as LucideFileBadge,
  FileBadge2 as LucideFileBadge2,
  FileChartColumnIncreasing as LucideFileBarChart,
  FileChartColumn as LucideFileBarChart2,
  FileBox as LucideFileBox,
  FileChartColumn as LucideFileChartColumn,
  FileChartColumnIncreasing as LucideFileChartColumnIncreasing,
  FileChartLine as LucideFileChartLine,
  FileChartPie as LucideFileChartPie,
  FileCheck as LucideFileCheck,
  FileCheck2 as LucideFileCheck2,
  FileClock as LucideFileClock,
  FileCode as LucideFileCode,
  FileCode2 as LucideFileCode2,
  FileCog as LucideFileCog,
  FileCog as LucideFileCog2,
  FileDiff as LucideFileDiff,
  FileDigit as LucideFileDigit,
  FileDown as LucideFileDown,
  FilePen as LucideFileEdit,
  FileHeart as LucideFileHeart,
  FileImage as LucideFileImage,
  FileInput as LucideFileInput,
  FileJson as LucideFileJson,
  FileJson2 as LucideFileJson2,
  FileKey as LucideFileKey,
  FileKey2 as LucideFileKey2,
  FileChartLine as LucideFileLineChart,
  FileLock as LucideFileLock,
  FileLock2 as LucideFileLock2,
  FileMinus as LucideFileMinus,
  FileMinus2 as LucideFileMinus2,
  FileMusic as LucideFileMusic,
  FileOutput as LucideFileOutput,
  FilePen as LucideFilePen,
  FilePenLine as LucideFilePenLine,
  FileChartPie as LucideFilePieChart,
  FilePlus as LucideFilePlus,
  FilePlus2 as LucideFilePlus2,
  FileQuestionMark as LucideFileQuestion,
  FileQuestionMark as LucideFileQuestionMark,
  FileScan as LucideFileScan,
  FileSearch as LucideFileSearch,
  FileSearch2 as LucideFileSearch2,
  FilePenLine as LucideFileSignature,
  FileSliders as LucideFileSliders,
  FileSpreadsheet as LucideFileSpreadsheet,
  FileStack as LucideFileStack,
  FileSymlink as LucideFileSymlink,
  FileTerminal as LucideFileTerminal,
  FileText as LucideFileText,
  FileType as LucideFileType,
  FileType2 as LucideFileType2,
  FileUp as LucideFileUp,
  FileUser as LucideFileUser,
  FileVideo as LucideFileVideo,
  FileVideo2 as LucideFileVideo2,
  FileVolume as LucideFileVolume,
  FileVolume2 as LucideFileVolume2,
  FileWarning as LucideFileWarning,
  FileX as LucideFileX,
  FileX2 as LucideFileX2,
  Files as LucideFiles,
  Film as LucideFilm,
  Funnel as LucideFilter,
  FunnelX as LucideFilterX,
  Fingerprint as LucideFingerprint,
  FireExtinguisher as LucideFireExtinguisher,
  Fish as LucideFish,
  FishOff as LucideFishOff,
  FishSymbol as LucideFishSymbol,
  Flag as LucideFlag,
  FlagOff as LucideFlagOff,
  FlagTriangleLeft as LucideFlagTriangleLeft,
  FlagTriangleRight as LucideFlagTriangleRight,
  Flame as LucideFlame,
  FlameKindling as LucideFlameKindling,
  Flashlight as LucideFlashlight,
  FlashlightOff as LucideFlashlightOff,
  FlaskConical as LucideFlaskConical,
  FlaskConicalOff as LucideFlaskConicalOff,
  FlaskRound as LucideFlaskRound,
  FlipHorizontal as LucideFlipHorizontal,
  FlipHorizontal2 as LucideFlipHorizontal2,
  FlipVertical as LucideFlipVertical,
  FlipVertical2 as LucideFlipVertical2,
  Flower as LucideFlower,
  Flower2 as LucideFlower2,
  Focus as LucideFocus,
  FoldHorizontal as LucideFoldHorizontal,
  FoldVertical as LucideFoldVertical,
  Folder as LucideFolder,
  FolderArchive as LucideFolderArchive,
  FolderCheck as LucideFolderCheck,
  FolderClock as LucideFolderClock,
  FolderClosed as LucideFolderClosed,
  FolderCode as LucideFolderCode,
  FolderCog as LucideFolderCog,
  FolderCog as LucideFolderCog2,
  FolderDot as LucideFolderDot,
  FolderDown as LucideFolderDown,
  FolderPen as LucideFolderEdit,
  FolderGit as LucideFolderGit,
  FolderGit2 as LucideFolderGit2,
  FolderHeart as LucideFolderHeart,
  FolderInput as LucideFolderInput,
  FolderKanban as LucideFolderKanban,
  FolderKey as LucideFolderKey,
  FolderLock as LucideFolderLock,
  FolderMinus as LucideFolderMinus,
  FolderOpen as LucideFolderOpen,
  FolderOpenDot as LucideFolderOpenDot,
  FolderOutput as LucideFolderOutput,
  FolderPen as LucideFolderPen,
  FolderPlus as LucideFolderPlus,
  FolderRoot as LucideFolderRoot,
  FolderSearch as LucideFolderSearch,
  FolderSearch2 as LucideFolderSearch2,
  FolderSymlink as LucideFolderSymlink,
  FolderSync as LucideFolderSync,
  FolderTree as LucideFolderTree,
  FolderUp as LucideFolderUp,
  FolderX as LucideFolderX,
  Folders as LucideFolders,
  Footprints as LucideFootprints,
  Utensils as LucideForkKnife,
  UtensilsCrossed as LucideForkKnifeCrossed,
  Forklift as LucideForklift,
  RectangleEllipsis as LucideFormInput,
  Forward as LucideForward,
  Frame as LucideFrame,
  Framer as LucideFramer,
  Frown as LucideFrown,
  Fuel as LucideFuel,
  Fullscreen as LucideFullscreen,
  SquareFunction as LucideFunctionSquare,
  Funnel as LucideFunnel,
  FunnelPlus as LucideFunnelPlus,
  FunnelX as LucideFunnelX,
  GalleryHorizontal as LucideGalleryHorizontal,
  GalleryHorizontalEnd as LucideGalleryHorizontalEnd,
  GalleryThumbnails as LucideGalleryThumbnails,
  GalleryVertical as LucideGalleryVertical,
  GalleryVerticalEnd as LucideGalleryVerticalEnd,
  Gamepad as LucideGamepad,
  Gamepad2 as LucideGamepad2,
  ChartNoAxesGantt as LucideGanttChart,
  SquareChartGantt as LucideGanttChartSquare,
  Gauge as LucideGauge,
  CircleGauge as LucideGaugeCircle,
  Gavel as LucideGavel,
  Gem as LucideGem,
  GeorgianLari as LucideGeorgianLari,
  Ghost as LucideGhost,
  Gift as LucideGift,
  GitBranch as LucideGitBranch,
  GitBranchPlus as LucideGitBranchPlus,
  GitCommitHorizontal as LucideGitCommit,
  GitCommitHorizontal as LucideGitCommitHorizontal,
  GitCommitVertical as LucideGitCommitVertical,
  GitCompare as LucideGitCompare,
  GitCompareArrows as LucideGitCompareArrows,
  GitFork as LucideGitFork,
  GitGraph as LucideGitGraph,
  GitMerge as LucideGitMerge,
  GitPullRequest as LucideGitPullRequest,
  GitPullRequestArrow as LucideGitPullRequestArrow,
  GitPullRequestClosed as LucideGitPullRequestClosed,
  GitPullRequestCreate as LucideGitPullRequestCreate,
  GitPullRequestCreateArrow as LucideGitPullRequestCreateArrow,
  GitPullRequestDraft as LucideGitPullRequestDraft,
  Github as LucideGithub,
  Gitlab as LucideGitlab,
  GlassWater as LucideGlassWater,
  Glasses as LucideGlasses,
  Globe as LucideGlobe,
  Earth as LucideGlobe2,
  GlobeLock as LucideGlobeLock,
  Goal as LucideGoal,
  Gpu as LucideGpu,
  Grab as LucideGrab,
  GraduationCap as LucideGraduationCap,
  Grape as LucideGrape,
  Grid3x3 as LucideGrid,
  Grid2x2 as LucideGrid2X2,
  Grid2x2Check as LucideGrid2X2Check,
  Grid2x2Plus as LucideGrid2X2Plus,
  Grid2x2X as LucideGrid2X2X,
  Grid2x2 as LucideGrid2x2,
  Grid2x2Check as LucideGrid2x2Check,
  Grid2x2Plus as LucideGrid2x2Plus,
  Grid2x2X as LucideGrid2x2X,
  Grid3x3 as LucideGrid3X3,
  Grid3x2 as LucideGrid3x2,
  Grid3x3 as LucideGrid3x3,
  Grip as LucideGrip,
  GripHorizontal as LucideGripHorizontal,
  GripVertical as LucideGripVertical,
  Group as LucideGroup,
  Guitar as LucideGuitar,
  Ham as LucideHam,
  Hamburger as LucideHamburger,
  Hammer as LucideHammer,
  Hand as LucideHand,
  HandCoins as LucideHandCoins,
  HandHeart as LucideHandHeart,
  HandHelping as LucideHandHelping,
  HandMetal as LucideHandMetal,
  HandPlatter as LucideHandPlatter,
  Handshake as LucideHandshake,
  HardDrive as LucideHardDrive,
  HardDriveDownload as LucideHardDriveDownload,
  HardDriveUpload as LucideHardDriveUpload,
  HardHat as LucideHardHat,
  Hash as LucideHash,
  Haze as LucideHaze,
  HdmiPort as LucideHdmiPort,
  Heading as LucideHeading,
  Heading1 as LucideHeading1,
  Heading2 as LucideHeading2,
  Heading3 as LucideHeading3,
  Heading4 as LucideHeading4,
  Heading5 as LucideHeading5,
  Heading6 as LucideHeading6,
  HeadphoneOff as LucideHeadphoneOff,
  Headphones as LucideHeadphones,
  Headset as LucideHeadset,
  Heart as LucideHeart,
  HeartCrack as LucideHeartCrack,
  HeartHandshake as LucideHeartHandshake,
  HeartMinus as LucideHeartMinus,
  HeartOff as LucideHeartOff,
  HeartPlus as LucideHeartPlus,
  HeartPulse as LucideHeartPulse,
  Heater as LucideHeater,
  CircleQuestionMark as LucideHelpCircle,
  HandHelping as LucideHelpingHand,
  Hexagon as LucideHexagon,
  Highlighter as LucideHighlighter,
  History as LucideHistory,
  House as LucideHome,
  Hop as LucideHop,
  HopOff as LucideHopOff,
  Hospital as LucideHospital,
  Hotel as LucideHotel,
  Hourglass as LucideHourglass,
  House as LucideHouse,
  HousePlug as LucideHousePlug,
  HousePlus as LucideHousePlus,
  HouseWifi as LucideHouseWifi,
  IceCreamCone as LucideIceCream,
  IceCreamBowl as LucideIceCream2,
  IceCreamBowl as LucideIceCreamBowl,
  IceCreamCone as LucideIceCreamCone,
  LucideIconConfig,
  LucideIconProvider,
  IdCard as LucideIdCard,
  IdCardLanyard as LucideIdCardLanyard,
  Image as LucideImage,
  ImageDown as LucideImageDown,
  ImageMinus as LucideImageMinus,
  ImageOff as LucideImageOff,
  ImagePlay as LucideImagePlay,
  ImagePlus as LucideImagePlus,
  ImageUp as LucideImageUp,
  ImageUpscale as LucideImageUpscale,
  Images as LucideImages,
  Import as LucideImport,
  Inbox as LucideInbox,
  IndentIncrease as LucideIndent,
  IndentDecrease as LucideIndentDecrease,
  IndentIncrease as LucideIndentIncrease,
  IndianRupee as LucideIndianRupee,
  Infinity as LucideInfinity,
  Info as LucideInfo,
  SquareMousePointer as LucideInspect,
  InspectionPanel as LucideInspectionPanel,
  Instagram as LucideInstagram,
  Italic as LucideItalic,
  IterationCcw as LucideIterationCcw,
  IterationCw as LucideIterationCw,
  JapaneseYen as LucideJapaneseYen,
  Joystick as LucideJoystick,
  Kanban as LucideKanban,
  SquareKanban as LucideKanbanSquare,
  SquareDashedKanban as LucideKanbanSquareDashed,
  Key as LucideKey,
  KeyRound as LucideKeyRound,
  KeySquare as LucideKeySquare,
  Keyboard as LucideKeyboard,
  KeyboardMusic as LucideKeyboardMusic,
  KeyboardOff as LucideKeyboardOff,
  Lamp as LucideLamp,
  LampCeiling as LucideLampCeiling,
  LampDesk as LucideLampDesk,
  LampFloor as LucideLampFloor,
  LampWallDown as LucideLampWallDown,
  LampWallUp as LucideLampWallUp,
  LandPlot as LucideLandPlot,
  Landmark as LucideLandmark,
  Languages as LucideLanguages,
  Laptop as LucideLaptop,
  LaptopMinimal as LucideLaptop2,
  LaptopMinimal as LucideLaptopMinimal,
  LaptopMinimalCheck as LucideLaptopMinimalCheck,
  Lasso as LucideLasso,
  LassoSelect as LucideLassoSelect,
  Laugh as LucideLaugh,
  Layers as LucideLayers,
  Layers2 as LucideLayers2,
  Layers as LucideLayers3,
  PanelsTopLeft as LucideLayout,
  LayoutDashboard as LucideLayoutDashboard,
  LayoutGrid as LucideLayoutGrid,
  LayoutList as LucideLayoutList,
  LayoutPanelLeft as LucideLayoutPanelLeft,
  LayoutPanelTop as LucideLayoutPanelTop,
  LayoutTemplate as LucideLayoutTemplate,
  Leaf as LucideLeaf,
  LeafyGreen as LucideLeafyGreen,
  Lectern as LucideLectern,
  LetterText as LucideLetterText,
  Library as LucideLibrary,
  LibraryBig as LucideLibraryBig,
  SquareLibrary as LucideLibrarySquare,
  LifeBuoy as LucideLifeBuoy,
  Ligature as LucideLigature,
  Lightbulb as LucideLightbulb,
  LightbulbOff as LucideLightbulbOff,
  ChartLine as LucideLineChart,
  LineSquiggle as LucideLineSquiggle,
  Link as LucideLink,
  Link2 as LucideLink2,
  Link2Off as LucideLink2Off,
  Linkedin as LucideLinkedin,
  List as LucideList,
  ListCheck as LucideListCheck,
  ListChecks as LucideListChecks,
  ListCollapse as LucideListCollapse,
  ListEnd as LucideListEnd,
  ListFilter as LucideListFilter,
  ListFilterPlus as LucideListFilterPlus,
  ListMinus as LucideListMinus,
  ListMusic as LucideListMusic,
  ListOrdered as LucideListOrdered,
  ListPlus as LucideListPlus,
  ListRestart as LucideListRestart,
  ListStart as LucideListStart,
  ListTodo as LucideListTodo,
  ListTree as LucideListTree,
  ListVideo as LucideListVideo,
  ListX as LucideListX,
  Loader as LucideLoader,
  LoaderCircle as LucideLoader2,
  LoaderCircle as LucideLoaderCircle,
  LoaderPinwheel as LucideLoaderPinwheel,
  Locate as LucideLocate,
  LocateFixed as LucideLocateFixed,
  LocateOff as LucideLocateOff,
  LocationEdit as LucideLocationEdit,
  Lock as LucideLock,
  LockKeyhole as LucideLockKeyhole,
  LockKeyholeOpen as LucideLockKeyholeOpen,
  LockOpen as LucideLockOpen,
  LogIn as LucideLogIn,
  LogOut as LucideLogOut,
  Logs as LucideLogs,
  Lollipop as LucideLollipop,
  Luggage as LucideLuggage,
  SquareM as LucideMSquare,
  Magnet as LucideMagnet,
  Mail as LucideMail,
  MailCheck as LucideMailCheck,
  MailMinus as LucideMailMinus,
  MailOpen as LucideMailOpen,
  MailPlus as LucideMailPlus,
  MailQuestionMark as LucideMailQuestion,
  MailQuestionMark as LucideMailQuestionMark,
  MailSearch as LucideMailSearch,
  MailWarning as LucideMailWarning,
  MailX as LucideMailX,
  Mailbox as LucideMailbox,
  Mails as LucideMails,
  Map as LucideMap,
  MapPin as LucideMapPin,
  MapPinCheck as LucideMapPinCheck,
  MapPinCheckInside as LucideMapPinCheckInside,
  MapPinHouse as LucideMapPinHouse,
  MapPinMinus as LucideMapPinMinus,
  MapPinMinusInside as LucideMapPinMinusInside,
  MapPinOff as LucideMapPinOff,
  MapPinPlus as LucideMapPinPlus,
  MapPinPlusInside as LucideMapPinPlusInside,
  MapPinX as LucideMapPinX,
  MapPinXInside as LucideMapPinXInside,
  MapPinned as LucideMapPinned,
  MapPlus as LucideMapPlus,
  Mars as LucideMars,
  MarsStroke as LucideMarsStroke,
  Martini as LucideMartini,
  Maximize as LucideMaximize,
  Maximize2 as LucideMaximize2,
  Medal as LucideMedal,
  Megaphone as LucideMegaphone,
  MegaphoneOff as LucideMegaphoneOff,
  Meh as LucideMeh,
  MemoryStick as LucideMemoryStick,
  Menu as LucideMenu,
  SquareMenu as LucideMenuSquare,
  Merge as LucideMerge,
  MessageCircle as LucideMessageCircle,
  MessageCircleCode as LucideMessageCircleCode,
  MessageCircleDashed as LucideMessageCircleDashed,
  MessageCircleHeart as LucideMessageCircleHeart,
  MessageCircleMore as LucideMessageCircleMore,
  MessageCircleOff as LucideMessageCircleOff,
  MessageCirclePlus as LucideMessageCirclePlus,
  MessageCircleQuestionMark as LucideMessageCircleQuestion,
  MessageCircleQuestionMark as LucideMessageCircleQuestionMark,
  MessageCircleReply as LucideMessageCircleReply,
  MessageCircleWarning as LucideMessageCircleWarning,
  MessageCircleX as LucideMessageCircleX,
  MessageSquare as LucideMessageSquare,
  MessageSquareCode as LucideMessageSquareCode,
  MessageSquareDashed as LucideMessageSquareDashed,
  MessageSquareDiff as LucideMessageSquareDiff,
  MessageSquareDot as LucideMessageSquareDot,
  MessageSquareHeart as LucideMessageSquareHeart,
  MessageSquareLock as LucideMessageSquareLock,
  MessageSquareMore as LucideMessageSquareMore,
  MessageSquareOff as LucideMessageSquareOff,
  MessageSquarePlus as LucideMessageSquarePlus,
  MessageSquareQuote as LucideMessageSquareQuote,
  MessageSquareReply as LucideMessageSquareReply,
  MessageSquareShare as LucideMessageSquareShare,
  MessageSquareText as LucideMessageSquareText,
  MessageSquareWarning as LucideMessageSquareWarning,
  MessageSquareX as LucideMessageSquareX,
  MessagesSquare as LucideMessagesSquare,
  Mic as LucideMic,
  MicVocal as LucideMic2,
  MicOff as LucideMicOff,
  MicVocal as LucideMicVocal,
  Microchip as LucideMicrochip,
  Microscope as LucideMicroscope,
  Microwave as LucideMicrowave,
  Milestone as LucideMilestone,
  Milk as LucideMilk,
  MilkOff as LucideMilkOff,
  Minimize as LucideMinimize,
  Minimize2 as LucideMinimize2,
  Minus as LucideMinus,
  CircleMinus as LucideMinusCircle,
  SquareMinus as LucideMinusSquare,
  Monitor as LucideMonitor,
  MonitorCheck as LucideMonitorCheck,
  MonitorCog as LucideMonitorCog,
  MonitorDot as LucideMonitorDot,
  MonitorDown as LucideMonitorDown,
  MonitorOff as LucideMonitorOff,
  MonitorPause as LucideMonitorPause,
  MonitorPlay as LucideMonitorPlay,
  MonitorSmartphone as LucideMonitorSmartphone,
  MonitorSpeaker as LucideMonitorSpeaker,
  MonitorStop as LucideMonitorStop,
  MonitorUp as LucideMonitorUp,
  MonitorX as LucideMonitorX,
  Moon as LucideMoon,
  MoonStar as LucideMoonStar,
  Ellipsis as LucideMoreHorizontal,
  EllipsisVertical as LucideMoreVertical,
  Mountain as LucideMountain,
  MountainSnow as LucideMountainSnow,
  Mouse as LucideMouse,
  MouseOff as LucideMouseOff,
  MousePointer as LucideMousePointer,
  MousePointer2 as LucideMousePointer2,
  MousePointerBan as LucideMousePointerBan,
  MousePointerClick as LucideMousePointerClick,
  SquareDashedMousePointer as LucideMousePointerSquareDashed,
  Move as LucideMove,
  Move3d as LucideMove3D,
  Move3d as LucideMove3d,
  MoveDiagonal as LucideMoveDiagonal,
  MoveDiagonal2 as LucideMoveDiagonal2,
  MoveDown as LucideMoveDown,
  MoveDownLeft as LucideMoveDownLeft,
  MoveDownRight as LucideMoveDownRight,
  MoveHorizontal as LucideMoveHorizontal,
  MoveLeft as LucideMoveLeft,
  MoveRight as LucideMoveRight,
  MoveUp as LucideMoveUp,
  MoveUpLeft as LucideMoveUpLeft,
  MoveUpRight as LucideMoveUpRight,
  MoveVertical as LucideMoveVertical,
  Music as LucideMusic,
  Music2 as LucideMusic2,
  Music3 as LucideMusic3,
  Music4 as LucideMusic4,
  Navigation as LucideNavigation,
  Navigation2 as LucideNavigation2,
  Navigation2Off as LucideNavigation2Off,
  NavigationOff as LucideNavigationOff,
  Network as LucideNetwork,
  Newspaper as LucideNewspaper,
  Nfc as LucideNfc,
  NonBinary as LucideNonBinary,
  Notebook as LucideNotebook,
  NotebookPen as LucideNotebookPen,
  NotebookTabs as LucideNotebookTabs,
  NotebookText as LucideNotebookText,
  NotepadText as LucideNotepadText,
  NotepadTextDashed as LucideNotepadTextDashed,
  Nut as LucideNut,
  NutOff as LucideNutOff,
  Octagon as LucideOctagon,
  OctagonAlert as LucideOctagonAlert,
  OctagonMinus as LucideOctagonMinus,
  OctagonPause as LucideOctagonPause,
  OctagonX as LucideOctagonX,
  Omega as LucideOmega,
  Option as LucideOption,
  Orbit as LucideOrbit,
  Origami as LucideOrigami,
  IndentDecrease as LucideOutdent,
  Package as LucidePackage,
  Package2 as LucidePackage2,
  PackageCheck as LucidePackageCheck,
  PackageMinus as LucidePackageMinus,
  PackageOpen as LucidePackageOpen,
  PackagePlus as LucidePackagePlus,
  PackageSearch as LucidePackageSearch,
  PackageX as LucidePackageX,
  PaintBucket as LucidePaintBucket,
  PaintRoller as LucidePaintRoller,
  Paintbrush as LucidePaintbrush,
  PaintbrushVertical as LucidePaintbrush2,
  PaintbrushVertical as LucidePaintbrushVertical,
  Palette as LucidePalette,
  TreePalm as LucidePalmtree,
  Panda as LucidePanda,
  PanelBottom as LucidePanelBottom,
  PanelBottomClose as LucidePanelBottomClose,
  PanelBottomDashed as LucidePanelBottomDashed,
  PanelBottomDashed as LucidePanelBottomInactive,
  PanelBottomOpen as LucidePanelBottomOpen,
  PanelLeft as LucidePanelLeft,
  PanelLeftClose as LucidePanelLeftClose,
  PanelLeftDashed as LucidePanelLeftDashed,
  PanelLeftDashed as LucidePanelLeftInactive,
  PanelLeftOpen as LucidePanelLeftOpen,
  PanelRight as LucidePanelRight,
  PanelRightClose as LucidePanelRightClose,
  PanelRightDashed as LucidePanelRightDashed,
  PanelRightDashed as LucidePanelRightInactive,
  PanelRightOpen as LucidePanelRightOpen,
  PanelTop as LucidePanelTop,
  PanelTopClose as LucidePanelTopClose,
  PanelTopDashed as LucidePanelTopDashed,
  PanelTopDashed as LucidePanelTopInactive,
  PanelTopOpen as LucidePanelTopOpen,
  PanelsLeftBottom as LucidePanelsLeftBottom,
  Columns3 as LucidePanelsLeftRight,
  PanelsRightBottom as LucidePanelsRightBottom,
  Rows3 as LucidePanelsTopBottom,
  PanelsTopLeft as LucidePanelsTopLeft,
  Paperclip as LucidePaperclip,
  Parentheses as LucideParentheses,
  CircleParking as LucideParkingCircle,
  CircleParkingOff as LucideParkingCircleOff,
  ParkingMeter as LucideParkingMeter,
  SquareParking as LucideParkingSquare,
  SquareParkingOff as LucideParkingSquareOff,
  PartyPopper as LucidePartyPopper,
  Pause as LucidePause,
  CirclePause as LucidePauseCircle,
  OctagonPause as LucidePauseOctagon,
  PawPrint as LucidePawPrint,
  PcCase as LucidePcCase,
  Pen as LucidePen,
  SquarePen as LucidePenBox,
  PenLine as LucidePenLine,
  PenOff as LucidePenOff,
  SquarePen as LucidePenSquare,
  PenTool as LucidePenTool,
  Pencil as LucidePencil,
  PencilLine as LucidePencilLine,
  PencilOff as LucidePencilOff,
  PencilRuler as LucidePencilRuler,
  Pentagon as LucidePentagon,
  Percent as LucidePercent,
  CirclePercent as LucidePercentCircle,
  DiamondPercent as LucidePercentDiamond,
  SquarePercent as LucidePercentSquare,
  PersonStanding as LucidePersonStanding,
  PhilippinePeso as LucidePhilippinePeso,
  Phone as LucidePhone,
  PhoneCall as LucidePhoneCall,
  PhoneForwarded as LucidePhoneForwarded,
  PhoneIncoming as LucidePhoneIncoming,
  PhoneMissed as LucidePhoneMissed,
  PhoneOff as LucidePhoneOff,
  PhoneOutgoing as LucidePhoneOutgoing,
  Pi as LucidePi,
  SquarePi as LucidePiSquare,
  Piano as LucidePiano,
  Pickaxe as LucidePickaxe,
  PictureInPicture as LucidePictureInPicture,
  PictureInPicture2 as LucidePictureInPicture2,
  ChartPie as LucidePieChart,
  PiggyBank as LucidePiggyBank,
  Pilcrow as LucidePilcrow,
  PilcrowLeft as LucidePilcrowLeft,
  PilcrowRight as LucidePilcrowRight,
  SquarePilcrow as LucidePilcrowSquare,
  Pill as LucidePill,
  PillBottle as LucidePillBottle,
  Pin as LucidePin,
  PinOff as LucidePinOff,
  Pipette as LucidePipette,
  Pizza as LucidePizza,
  Plane as LucidePlane,
  PlaneLanding as LucidePlaneLanding,
  PlaneTakeoff as LucidePlaneTakeoff,
  Play as LucidePlay,
  CirclePlay as LucidePlayCircle,
  SquarePlay as LucidePlaySquare,
  Plug as LucidePlug,
  Plug2 as LucidePlug2,
  PlugZap as LucidePlugZap,
  PlugZap as LucidePlugZap2,
  Plus as LucidePlus,
  CirclePlus as LucidePlusCircle,
  SquarePlus as LucidePlusSquare,
  Pocket as LucidePocket,
  PocketKnife as LucidePocketKnife,
  Podcast as LucidePodcast,
  Pointer as LucidePointer,
  PointerOff as LucidePointerOff,
  Popcorn as LucidePopcorn,
  Popsicle as LucidePopsicle,
  PoundSterling as LucidePoundSterling,
  Power as LucidePower,
  CirclePower as LucidePowerCircle,
  PowerOff as LucidePowerOff,
  SquarePower as LucidePowerSquare,
  Presentation as LucidePresentation,
  Printer as LucidePrinter,
  PrinterCheck as LucidePrinterCheck,
  Projector as LucideProjector,
  Proportions as LucideProportions,
  Puzzle as LucidePuzzle,
  Pyramid as LucidePyramid,
  QrCode as LucideQrCode,
  Quote as LucideQuote,
  Rabbit as LucideRabbit,
  Radar as LucideRadar,
  Radiation as LucideRadiation,
  Radical as LucideRadical,
  Radio as LucideRadio,
  RadioReceiver as LucideRadioReceiver,
  RadioTower as LucideRadioTower,
  Radius as LucideRadius,
  RailSymbol as LucideRailSymbol,
  Rainbow as LucideRainbow,
  Rat as LucideRat,
  Ratio as LucideRatio,
  Receipt as LucideReceipt,
  ReceiptCent as LucideReceiptCent,
  ReceiptEuro as LucideReceiptEuro,
  ReceiptIndianRupee as LucideReceiptIndianRupee,
  ReceiptJapaneseYen as LucideReceiptJapaneseYen,
  ReceiptPoundSterling as LucideReceiptPoundSterling,
  ReceiptRussianRuble as LucideReceiptRussianRuble,
  ReceiptSwissFranc as LucideReceiptSwissFranc,
  ReceiptText as LucideReceiptText,
  RectangleCircle as LucideRectangleCircle,
  RectangleEllipsis as LucideRectangleEllipsis,
  RectangleGoggles as LucideRectangleGoggles,
  RectangleHorizontal as LucideRectangleHorizontal,
  RectangleVertical as LucideRectangleVertical,
  Recycle as LucideRecycle,
  Redo as LucideRedo,
  Redo2 as LucideRedo2,
  RedoDot as LucideRedoDot,
  RefreshCcw as LucideRefreshCcw,
  RefreshCcwDot as LucideRefreshCcwDot,
  RefreshCw as LucideRefreshCw,
  RefreshCwOff as LucideRefreshCwOff,
  Refrigerator as LucideRefrigerator,
  Regex as LucideRegex,
  RemoveFormatting as LucideRemoveFormatting,
  Repeat as LucideRepeat,
  Repeat1 as LucideRepeat1,
  Repeat2 as LucideRepeat2,
  Replace as LucideReplace,
  ReplaceAll as LucideReplaceAll,
  Reply as LucideReply,
  ReplyAll as LucideReplyAll,
  Rewind as LucideRewind,
  Ribbon as LucideRibbon,
  Rocket as LucideRocket,
  RockingChair as LucideRockingChair,
  RollerCoaster as LucideRollerCoaster,
  Rotate3d as LucideRotate3D,
  Rotate3d as LucideRotate3d,
  RotateCcw as LucideRotateCcw,
  RotateCcwKey as LucideRotateCcwKey,
  RotateCcwSquare as LucideRotateCcwSquare,
  RotateCw as LucideRotateCw,
  RotateCwSquare as LucideRotateCwSquare,
  Route as LucideRoute,
  RouteOff as LucideRouteOff,
  Router as LucideRouter,
  Rows2 as LucideRows,
  Rows2 as LucideRows2,
  Rows3 as LucideRows3,
  Rows4 as LucideRows4,
  Rss as LucideRss,
  Ruler as LucideRuler,
  RulerDimensionLine as LucideRulerDimensionLine,
  RussianRuble as LucideRussianRuble,
  Sailboat as LucideSailboat,
  Salad as LucideSalad,
  Sandwich as LucideSandwich,
  Satellite as LucideSatellite,
  SatelliteDish as LucideSatelliteDish,
  SaudiRiyal as LucideSaudiRiyal,
  Save as LucideSave,
  SaveAll as LucideSaveAll,
  SaveOff as LucideSaveOff,
  Scale as LucideScale,
  Scale3d as LucideScale3D,
  Scale3d as LucideScale3d,
  Scaling as LucideScaling,
  Scan as LucideScan,
  ScanBarcode as LucideScanBarcode,
  ScanEye as LucideScanEye,
  ScanFace as LucideScanFace,
  ScanHeart as LucideScanHeart,
  ScanLine as LucideScanLine,
  ScanQrCode as LucideScanQrCode,
  ScanSearch as LucideScanSearch,
  ScanText as LucideScanText,
  ChartScatter as LucideScatterChart,
  School as LucideSchool,
  University as LucideSchool2,
  Scissors as LucideScissors,
  ScissorsLineDashed as LucideScissorsLineDashed,
  SquareScissors as LucideScissorsSquare,
  SquareBottomDashedScissors as LucideScissorsSquareDashedBottom,
  ScreenShare as LucideScreenShare,
  ScreenShareOff as LucideScreenShareOff,
  Scroll as LucideScroll,
  ScrollText as LucideScrollText,
  Search as LucideSearch,
  SearchCheck as LucideSearchCheck,
  SearchCode as LucideSearchCode,
  SearchSlash as LucideSearchSlash,
  SearchX as LucideSearchX,
  Section as LucideSection,
  Send as LucideSend,
  SendHorizontal as LucideSendHorizonal,
  SendHorizontal as LucideSendHorizontal,
  SendToBack as LucideSendToBack,
  SeparatorHorizontal as LucideSeparatorHorizontal,
  SeparatorVertical as LucideSeparatorVertical,
  Server as LucideServer,
  ServerCog as LucideServerCog,
  ServerCrash as LucideServerCrash,
  ServerOff as LucideServerOff,
  Settings as LucideSettings,
  Settings2 as LucideSettings2,
  Shapes as LucideShapes,
  Share as LucideShare,
  Share2 as LucideShare2,
  Sheet as LucideSheet,
  Shell as LucideShell,
  Shield as LucideShield,
  ShieldAlert as LucideShieldAlert,
  ShieldBan as LucideShieldBan,
  ShieldCheck as LucideShieldCheck,
  ShieldX as LucideShieldClose,
  ShieldEllipsis as LucideShieldEllipsis,
  ShieldHalf as LucideShieldHalf,
  ShieldMinus as LucideShieldMinus,
  ShieldOff as LucideShieldOff,
  ShieldPlus as LucideShieldPlus,
  ShieldQuestionMark as LucideShieldQuestion,
  ShieldQuestionMark as LucideShieldQuestionMark,
  ShieldUser as LucideShieldUser,
  ShieldX as LucideShieldX,
  Ship as LucideShip,
  ShipWheel as LucideShipWheel,
  Shirt as LucideShirt,
  ShoppingBag as LucideShoppingBag,
  ShoppingBasket as LucideShoppingBasket,
  ShoppingCart as LucideShoppingCart,
  Shovel as LucideShovel,
  ShowerHead as LucideShowerHead,
  Shredder as LucideShredder,
  Shrimp as LucideShrimp,
  Shrink as LucideShrink,
  Shrub as LucideShrub,
  Shuffle as LucideShuffle,
  PanelLeft as LucideSidebar,
  PanelLeftClose as LucideSidebarClose,
  PanelLeftOpen as LucideSidebarOpen,
  Sigma as LucideSigma,
  SquareSigma as LucideSigmaSquare,
  Signal as LucideSignal,
  SignalHigh as LucideSignalHigh,
  SignalLow as LucideSignalLow,
  SignalMedium as LucideSignalMedium,
  SignalZero as LucideSignalZero,
  Signature as LucideSignature,
  Signpost as LucideSignpost,
  SignpostBig as LucideSignpostBig,
  Siren as LucideSiren,
  SkipBack as LucideSkipBack,
  SkipForward as LucideSkipForward,
  Skull as LucideSkull,
  Slack as LucideSlack,
  Slash as LucideSlash,
  SquareSlash as LucideSlashSquare,
  Slice as LucideSlice,
  SlidersVertical as LucideSliders,
  SlidersHorizontal as LucideSlidersHorizontal,
  SlidersVertical as LucideSlidersVertical,
  Smartphone as LucideSmartphone,
  SmartphoneCharging as LucideSmartphoneCharging,
  SmartphoneNfc as LucideSmartphoneNfc,
  Smile as LucideSmile,
  SmilePlus as LucideSmilePlus,
  Snail as LucideSnail,
  Snowflake as LucideSnowflake,
  SoapDispenserDroplet as LucideSoapDispenserDroplet,
  Sofa as LucideSofa,
  ArrowUpNarrowWide as LucideSortAsc,
  ArrowDownWideNarrow as LucideSortDesc,
  Soup as LucideSoup,
  Space as LucideSpace,
  Spade as LucideSpade,
  Sparkle as LucideSparkle,
  Sparkles as LucideSparkles,
  Speaker as LucideSpeaker,
  Speech as LucideSpeech,
  SpellCheck as LucideSpellCheck,
  SpellCheck2 as LucideSpellCheck2,
  Spline as LucideSpline,
  SplinePointer as LucideSplinePointer,
  Split as LucideSplit,
  SquareSplitHorizontal as LucideSplitSquareHorizontal,
  SquareSplitVertical as LucideSplitSquareVertical,
  Spool as LucideSpool,
  SprayCan as LucideSprayCan,
  Sprout as LucideSprout,
  Square as LucideSquare,
  SquareActivity as LucideSquareActivity,
  SquareArrowDown as LucideSquareArrowDown,
  SquareArrowDownLeft as LucideSquareArrowDownLeft,
  SquareArrowDownRight as LucideSquareArrowDownRight,
  SquareArrowLeft as LucideSquareArrowLeft,
  SquareArrowOutDownLeft as LucideSquareArrowOutDownLeft,
  SquareArrowOutDownRight as LucideSquareArrowOutDownRight,
  SquareArrowOutUpLeft as LucideSquareArrowOutUpLeft,
  SquareArrowOutUpRight as LucideSquareArrowOutUpRight,
  SquareArrowRight as LucideSquareArrowRight,
  SquareArrowUp as LucideSquareArrowUp,
  SquareArrowUpLeft as LucideSquareArrowUpLeft,
  SquareArrowUpRight as LucideSquareArrowUpRight,
  SquareAsterisk as LucideSquareAsterisk,
  SquareBottomDashedScissors as LucideSquareBottomDashedScissors,
  SquareChartGantt as LucideSquareChartGantt,
  SquareCheck as LucideSquareCheck,
  SquareCheckBig as LucideSquareCheckBig,
  SquareChevronDown as LucideSquareChevronDown,
  SquareChevronLeft as LucideSquareChevronLeft,
  SquareChevronRight as LucideSquareChevronRight,
  SquareChevronUp as LucideSquareChevronUp,
  SquareCode as LucideSquareCode,
  SquareDashed as LucideSquareDashed,
  SquareDashedBottom as LucideSquareDashedBottom,
  SquareDashedBottomCode as LucideSquareDashedBottomCode,
  SquareDashedKanban as LucideSquareDashedKanban,
  SquareDashedMousePointer as LucideSquareDashedMousePointer,
  SquareDashedTopSolid as LucideSquareDashedTopSolid,
  SquareDivide as LucideSquareDivide,
  SquareDot as LucideSquareDot,
  SquareEqual as LucideSquareEqual,
  SquareFunction as LucideSquareFunction,
  SquareChartGantt as LucideSquareGanttChart,
  SquareKanban as LucideSquareKanban,
  SquareLibrary as LucideSquareLibrary,
  SquareM as LucideSquareM,
  SquareMenu as LucideSquareMenu,
  SquareMinus as LucideSquareMinus,
  SquareMousePointer as LucideSquareMousePointer,
  SquareParking as LucideSquareParking,
  SquareParkingOff as LucideSquareParkingOff,
  SquarePen as LucideSquarePen,
  SquarePercent as LucideSquarePercent,
  SquarePi as LucideSquarePi,
  SquarePilcrow as LucideSquarePilcrow,
  SquarePlay as LucideSquarePlay,
  SquarePlus as LucideSquarePlus,
  SquarePower as LucideSquarePower,
  SquareRadical as LucideSquareRadical,
  SquareRoundCorner as LucideSquareRoundCorner,
  SquareScissors as LucideSquareScissors,
  SquareSigma as LucideSquareSigma,
  SquareSlash as LucideSquareSlash,
  SquareSplitHorizontal as LucideSquareSplitHorizontal,
  SquareSplitVertical as LucideSquareSplitVertical,
  SquareSquare as LucideSquareSquare,
  SquareStack as LucideSquareStack,
  SquareTerminal as LucideSquareTerminal,
  SquareUser as LucideSquareUser,
  SquareUserRound as LucideSquareUserRound,
  SquareX as LucideSquareX,
  SquaresExclude as LucideSquaresExclude,
  SquaresIntersect as LucideSquaresIntersect,
  SquaresSubtract as LucideSquaresSubtract,
  SquaresUnite as LucideSquaresUnite,
  Squircle as LucideSquircle,
  SquircleDashed as LucideSquircleDashed,
  Squirrel as LucideSquirrel,
  Stamp as LucideStamp,
  Star as LucideStar,
  StarHalf as LucideStarHalf,
  StarOff as LucideStarOff,
  Sparkles as LucideStars,
  StepBack as LucideStepBack,
  StepForward as LucideStepForward,
  Stethoscope as LucideStethoscope,
  Sticker as LucideSticker,
  StickyNote as LucideStickyNote,
  CircleStop as LucideStopCircle,
  Store as LucideStore,
  StretchHorizontal as LucideStretchHorizontal,
  StretchVertical as LucideStretchVertical,
  Strikethrough as LucideStrikethrough,
  Subscript as LucideSubscript,
  Captions as LucideSubtitles,
  Sun as LucideSun,
  SunDim as LucideSunDim,
  SunMedium as LucideSunMedium,
  SunMoon as LucideSunMoon,
  SunSnow as LucideSunSnow,
  Sunrise as LucideSunrise,
  Sunset as LucideSunset,
  Superscript as LucideSuperscript,
  SwatchBook as LucideSwatchBook,
  SwissFranc as LucideSwissFranc,
  SwitchCamera as LucideSwitchCamera,
  Sword as LucideSword,
  Swords as LucideSwords,
  Syringe as LucideSyringe,
  Table as LucideTable,
  Table2 as LucideTable2,
  TableCellsMerge as LucideTableCellsMerge,
  TableCellsSplit as LucideTableCellsSplit,
  TableColumnsSplit as LucideTableColumnsSplit,
  Columns3Cog as LucideTableConfig,
  TableOfContents as LucideTableOfContents,
  TableProperties as LucideTableProperties,
  TableRowsSplit as LucideTableRowsSplit,
  Tablet as LucideTablet,
  TabletSmartphone as LucideTabletSmartphone,
  Tablets as LucideTablets,
  Tag as LucideTag,
  Tags as LucideTags,
  Tally1 as LucideTally1,
  Tally2 as LucideTally2,
  Tally3 as LucideTally3,
  Tally4 as LucideTally4,
  Tally5 as LucideTally5,
  Tangent as LucideTangent,
  Target as LucideTarget,
  Telescope as LucideTelescope,
  Tent as LucideTent,
  TentTree as LucideTentTree,
  Terminal as LucideTerminal,
  SquareTerminal as LucideTerminalSquare,
  TestTube as LucideTestTube,
  TestTubeDiagonal as LucideTestTube2,
  TestTubeDiagonal as LucideTestTubeDiagonal,
  TestTubes as LucideTestTubes,
  Text as LucideText,
  TextCursor as LucideTextCursor,
  TextCursorInput as LucideTextCursorInput,
  TextQuote as LucideTextQuote,
  TextSearch as LucideTextSearch,
  TextSelect as LucideTextSelect,
  TextSelect as LucideTextSelection,
  Theater as LucideTheater,
  Thermometer as LucideThermometer,
  ThermometerSnowflake as LucideThermometerSnowflake,
  ThermometerSun as LucideThermometerSun,
  ThumbsDown as LucideThumbsDown,
  ThumbsUp as LucideThumbsUp,
  Ticket as LucideTicket,
  TicketCheck as LucideTicketCheck,
  TicketMinus as LucideTicketMinus,
  TicketPercent as LucideTicketPercent,
  TicketPlus as LucideTicketPlus,
  TicketSlash as LucideTicketSlash,
  TicketX as LucideTicketX,
  Tickets as LucideTickets,
  TicketsPlane as LucideTicketsPlane,
  Timer as LucideTimer,
  TimerOff as LucideTimerOff,
  TimerReset as LucideTimerReset,
  ToggleLeft as LucideToggleLeft,
  ToggleRight as LucideToggleRight,
  Toilet as LucideToilet,
  Tornado as LucideTornado,
  Torus as LucideTorus,
  Touchpad as LucideTouchpad,
  TouchpadOff as LucideTouchpadOff,
  TowerControl as LucideTowerControl,
  ToyBrick as LucideToyBrick,
  Tractor as LucideTractor,
  TrafficCone as LucideTrafficCone,
  TramFront as LucideTrain,
  TrainFront as LucideTrainFront,
  TrainFrontTunnel as LucideTrainFrontTunnel,
  TrainTrack as LucideTrainTrack,
  TramFront as LucideTramFront,
  Transgender as LucideTransgender,
  Trash as LucideTrash,
  Trash2 as LucideTrash2,
  TreeDeciduous as LucideTreeDeciduous,
  TreePalm as LucideTreePalm,
  TreePine as LucideTreePine,
  Trees as LucideTrees,
  Trello as LucideTrello,
  TrendingDown as LucideTrendingDown,
  TrendingUp as LucideTrendingUp,
  TrendingUpDown as LucideTrendingUpDown,
  Triangle as LucideTriangle,
  TriangleAlert as LucideTriangleAlert,
  TriangleDashed as LucideTriangleDashed,
  TriangleRight as LucideTriangleRight,
  Trophy as LucideTrophy,
  Truck as LucideTruck,
  TruckElectric as LucideTruckElectric,
  Turtle as LucideTurtle,
  Tv as LucideTv,
  TvMinimal as LucideTv2,
  TvMinimal as LucideTvMinimal,
  TvMinimalPlay as LucideTvMinimalPlay,
  Twitch as LucideTwitch,
  Twitter as LucideTwitter,
  Type as LucideType,
  TypeOutline as LucideTypeOutline,
  Umbrella as LucideUmbrella,
  UmbrellaOff as LucideUmbrellaOff,
  Underline as LucideUnderline,
  Undo as LucideUndo,
  Undo2 as LucideUndo2,
  UndoDot as LucideUndoDot,
  UnfoldHorizontal as LucideUnfoldHorizontal,
  UnfoldVertical as LucideUnfoldVertical,
  Ungroup as LucideUngroup,
  University as LucideUniversity,
  Unlink as LucideUnlink,
  Unlink2 as LucideUnlink2,
  LockOpen as LucideUnlock,
  LockKeyholeOpen as LucideUnlockKeyhole,
  Unplug as LucideUnplug,
  Upload as LucideUpload,
  CloudUpload as LucideUploadCloud,
  Usb as LucideUsb,
  User as LucideUser,
  UserRound as LucideUser2,
  UserCheck as LucideUserCheck,
  UserRoundCheck as LucideUserCheck2,
  CircleUser as LucideUserCircle,
  CircleUserRound as LucideUserCircle2,
  UserCog as LucideUserCog,
  UserRoundCog as LucideUserCog2,
  UserLock as LucideUserLock,
  UserMinus as LucideUserMinus,
  UserRoundMinus as LucideUserMinus2,
  UserPen as LucideUserPen,
  UserPlus as LucideUserPlus,
  UserRoundPlus as LucideUserPlus2,
  UserRound as LucideUserRound,
  UserRoundCheck as LucideUserRoundCheck,
  UserRoundCog as LucideUserRoundCog,
  UserRoundMinus as LucideUserRoundMinus,
  UserRoundPen as LucideUserRoundPen,
  UserRoundPlus as LucideUserRoundPlus,
  UserRoundSearch as LucideUserRoundSearch,
  UserRoundX as LucideUserRoundX,
  UserSearch as LucideUserSearch,
  SquareUser as LucideUserSquare,
  SquareUserRound as LucideUserSquare2,
  UserX as LucideUserX,
  UserRoundX as LucideUserX2,
  Users as LucideUsers,
  UsersRound as LucideUsers2,
  UsersRound as LucideUsersRound,
  Utensils as LucideUtensils,
  UtensilsCrossed as LucideUtensilsCrossed,
  UtilityPole as LucideUtilityPole,
  Variable as LucideVariable,
  Vault as LucideVault,
  Vegan as LucideVegan,
  VenetianMask as LucideVenetianMask,
  Venus as LucideVenus,
  VenusAndMars as LucideVenusAndMars,
  BadgeCheck as LucideVerified,
  Vibrate as LucideVibrate,
  VibrateOff as LucideVibrateOff,
  Video as LucideVideo,
  VideoOff as LucideVideoOff,
  Videotape as LucideVideotape,
  View as LucideView,
  Voicemail as LucideVoicemail,
  Volleyball as LucideVolleyball,
  Volume as LucideVolume,
  Volume1 as LucideVolume1,
  Volume2 as LucideVolume2,
  VolumeOff as LucideVolumeOff,
  VolumeX as LucideVolumeX,
  Vote as LucideVote,
  Wallet as LucideWallet,
  WalletMinimal as LucideWallet2,
  WalletCards as LucideWalletCards,
  WalletMinimal as LucideWalletMinimal,
  Wallpaper as LucideWallpaper,
  Wand as LucideWand,
  WandSparkles as LucideWand2,
  WandSparkles as LucideWandSparkles,
  Warehouse as LucideWarehouse,
  WashingMachine as LucideWashingMachine,
  Watch as LucideWatch,
  Waves as LucideWaves,
  WavesLadder as LucideWavesLadder,
  Waypoints as LucideWaypoints,
  Webcam as LucideWebcam,
  Webhook as LucideWebhook,
  WebhookOff as LucideWebhookOff,
  Weight as LucideWeight,
  Wheat as LucideWheat,
  WheatOff as LucideWheatOff,
  WholeWord as LucideWholeWord,
  Wifi as LucideWifi,
  WifiCog as LucideWifiCog,
  WifiHigh as LucideWifiHigh,
  WifiLow as LucideWifiLow,
  WifiOff as LucideWifiOff,
  WifiPen as LucideWifiPen,
  WifiZero as LucideWifiZero,
  Wind as LucideWind,
  WindArrowDown as LucideWindArrowDown,
  Wine as LucideWine,
  WineOff as LucideWineOff,
  Workflow as LucideWorkflow,
  Worm as LucideWorm,
  WrapText as LucideWrapText,
  Wrench as LucideWrench,
  X as LucideX,
  CircleX as LucideXCircle,
  OctagonX as LucideXOctagon,
  SquareX as LucideXSquare,
  Youtube as LucideYoutube,
  Zap as LucideZap,
  ZapOff as LucideZapOff,
  ZoomIn as LucideZoomIn,
  ZoomOut as LucideZoomOut,
  Luggage,
  Luggage as LuggageIcon,
  SquareM as MSquare,
  SquareM as MSquareIcon,
  Magnet,
  Magnet as MagnetIcon,
  Mail,
  MailCheck,
  MailCheck as MailCheckIcon,
  Mail as MailIcon,
  MailMinus,
  MailMinus as MailMinusIcon,
  MailOpen,
  MailOpen as MailOpenIcon,
  MailPlus,
  MailPlus as MailPlusIcon,
  MailQuestionMark as MailQuestion,
  MailQuestionMark as MailQuestionIcon,
  MailQuestionMark,
  MailQuestionMark as MailQuestionMarkIcon,
  MailSearch,
  MailSearch as MailSearchIcon,
  MailWarning,
  MailWarning as MailWarningIcon,
  MailX,
  MailX as MailXIcon,
  Mailbox,
  Mailbox as MailboxIcon,
  Mails,
  Mails as MailsIcon,
  Map,
  Map as MapIcon,
  MapPin,
  MapPinCheck,
  MapPinCheck as MapPinCheckIcon,
  MapPinCheckInside,
  MapPinCheckInside as MapPinCheckInsideIcon,
  MapPinHouse,
  MapPinHouse as MapPinHouseIcon,
  MapPin as MapPinIcon,
  MapPinMinus,
  MapPinMinus as MapPinMinusIcon,
  MapPinMinusInside,
  MapPinMinusInside as MapPinMinusInsideIcon,
  MapPinOff,
  MapPinOff as MapPinOffIcon,
  MapPinPlus,
  MapPinPlus as MapPinPlusIcon,
  MapPinPlusInside,
  MapPinPlusInside as MapPinPlusInsideIcon,
  MapPinX,
  MapPinX as MapPinXIcon,
  MapPinXInside,
  MapPinXInside as MapPinXInsideIcon,
  MapPinned,
  MapPinned as MapPinnedIcon,
  MapPlus,
  MapPlus as MapPlusIcon,
  Mars,
  Mars as MarsIcon,
  MarsStroke,
  MarsStroke as MarsStrokeIcon,
  Martini,
  Martini as MartiniIcon,
  Maximize,
  Maximize2,
  Maximize2 as Maximize2Icon,
  Maximize as MaximizeIcon,
  Medal,
  Medal as MedalIcon,
  Megaphone,
  Megaphone as MegaphoneIcon,
  MegaphoneOff,
  MegaphoneOff as MegaphoneOffIcon,
  Meh,
  Meh as MehIcon,
  MemoryStick,
  MemoryStick as MemoryStickIcon,
  Menu,
  Menu as MenuIcon,
  SquareMenu as MenuSquare,
  SquareMenu as MenuSquareIcon,
  Merge,
  Merge as MergeIcon,
  MessageCircle,
  MessageCircleCode,
  MessageCircleCode as MessageCircleCodeIcon,
  MessageCircleDashed,
  MessageCircleDashed as MessageCircleDashedIcon,
  MessageCircleHeart,
  MessageCircleHeart as MessageCircleHeartIcon,
  MessageCircle as MessageCircleIcon,
  MessageCircleMore,
  MessageCircleMore as MessageCircleMoreIcon,
  MessageCircleOff,
  MessageCircleOff as MessageCircleOffIcon,
  MessageCirclePlus,
  MessageCirclePlus as MessageCirclePlusIcon,
  MessageCircleQuestionMark as MessageCircleQuestion,
  MessageCircleQuestionMark as MessageCircleQuestionIcon,
  MessageCircleQuestionMark,
  MessageCircleQuestionMark as MessageCircleQuestionMarkIcon,
  MessageCircleReply,
  MessageCircleReply as MessageCircleReplyIcon,
  MessageCircleWarning,
  MessageCircleWarning as MessageCircleWarningIcon,
  MessageCircleX,
  MessageCircleX as MessageCircleXIcon,
  MessageSquare,
  MessageSquareCode,
  MessageSquareCode as MessageSquareCodeIcon,
  MessageSquareDashed,
  MessageSquareDashed as MessageSquareDashedIcon,
  MessageSquareDiff,
  MessageSquareDiff as MessageSquareDiffIcon,
  MessageSquareDot,
  MessageSquareDot as MessageSquareDotIcon,
  MessageSquareHeart,
  MessageSquareHeart as MessageSquareHeartIcon,
  MessageSquare as MessageSquareIcon,
  MessageSquareLock,
  MessageSquareLock as MessageSquareLockIcon,
  MessageSquareMore,
  MessageSquareMore as MessageSquareMoreIcon,
  MessageSquareOff,
  MessageSquareOff as MessageSquareOffIcon,
  MessageSquarePlus,
  MessageSquarePlus as MessageSquarePlusIcon,
  MessageSquareQuote,
  MessageSquareQuote as MessageSquareQuoteIcon,
  MessageSquareReply,
  MessageSquareReply as MessageSquareReplyIcon,
  MessageSquareShare,
  MessageSquareShare as MessageSquareShareIcon,
  MessageSquareText,
  MessageSquareText as MessageSquareTextIcon,
  MessageSquareWarning,
  MessageSquareWarning as MessageSquareWarningIcon,
  MessageSquareX,
  MessageSquareX as MessageSquareXIcon,
  MessagesSquare,
  MessagesSquare as MessagesSquareIcon,
  Mic,
  MicVocal as Mic2,
  MicVocal as Mic2Icon,
  Mic as MicIcon,
  MicOff,
  MicOff as MicOffIcon,
  MicVocal,
  MicVocal as MicVocalIcon,
  Microchip,
  Microchip as MicrochipIcon,
  Microscope,
  Microscope as MicroscopeIcon,
  Microwave,
  Microwave as MicrowaveIcon,
  Milestone,
  Milestone as MilestoneIcon,
  Milk,
  Milk as MilkIcon,
  MilkOff,
  MilkOff as MilkOffIcon,
  Minimize,
  Minimize2,
  Minimize2 as Minimize2Icon,
  Minimize as MinimizeIcon,
  Minus,
  CircleMinus as MinusCircle,
  CircleMinus as MinusCircleIcon,
  Minus as MinusIcon,
  SquareMinus as MinusSquare,
  SquareMinus as MinusSquareIcon,
  Monitor,
  MonitorCheck,
  MonitorCheck as MonitorCheckIcon,
  MonitorCog,
  MonitorCog as MonitorCogIcon,
  MonitorDot,
  MonitorDot as MonitorDotIcon,
  MonitorDown,
  MonitorDown as MonitorDownIcon,
  Monitor as MonitorIcon,
  MonitorOff,
  MonitorOff as MonitorOffIcon,
  MonitorPause,
  MonitorPause as MonitorPauseIcon,
  MonitorPlay,
  MonitorPlay as MonitorPlayIcon,
  MonitorSmartphone,
  MonitorSmartphone as MonitorSmartphoneIcon,
  MonitorSpeaker,
  MonitorSpeaker as MonitorSpeakerIcon,
  MonitorStop,
  MonitorStop as MonitorStopIcon,
  MonitorUp,
  MonitorUp as MonitorUpIcon,
  MonitorX,
  MonitorX as MonitorXIcon,
  Moon,
  Moon as MoonIcon,
  MoonStar,
  MoonStar as MoonStarIcon,
  Ellipsis as MoreHorizontal,
  Ellipsis as MoreHorizontalIcon,
  EllipsisVertical as MoreVertical,
  EllipsisVertical as MoreVerticalIcon,
  Mountain,
  Mountain as MountainIcon,
  MountainSnow,
  MountainSnow as MountainSnowIcon,
  Mouse,
  Mouse as MouseIcon,
  MouseOff,
  MouseOff as MouseOffIcon,
  MousePointer,
  MousePointer2,
  MousePointer2 as MousePointer2Icon,
  MousePointerBan,
  MousePointerBan as MousePointerBanIcon,
  MousePointerClick,
  MousePointerClick as MousePointerClickIcon,
  MousePointer as MousePointerIcon,
  SquareDashedMousePointer as MousePointerSquareDashed,
  SquareDashedMousePointer as MousePointerSquareDashedIcon,
  Move,
  Move3d as Move3D,
  Move3d as Move3DIcon,
  Move3d,
  Move3d as Move3dIcon,
  MoveDiagonal,
  MoveDiagonal2,
  MoveDiagonal2 as MoveDiagonal2Icon,
  MoveDiagonal as MoveDiagonalIcon,
  MoveDown,
  MoveDown as MoveDownIcon,
  MoveDownLeft,
  MoveDownLeft as MoveDownLeftIcon,
  MoveDownRight,
  MoveDownRight as MoveDownRightIcon,
  MoveHorizontal,
  MoveHorizontal as MoveHorizontalIcon,
  Move as MoveIcon,
  MoveLeft,
  MoveLeft as MoveLeftIcon,
  MoveRight,
  MoveRight as MoveRightIcon,
  MoveUp,
  MoveUp as MoveUpIcon,
  MoveUpLeft,
  MoveUpLeft as MoveUpLeftIcon,
  MoveUpRight,
  MoveUpRight as MoveUpRightIcon,
  MoveVertical,
  MoveVertical as MoveVerticalIcon,
  Music,
  Music2,
  Music2 as Music2Icon,
  Music3,
  Music3 as Music3Icon,
  Music4,
  Music4 as Music4Icon,
  Music as MusicIcon,
  Navigation,
  Navigation2,
  Navigation2 as Navigation2Icon,
  Navigation2Off,
  Navigation2Off as Navigation2OffIcon,
  Navigation as NavigationIcon,
  NavigationOff,
  NavigationOff as NavigationOffIcon,
  Network,
  Network as NetworkIcon,
  Newspaper,
  Newspaper as NewspaperIcon,
  Nfc,
  Nfc as NfcIcon,
  NonBinary,
  NonBinary as NonBinaryIcon,
  Notebook,
  Notebook as NotebookIcon,
  NotebookPen,
  NotebookPen as NotebookPenIcon,
  NotebookTabs,
  NotebookTabs as NotebookTabsIcon,
  NotebookText,
  NotebookText as NotebookTextIcon,
  NotepadText,
  NotepadTextDashed,
  NotepadTextDashed as NotepadTextDashedIcon,
  NotepadText as NotepadTextIcon,
  Nut,
  Nut as NutIcon,
  NutOff,
  NutOff as NutOffIcon,
  Octagon,
  OctagonAlert,
  OctagonAlert as OctagonAlertIcon,
  Octagon as OctagonIcon,
  OctagonMinus,
  OctagonMinus as OctagonMinusIcon,
  OctagonPause,
  OctagonPause as OctagonPauseIcon,
  OctagonX,
  OctagonX as OctagonXIcon,
  Omega,
  Omega as OmegaIcon,
  Option,
  Option as OptionIcon,
  Orbit,
  Orbit as OrbitIcon,
  Origami,
  Origami as OrigamiIcon,
  IndentDecrease as Outdent,
  IndentDecrease as OutdentIcon,
  Package,
  Package2,
  Package2 as Package2Icon,
  PackageCheck,
  PackageCheck as PackageCheckIcon,
  Package as PackageIcon,
  PackageMinus,
  PackageMinus as PackageMinusIcon,
  PackageOpen,
  PackageOpen as PackageOpenIcon,
  PackagePlus,
  PackagePlus as PackagePlusIcon,
  PackageSearch,
  PackageSearch as PackageSearchIcon,
  PackageX,
  PackageX as PackageXIcon,
  PaintBucket,
  PaintBucket as PaintBucketIcon,
  PaintRoller,
  PaintRoller as PaintRollerIcon,
  Paintbrush,
  PaintbrushVertical as Paintbrush2,
  PaintbrushVertical as Paintbrush2Icon,
  Paintbrush as PaintbrushIcon,
  PaintbrushVertical,
  PaintbrushVertical as PaintbrushVerticalIcon,
  Palette,
  Palette as PaletteIcon,
  TreePalm as Palmtree,
  TreePalm as PalmtreeIcon,
  Panda,
  Panda as PandaIcon,
  PanelBottom,
  PanelBottomClose,
  PanelBottomClose as PanelBottomCloseIcon,
  PanelBottomDashed,
  PanelBottomDashed as PanelBottomDashedIcon,
  PanelBottom as PanelBottomIcon,
  PanelBottomDashed as PanelBottomInactive,
  PanelBottomDashed as PanelBottomInactiveIcon,
  PanelBottomOpen,
  PanelBottomOpen as PanelBottomOpenIcon,
  PanelLeft,
  PanelLeftClose,
  PanelLeftClose as PanelLeftCloseIcon,
  PanelLeftDashed,
  PanelLeftDashed as PanelLeftDashedIcon,
  PanelLeft as PanelLeftIcon,
  PanelLeftDashed as PanelLeftInactive,
  PanelLeftDashed as PanelLeftInactiveIcon,
  PanelLeftOpen,
  PanelLeftOpen as PanelLeftOpenIcon,
  PanelRight,
  PanelRightClose,
  PanelRightClose as PanelRightCloseIcon,
  PanelRightDashed,
  PanelRightDashed as PanelRightDashedIcon,
  PanelRight as PanelRightIcon,
  PanelRightDashed as PanelRightInactive,
  PanelRightDashed as PanelRightInactiveIcon,
  PanelRightOpen,
  PanelRightOpen as PanelRightOpenIcon,
  PanelTop,
  PanelTopClose,
  PanelTopClose as PanelTopCloseIcon,
  PanelTopDashed,
  PanelTopDashed as PanelTopDashedIcon,
  PanelTop as PanelTopIcon,
  PanelTopDashed as PanelTopInactive,
  PanelTopDashed as PanelTopInactiveIcon,
  PanelTopOpen,
  PanelTopOpen as PanelTopOpenIcon,
  PanelsLeftBottom,
  PanelsLeftBottom as PanelsLeftBottomIcon,
  Columns3 as PanelsLeftRight,
  Columns3 as PanelsLeftRightIcon,
  PanelsRightBottom,
  PanelsRightBottom as PanelsRightBottomIcon,
  Rows3 as PanelsTopBottom,
  Rows3 as PanelsTopBottomIcon,
  PanelsTopLeft,
  PanelsTopLeft as PanelsTopLeftIcon,
  Paperclip,
  Paperclip as PaperclipIcon,
  Parentheses,
  Parentheses as ParenthesesIcon,
  CircleParking as ParkingCircle,
  CircleParking as ParkingCircleIcon,
  CircleParkingOff as ParkingCircleOff,
  CircleParkingOff as ParkingCircleOffIcon,
  ParkingMeter,
  ParkingMeter as ParkingMeterIcon,
  SquareParking as ParkingSquare,
  SquareParking as ParkingSquareIcon,
  SquareParkingOff as ParkingSquareOff,
  SquareParkingOff as ParkingSquareOffIcon,
  PartyPopper,
  PartyPopper as PartyPopperIcon,
  Pause,
  CirclePause as PauseCircle,
  CirclePause as PauseCircleIcon,
  Pause as PauseIcon,
  OctagonPause as PauseOctagon,
  OctagonPause as PauseOctagonIcon,
  PawPrint,
  PawPrint as PawPrintIcon,
  PcCase,
  PcCase as PcCaseIcon,
  Pen,
  SquarePen as PenBox,
  SquarePen as PenBoxIcon,
  Pen as PenIcon,
  PenLine,
  PenLine as PenLineIcon,
  PenOff,
  PenOff as PenOffIcon,
  SquarePen as PenSquare,
  SquarePen as PenSquareIcon,
  PenTool,
  PenTool as PenToolIcon,
  Pencil,
  Pencil as PencilIcon,
  PencilLine,
  PencilLine as PencilLineIcon,
  PencilOff,
  PencilOff as PencilOffIcon,
  PencilRuler,
  PencilRuler as PencilRulerIcon,
  Pentagon,
  Pentagon as PentagonIcon,
  Percent,
  CirclePercent as PercentCircle,
  CirclePercent as PercentCircleIcon,
  DiamondPercent as PercentDiamond,
  DiamondPercent as PercentDiamondIcon,
  Percent as PercentIcon,
  SquarePercent as PercentSquare,
  SquarePercent as PercentSquareIcon,
  PersonStanding,
  PersonStanding as PersonStandingIcon,
  PhilippinePeso,
  PhilippinePeso as PhilippinePesoIcon,
  Phone,
  PhoneCall,
  PhoneCall as PhoneCallIcon,
  PhoneForwarded,
  PhoneForwarded as PhoneForwardedIcon,
  Phone as PhoneIcon,
  PhoneIncoming,
  PhoneIncoming as PhoneIncomingIcon,
  PhoneMissed,
  PhoneMissed as PhoneMissedIcon,
  PhoneOff,
  PhoneOff as PhoneOffIcon,
  PhoneOutgoing,
  PhoneOutgoing as PhoneOutgoingIcon,
  Pi,
  Pi as PiIcon,
  SquarePi as PiSquare,
  SquarePi as PiSquareIcon,
  Piano,
  Piano as PianoIcon,
  Pickaxe,
  Pickaxe as PickaxeIcon,
  PictureInPicture,
  PictureInPicture2,
  PictureInPicture2 as PictureInPicture2Icon,
  PictureInPicture as PictureInPictureIcon,
  ChartPie as PieChart,
  ChartPie as PieChartIcon,
  PiggyBank,
  PiggyBank as PiggyBankIcon,
  Pilcrow,
  Pilcrow as PilcrowIcon,
  PilcrowLeft,
  PilcrowLeft as PilcrowLeftIcon,
  PilcrowRight,
  PilcrowRight as PilcrowRightIcon,
  SquarePilcrow as PilcrowSquare,
  SquarePilcrow as PilcrowSquareIcon,
  Pill,
  PillBottle,
  PillBottle as PillBottleIcon,
  Pill as PillIcon,
  Pin,
  Pin as PinIcon,
  PinOff,
  PinOff as PinOffIcon,
  Pipette,
  Pipette as PipetteIcon,
  Pizza,
  Pizza as PizzaIcon,
  Plane,
  Plane as PlaneIcon,
  PlaneLanding,
  PlaneLanding as PlaneLandingIcon,
  PlaneTakeoff,
  PlaneTakeoff as PlaneTakeoffIcon,
  Play,
  CirclePlay as PlayCircle,
  CirclePlay as PlayCircleIcon,
  Play as PlayIcon,
  SquarePlay as PlaySquare,
  SquarePlay as PlaySquareIcon,
  Plug,
  Plug2,
  Plug2 as Plug2Icon,
  Plug as PlugIcon,
  PlugZap,
  PlugZap as PlugZap2,
  PlugZap as PlugZap2Icon,
  PlugZap as PlugZapIcon,
  Plus,
  CirclePlus as PlusCircle,
  CirclePlus as PlusCircleIcon,
  Plus as PlusIcon,
  SquarePlus as PlusSquare,
  SquarePlus as PlusSquareIcon,
  Pocket,
  Pocket as PocketIcon,
  PocketKnife,
  PocketKnife as PocketKnifeIcon,
  Podcast,
  Podcast as PodcastIcon,
  Pointer,
  Pointer as PointerIcon,
  PointerOff,
  PointerOff as PointerOffIcon,
  Popcorn,
  Popcorn as PopcornIcon,
  Popsicle,
  Popsicle as PopsicleIcon,
  PoundSterling,
  PoundSterling as PoundSterlingIcon,
  Power,
  CirclePower as PowerCircle,
  CirclePower as PowerCircleIcon,
  Power as PowerIcon,
  PowerOff,
  PowerOff as PowerOffIcon,
  SquarePower as PowerSquare,
  SquarePower as PowerSquareIcon,
  Presentation,
  Presentation as PresentationIcon,
  Printer,
  PrinterCheck,
  PrinterCheck as PrinterCheckIcon,
  Printer as PrinterIcon,
  Projector,
  Projector as ProjectorIcon,
  Proportions,
  Proportions as ProportionsIcon,
  Puzzle,
  Puzzle as PuzzleIcon,
  Pyramid,
  Pyramid as PyramidIcon,
  QrCode,
  QrCode as QrCodeIcon,
  Quote,
  Quote as QuoteIcon,
  Rabbit,
  Rabbit as RabbitIcon,
  Radar,
  Radar as RadarIcon,
  Radiation,
  Radiation as RadiationIcon,
  Radical,
  Radical as RadicalIcon,
  Radio,
  Radio as RadioIcon,
  RadioReceiver,
  RadioReceiver as RadioReceiverIcon,
  RadioTower,
  RadioTower as RadioTowerIcon,
  Radius,
  Radius as RadiusIcon,
  RailSymbol,
  RailSymbol as RailSymbolIcon,
  Rainbow,
  Rainbow as RainbowIcon,
  Rat,
  Rat as RatIcon,
  Ratio,
  Ratio as RatioIcon,
  Receipt,
  ReceiptCent,
  ReceiptCent as ReceiptCentIcon,
  ReceiptEuro,
  ReceiptEuro as ReceiptEuroIcon,
  Receipt as ReceiptIcon,
  ReceiptIndianRupee,
  ReceiptIndianRupee as ReceiptIndianRupeeIcon,
  ReceiptJapaneseYen,
  ReceiptJapaneseYen as ReceiptJapaneseYenIcon,
  ReceiptPoundSterling,
  ReceiptPoundSterling as ReceiptPoundSterlingIcon,
  ReceiptRussianRuble,
  ReceiptRussianRuble as ReceiptRussianRubleIcon,
  ReceiptSwissFranc,
  ReceiptSwissFranc as ReceiptSwissFrancIcon,
  ReceiptText,
  ReceiptText as ReceiptTextIcon,
  RectangleCircle,
  RectangleCircle as RectangleCircleIcon,
  RectangleEllipsis,
  RectangleEllipsis as RectangleEllipsisIcon,
  RectangleGoggles,
  RectangleGoggles as RectangleGogglesIcon,
  RectangleHorizontal,
  RectangleHorizontal as RectangleHorizontalIcon,
  RectangleVertical,
  RectangleVertical as RectangleVerticalIcon,
  Recycle,
  Recycle as RecycleIcon,
  Redo,
  Redo2,
  Redo2 as Redo2Icon,
  RedoDot,
  RedoDot as RedoDotIcon,
  Redo as RedoIcon,
  RefreshCcw,
  RefreshCcwDot,
  RefreshCcwDot as RefreshCcwDotIcon,
  RefreshCcw as RefreshCcwIcon,
  RefreshCw,
  RefreshCw as RefreshCwIcon,
  RefreshCwOff,
  RefreshCwOff as RefreshCwOffIcon,
  Refrigerator,
  Refrigerator as RefrigeratorIcon,
  Regex,
  Regex as RegexIcon,
  RemoveFormatting,
  RemoveFormatting as RemoveFormattingIcon,
  Repeat,
  Repeat1,
  Repeat1 as Repeat1Icon,
  Repeat2,
  Repeat2 as Repeat2Icon,
  Repeat as RepeatIcon,
  Replace,
  ReplaceAll,
  ReplaceAll as ReplaceAllIcon,
  Replace as ReplaceIcon,
  Reply,
  ReplyAll,
  ReplyAll as ReplyAllIcon,
  Reply as ReplyIcon,
  Rewind,
  Rewind as RewindIcon,
  Ribbon,
  Ribbon as RibbonIcon,
  Rocket,
  Rocket as RocketIcon,
  RockingChair,
  RockingChair as RockingChairIcon,
  RollerCoaster,
  RollerCoaster as RollerCoasterIcon,
  Rotate3d as Rotate3D,
  Rotate3d as Rotate3DIcon,
  Rotate3d,
  Rotate3d as Rotate3dIcon,
  RotateCcw,
  RotateCcw as RotateCcwIcon,
  RotateCcwKey,
  RotateCcwKey as RotateCcwKeyIcon,
  RotateCcwSquare,
  RotateCcwSquare as RotateCcwSquareIcon,
  RotateCw,
  RotateCw as RotateCwIcon,
  RotateCwSquare,
  RotateCwSquare as RotateCwSquareIcon,
  Route,
  Route as RouteIcon,
  RouteOff,
  RouteOff as RouteOffIcon,
  Router,
  Router as RouterIcon,
  Rows2 as Rows,
  Rows2,
  Rows2 as Rows2Icon,
  Rows3,
  Rows3 as Rows3Icon,
  Rows4,
  Rows4 as Rows4Icon,
  Rows2 as RowsIcon,
  Rss,
  Rss as RssIcon,
  Ruler,
  RulerDimensionLine,
  RulerDimensionLine as RulerDimensionLineIcon,
  Ruler as RulerIcon,
  RussianRuble,
  RussianRuble as RussianRubleIcon,
  Sailboat,
  Sailboat as SailboatIcon,
  Salad,
  Salad as SaladIcon,
  Sandwich,
  Sandwich as SandwichIcon,
  Satellite,
  SatelliteDish,
  SatelliteDish as SatelliteDishIcon,
  Satellite as SatelliteIcon,
  SaudiRiyal,
  SaudiRiyal as SaudiRiyalIcon,
  Save,
  SaveAll,
  SaveAll as SaveAllIcon,
  Save as SaveIcon,
  SaveOff,
  SaveOff as SaveOffIcon,
  Scale,
  Scale3d as Scale3D,
  Scale3d as Scale3DIcon,
  Scale3d,
  Scale3d as Scale3dIcon,
  Scale as ScaleIcon,
  Scaling,
  Scaling as ScalingIcon,
  Scan,
  ScanBarcode,
  ScanBarcode as ScanBarcodeIcon,
  ScanEye,
  ScanEye as ScanEyeIcon,
  ScanFace,
  ScanFace as ScanFaceIcon,
  ScanHeart,
  ScanHeart as ScanHeartIcon,
  Scan as ScanIcon,
  ScanLine,
  ScanLine as ScanLineIcon,
  ScanQrCode,
  ScanQrCode as ScanQrCodeIcon,
  ScanSearch,
  ScanSearch as ScanSearchIcon,
  ScanText,
  ScanText as ScanTextIcon,
  ChartScatter as ScatterChart,
  ChartScatter as ScatterChartIcon,
  School,
  University as School2,
  University as School2Icon,
  School as SchoolIcon,
  Scissors,
  Scissors as ScissorsIcon,
  ScissorsLineDashed,
  ScissorsLineDashed as ScissorsLineDashedIcon,
  SquareScissors as ScissorsSquare,
  SquareBottomDashedScissors as ScissorsSquareDashedBottom,
  SquareBottomDashedScissors as ScissorsSquareDashedBottomIcon,
  SquareScissors as ScissorsSquareIcon,
  ScreenShare,
  ScreenShare as ScreenShareIcon,
  ScreenShareOff,
  ScreenShareOff as ScreenShareOffIcon,
  Scroll,
  Scroll as ScrollIcon,
  ScrollText,
  ScrollText as ScrollTextIcon,
  Search,
  SearchCheck,
  SearchCheck as SearchCheckIcon,
  SearchCode,
  SearchCode as SearchCodeIcon,
  Search as SearchIcon,
  SearchSlash,
  SearchSlash as SearchSlashIcon,
  SearchX,
  SearchX as SearchXIcon,
  Section,
  Section as SectionIcon,
  Send,
  SendHorizontal as SendHorizonal,
  SendHorizontal as SendHorizonalIcon,
  SendHorizontal,
  SendHorizontal as SendHorizontalIcon,
  Send as SendIcon,
  SendToBack,
  SendToBack as SendToBackIcon,
  SeparatorHorizontal,
  SeparatorHorizontal as SeparatorHorizontalIcon,
  SeparatorVertical,
  SeparatorVertical as SeparatorVerticalIcon,
  Server,
  ServerCog,
  ServerCog as ServerCogIcon,
  ServerCrash,
  ServerCrash as ServerCrashIcon,
  Server as ServerIcon,
  ServerOff,
  ServerOff as ServerOffIcon,
  Settings,
  Settings2,
  Settings2 as Settings2Icon,
  Settings as SettingsIcon,
  Shapes,
  Shapes as ShapesIcon,
  Share,
  Share2,
  Share2 as Share2Icon,
  Share as ShareIcon,
  Sheet,
  Sheet as SheetIcon,
  Shell,
  Shell as ShellIcon,
  Shield,
  ShieldAlert,
  ShieldAlert as ShieldAlertIcon,
  ShieldBan,
  ShieldBan as ShieldBanIcon,
  ShieldCheck,
  ShieldCheck as ShieldCheckIcon,
  ShieldX as ShieldClose,
  ShieldX as ShieldCloseIcon,
  ShieldEllipsis,
  ShieldEllipsis as ShieldEllipsisIcon,
  ShieldHalf,
  ShieldHalf as ShieldHalfIcon,
  Shield as ShieldIcon,
  ShieldMinus,
  ShieldMinus as ShieldMinusIcon,
  ShieldOff,
  ShieldOff as ShieldOffIcon,
  ShieldPlus,
  ShieldPlus as ShieldPlusIcon,
  ShieldQuestionMark as ShieldQuestion,
  ShieldQuestionMark as ShieldQuestionIcon,
  ShieldQuestionMark,
  ShieldQuestionMark as ShieldQuestionMarkIcon,
  ShieldUser,
  ShieldUser as ShieldUserIcon,
  ShieldX,
  ShieldX as ShieldXIcon,
  Ship,
  Ship as ShipIcon,
  ShipWheel,
  ShipWheel as ShipWheelIcon,
  Shirt,
  Shirt as ShirtIcon,
  ShoppingBag,
  ShoppingBag as ShoppingBagIcon,
  ShoppingBasket,
  ShoppingBasket as ShoppingBasketIcon,
  ShoppingCart,
  ShoppingCart as ShoppingCartIcon,
  Shovel,
  Shovel as ShovelIcon,
  ShowerHead,
  ShowerHead as ShowerHeadIcon,
  Shredder,
  Shredder as ShredderIcon,
  Shrimp,
  Shrimp as ShrimpIcon,
  Shrink,
  Shrink as ShrinkIcon,
  Shrub,
  Shrub as ShrubIcon,
  Shuffle,
  Shuffle as ShuffleIcon,
  PanelLeft as Sidebar,
  PanelLeftClose as SidebarClose,
  PanelLeftClose as SidebarCloseIcon,
  PanelLeft as SidebarIcon,
  PanelLeftOpen as SidebarOpen,
  PanelLeftOpen as SidebarOpenIcon,
  Sigma,
  Sigma as SigmaIcon,
  SquareSigma as SigmaSquare,
  SquareSigma as SigmaSquareIcon,
  Signal,
  SignalHigh,
  SignalHigh as SignalHighIcon,
  Signal as SignalIcon,
  SignalLow,
  SignalLow as SignalLowIcon,
  SignalMedium,
  SignalMedium as SignalMediumIcon,
  SignalZero,
  SignalZero as SignalZeroIcon,
  Signature,
  Signature as SignatureIcon,
  Signpost,
  SignpostBig,
  SignpostBig as SignpostBigIcon,
  Signpost as SignpostIcon,
  Siren,
  Siren as SirenIcon,
  SkipBack,
  SkipBack as SkipBackIcon,
  SkipForward,
  SkipForward as SkipForwardIcon,
  Skull,
  Skull as SkullIcon,
  Slack,
  Slack as SlackIcon,
  Slash,
  Slash as SlashIcon,
  SquareSlash as SlashSquare,
  SquareSlash as SlashSquareIcon,
  Slice,
  Slice as SliceIcon,
  SlidersVertical as Sliders,
  SlidersHorizontal,
  SlidersHorizontal as SlidersHorizontalIcon,
  SlidersVertical as SlidersIcon,
  SlidersVertical,
  SlidersVertical as SlidersVerticalIcon,
  Smartphone,
  SmartphoneCharging,
  SmartphoneCharging as SmartphoneChargingIcon,
  Smartphone as SmartphoneIcon,
  SmartphoneNfc,
  SmartphoneNfc as SmartphoneNfcIcon,
  Smile,
  Smile as SmileIcon,
  SmilePlus,
  SmilePlus as SmilePlusIcon,
  Snail,
  Snail as SnailIcon,
  Snowflake,
  Snowflake as SnowflakeIcon,
  SoapDispenserDroplet,
  SoapDispenserDroplet as SoapDispenserDropletIcon,
  Sofa,
  Sofa as SofaIcon,
  ArrowUpNarrowWide as SortAsc,
  ArrowUpNarrowWide as SortAscIcon,
  ArrowDownWideNarrow as SortDesc,
  ArrowDownWideNarrow as SortDescIcon,
  Soup,
  Soup as SoupIcon,
  Space,
  Space as SpaceIcon,
  Spade,
  Spade as SpadeIcon,
  Sparkle,
  Sparkle as SparkleIcon,
  Sparkles,
  Sparkles as SparklesIcon,
  Speaker,
  Speaker as SpeakerIcon,
  Speech,
  Speech as SpeechIcon,
  SpellCheck,
  SpellCheck2,
  SpellCheck2 as SpellCheck2Icon,
  SpellCheck as SpellCheckIcon,
  Spline,
  Spline as SplineIcon,
  SplinePointer,
  SplinePointer as SplinePointerIcon,
  Split,
  Split as SplitIcon,
  SquareSplitHorizontal as SplitSquareHorizontal,
  SquareSplitHorizontal as SplitSquareHorizontalIcon,
  SquareSplitVertical as SplitSquareVertical,
  SquareSplitVertical as SplitSquareVerticalIcon,
  Spool,
  Spool as SpoolIcon,
  SprayCan,
  SprayCan as SprayCanIcon,
  Sprout,
  Sprout as SproutIcon,
  Square,
  SquareActivity,
  SquareActivity as SquareActivityIcon,
  SquareArrowDown,
  SquareArrowDown as SquareArrowDownIcon,
  SquareArrowDownLeft,
  SquareArrowDownLeft as SquareArrowDownLeftIcon,
  SquareArrowDownRight,
  SquareArrowDownRight as SquareArrowDownRightIcon,
  SquareArrowLeft,
  SquareArrowLeft as SquareArrowLeftIcon,
  SquareArrowOutDownLeft,
  SquareArrowOutDownLeft as SquareArrowOutDownLeftIcon,
  SquareArrowOutDownRight,
  SquareArrowOutDownRight as SquareArrowOutDownRightIcon,
  SquareArrowOutUpLeft,
  SquareArrowOutUpLeft as SquareArrowOutUpLeftIcon,
  SquareArrowOutUpRight,
  SquareArrowOutUpRight as SquareArrowOutUpRightIcon,
  SquareArrowRight,
  SquareArrowRight as SquareArrowRightIcon,
  SquareArrowUp,
  SquareArrowUp as SquareArrowUpIcon,
  SquareArrowUpLeft,
  SquareArrowUpLeft as SquareArrowUpLeftIcon,
  SquareArrowUpRight,
  SquareArrowUpRight as SquareArrowUpRightIcon,
  SquareAsterisk,
  SquareAsterisk as SquareAsteriskIcon,
  SquareBottomDashedScissors,
  SquareBottomDashedScissors as SquareBottomDashedScissorsIcon,
  SquareChartGantt,
  SquareChartGantt as SquareChartGanttIcon,
  SquareCheck,
  SquareCheckBig,
  SquareCheckBig as SquareCheckBigIcon,
  SquareCheck as SquareCheckIcon,
  SquareChevronDown,
  SquareChevronDown as SquareChevronDownIcon,
  SquareChevronLeft,
  SquareChevronLeft as SquareChevronLeftIcon,
  SquareChevronRight,
  SquareChevronRight as SquareChevronRightIcon,
  SquareChevronUp,
  SquareChevronUp as SquareChevronUpIcon,
  SquareCode,
  SquareCode as SquareCodeIcon,
  SquareDashed,
  SquareDashedBottom,
  SquareDashedBottomCode,
  SquareDashedBottomCode as SquareDashedBottomCodeIcon,
  SquareDashedBottom as SquareDashedBottomIcon,
  SquareDashed as SquareDashedIcon,
  SquareDashedKanban,
  SquareDashedKanban as SquareDashedKanbanIcon,
  SquareDashedMousePointer,
  SquareDashedMousePointer as SquareDashedMousePointerIcon,
  SquareDashedTopSolid,
  SquareDashedTopSolid as SquareDashedTopSolidIcon,
  SquareDivide,
  SquareDivide as SquareDivideIcon,
  SquareDot,
  SquareDot as SquareDotIcon,
  SquareEqual,
  SquareEqual as SquareEqualIcon,
  SquareFunction,
  SquareFunction as SquareFunctionIcon,
  SquareChartGantt as SquareGanttChart,
  SquareChartGantt as SquareGanttChartIcon,
  Square as SquareIcon,
  SquareKanban,
  SquareKanban as SquareKanbanIcon,
  SquareLibrary,
  SquareLibrary as SquareLibraryIcon,
  SquareM,
  SquareM as SquareMIcon,
  SquareMenu,
  SquareMenu as SquareMenuIcon,
  SquareMinus,
  SquareMinus as SquareMinusIcon,
  SquareMousePointer,
  SquareMousePointer as SquareMousePointerIcon,
  SquareParking,
  SquareParking as SquareParkingIcon,
  SquareParkingOff,
  SquareParkingOff as SquareParkingOffIcon,
  SquarePen,
  SquarePen as SquarePenIcon,
  SquarePercent,
  SquarePercent as SquarePercentIcon,
  SquarePi,
  SquarePi as SquarePiIcon,
  SquarePilcrow,
  SquarePilcrow as SquarePilcrowIcon,
  SquarePlay,
  SquarePlay as SquarePlayIcon,
  SquarePlus,
  SquarePlus as SquarePlusIcon,
  SquarePower,
  SquarePower as SquarePowerIcon,
  SquareRadical,
  SquareRadical as SquareRadicalIcon,
  SquareRoundCorner,
  SquareRoundCorner as SquareRoundCornerIcon,
  SquareScissors,
  SquareScissors as SquareScissorsIcon,
  SquareSigma,
  SquareSigma as SquareSigmaIcon,
  SquareSlash,
  SquareSlash as SquareSlashIcon,
  SquareSplitHorizontal,
  SquareSplitHorizontal as SquareSplitHorizontalIcon,
  SquareSplitVertical,
  SquareSplitVertical as SquareSplitVerticalIcon,
  SquareSquare,
  SquareSquare as SquareSquareIcon,
  SquareStack,
  SquareStack as SquareStackIcon,
  SquareTerminal,
  SquareTerminal as SquareTerminalIcon,
  SquareUser,
  SquareUser as SquareUserIcon,
  SquareUserRound,
  SquareUserRound as SquareUserRoundIcon,
  SquareX,
  SquareX as SquareXIcon,
  SquaresExclude,
  SquaresExclude as SquaresExcludeIcon,
  SquaresIntersect,
  SquaresIntersect as SquaresIntersectIcon,
  SquaresSubtract,
  SquaresSubtract as SquaresSubtractIcon,
  SquaresUnite,
  SquaresUnite as SquaresUniteIcon,
  Squircle,
  SquircleDashed,
  SquircleDashed as SquircleDashedIcon,
  Squircle as SquircleIcon,
  Squirrel,
  Squirrel as SquirrelIcon,
  Stamp,
  Stamp as StampIcon,
  Star,
  StarHalf,
  StarHalf as StarHalfIcon,
  Star as StarIcon,
  StarOff,
  StarOff as StarOffIcon,
  Sparkles as Stars,
  Sparkles as StarsIcon,
  StepBack,
  StepBack as StepBackIcon,
  StepForward,
  StepForward as StepForwardIcon,
  Stethoscope,
  Stethoscope as StethoscopeIcon,
  Sticker,
  Sticker as StickerIcon,
  StickyNote,
  StickyNote as StickyNoteIcon,
  CircleStop as StopCircle,
  CircleStop as StopCircleIcon,
  Store,
  Store as StoreIcon,
  StretchHorizontal,
  StretchHorizontal as StretchHorizontalIcon,
  StretchVertical,
  StretchVertical as StretchVerticalIcon,
  Strikethrough,
  Strikethrough as StrikethroughIcon,
  Subscript,
  Subscript as SubscriptIcon,
  Captions as Subtitles,
  Captions as SubtitlesIcon,
  Sun,
  SunDim,
  SunDim as SunDimIcon,
  Sun as SunIcon,
  SunMedium,
  SunMedium as SunMediumIcon,
  SunMoon,
  SunMoon as SunMoonIcon,
  SunSnow,
  SunSnow as SunSnowIcon,
  Sunrise,
  Sunrise as SunriseIcon,
  Sunset,
  Sunset as SunsetIcon,
  Superscript,
  Superscript as SuperscriptIcon,
  SwatchBook,
  SwatchBook as SwatchBookIcon,
  SwissFranc,
  SwissFranc as SwissFrancIcon,
  SwitchCamera,
  SwitchCamera as SwitchCameraIcon,
  Sword,
  Sword as SwordIcon,
  Swords,
  Swords as SwordsIcon,
  Syringe,
  Syringe as SyringeIcon,
  Table,
  Table2,
  Table2 as Table2Icon,
  TableCellsMerge,
  TableCellsMerge as TableCellsMergeIcon,
  TableCellsSplit,
  TableCellsSplit as TableCellsSplitIcon,
  TableColumnsSplit,
  TableColumnsSplit as TableColumnsSplitIcon,
  Columns3Cog as TableConfig,
  Columns3Cog as TableConfigIcon,
  Table as TableIcon,
  TableOfContents,
  TableOfContents as TableOfContentsIcon,
  TableProperties,
  TableProperties as TablePropertiesIcon,
  TableRowsSplit,
  TableRowsSplit as TableRowsSplitIcon,
  Tablet,
  Tablet as TabletIcon,
  TabletSmartphone,
  TabletSmartphone as TabletSmartphoneIcon,
  Tablets,
  Tablets as TabletsIcon,
  Tag,
  Tag as TagIcon,
  Tags,
  Tags as TagsIcon,
  Tally1,
  Tally1 as Tally1Icon,
  Tally2,
  Tally2 as Tally2Icon,
  Tally3,
  Tally3 as Tally3Icon,
  Tally4,
  Tally4 as Tally4Icon,
  Tally5,
  Tally5 as Tally5Icon,
  Tangent,
  Tangent as TangentIcon,
  Target,
  Target as TargetIcon,
  Telescope,
  Telescope as TelescopeIcon,
  Tent,
  Tent as TentIcon,
  TentTree,
  TentTree as TentTreeIcon,
  Terminal,
  Terminal as TerminalIcon,
  SquareTerminal as TerminalSquare,
  SquareTerminal as TerminalSquareIcon,
  TestTube,
  TestTubeDiagonal as TestTube2,
  TestTubeDiagonal as TestTube2Icon,
  TestTubeDiagonal,
  TestTubeDiagonal as TestTubeDiagonalIcon,
  TestTube as TestTubeIcon,
  TestTubes,
  TestTubes as TestTubesIcon,
  Text,
  TextCursor,
  TextCursor as TextCursorIcon,
  TextCursorInput,
  TextCursorInput as TextCursorInputIcon,
  Text as TextIcon,
  TextQuote,
  TextQuote as TextQuoteIcon,
  TextSearch,
  TextSearch as TextSearchIcon,
  TextSelect,
  TextSelect as TextSelectIcon,
  TextSelect as TextSelection,
  TextSelect as TextSelectionIcon,
  Theater,
  Theater as TheaterIcon,
  Thermometer,
  Thermometer as ThermometerIcon,
  ThermometerSnowflake,
  ThermometerSnowflake as ThermometerSnowflakeIcon,
  ThermometerSun,
  ThermometerSun as ThermometerSunIcon,
  ThumbsDown,
  ThumbsDown as ThumbsDownIcon,
  ThumbsUp,
  ThumbsUp as ThumbsUpIcon,
  Ticket,
  TicketCheck,
  TicketCheck as TicketCheckIcon,
  Ticket as TicketIcon,
  TicketMinus,
  TicketMinus as TicketMinusIcon,
  TicketPercent,
  TicketPercent as TicketPercentIcon,
  TicketPlus,
  TicketPlus as TicketPlusIcon,
  TicketSlash,
  TicketSlash as TicketSlashIcon,
  TicketX,
  TicketX as TicketXIcon,
  Tickets,
  Tickets as TicketsIcon,
  TicketsPlane,
  TicketsPlane as TicketsPlaneIcon,
  Timer,
  Timer as TimerIcon,
  TimerOff,
  TimerOff as TimerOffIcon,
  TimerReset,
  TimerReset as TimerResetIcon,
  ToggleLeft,
  ToggleLeft as ToggleLeftIcon,
  ToggleRight,
  ToggleRight as ToggleRightIcon,
  Toilet,
  Toilet as ToiletIcon,
  Tornado,
  Tornado as TornadoIcon,
  Torus,
  Torus as TorusIcon,
  Touchpad,
  Touchpad as TouchpadIcon,
  TouchpadOff,
  TouchpadOff as TouchpadOffIcon,
  TowerControl,
  TowerControl as TowerControlIcon,
  ToyBrick,
  ToyBrick as ToyBrickIcon,
  Tractor,
  Tractor as TractorIcon,
  TrafficCone,
  TrafficCone as TrafficConeIcon,
  TramFront as Train,
  TrainFront,
  TrainFront as TrainFrontIcon,
  TrainFrontTunnel,
  TrainFrontTunnel as TrainFrontTunnelIcon,
  TramFront as TrainIcon,
  TrainTrack,
  TrainTrack as TrainTrackIcon,
  TramFront,
  TramFront as TramFrontIcon,
  Transgender,
  Transgender as TransgenderIcon,
  Trash,
  Trash2,
  Trash2 as Trash2Icon,
  Trash as TrashIcon,
  TreeDeciduous,
  TreeDeciduous as TreeDeciduousIcon,
  TreePalm,
  TreePalm as TreePalmIcon,
  TreePine,
  TreePine as TreePineIcon,
  Trees,
  Trees as TreesIcon,
  Trello,
  Trello as TrelloIcon,
  TrendingDown,
  TrendingDown as TrendingDownIcon,
  TrendingUp,
  TrendingUpDown,
  TrendingUpDown as TrendingUpDownIcon,
  TrendingUp as TrendingUpIcon,
  Triangle,
  TriangleAlert,
  TriangleAlert as TriangleAlertIcon,
  TriangleDashed,
  TriangleDashed as TriangleDashedIcon,
  Triangle as TriangleIcon,
  TriangleRight,
  TriangleRight as TriangleRightIcon,
  Trophy,
  Trophy as TrophyIcon,
  Truck,
  TruckElectric,
  TruckElectric as TruckElectricIcon,
  Truck as TruckIcon,
  Turtle,
  Turtle as TurtleIcon,
  Tv,
  TvMinimal as Tv2,
  TvMinimal as Tv2Icon,
  Tv as TvIcon,
  TvMinimal,
  TvMinimal as TvMinimalIcon,
  TvMinimalPlay,
  TvMinimalPlay as TvMinimalPlayIcon,
  Twitch,
  Twitch as TwitchIcon,
  Twitter,
  Twitter as TwitterIcon,
  Type,
  Type as TypeIcon,
  TypeOutline,
  TypeOutline as TypeOutlineIcon,
  Umbrella,
  Umbrella as UmbrellaIcon,
  UmbrellaOff,
  UmbrellaOff as UmbrellaOffIcon,
  Underline,
  Underline as UnderlineIcon,
  Undo,
  Undo2,
  Undo2 as Undo2Icon,
  UndoDot,
  UndoDot as UndoDotIcon,
  Undo as UndoIcon,
  UnfoldHorizontal,
  UnfoldHorizontal as UnfoldHorizontalIcon,
  UnfoldVertical,
  UnfoldVertical as UnfoldVerticalIcon,
  Ungroup,
  Ungroup as UngroupIcon,
  University,
  University as UniversityIcon,
  Unlink,
  Unlink2,
  Unlink2 as Unlink2Icon,
  Unlink as UnlinkIcon,
  LockOpen as Unlock,
  LockOpen as UnlockIcon,
  LockKeyholeOpen as UnlockKeyhole,
  LockKeyholeOpen as UnlockKeyholeIcon,
  Unplug,
  Unplug as UnplugIcon,
  Upload,
  CloudUpload as UploadCloud,
  CloudUpload as UploadCloudIcon,
  Upload as UploadIcon,
  Usb,
  Usb as UsbIcon,
  User,
  UserRound as User2,
  UserRound as User2Icon,
  UserCheck,
  UserRoundCheck as UserCheck2,
  UserRoundCheck as UserCheck2Icon,
  UserCheck as UserCheckIcon,
  CircleUser as UserCircle,
  CircleUserRound as UserCircle2,
  CircleUserRound as UserCircle2Icon,
  CircleUser as UserCircleIcon,
  UserCog,
  UserRoundCog as UserCog2,
  UserRoundCog as UserCog2Icon,
  UserCog as UserCogIcon,
  User as UserIcon,
  UserLock,
  UserLock as UserLockIcon,
  UserMinus,
  UserRoundMinus as UserMinus2,
  UserRoundMinus as UserMinus2Icon,
  UserMinus as UserMinusIcon,
  UserPen,
  UserPen as UserPenIcon,
  UserPlus,
  UserRoundPlus as UserPlus2,
  UserRoundPlus as UserPlus2Icon,
  UserPlus as UserPlusIcon,
  UserRound,
  UserRoundCheck,
  UserRoundCheck as UserRoundCheckIcon,
  UserRoundCog,
  UserRoundCog as UserRoundCogIcon,
  UserRound as UserRoundIcon,
  UserRoundMinus,
  UserRoundMinus as UserRoundMinusIcon,
  UserRoundPen,
  UserRoundPen as UserRoundPenIcon,
  UserRoundPlus,
  UserRoundPlus as UserRoundPlusIcon,
  UserRoundSearch,
  UserRoundSearch as UserRoundSearchIcon,
  UserRoundX,
  UserRoundX as UserRoundXIcon,
  UserSearch,
  UserSearch as UserSearchIcon,
  SquareUser as UserSquare,
  SquareUserRound as UserSquare2,
  SquareUserRound as UserSquare2Icon,
  SquareUser as UserSquareIcon,
  UserX,
  UserRoundX as UserX2,
  UserRoundX as UserX2Icon,
  UserX as UserXIcon,
  Users,
  UsersRound as Users2,
  UsersRound as Users2Icon,
  Users as UsersIcon,
  UsersRound,
  UsersRound as UsersRoundIcon,
  Utensils,
  UtensilsCrossed,
  UtensilsCrossed as UtensilsCrossedIcon,
  Utensils as UtensilsIcon,
  UtilityPole,
  UtilityPole as UtilityPoleIcon,
  Variable,
  Variable as VariableIcon,
  Vault,
  Vault as VaultIcon,
  Vegan,
  Vegan as VeganIcon,
  VenetianMask,
  VenetianMask as VenetianMaskIcon,
  Venus,
  VenusAndMars,
  VenusAndMars as VenusAndMarsIcon,
  Venus as VenusIcon,
  BadgeCheck as Verified,
  BadgeCheck as VerifiedIcon,
  Vibrate,
  Vibrate as VibrateIcon,
  VibrateOff,
  VibrateOff as VibrateOffIcon,
  Video,
  Video as VideoIcon,
  VideoOff,
  VideoOff as VideoOffIcon,
  Videotape,
  Videotape as VideotapeIcon,
  View,
  View as ViewIcon,
  Voicemail,
  Voicemail as VoicemailIcon,
  Volleyball,
  Volleyball as VolleyballIcon,
  Volume,
  Volume1,
  Volume1 as Volume1Icon,
  Volume2,
  Volume2 as Volume2Icon,
  Volume as VolumeIcon,
  VolumeOff,
  VolumeOff as VolumeOffIcon,
  VolumeX,
  VolumeX as VolumeXIcon,
  Vote,
  Vote as VoteIcon,
  Wallet,
  WalletMinimal as Wallet2,
  WalletMinimal as Wallet2Icon,
  WalletCards,
  WalletCards as WalletCardsIcon,
  Wallet as WalletIcon,
  WalletMinimal,
  WalletMinimal as WalletMinimalIcon,
  Wallpaper,
  Wallpaper as WallpaperIcon,
  Wand,
  WandSparkles as Wand2,
  WandSparkles as Wand2Icon,
  Wand as WandIcon,
  WandSparkles,
  WandSparkles as WandSparklesIcon,
  Warehouse,
  Warehouse as WarehouseIcon,
  WashingMachine,
  WashingMachine as WashingMachineIcon,
  Watch,
  Watch as WatchIcon,
  Waves,
  Waves as WavesIcon,
  WavesLadder,
  WavesLadder as WavesLadderIcon,
  Waypoints,
  Waypoints as WaypointsIcon,
  Webcam,
  Webcam as WebcamIcon,
  Webhook,
  Webhook as WebhookIcon,
  WebhookOff,
  WebhookOff as WebhookOffIcon,
  Weight,
  Weight as WeightIcon,
  Wheat,
  Wheat as WheatIcon,
  WheatOff,
  WheatOff as WheatOffIcon,
  WholeWord,
  WholeWord as WholeWordIcon,
  Wifi,
  WifiCog,
  WifiCog as WifiCogIcon,
  WifiHigh,
  WifiHigh as WifiHighIcon,
  Wifi as WifiIcon,
  WifiLow,
  WifiLow as WifiLowIcon,
  WifiOff,
  WifiOff as WifiOffIcon,
  WifiPen,
  WifiPen as WifiPenIcon,
  WifiZero,
  WifiZero as WifiZeroIcon,
  Wind,
  WindArrowDown,
  WindArrowDown as WindArrowDownIcon,
  Wind as WindIcon,
  Wine,
  Wine as WineIcon,
  WineOff,
  WineOff as WineOffIcon,
  Workflow,
  Workflow as WorkflowIcon,
  Worm,
  Worm as WormIcon,
  WrapText,
  WrapText as WrapTextIcon,
  Wrench,
  Wrench as WrenchIcon,
  X,
  CircleX as XCircle,
  CircleX as XCircleIcon,
  X as XIcon,
  OctagonX as XOctagon,
  OctagonX as XOctagonIcon,
  SquareX as XSquare,
  SquareX as XSquareIcon,
  Youtube,
  Youtube as YoutubeIcon,
  Zap,
  Zap as ZapIcon,
  ZapOff,
  ZapOff as ZapOffIcon,
  ZoomIn,
  ZoomIn as ZoomInIcon,
  ZoomOut,
  ZoomOut as ZoomOutIcon,
  formatFixed,
  lucideIcons as icons
};
//# sourceMappingURL=lucide-angular.js.map
