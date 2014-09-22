angular.module('app.settings', [])
.constant('settings', {
  "data" : {
    "name": "flare",
    "children": [
      {
       "name": "analytics",
       "children": [
        {
         "name": "cluster",
         "children": [
          {"name": "AgglomerativeCluster", "size": 3938},
          {"name": "CommunityStructure", "size": 3812},
          {"name": "HierarchicalCluster", "size": 6714},
          {"name": "MergeEdge", "size": 743}
         ]
        },
        {
         "name": "graph",
         "children": [
          {"name": "BetweennessCentrality", "size": 3534},
          {"name": "LinkDistance", "size": 5731},
          {"name": "MaxFlowMinCut", "size": 7840},
          {"name": "ShortestPaths", "size": 5914},
          {"name": "SpanningTree", "size": 3416}
         ]
        },
        {
         "name": "optimization",
         "children": [
          {"name": "AspectRatioBanker", "size": 7074}
         ]
        }
       ]
      },
      {
       "name": "animate",
       "children": [
        {"name": "Easing", "size": 17010},
        {"name": "FunctionSequence", "size": 5842},
        {
         "name": "interpolate",
         "children": [
          {"name": "ArrayInterpolator", "size": 1983},
          {"name": "ColorInterpolator", "size": 2047},
          {"name": "DateInterpolator", "size": 1375},
          {"name": "Interpolator", "size": 8746},
          {"name": "MatrixInterpolator", "size": 2202},
          {"name": "NumberInterpolator", "size": 1382},
          {"name": "ObjectInterpolator", "size": 1629},
          {"name": "PointInterpolator", "size": 1675},
          {"name": "RectangleInterpolator", "size": 2042}
         ]
        },
        {"name": "ISchedulable", "size": 1041},
        {"name": "Parallel", "size": 5176},
        {"name": "Pause", "size": 449},
        {"name": "Scheduler", "size": 5593},
        {"name": "Sequence", "size": 5534},
        {"name": "Transition", "size": 9201},
        {"name": "Transitioner", "size": 19975},
        {"name": "TransitionEvent", "size": 1116},
        {"name": "Tween", "size": 6006}
       ]
      },
      {
       "name": "data",
       "children": [
        {
         "name": "converters",
         "children": [
          {"name": "Converters", "size": 721},
          {"name": "DelimitedTextConverter", "size": 4294},
          {"name": "GraphMLConverter", "size": 9800},
          {"name": "IDataConverter", "size": 1314},
          {"name": "JSONConverter", "size": 2220}
         ]
        },
        {"name": "DataField", "size": 1759},
        {"name": "DataSchema", "size": 2165},
        {"name": "DataSet", "size": 586},
        {"name": "DataSource", "size": 3331},
        {"name": "DataTable", "size": 772},
        {"name": "DataUtil", "size": 3322}
       ]
      },
      {
       "name": "display",
       "children": [
        {"name": "DirtySprite", "size": 8833},
        {"name": "LineSprite", "size": 1732},
        {"name": "RectSprite", "size": 3623},
        {"name": "TextSprite", "size": 10066}
       ]
      },
      {
       "name": "flex",
       "children": [
        {"name": "FlareVis", "size": 4116}
       ]
      },
      {
       "name": "physics",
       "children": [
        {"name": "DragForce", "size": 1082},
        {"name": "GravityForce", "size": 1336},
        {"name": "IForce", "size": 319},
        {"name": "NBodyForce", "size": 10498},
        {"name": "Particle", "size": 2822},
        {"name": "Simulation", "size": 9983},
        {"name": "Spring", "size": 2213},
        {"name": "SpringForce", "size": 1681}
       ]
      },
      {
       "name": "query",
       "children": [
        {"name": "AggregateExpression", "size": 1616},
        {"name": "And", "size": 1027},
        {"name": "Arithmetic", "size": 3891},
        {"name": "Average", "size": 891},
        {"name": "BinaryExpression", "size": 2893},
        {"name": "Comparison", "size": 5103},
        {"name": "CompositeExpression", "size": 3677},
        {"name": "Count", "size": 781},
        {"name": "DateUtil", "size": 4141},
        {"name": "Distinct", "size": 933},
        {"name": "Expression", "size": 5130},
        {"name": "ExpressionIterator", "size": 3617},
        {"name": "Fn", "size": 3240},
        {"name": "If", "size": 2732},
        {"name": "IsA", "size": 2039},
        {"name": "Literal", "size": 1214},
        {"name": "Match", "size": 3748},
        {"name": "Maximum", "size": 843},
        {
         "name": "methods",
         "children": [
          {"name": "add", "size": 593},
          {"name": "and", "size": 330},
          {"name": "average", "size": 287},
          {"name": "count", "size": 277},
          {"name": "distinct", "size": 292},
          {"name": "div", "size": 595},
          {"name": "eq", "size": 594},
          {"name": "fn", "size": 460},
          {"name": "gt", "size": 603},
          {"name": "gte", "size": 625},
          {"name": "iff", "size": 748},
          {"name": "isa", "size": 461},
          {"name": "lt", "size": 597},
          {"name": "lte", "size": 619},
          {"name": "max", "size": 283},
          {"name": "min", "size": 283},
          {"name": "mod", "size": 591},
          {"name": "mul", "size": 603},
          {"name": "neq", "size": 599},
          {"name": "not", "size": 386},
          {"name": "or", "size": 323},
          {"name": "orderby", "size": 307},
          {"name": "range", "size": 772},
          {"name": "select", "size": 296},
          {"name": "stddev", "size": 363},
          {"name": "sub", "size": 600},
          {"name": "sum", "size": 280},
          {"name": "update", "size": 307},
          {"name": "variance", "size": 335},
          {"name": "where", "size": 299},
          {"name": "xor", "size": 354},
          {"name": "_", "size": 264}
         ]
        },
        {"name": "Minimum", "size": 843},
        {"name": "Not", "size": 1554},
        {"name": "Or", "size": 970},
        {"name": "Query", "size": 13896},
        {"name": "Range", "size": 1594},
        {"name": "StringUtil", "size": 4130},
        {"name": "Sum", "size": 791},
        {"name": "Variable", "size": 1124},
        {"name": "Variance", "size": 1876},
        {"name": "Xor", "size": 1101}
       ]
      },
      {
       "name": "scale",
       "children": [
        {"name": "IScaleMap", "size": 2105},
        {"name": "LinearScale", "size": 1316},
        {"name": "LogScale", "size": 3151},
        {"name": "OrdinalScale", "size": 3770},
        {"name": "QuantileScale", "size": 2435},
        {"name": "QuantitativeScale", "size": 4839},
        {"name": "RootScale", "size": 1756},
        {"name": "Scale", "size": 4268},
        {"name": "ScaleType", "size": 1821},
        {"name": "TimeScale", "size": 5833}
       ]
      },
      {
       "name": "util",
       "children": [
        {"name": "Arrays", "size": 8258},
        {"name": "Colors", "size": 10001},
        {"name": "Dates", "size": 8217},
        {"name": "Displays", "size": 12555},
        {"name": "Filter", "size": 2324},
        {"name": "Geometry", "size": 10993},
        {
         "name": "heap",
         "children": [
          {"name": "FibonacciHeap", "size": 9354},
          {"name": "HeapNode", "size": 1233}
         ]
        },
        {"name": "IEvaluable", "size": 335},
        {"name": "IPredicate", "size": 383},
        {"name": "INumberProxy", "size": 874},
        {
         "name": "math",
         "children": [
          {"name": "DenseMatrix", "size": 3165},
          {"name": "IMatrix", "size": 2815},
          {"name": "SparseMatrix", "size": 3366}
         ]
        },
        {"name": "Maths", "size": 17705},
        {"name": "Orientation", "size": 1486},
        {
         "name": "palette",
         "children": [
          {"name": "ColorPalette", "size": 6367},
          {"name": "Palette", "size": 1229},
          {"name": "ShapePalette", "size": 2059},
          {"name": "SizePalette", "size": 2291}
         ]
        },
        {"name": "Property", "size": 5559},
        {"name": "Shapes", "size": 19118},
        {"name": "Sort", "size": 6887},
        {"name": "Stats", "size": 6557},
        {"name": "Strings", "size": 22026}
       ]
      },
      {
       "name": "vis",
       "children": [
        {
         "name": "axis",
         "children": [
          {"name": "Axes", "size": 1302},
          {"name": "Axis", "size": 24593},
          {"name": "AxisGridLine", "size": 652},
          {"name": "AxisLabel", "size": 636},
          {"name": "CartesianAxes", "size": 6703}
         ]
        },
        {
         "name": "controls",
         "children": [
          {"name": "AnchorControl", "size": 2138},
          {"name": "ClickControl", "size": 3824},
          {"name": "Control", "size": 1353},
          {"name": "ControlList", "size": 4665},
          {"name": "DragControl", "size": 2649},
          {"name": "ExpandControl", "size": 2832},
          {"name": "HoverControl", "size": 4896},
          {"name": "IControl", "size": 763},
          {"name": "PanZoomControl", "size": 5222},
          {"name": "SelectionControl", "size": 7862},
          {"name": "TooltipControl", "size": 8435}
         ]
        },
        {
         "name": "data",
         "children": [
          {"name": "Data", "size": 20544},
          {"name": "DataList", "size": 19788},
          {"name": "DataSprite", "size": 10349},
          {"name": "EdgeSprite", "size": 3301},
          {"name": "NodeSprite", "size": 19382},
          {
           "name": "render",
           "children": [
            {"name": "ArrowType", "size": 698},
            {"name": "EdgeRenderer", "size": 5569},
            {"name": "IRenderer", "size": 353},
            {"name": "ShapeRenderer", "size": 2247}
           ]
          },
          {"name": "ScaleBinding", "size": 11275},
          {"name": "Tree", "size": 7147},
          {"name": "TreeBuilder", "size": 9930}
         ]
        },
        {
         "name": "events",
         "children": [
          {"name": "DataEvent", "size": 2313},
          {"name": "SelectionEvent", "size": 1880},
          {"name": "TooltipEvent", "size": 1701},
          {"name": "VisualizationEvent", "size": 1117}
         ]
        },
        {
         "name": "legend",
         "children": [
          {"name": "Legend", "size": 20859},
          {"name": "LegendItem", "size": 4614},
          {"name": "LegendRange", "size": 10530}
         ]
        },
        {
         "name": "operator",
         "children": [
          {
           "name": "distortion",
           "children": [
            {"name": "BifocalDistortion", "size": 4461},
            {"name": "Distortion", "size": 6314},
            {"name": "FisheyeDistortion", "size": 3444}
           ]
          },
          {
           "name": "encoder",
           "children": [
            {"name": "ColorEncoder", "size": 3179},
            {"name": "Encoder", "size": 4060},
            {"name": "PropertyEncoder", "size": 4138},
            {"name": "ShapeEncoder", "size": 1690},
            {"name": "SizeEncoder", "size": 1830}
           ]
          },
          {
           "name": "filter",
           "children": [
            {"name": "FisheyeTreeFilter", "size": 5219},
            {"name": "GraphDistanceFilter", "size": 3165},
            {"name": "VisibilityFilter", "size": 3509}
           ]
          },
          {"name": "IOperator", "size": 1286},
          {
           "name": "label",
           "children": [
            {"name": "Labeler", "size": 9956},
            {"name": "RadialLabeler", "size": 3899},
            {"name": "StackedAreaLabeler", "size": 3202}
           ]
          },
          {
           "name": "layout",
           "children": [
            {"name": "AxisLayout", "size": 6725},
            {"name": "BundledEdgeRouter", "size": 3727},
            {"name": "CircleLayout", "size": 9317},
            {"name": "CirclePackingLayout", "size": 12003},
            {"name": "DendrogramLayout", "size": 4853},
            {"name": "ForceDirectedLayout", "size": 8411},
            {"name": "IcicleTreeLayout", "size": 4864},
            {"name": "IndentedTreeLayout", "size": 3174},
            {"name": "Layout", "size": 7881},
            {"name": "NodeLinkTreeLayout", "size": 12870},
            {"name": "PieLayout", "size": 2728},
            {"name": "RadialTreeLayout", "size": 12348},
            {"name": "RandomLayout", "size": 870},
            {"name": "StackedAreaLayout", "size": 9121},
            {"name": "TreeMapLayout", "size": 9191}
           ]
          },
          {"name": "Operator", "size": 2490},
          {"name": "OperatorList", "size": 5248},
          {"name": "OperatorSequence", "size": 4190},
          {"name": "OperatorSwitch", "size": 2581},
          {"name": "SortOperator", "size": 2023}
         ]
        },
        {"name": "Visualization", "size": 16540}
       ]
      }
     ]
  },

  "Food": {
    "name": "Yearly Diet",
    "children": [
      {"name": "Daily", "children": [
        {"name": "Brakfast","children": [
          {"name": "Coffee", "calories": 5},
          {"name": "Bread", "calories": 20},
          {"name": "Butter", "calories": 5}
        ]},
        {"name": "Lunch", "children": [
          {"name": "Starter", "calories": 10},
          {"name": "Soup", "calories": 5},
          {"name": "main course", "calories": 40},
          {"name": "Sweet/Ice cream", "calories": 10}
        ]},
        {"name": "Snacks", "calories": 25},
        {"name": "Dinner", "children": [
          {"name": "Starter", "calories": 10},
          {"name": "Desserter", "calories": 20}
        ]}
      ]},
      {"name": "Weekly", "children": [
        {"name": "Fruits", "children": [
          {"name": "Solid Fruits", "calories": 30},
          {"name": "Fruit Juices", "calories": 50}
        ]},
        {"name": "Weekend Lunch", "calories": 50},
        {"name": "Others", "calories": 30}
      ]},
      {"name": "Monthly", "children": [
        {"name": "Outing Lunch", "children": [
          {"name": "Lunch with family", "calories": 40},
          {"name": "Lunch with friends", "calories": 80},
        ]},
        {"name": "Ordering from restaurent", "children": [
          {"name": "Pizza", "calories": 100},
          {"name": "Biryani", "calories": 200},
          {"name": "Others", "calories": 150}
        ]},
        {"name": "Others", "calories": 300}
      ]},
      {"name": "Quarterly", "children": [
        {"name": "company Lunch", "calories": 250},
        {"name": "Lunch with relatives", "calories":150},
        {"name": "Others", "calories": 200}
      ]},
      {"name": "Half Yearly", "children": [
        {"name": "Marriages", "calories": 200},
        {"name": "others", "calories": 300}
      ]},
      {"name": "Others", "calories": 300}
    ]
  },

  "Punishments": {
    "name" : "punishments",
    "children": [
    {
    "name" : "female",
    "children" : [
        {
        "name":"Corporal",
        "total":1603,
        "children" : [
        {"name" : "1670s*", "Number" : 18},{"name" : "1680s*", "Number" : 105},{"name" : "1690s*", "Number" : 172},{"name" : "1700s*", "Number" : 55},{"name" : "1710s*", "Number" : 161},{"name" : "1720s", "Number" : 100},{"name" : "1730s", "Number" : 72},{"name" : "1740s", "Number" : 196},{"name" : "1750s", "Number" : 123},{"name" : "1760s", "Number" : 111},{"name" : "1770s", "Number" : 219},{"name" : "1780s", "Number" : 165},{"name" : "1790s", "Number" : 46},{"name" : "1800s", "Number" : 53},{"name" : "1810s", "Number" : 7},{"name" : "1820s", "Number" : 0},{"name" : "1830s", "Number" : 0},{"name" : "1840s", "Number" : 0},{"name" : "1850s", "Number" : 0},{"name" : "1860s", "Number" : 0},{"name" : "1870s", "Number" : 0},{"name" : "1880s", "Number" : 0},{"name" : "1890s", "Number" : 0},{"name" : "1900s", "Number" : 0},{"name" : "1910s*", "Number" : 0}
        ]
        },
        {
        "name":"Death",
        "total":2042,
        "children" : [
        {"name" : "1670s*", "Number" : 38},{"name" : "1680s*", "Number" : 193},{"name" : "1690s*", "Number" : 223},{"name" : "1700s*", "Number" : 30},{"name" : "1710s*", "Number" : 136},{"name" : "1720s", "Number" : 123},{"name" : "1730s", "Number" : 67},{"name" : "1740s", "Number" : 98},{"name" : "1750s", "Number" : 64},{"name" : "1760s", "Number" : 68},{"name" : "1770s", "Number" : 67},{"name" : "1780s", "Number" : 161},{"name" : "1790s", "Number" : 93},{"name" : "1800s", "Number" : 135},{"name" : "1810s", "Number" : 245},{"name" : "1820s", "Number" : 183},{"name" : "1830s", "Number" : 64},{"name" : "1840s", "Number" : 14},{"name" : "1850s", "Number" : 4},{"name" : "1860s", "Number" : 3},{"name" : "1870s", "Number" : 10},{"name" : "1880s", "Number" : 5},{"name" : "1890s", "Number" : 9},{"name" : "1900s", "Number" : 8},{"name" : "1910s*", "Number" : 1}
        ]},
        {
        "name":"Imprisonment",
        "total":13578,
        "children" : [
        {"name" : "1670s*", "Number" : 1},{"name" : "1680s*", "Number" : 2},{"name" : "1690s*", "Number" : 2},{"name" : "1700s*", "Number" : 0},{"name" : "1710s*", "Number" : 2},{"name" : "1720s", "Number" : 0},{"name" : "1730s", "Number" : 2},{"name" : "1740s", "Number" : 0},{"name" : "1750s", "Number" : 3},{"name" : "1760s", "Number" : 0},{"name" : "1770s", "Number" : 65},{"name" : "1780s", "Number" : 270},{"name" : "1790s", "Number" : 19},{"name" : "1800s", "Number" : 103},{"name" : "1810s", "Number" : 321},{"name" : "1820s", "Number" : 1369},{"name" : "1830s", "Number" : 2250},{"name" : "1840s", "Number" : 3553},{"name" : "1850s", "Number" : 1785},{"name" : "1860s", "Number" : 1325},{"name" : "1870s", "Number" : 702},{"name" : "1880s", "Number" : 671},{"name" : "1890s", "Number" : 483},{"name" : "1900s", "Number" : 504},{"name" : "1910s*", "Number" : 146}
        ]},
        {
        "name":"Miscellaneous",
        "total":2038,
        "children" : [
        {"name" : "1670s*", "Number" : 8},{"name" : "1680s*", "Number" : 66},{"name" : "1690s*", "Number" : 500},{"name" : "1700s*", "Number" : 90},{"name" : "1710s*", "Number" : 266},{"name" : "1720s", "Number" : 71},{"name" : "1730s", "Number" : 46},{"name" : "1740s", "Number" : 49},{"name" : "1750s", "Number" : 48},{"name" : "1760s", "Number" : 56},{"name" : "1770s", "Number" : 66},{"name" : "1780s", "Number" : 15},{"name" : "1790s", "Number" : 27},{"name" : "1800s", "Number" : 52},{"name" : "1810s", "Number" : 105},{"name" : "1820s", "Number" : 156},{"name" : "1830s", "Number" : 54},{"name" : "1840s", "Number" : 10},{"name" : "1850s", "Number" : 4},{"name" : "1860s", "Number" : 11},{"name" : "1870s", "Number" : 18},{"name" : "1880s", "Number" : 44},{"name" : "1890s", "Number" : 105},{"name" : "1900s", "Number" : 126},{"name" : "1910s*", "Number" : 45}
        ]},
        {
        "name":"No Punishment",
        "total":1250,
        "children" : [
        {"name" : "1670s*", "Number" : 1},{"name" : "1680s*", "Number" : 58},{"name" : "1690s*", "Number" : 74},{"name" : "1700s*", "Number" : 0},{"name" : "1710s*", "Number" : 41},{"name" : "1720s", "Number" : 1},{"name" : "1730s", "Number" : 0},{"name" : "1740s", "Number" : 1},{"name" : "1750s", "Number" : 7},{"name" : "1760s", "Number" : 1},{"name" : "1770s", "Number" : 8},{"name" : "1780s", "Number" : 6},{"name" : "1790s", "Number" : 9},{"name" : "1800s", "Number" : 12},{"name" : "1810s", "Number" : 59},{"name" : "1820s", "Number" : 108},{"name" : "1830s", "Number" : 144},{"name" : "1840s", "Number" : 206},{"name" : "1850s", "Number" : 95},{"name" : "1860s", "Number" : 101},{"name" : "1870s", "Number" : 97},{"name" : "1880s", "Number" : 93},{"name" : "1890s", "Number" : 63},{"name" : "1900s", "Number" : 47},{"name" : "1910s*", "Number" : 18}
        ]},
        {
        "name":"Transportation",
        "total":10159,
        "children" : [
        {"name" : "1670s*", "Number" : 3},{"name" : "1680s*", "Number" : 15},{"name" : "1690s*", "Number" : 14},{"name" : "1700s*", "Number" : 0},{"name" : "1710s*", "Number" : 130},{"name" : "1720s", "Number" : 908},{"name" : "1730s", "Number" : 877},{"name" : "1740s", "Number" : 781},{"name" : "1750s", "Number" : 736},{"name" : "1760s", "Number" : 664},{"name" : "1770s", "Number" : 478},{"name" : "1780s", "Number" : 332},{"name" : "1790s", "Number" : 354},{"name" : "1800s", "Number" : 476},{"name" : "1810s", "Number" : 672},{"name" : "1820s", "Number" : 1123},{"name" : "1830s", "Number" : 1676},{"name" : "1840s", "Number" : 803},{"name" : "1850s", "Number" : 117},{"name" : "1860s", "Number" : 0},{"name" : "1870s", "Number" : 0},{"name" : "1880s", "Number" : 0},{"name" : "1890s", "Number" : 0},{"name" : "1900s", "Number" : 0},{"name" : "1910s*", "Number" : 0}
        ]},
        {
        "name":"multiple punishments",
        "total":3282,
        "children" : [
        {"name" : "1670s*", "Number" : 0},{"name" : "1680s*", "Number" : 22},{"name" : "1690s*", "Number" : 20},{"name" : "1700s*", "Number" : 36},{"name" : "1710s*", "Number" : 31},{"name" : "1720s", "Number" : 29},{"name" : "1730s", "Number" : 7},{"name" : "1740s", "Number" : 58},{"name" : "1750s", "Number" : 49},{"name" : "1760s", "Number" : 54},{"name" : "1770s", "Number" : 259},{"name" : "1780s", "Number" : 532},{"name" : "1790s", "Number" : 557},{"name" : "1800s", "Number" : 762},{"name" : "1810s", "Number" : 763},{"name" : "1820s", "Number" : 32},{"name" : "1830s", "Number" : 13},{"name" : "1840s", "Number" : 23},{"name" : "1850s", "Number" : 7},{"name" : "1860s", "Number" : 3},{"name" : "1870s", "Number" : 2},{"name" : "1880s", "Number" : 7},{"name" : "1890s", "Number" : 5},{"name" : "1900s", "Number" : 5},{"name" : "1910s*", "Number" : 6}
      ]}
    ]
    },
    {
    "name" : "male",
    "children" : [
      {
      "name":"multiple punishments",
      "total":10239,
      "children" : [
      {"name" : "1670s*", "Number" : 5},{"name" : "1680s*", "Number" : 101},{"name" : "1690s*", "Number" : 73},{"name" : "1700s*", "Number" : 26},{"name" : "1710s*", "Number" : 76},{"name" : "1720s", "Number" : 126},{"name" : "1730s", "Number" : 42},{"name" : "1740s", "Number" : 163},{"name" : "1750s", "Number" : 200},{"name" : "1760s", "Number" : 276},{"name" : "1770s", "Number" : 639},{"name" : "1780s", "Number" : 1207},{"name" : "1790s", "Number" : 1204},{"name" : "1800s", "Number" : 1408},{"name" : "1810s", "Number" : 1996},{"name" : "1820s", "Number" : 923},{"name" : "1830s", "Number" : 321},{"name" : "1840s", "Number" : 508},{"name" : "1850s", "Number" : 124},{"name" : "1860s", "Number" : 145},{"name" : "1870s", "Number" : 115},{"name" : "1880s", "Number" : 146},{"name" : "1890s", "Number" : 186},{"name" : "1900s", "Number" : 145},{"name" : "1910s*", "Number" : 84}
      ]
      },
      {
      "name":"Corporal",
      "total":3689,
      "children" : [
      {"name" : "1670s*", "Number" : 12},{"name" : "1680s*", "Number" : 215},{"name" : "1690s*", "Number" : 121},{"name" : "1700s*", "Number" : 29},{"name" : "1710s*", "Number" : 243},{"name" : "1720s", "Number" : 116},{"name" : "1730s", "Number" : 58},{"name" : "1740s", "Number" : 128},{"name" : "1750s", "Number" : 120},{"name" : "1760s", "Number" : 134},{"name" : "1770s", "Number" : 315},{"name" : "1780s", "Number" : 546},{"name" : "1790s", "Number" : 235},{"name" : "1800s", "Number" : 238},{"name" : "1810s", "Number" : 268},{"name" : "1820s", "Number" : 643},{"name" : "1830s", "Number" : 220},{"name" : "1840s", "Number" : 28},{"name" : "1850s", "Number" : 1},{"name" : "1860s", "Number" : 0},{"name" : "1870s", "Number" : 1},{"name" : "1880s", "Number" : 4},{"name" : "1890s", "Number" : 12},{"name" : "1900s", "Number" : 2},{"name" : "1910s*", "Number" : 0}
      ]
      },
      {
      "name":"Death",
      "total":12098,
      "children" : [
      {"name" : "1670s*", "Number" : 92},{"name" : "1680s*", "Number" : 465},{"name" : "1690s*", "Number" : 538},{"name" : "1700s*", "Number" : 86},{"name" : "1710s*", "Number" : 424},{"name" : "1720s", "Number" : 485},{"name" : "1730s", "Number" : 503},{"name" : "1740s", "Number" : 503},{"name" : "1750s", "Number" : 674},{"name" : "1760s", "Number" : 760},{"name" : "1770s", "Number" : 1066},{"name" : "1780s", "Number" : 1248},{"name" : "1790s", "Number" : 683},{"name" : "1800s", "Number" : 683},{"name" : "1810s", "Number" : 1317},{"name" : "1820s", "Number" : 1500},{"name" : "1830s", "Number" : 715},{"name" : "1840s", "Number" : 61},{"name" : "1850s", "Number" : 52},{"name" : "1860s", "Number" : 43},{"name" : "1870s", "Number" : 37},{"name" : "1880s", "Number" : 37},{"name" : "1890s", "Number" : 44},{"name" : "1900s", "Number" : 61},{"name" : "1910s*", "Number" : 21}
      ]
      },
      {
      "name":"Miscellaneous",
      "total":5563,
      "children": [
      {"name" : "1670s*", "Number" : 47},{"name" : "1680s*", "Number" : 438},{"name" : "1690s*", "Number" : 531},{"name" : "1700s*", "Number" : 76},{"name" : "1710s*", "Number" : 395},{"name" : "1720s", "Number" : 216},{"name" : "1730s", "Number" : 104},{"name" : "1740s", "Number" : 98},{"name" : "1750s", "Number" : 112},{"name" : "1760s", "Number" : 119},{"name" : "1770s", "Number" : 164},{"name" : "1780s", "Number" : 74},{"name" : "1790s", "Number" : 109},{"name" : "1800s", "Number" : 87},{"name" : "1810s", "Number" : 287},{"name" : "1820s", "Number" : 507},{"name" : "1830s", "Number" : 180},{"name" : "1840s", "Number" : 103},{"name" : "1850s", "Number" : 89},{"name" : "1860s", "Number" : 141},{"name" : "1870s", "Number" : 128},{"name" : "1880s", "Number" : 287},{"name" : "1890s", "Number" : 479},{"name" : "1900s", "Number" : 530},{"name" : "1910s*", "Number" : 262}
      ]
      },
      {
      "name":"No Punishment",
      "total":4543,
      "children": [
      {"name" : "1670s*", "Number" : 6},{"name" : "1680s*", "Number" : 178},{"name" : "1690s*", "Number" : 170},{"name" : "1700s*", "Number" : 2},{"name" : "1710s*", "Number" : 60},{"name" : "1720s", "Number" : 3},{"name" : "1730s", "Number" : 5},{"name" : "1740s", "Number" : 17},{"name" : "1750s", "Number" : 31},{"name" : "1760s", "Number" : 14},{"name" : "1770s", "Number" : 49},{"name" : "1780s", "Number" : 72},{"name" : "1790s", "Number" : 164},{"name" : "1800s", "Number" : 90},{"name" : "1810s", "Number" : 509},{"name" : "1820s", "Number" : 307},{"name" : "1830s", "Number" : 345},{"name" : "1840s", "Number" : 278},{"name" : "1850s", "Number" : 265},{"name" : "1860s", "Number" : 252},{"name" : "1870s", "Number" : 285},{"name" : "1880s", "Number" : 456},{"name" : "1890s", "Number" : 622},{"name" : "1900s", "Number" : 261},{"name" : "1910s*", "Number" : 102}
      ]
      },
      {
      "name":"Transportation",
      "total":36403,
      "children" : [
      {"name" : "1670s*", "Number" : 4},{"name" : "1680s*", "Number" : 168},{"name" : "1690s*", "Number" : 74},{"name" : "1700s*", "Number" : 6},{"name" : "1710s*", "Number" : 180},{"name" : "1720s", "Number" : 1555},{"name" : "1730s", "Number" : 1464},{"name" : "1740s", "Number" : 1275},{"name" : "1750s", "Number" : 1393},{"name" : "1760s", "Number" : 1719},{"name" : "1770s", "Number" : 1358},{"name" : "1780s", "Number" : 1915},{"name" : "1790s", "Number" : 1424},{"name" : "1800s", "Number" : 1628},{"name" : "1810s", "Number" : 3414},{"name" : "1820s", "Number" : 5509},{"name" : "1830s", "Number" : 7102},{"name" : "1840s", "Number" : 5121},{"name" : "1850s", "Number" : 1094},{"name" : "1860s", "Number" : 0},{"name" : "1870s", "Number" : 0},{"name" : "1880s", "Number" : 0},{"name" : "1890s", "Number" : 0},{"name" : "1900s", "Number" : 0},{"name" : "1910s*", "Number" : 0}
      ]
      },
      {
      "name":"Imprisonment",
      "total":69540,
      "children": [
      {"name" : "1670s*", "Number" : 0},{"name" : "1680s*", "Number" : 2},{"name" : "1690s*", "Number" : 3},{"name" : "1700s*", "Number" : 3},{"name" : "1710s*", "Number" : 6},{"name" : "1720s", "Number" : 11},{"name" : "1730s", "Number" : 4},{"name" : "1740s", "Number" : 1},{"name" : "1750s", "Number" : 3},{"name" : "1760s", "Number" : 0},{"name" : "1770s", "Number" : 316},{"name" : "1780s", "Number" : 445},{"name" : "1790s", "Number" : 107},{"name" : "1800s", "Number" : 220},{"name" : "1810s", "Number" : 729},{"name" : "1820s", "Number" : 3699},{"name" : "1830s", "Number" : 7234},{"name" : "1840s", "Number" : 13131},{"name" : "1850s", "Number" : 8182},{"name" : "1860s", "Number" : 7677},{"name" : "1870s", "Number" : 5855},{"name" : "1880s", "Number" : 7356},{"name" : "1890s", "Number" : 6213},{"name" : "1900s", "Number" : 6245},{"name" : "1910s*", "Number" : 2098}
      ]
      }
    ]
    },
      {
      "name" : "indeterminate",
      "children" : [
        {
        "name":"multiple punishments",
        "total":18,
        "children": [
        {"name" : "1670s*", "Number" : 2},{"name" : "1680s*", "Number" : 0},{"name" : "1690s*", "Number" : 0},{"name" : "1700s*", "Number" : 0},{"name" : "1710s*", "Number" : 1},{"name" : "1720s", "Number" : 1},{"name" : "1730s", "Number" : 2},{"name" : "1740s", "Number" : 0},{"name" : "1750s", "Number" : 1},{"name" : "1760s", "Number" : 0},{"name" : "1770s", "Number" : 2},{"name" : "1780s", "Number" : 0},{"name" : "1790s", "Number" : 0},{"name" : "1810s", "Number" : 1},{"name" : "1820s", "Number" : 0},{"name" : "1830s", "Number" : 1},{"name" : "1840s", "Number" : 2},{"name" : "1850s", "Number" : 1},{"name" : "1860s", "Number" : 0},{"name" : "1870s", "Number" : 1},{"name" : "1880s", "Number" : 1},{"name" : "1890s", "Number" : 1},{"name" : "1900s", "Number" : 0},{"name" : "1910s*", "Number" : 1}
        ]
        },
        {
        "name":"Corporal",
        "total":13,
        "children": [
        {"name" : "1670s*", "Number" : 1},{"name" : "1680s*", "Number" : 0},{"name" : "1690s*", "Number" : 0},{"name" : "1700s*", "Number" : 0},{"name" : "1710s*", "Number" : 5},{"name" : "1720s", "Number" : 1},{"name" : "1730s", "Number" : 0},{"name" : "1740s", "Number" : 4},{"name" : "1750s", "Number" : 1},{"name" : "1760s", "Number" : 0},{"name" : "1770s", "Number" : 0},{"name" : "1780s", "Number" : 0},{"name" : "1790s", "Number" : 0},{"name" : "1810s", "Number" : 0},{"name" : "1820s", "Number" : 0},{"name" : "1830s", "Number" : 0},{"name" : "1840s", "Number" : 1},{"name" : "1850s", "Number" : 0},{"name" : "1860s", "Number" : 0},{"name" : "1870s", "Number" : 0},{"name" : "1880s", "Number" : 0},{"name" : "1890s", "Number" : 0},{"name" : "1900s", "Number" : 0},{"name" : "1910s*", "Number" : 0}
        ]
        },
        {
        "name":"Death",
        "total":31,
        "children": [
        {"name" : "1670s*", "Number" : 5},{"name" : "1680s*", "Number" : 1},{"name" : "1690s*", "Number" : 0},{"name" : "1700s*", "Number" : 0},{"name" : "1710s*", "Number" : 10},{"name" : "1720s", "Number" : 0},{"name" : "1730s", "Number" : 4},{"name" : "1740s", "Number" : 2},{"name" : "1750s", "Number" : 4},{"name" : "1760s", "Number" : 0},{"name" : "1770s", "Number" : 0},{"name" : "1780s", "Number" : 0},{"name" : "1790s", "Number" : 0},{"name" : "1810s", "Number" : 0},{"name" : "1820s", "Number" : 0},{"name" : "1830s", "Number" : 2},{"name" : "1840s", "Number" : 0},{"name" : "1850s", "Number" : 0},{"name" : "1860s", "Number" : 1},{"name" : "1870s", "Number" : 0},{"name" : "1880s", "Number" : 0},{"name" : "1890s", "Number" : 0},{"name" : "1900s", "Number" : 1},{"name" : "1910s*", "Number" : 1}
        ]
        },
        {
        "name":"Miscellaneous",
        "total":62,
        "children": [
        {"name" : "1670s*", "Number" : 5},{"name" : "1680s*", "Number" : 2},{"name" : "1690s*", "Number" : 4},{"name" : "1700s*", "Number" : 0},{"name" : "1710s*", "Number" : 17},{"name" : "1720s", "Number" : 5},{"name" : "1730s", "Number" : 2},{"name" : "1740s", "Number" : 4},{"name" : "1750s", "Number" : 2},{"name" : "1760s", "Number" : 0},{"name" : "1770s", "Number" : 0},{"name" : "1780s", "Number" : 0},{"name" : "1790s", "Number" : 0},{"name" : "1810s", "Number" : 0},{"name" : "1820s", "Number" : 0},{"name" : "1830s", "Number" : 1},{"name" : "1840s", "Number" : 2},{"name" : "1850s", "Number" : 2},{"name" : "1860s", "Number" : 3},{"name" : "1870s", "Number" : 1},{"name" : "1880s", "Number" : 3},{"name" : "1890s", "Number" : 0},{"name" : "1900s", "Number" : 7},{"name" : "1910s*", "Number" : 2}
        ]
        },
        {
        "name":"No Punishment",
        "total":26,
        "children" : [
        {"name" : "1670s*", "Number" : 0},{"name" : "1680s*", "Number" : 0},{"name" : "1690s*", "Number" : 4},{"name" : "1700s*", "Number" : 0},{"name" : "1710s*", "Number" : 0},{"name" : "1720s", "Number" : 0},{"name" : "1730s", "Number" : 0},{"name" : "1740s", "Number" : 0},{"name" : "1750s", "Number" : 0},{"name" : "1760s", "Number" : 0},{"name" : "1770s", "Number" : 0},{"name" : "1780s", "Number" : 0},{"name" : "1790s", "Number" : 0},{"name" : "1810s", "Number" : 0},{"name" : "1820s", "Number" : 0},{"name" : "1830s", "Number" : 1},{"name" : "1840s", "Number" : 7},{"name" : "1850s", "Number" : 3},{"name" : "1860s", "Number" : 2},{"name" : "1870s", "Number" : 1},{"name" : "1880s", "Number" : 3},{"name" : "1890s", "Number" : 4},{"name" : "1900s", "Number" : 0},{"name" : "1910s*", "Number" : 1}
        ]
        },
        {
        "name":"Transportation",
        "total":111,
        "children" : [
        {"name" : "1670s*", "Number" : 0},{"name" : "1680s*", "Number" : 0},{"name" : "1690s*", "Number" : 0},{"name" : "1700s*", "Number" : 0},{"name" : "1710s*", "Number" : 4},{"name" : "1720s", "Number" : 7},{"name" : "1730s", "Number" : 32},{"name" : "1740s", "Number" : 9},{"name" : "1750s", "Number" : 9},{"name" : "1760s", "Number" : 2},{"name" : "1770s", "Number" : 1},{"name" : "1780s", "Number" : 1},{"name" : "1790s", "Number" : 0},{"name" : "1810s", "Number" : 0},{"name" : "1820s", "Number" : 1},{"name" : "1830s", "Number" : 11},{"name" : "1840s", "Number" : 28},{"name" : "1850s", "Number" : 6},{"name" : "1860s", "Number" : 0},{"name" : "1870s", "Number" : 0},{"name" : "1880s", "Number" : 0},{"name" : "1890s", "Number" : 0},{"name" : "1900s", "Number" : 0},{"name" : "1910s*", "Number" : 0}
        ]
        },
        {
        "name":"Imprisonment",
        "total":344,
        "children" : [
        {"name" : "1670s*", "Number" : 0},{"name" : "1680s*", "Number" : 0},{"name" : "1690s*", "Number" : 0},{"name" : "1700s*", "Number" : 0},{"name" : "1710s*", "Number" : 0},{"name" : "1720s", "Number" : 0},{"name" : "1730s", "Number" : 0},{"name" : "1740s", "Number" : 0},{"name" : "1750s", "Number" : 0},{"name" : "1760s", "Number" : 0},{"name" : "1770s", "Number" : 0},{"name" : "1780s", "Number" : 0},{"name" : "1790s", "Number" : 0},{"name" : "1810s", "Number" : 0},{"name" : "1820s", "Number" : 0},{"name" : "1830s", "Number" : 25},{"name" : "1840s", "Number" : 74},{"name" : "1850s", "Number" : 50},{"name" : "1860s", "Number" : 41},{"name" : "1870s", "Number" : 43},{"name" : "1880s", "Number" : 47},{"name" : "1890s", "Number" : 21},{"name" : "1900s", "Number" : 34},{"name" : "1910s*", "Number" : 9}
        ]
        }
      ]
      }
    ]
  }
});