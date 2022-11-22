var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratori = /** @class */ (function () {
    function Lavoratori(_ral, _codice, _inps, _irpef) {
        this.ral = _ral;
        this.codice = _codice;
        this.inps = _inps;
        this.irpef = _irpef;
    }
    Lavoratori.prototype.utiletasse = function () {
        var utile = Number((this.ral * this.codice / 100).toFixed(2));
        return utile;
    };
    ;
    Lavoratori.prototype.inpstasse = function () {
        var inps = Number((this.utiletasse() * this.inps / 100).toFixed(2));
        return inps;
    };
    ;
    Lavoratori.prototype.irpeftasse = function () {
        var irpef = Number((this.utiletasse() * this.irpef / 100).toFixed(2));
        return irpef;
    };
    ;
    Lavoratori.prototype.ran = function () {
        var ran = Number((this.utiletasse() - (this.inpstasse() + this.irpeftasse())).toFixed(2));
        return ran;
    };
    ;
    return Lavoratori;
}());
var Professionista = /** @class */ (function (_super) {
    __extends(Professionista, _super);
    function Professionista(_ral, _codice, _inps, _irpef) {
        if (_codice === void 0) { _codice = 78; }
        if (_inps === void 0) { _inps = 25.72; }
        if (_irpef === void 0) { _irpef = 5; }
        return _super.call(this, _ral, _codice, _inps, _irpef) || this;
    }
    return Professionista;
}(Lavoratori));
var Artigiani = /** @class */ (function (_super) {
    __extends(Artigiani, _super);
    function Artigiani(_ral, _codice, _inps, _irpef) {
        if (_codice === void 0) { _codice = 67; }
        if (_inps === void 0) { _inps = 35; }
        if (_irpef === void 0) { _irpef = 15; }
        return _super.call(this, _ral, _codice, _inps, _irpef) || this;
    }
    return Artigiani;
}(Lavoratori));
var Commercianti = /** @class */ (function (_super) {
    __extends(Commercianti, _super);
    function Commercianti(_ral, _codice, _inps, _irpef) {
        if (_codice === void 0) { _codice = 40; }
        if (_inps === void 0) { _inps = 35; }
        if (_irpef === void 0) { _irpef = 15; }
        return _super.call(this, _ral, _codice, _inps, _irpef) || this;
    }
    return Commercianti;
}(Lavoratori));
var professionista = new Professionista(1000);
console.log("\n\n\n-Professionista-\nil tuo utile \u00E8 di: ".concat(professionista.utiletasse(), " euro.\n\nil tuo inps \u00E8 di: ").concat(professionista.inpstasse(), " euro.\n\nil tuo irpef \u00E8 di: ").concat(professionista.irpeftasse(), " euro.\n\nil tuo utile \u00E8 di: ").concat(professionista.ran(), " euro.\n\n\n"));
var artigiani = new Artigiani(1000);
console.log("\n\n\n-Artigiani-\nil tuo utile \u00E8 di: ".concat(artigiani.utiletasse(), " euro.\n\nil tuo inps \u00E8 di: ").concat(artigiani.inpstasse(), " euro.\n\nil tuo irpef \u00E8 di: ").concat(artigiani.irpeftasse(), " euro.\n\nil tuo utile \u00E8 di: ").concat(artigiani.ran(), " euro.\n\n\n"));
var commercialista = new Commercianti(1000);
console.log("\n\n\n-Commercialista-\nil tuo utile \u00E8 di: ".concat(commercialista.utiletasse(), " euro.\n\nil tuo inps \u00E8 di: ").concat(commercialista.inpstasse(), " euro.\n\nil tuo irpef \u00E8 di: ").concat(commercialista.irpeftasse(), " euro.\n\nil tuo utile \u00E8 di: ").concat(commercialista.ran(), " euro.\n\n\n"));
