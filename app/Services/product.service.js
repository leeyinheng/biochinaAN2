"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { Hero } from './hero';
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = 'https://www.googleapis.com/books/v1/volumes?q=floresdelmal&filter=full'; // URL to web api
        this.products = [
            { Id: 6, Name: '經典禮盒', Description: '組合包裝內含:帝王蟹殼素膠囊 *2盒 (60粒/盒) 中華甲殼素牙膏 140克/支 ●帝王蟹殼素膠囊● 成分： HFP 帝王蟹殼素(270mg)、維生素C(15mg)、麥芽糊精(15mg) 內容量:300MG*60粒 使用方式: 一般保養 每天2粒 加強保養 每次2粒 每天2~3次 ●中華甲殼素牙膏● 成 份：HFP高分子水溶性甲殼素、天然纖維素然薄荷、活性氟化物（符合國家標準CNS-15492）包裝容量：140克/支', Price: 3600, Photo: 'app/Services/Model/Photos/itemE.jpg' },
            { Id: 1, Name: '中華甲殼素', Description: 'HFP®-Chitosan為天然多醣體構成，具活性胺基，是唯一帶正電之動物性纖維素，能吸附帶負電之不好物質，屬食品故不會產生副作用及毒性。它是利用創新的美國專利技術純化(專利號碼5730876)，達到高分子水溶性的狀態，使人體好吸收，此外更通過美國食品暨藥物管理局FDA認證實驗室(認證號碼：2030950)檢驗通過：無重金屬與農藥殘留。', Price: 3600, Photo: 'app/Services/Model/Photos/itemA.jpg' },
            { Id: 2, Name: '昕華聖康', Description: '成 分HFP-Chitosan、葡萄子、DHA、葡萄糖酸鋅、酵母硒、B胡蘿蔔素、冬蟲夏草 容 量 每粒膠囊360 mg，每瓶60粒 建議用量 每日3次，每次1粒', Price: 1500, Photo: 'app/Services/Model/Photos/itemD.jpg' },
            { Id: 3, Name: '昕華益骨', Description: '人體會自行合成膠原蛋白，但隨著年齡增長，合成速度趕不上分解的速度，適時補充可以保持靈活自如的行動力。中華生物科技採用葡萄糖胺+一型膠原蛋白+活性二型膠原蛋白', Price: 1500, Photo: 'app/Services/Model/Photos/itemC.jpg' },
            { Id: 4, Name: '中華甲殼素牙膏', Description: 'HFP®-Chitosan、天然纖維素膠、天然薄荷、活性氟化物800 ppm（符合國家標準CNS-15492）。', Price: 200, Photo: 'app/Services/Model/Photos/itemF.jpg' },
            { Id: 5, Name: '蟹殼素環保潔淨布(買1送1)', Description: '環保素材之六大特色◆ 可自然分解不會造成環境污染 ◆吸水性超強、好沖洗、不殘留髒污 ◆除塵力強 輕輕一抹 光亮如新 ◆可避免細菌滋生 ◆質地柔軟 不會刮傷家具 ◆價格低廉、可重複使用 材 質：天然木纖維複合蟹殼素 用 途：汽車、玻璃、傢具、餐桌、冰箱、流理台等的擦拭與清潔 包 裝：3片/包', Price: 90, Photo: 'app/Services/Model/Photos/itemG.jpg' },
        ];
    }
    ProductService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productUrl)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ProductService.prototype.getSamples = function () {
        return this.products;
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map