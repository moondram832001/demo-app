angular.module("uib/template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("uib/template/datepicker/day.html",
    "<div >\n" +
    "<div class=\"datepicker-foreground\" >  \n" +
    "<table class=\"uib-daypicker\" role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
    "  <thead>\n" +
    "    <tr>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
    "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
    "    </tr>\n" +
    "    <tr>\n" +
    "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
    "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" +
    "    </tr>\n" +
    "  </thead>\n" +
    "  <tbody>\n" +
    "    <tr data-id=\"table-row-{{$index}}\" class=\"uib-weeks\" ng-repeat=\"row in rows track by $index\" ng-mouseover=\"hoverIn($index)\" ng-mouseout=\"hoverOut($index)\" >\n" +
    "      <td ng-if=\"showWeeks\" class=\"text-center h1\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
    "      <td ng-repeat=\"dt in row\" class=\"uib-day text-center\" role=\"gridcell\"\n" +
    "        id=\"{{::dt.uid}}\"\n" +
    "        ng-class=\"::dt.customClass\">\n" +
    "        <button type=\"button\" class=\"btn calendar-button\"\n" +
    "          uib-is-class=\"\n" +
    "            'btn-info' for selectedDt,\n" +
    "            'active' for activeDt\n" +
    "            on dt\"\n" +
    "          ng-click=\"select(dt.date)\"\n" +
    "          ng-disabled=\"::dt.disabled\"\n" +
    "          tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
    "      </td>\n" +
    "    </tr>\n" +
    "  </tbody>\n" +
    "</table>\n" +
    "</div>\n" +
    "<div class=\"datepicker-background\">\n" +
    "  <svg  xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"100%\" height=\"750px\" viewBox=\"0 0 550 750\" preserveAspectRatio=\"xMidYMid meet\" >\n" +
    "    <g ng-repeat=\"row in rows track by $index\">\n" +
    "      <path  id=\"row_{{$index}}\" class=\"lineABC\" d=\"m 50 {{60 + $index * 50}} l 50 -50 l 300 0 l 50 50 l 0 50 l -50 -50 l -300 0 l -50 50 z\" stroke=\"black\"  stroke-width=\"1.5\" fill=\"transparent\" opacity=\".3\" />  \n" +
    "    </g>  \n" +
    "  </svg>\n" +
    "</div>\n" +
    "</div>");
}]);
