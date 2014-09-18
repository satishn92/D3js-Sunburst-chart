angular.module('app.directives', [])
.directive('sunburstGraph', function() {
  return {
    restrict: 'AE',
    scope: {
      data: "=",
      size: "="
    },
    templateUrl: 'templates/sunburstGraphTemplate.html',
    link: function($scope,$element,$attr) {
      // console.log($scope.data.children[0]);
      // console.log(color1);
      var width = 960,
          height = 700,
          radius = Math.min(width, height) / 2,
          detailedHtml = "",
          totalBarLength = 0,
          barLength = 0,
          color1 = d3.scale.category10(),
          color2 = d3.scale.category20(), 
          color3 = d3.scale.category20b(),
          color4 = d3.scale.category20c();

      var svg = d3.select("body").append("svg")
          .attr("width", width)
          .attr("height", height)
        .append("g")
          .attr("transform", "translate(" + width / 2 + "," + height * .52 + ")");

      var partition = d3.layout.partition()
          .sort(null)
          .size([2* Math.PI, radius * radius])
          .value(function(d) { return 1; });

      var arc = d3.svg.arc()
          .startAngle(function(d) { return d.x; })
          .endAngle(function(d) { return d.x + d.dx; })
          .innerRadius(function(d) { return Math.sqrt(d.y); })
          .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

      var path = svg.datum($scope.data).selectAll("path")
          .data(partition.nodes)
        .enter().append("path")
          .attr("display", function(d) { return d.depth ? null : "none"; }) // hide inner ring
          .attr("d", arc)
          .style("stroke", "#fff")
          .style("fill", function(d) { 
            // return color1((d.children ? d : d.parent).name);
            // return d.children ? color1(d.name) : color2(d.name);
            var color = [color1, color2, color3, color4];
            var i = 0;
            return color[i](d.name);
            if(i === 3) {
              i = 0;
            } else {
              i = i + 1;
            }
          })
          .style("fill-rule", "evenodd")
          .on("mouseover", mouseover)
          .on("mouseleave", mouseleave)
          .on("mousemove", mousemove)
          .each(stash);

      d3.selectAll("input.valueBox").on("change", function change() {
        var value = this.value === "count"
            ? function() { return 1; }
            : function(d) { 
                if($scope.size === "size") return d.size;
                if($scope.size === "calories") return d.calories; 
              };

        path
            .data(partition.value(value).nodes)
          .transition()
            .duration(1500)
            .attrTween("d", arcTween);

        showDetails(this.value,$scope.data.children);

        d3.selectAll("a.view-data")
          // .data($scope.data.children)
          .on("click", showData);

        d3.selectAll("a.view-children")
            .on("click", showData);
      });

      var tooltip = d3.select("body").append("div")
          .attr("class", "tooltip");

      var legend = d3.select("body").append("div")
          .attr("class", "legend")
          .style("position", "absolute")
          .style("right", 0)
          .style("top", "300px")
          .style("width", "500px")
          .style("height", "400px")
          // .style("background-color", "red")
          .style("color", "white");

      var Details = d3.select("body").append("div")
          .attr("class", "Details")
          .html(detailedHtml);

      showDetails("count",$scope.data.children);

      var Data = d3.select("body").append("div")
          .attr("class", "Data");

      d3.selectAll("a.view-data")
          // .data($scope.data.children)
          .on("click", showData);

      d3.selectAll("a.view-children")
            .on("click", showData);

      d3.selectAll("a.view-previous")
            .on("click", showData);

      // Stash the old values for transition.
      function stash(d) {
        d.x0 = d.x;
        d.dx0 = d.dx;
      }

      // Interpolate the arcs in data space.
      function arcTween(a) {
        var i = d3.interpolate({x: a.x0, dx: a.dx0}, a);
        return function(t) {
          var b = i(t);
          a.x0 = b.x;
          a.dx0 = b.dx;
          return arc(b);
        };
      }

      // Highlight hovered elements
      function mouseover(d){

        var sequenceNodes = getAncestors(d);

        d3.selectAll("path")
            .style("opacity", 0.2);

        d3.select(this)
            .classed("hover", true);

        d3.selectAll("path")
            .filter(function(node) {
              return (sequenceNodes.indexOf(node) >= 0);
            })
            .style("opacity", 1);

        tooltip.transition()
                .duration(3000)
                .style("display", "block");

        tooltip.html("<p> Name: <span class='tooltipName'>" + d.name + "</span></p><p> Total size: <span class='tooltipSize'>" + d.value + "</span></p>")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY) + "px");

        legend.html(function() {
          var inside = "";
          // return "<p>" + sequenceNodes + "</p>";
          for(var node in sequenceNodes){
            var no_children = sequenceNodes[node].children ? sequenceNodes[node].children.length : 0;
            inside += "<p style='background-color: #CCFF00; color: red; margin:0 0 0 " + (node * 50) + "px; padding: 5px 0 5px 5px;'> " + ((node === "0") ? "Root Element" : "Child Element no: " + node) + "</p><p style='background-color: #0099FF; margin:0 0 0 " + (node * 50) + "px; padding: 0 0 5px 5px;'> Name: " + sequenceNodes[node].name + "</p><p style='background-color: #0099FF; margin: 0 0 0 " + (node * 50) + "px; padding: 0 0 5px 5px;'> Total Size: " + sequenceNodes[node].value + "</p><p style='background-color: #0099FF; margin: 0 0 20px " + (node * 50) + "px; padding: 0 0 5px 5px;'> Number of children: " + no_children + "</p>"; 
          }

          return inside;

        });

        // value = value + 1000;
      }

      // Restore everything to full opacity
      function mouseleave(d) {
        d3.selectAll("path")
            .style("opacity", 1);

        tooltip.transition()
                .duration(1000)
                .style("display", "none");

        d3.select(this)
            .classed("hover", false);

        legend.html("");
      }

      function mousemove(d){
        tooltip.style("left", (d3.event.pageX) + "px").style("top", (d3.event.pageY) + "px");
      }

      function showDetails(value,elements) {

        detailedHtml = "<h1 style='font-size: 14px; font-weight: 800;'>Distribution by Ratings</h1><hr class='details'>";
        totalBarLength = 0;
        var percentage = 0;

        for(var root in elements) {
          if(value === "count") {
            barLength = (elements[root].children.length * 6);
          } else {
            barLength = (elements[root].value/2000);
          }
          totalBarLength += barLength;
        }

        for(var root in elements) {
          if(value === "count") {
            barLength = (elements[root].children.length * 6);
          } else {
            barLength = (elements[root].value/2000);
          }
          percentage = ((barLength/totalBarLength) * 100).toFixed(2);
          detailedHtml += "<div class='row'><div class='col-md-2'><p class='details'>" + elements[root].name + "(" + elements[root].children.length + ")</p></div><div class='col-md-6'><div class='details' style=' width: " + barLength + "px; background-color:" +  color1(elements[root].name) + ";'></div></div><div class='col-md-2'><p class='details'>" + percentage + " %</p></div><div class='col-md-2'><a class='view-data' style='cursor: pointer;' >view</a></div></div><hr class='details'>";
        }



        Details.html(detailedHtml).transition().duration(3000);

        d3.selectAll("a.view-data")
          .data(elements);

      }

      // function click(d) {
      //   d3.event.stopPropagation();
      //   console.log("Hi");
      //   var sequenceNodes = getAncestors(d);
      //   console.log(d);
      // }

      function getAncestors(node) {
        var path = [];
        var current = node;
        while(current.parent) {
          path.unshift(current);
          current = current.parent;
        }
        return path;
      }

      function showData(d) {
        console.log(d);

        var childrenHtml = "",
            previousHtml = "";

        if(d.parent.parent) {
          previousHtml = "<p style=' margin: 0;'><a class='view-previous' style='cursor: pointer;'>Previous</a></p>";
        } else {
          previousHtml = "<p style=' margin: 0;'><a class='view-previous' style='cursor: pointer; display: none;' >Previous</a></p>";
        }


        var dataHtml = "<div class='row'><div class='col-md-10'><h1 style='font-size: 14px; font-weight: 800; margin-top: 0;'>Viewing children with parent: " + d.name + "</h1></div><div class='col-md-2'>" + previousHtml + "</div></div><hr class='details'>";
        
        
        for(var element in d.children) {
          if(d.children[element].children) {
            childrenHtml = "<a class='view-children' style='cursor: pointer;' >Children</a>";
          } else {
            childrenHtml = "<a class='view-children' style='cursor: pointer; display: none;' >Children</a>";
          }
          dataHtml += "<div class='row'><div class='col-md-10'><p style='color: #CC6600'>" + d.children[element].name + "</p></div><div class='col-md-2'>" + childrenHtml + "</div></div><hr class='details'>";
        }

        Data.html(dataHtml);

        d3.selectAll("a.view-previous")
            .on("click", function() { showData(d.parent)});

        d3.selectAll("a.view-children")
            .data(d.children)
            .on("click", showData);
      }

      d3.select(self.frameElement).style("height", height + "px");
    }
  };
});