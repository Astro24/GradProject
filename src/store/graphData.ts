export interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
}

export interface EdgeData {
  id: string;
  from: string;
  to: string;
}

export interface GraphData {
  vertices: VertexData[];
  edges: EdgeData[];
}

export const graphData: GraphData = {
  'vertices': [
    {
      "id": "v1",
      "objectName": null,
      "cx": 730.46875,
      "cy": 586
    },
    {
      "id": "v2",
      "objectName": null,
      "cx": 597.46875,
      "cy": 586
    },
    {
      "id": "v3",
      "objectName": null,
      "cx": 600.46875,
      "cy": 658
    },
    {
      "id": "v4",
      "objectName": null,
      "cx": 518.46875,
      "cy": 677
    },
    {
      "id": "v5",
      "objectName": null,
      "cx": 401.46875,
      "cy": 793
    },
    {
      "id": "v6",
      "objectName": "G136",
      "cx": 426.46875,
      "cy": 829
    }
  //   { 'id': 'v1', 'objectName': null, 'cx': 845.293, 'cy': 605.239 },
  //   { 'id': 'v2', 'objectName': null, 'cx': 1040.985, 'cy': 416.62 },
  //   { 'id': 'v3', 'objectName': null, 'cx': 1202.173, 'cy': 566.641 },
  //   { 'id': 'v4', 'objectName': null, 'cx': 1180.21, 'cy': 542.444 },
  //   { 'id': 'v5', 'objectName': "M250-8", 'cx': 1210.735, 'cy': 517.875 },
  //   // { 'id': 'v6', 'objectName': "OTG", 'cx': 1156.385, 'cy': 613.174 },
  //   { 'id': 'v7', 'objectName': null, 'cx': 1162.42, 'cy': 533.582 },
  //   { 'id': 'v8', 'objectName': null, 'cx': 1046.613, 'cy': 650.893 },
  //   { 'id': 'v9', 'objectName': "Graphics", 'cx': 1031.949, 'cy': 634.349 },
  //   { 'id': 'v10', 'objectName': null, 'cx': 968.515, 'cy': 730.952 },
  //   { 'id': 'v11', 'objectName': null, 'cx': 1072.245, 'cy': 628.568 },
  //   { 'id': 'v12', 'objectName': null, 'cx': 1161.545, 'cy': 719.935 },
  //   { 'id': 'v13', 'objectName': "OTG Group", 'cx': 1184.697, 'cy': 700.091 },
  //   { 'id': 'v14', 'objectName': null, 'cx': 1158.365, 'cy': 928.335 },
  //   { 'id': 'v15', 'objectName': null, 'cx': 1329.041, 'cy': 775.056 },
  //   { 'id': 'v16', 'objectName': null, 'cx': 1306.892, 'cy': 752.204 },
  //   { 'id': 'v17', 'objectName': "OT&SSD Manager", 'cx': 1323.767, 'cy': 736.032 },
  //   { 'id': 'v18', 'objectName': null, 'cx': 1188.601, 'cy': 903.889 },
  //   { 'id': 'v20', 'objectName': null, 'cx': 1272.231, 'cy': 824.118 },
  //   { 'id': 'v21', 'objectName': null, 'cx': 1305.362, 'cy': 799.029 },
  //   { 'id': 'v22', 'objectName': null, 'cx': 887.571, 'cy': 808.635 },
  //   { 'id': 'v23', 'objectName': null, 'cx':848.164, 'cy': 808.635 },
  //   { 'id': 'v24', 'objectName': "M210-G", 'cx':848.164, 'cy': 827.466 },
  //   { id: 'v25', objectName: null, cx: 848.164, cy: 827.466 },
  // { id: 'v26', objectName: "Director Office", cx: 1209.151, cy: 925.331 },
  // { id: 'v27', objectName: "HR Group", cx: 1321.017, cy: 813.38 },
  // { id: 'v28', objectName: null, cx: 1115.925, cy: 883.674 },
  // { id: 'v29', objectName: "ISA Team", cx: 1140.119, cy: 863.203 },
  // { id: 'v30', objectName: null, cx: 1029.066, cy: 791.429 },
  // { id: 'v31', objectName: "Buldg. Services Team", cx: 1011.171, cy: 807.768 },
  // { id: 'v32', objectName: null, cx: 1072.965, cy: 445.264 },
  // { id: 'v33', objectName: "Men Washroom 1", cx: 1058.703, cy: 457.427 },
  // { id: 'v34', objectName: null, cx: 1103.642, cy: 478.591 },
  // { id: 'v35', objectName: "Women Washroom 1", cx: 1089.932, cy: 491.859 },
  // { id: 'v36', objectName: null, cx: 736.495, cy: 505.224 },
  // { id: 'v37', objectName: null, cx: 618.961, cy: 602.841 },
  // { id: 'v38', objectName: null, cx: 431.683, cy: 414.631 },
  // { id: 'v39', objectName: null, cx: 420.761, cy: 422.003 },
  // { id: 'v40', objectName: "M280-8", cx: 406.017, cy: 403.709 },
  // { id: 'v45', objectName: "CS", cx: 406.117, cy: 403.809 }, // new point 
  // { id: 'v41', objectName: null, cx: 448.339, cy: 431.833 },
  // { id: 'v42', objectName: "Women Washroom 2", cx: 430.864, cy: 448.762 },
  // { id: 'v43', objectName: null, cx: 362.33, cy: 475.52 },
  // { id: 'v44', objectName: "Men Washroom 2", cx: 376.801, cy: 491.903 },


  // {
  //   "id": "v46",
  //   "objectName": null,
  //   "cx": 475.96875,
  //   "cy": 358
  // },
  // {
  //   "id": "v47",
  //   "objectName": "CS VP Office",
  //   "cx": 459.96875,
  //   "cy": 343
  // }, 

  // {
  //   "id": "v48",
  //   "objectName": null,
  //   "cx": 789.46875,
  //   "cy": 551
  // },
  // {
  //   "id": "v49",
  //   "objectName": "Housing Group",
  //   "cx": 808.46875,
  //   "cy": 531
  // },

  // {
  //   "id": "v50",
  //   "objectName": null,
  //   "cx": 556.46875,
  //   "cy": 544
  // },
  // {
  //   "id": "v51",
  //   "objectName": "Key Room",
  //   "cx": 541.46875,
  //   "cy": 556
  // },

  // {
  //   "id": "v53",
  //   "objectName": null,
  //   "cx": 540.7750015258789,
  //   "cy": 686.2000122070312
  // },
  // {
  //   "id": "v54",
  //   "objectName": null,
  //   "cx": 499.57500076293945,
  //   "cy": 732
  // },
  // {
  //   "id": "v55",
  //   "objectName": null,
  //   "cx": 357.57500076293945,
  //   "cy": 607
  // },
  // {
  //   "id": "v56",
  //   "objectName": null,
  //   "cx": 182.57500076293945,
  //   "cy": 776
  // },
  // {
  //   "id": "v57",
  //   "objectName": null,
  //   "cx": 162.57500076293945,
  //   "cy": 795
  // },
  // {
  //   "id": "v58",
  //   "objectName": null,
  //   "cx": 117.57500076293945,
  //   "cy": 761
  // },
  // {
  //   "id": "v59",
  //   "objectName": "CS Director Office",
  //   "cx": 94.57500076293945,
  //   "cy": 769.7999877929688
  // },

  //   {
  //     "id": "v60",
  //     "objectName": null,
  //     "cx": 667.9749984741211,
  //     "cy": 804.6000061035156
  //   },

  //   {
  //     "id": "v61",
  //     "objectName": "OSQA Group",
  //     "cx": 666.5750007629395,
  //     "cy": 830.2000122070312
  //   },
  

  //   {
  //     "id": "v63",
  //     "objectName": null,
  //     "cx": 512.5750007629395,
  //     "cy": 810
  //   },
  //   {
  //     "id": "v64",
  //     "objectName": null,
  //     "cx": 493.57500076293945,
  //     "cy": 863
  //   },
  //   {
  //     "id": "v65",
  //     "objectName": null,
  //     "cx": 453.57500076293945,
  //     "cy": 911
  //   },
  //   {
  //     "id": "v66",
  //     "objectName": "Haddle room OSQA",
  //     "cx": 455.57500076293945,
  //     "cy": 937.7999877929688
  //   }

  ],
  'edges': [
    // { 'id': 'e1', 'from': 'v1', 'to': 'v2' },
    // { 'id': 'e2', 'from': 'v2', 'to': 'v4' },
    // { 'id': 'e3', 'from': 'v4', 'to': 'v5' },
    // { 'id': 'e4', 'from': 'v4', 'to': 'v3' },
    // { 'id': 'e5', 'from': 'v3', 'to': 'v6' },
    // { 'id': 'e6', 'from': 'v10', 'to': 'v8' },
    // { 'id': 'e7', 'from': 'v8', 'to': 'v9' },
    // { 'id': 'e8', 'from': 'v7', 'to': 'v11' },
    // { 'id': 'e9', 'from': 'v11', 'to': 'v12' },
    // { 'id': 'e10', 'from': 'v12', 'to': 'v13' },
    // { 'id': 'e11', 'from': 'v10', 'to': 'v14' },
    // { 'id': 'e12', 'from': 'v14', 'to': 'v18' },
    // { 'id': 'e13', 'from': 'v18', 'to': 'v20' },
    // { 'id': 'e14', 'from': 'v20', 'to': 'v21' },
    // { 'id': 'e15', 'from': 'v21', 'to': 'v15' },
    // { 'id': 'e16', 'from': 'v15', 'to': 'v16' },
    // { 'id': 'e17', 'from': 'v16', 'to': 'v17' },
    // { 'id': 'e18', 'from': 'v1', 'to': 'v10' },
    // { 'id': 'e19', 'from': 'v8', 'to': 'v11' },
    // { 'id': 'e20', 'from': 'v2', 'to': 'v7' },
    // { 'id': 'e21', 'from': 'v7', 'to': 'v4' },
    // { 'id': 'e22', 'from': 'v22', 'to': 'v23' },
    // { 'id': 'e23', 'from': 'v23', 'to': 'v24' },
    // { 'id': 'e24', 'from': 'v10', 'to': 'v22' },
    // { 'id': 'e25', 'from': 'v10', 'to': 'v30' },
    // { 'id': 'e26', 'from': 'v30', 'to': 'v31' },
    // { 'id': 'e27', 'from': 'v30', 'to': 'v28' },
    // { 'id': 'e28', 'from': 'v28', 'to': 'v29' },
    // { 'id': 'e29', 'from': 'v18', 'to': 'v26' },
    // { 'id': 'e255', 'from': 'v39', 'to': 'v45' }, // new point 
    // { 'id': 'e30', 'from': 'v21', 'to': 'v27' },
    // { 'id': 'e31', 'from': 'v2', 'to': 'v32' },
    // { 'id': 'e32', 'from': 'v32', 'to': 'v33' },
    // { 'id': 'e33', 'from': 'v32', 'to': 'v34' },
    // { 'id': 'e34', 'from': 'v34', 'to': 'v35' },
    // { 'id': 'e35', 'from': 'v36', 'to': 'v37' },
    // { 'id': 'e36', 'from': 'v37', 'to': 'v41' },
    // { 'id': 'e37', 'from': 'v41', 'to': 'v42' },
    // { 'id': 'e38', 'from': 'v41', 'to': 'v38' },
    // { 'id': 'e39', 'from': 'v38', 'to': 'v39' },
    // { 'id': 'e40', 'from': 'v39', 'to': 'v40' },
    // { 'id': 'e41', 'from': 'v39', 'to': 'v43' },
    // { 'id': 'e42', 'from': 'v43', 'to': 'v44' },
    // { 'id': 'e43', 'from': 'v36', 'to': 'v1' },
    
    // {
    //   "id": "e47",
    //   "from": "v46",
    //   "to": "v47"
    
    // },
    // {
    //   "id": "e48",
    //   "from": "v38",
    //   "to": "v46"
    
    // },

    // {
    //   "id": "e49",
    //   "from": "v36",
    //   "to": "v48"
    // }, 

    // {
    //   "id": "e50",
    //   "from": "v48",
    //   "to": "v49"
    // },

    
    // {
    // "id": "e51",
    //  "from": "v37",
    //  "to": "v50"
    // },

    // {
    //   "id": "e52",
    //    "from": "v50",
    //    "to": "v51"
    //   },


    //   {
    //     "id": "e54",
    //     "from": "v37",
    //     "to": "v53"
    //   },

    //   {
    //     "id": "e55",
    //     "from": "v53",
    //     "to": "v54"
    //   },
    //   {
    //     "id": "e56",
    //     "from": "v54",
    //     "to": "v55"
    //   },
    //   {
    //     "id": "e57",
    //     "from": "v55",
    //     "to": "v56"
    //   },
    //   {
    //     "id": "e58",
    //     "from": "v56",
    //     "to": "v57"
    //   },
    //   {
    //     "id": "e59",
    //     "from": "v57",
    //     "to": "v58"
    //   },

    //   {
    //     "id": "e60",
    //     "from": "v58",
    //     "to": "v59"
    //   },

    //   {
    //     "id": "e61",
    //     "from": "v23",
    //     "to": "v60"
    //   },
    //   {
    //     "id": "e62",
    //     "from": "v60",
    //     "to": "v61"
    //   },
      
   
    //     {
    //   "id": "e63",
    //   "from": "v60",
    //   "to": "v63"
    // },
    // {
    //   "id": "e64",
    //   "from": "v63",
    //   "to": "v64"
    // },
    // {
    //   "id": "e65",
    //   "from": "v64",
    //   "to": "v65"
    // }
    {
      "id": "e1",
      "from": "v1",
      "to": "v2"
    },
    {
      "id": "e2",
      "from": "v2",
      "to": "v3"
    },
    {
      "id": "e3",
      "from": "v3",
      "to": "v4"
    },
    {
      "id": "e4",
      "from": "v4",
      "to": "v5"
    },
    {
      "id": "e5",
      "from": "v5",
      "to": "v6"
    }
    
  ]
};