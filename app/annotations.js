define(["require", "exports", "esri/geometry"], function (require, exports, geometry_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.annotations = [{
            begin: new Date(2020, 2, 17),
            end: new Date(2020, 3, 12),
            label: "New York ",
            geometry: geometry_1.Polygon.fromJSON({ "spatialReference": { "wkid": 102008 }, "rings": [[[1796244.7928750273, 277930.8168497575], [1786962.8438845025, 263657.2166295479], [1776831.4565748754, 249817.94112879643], [1765961.6325456412, 236564.6163459448], [1754472.4638635162, 224042.44848075038], [1742489.8282648558, 212388.63302477665], [1730145.010012791, 201730.85161887866], [1717573.2615194158, 192185.87314642046], [1704912.3214920415, 183858.27438896062], [1692300.9058390677, 176839.29426115355], [1679877.1878694994, 171205.83417809004], [1667777.2844372527, 167019.6155073188], [1656133.7646163807, 164326.5033366232], [1645074.1972466176, 163156.00396650756], [1634719.7532624197, 163520.9416330197], [1625183.8781188896, 165417.31800271646], [1616571.0488596116, 168824.35597924807], [1608975.629444307, 173704.72734157566], [1602480.83687752, 180004.96171976742], [1597157.829465739, 187656.03242757235], [1593064.927192081, 196574.11273322126], [1590246.9727503592, 206661.49428266188], [1588734.8402391109, 217807.65761271364], [1588545.096898576, 229890.48302545096], [1589679.8215965058, 242777.5885571576], [1592126.5820516462, 256327.78038282687], [1595858.5710444301, 270392.5997652585], [1600834.900122492, 284817.9496000432], [1607001.0475830862, 299445.78273569484], [1614289.455824287, 314115.8335713074], [1622620.27152019, 328667.3739600211], [1631902.220510714, 342940.9741802314], [1642033.6078203314, 356780.24968098174], [1652903.4318495702, 370033.57446383266], [1664392.600531693, 382555.7423290258], [1676375.236130354, 394209.5577849996], [1688720.0543824225, 404867.33919089806], [1701291.802875794, 414412.3176633557], [1713952.7429031734, 422739.9164208142], [1726564.158556138, 429758.8965486229], [1738987.8765257099, 435392.35663168627], [1751087.77995796, 439578.5753024568], [1762731.2997788307, 442271.6874731547], [1773790.867148595, 443442.1868432687], [1784145.3111327877, 443077.2491767564], [1793681.1862763185, 441180.8728070595], [1802294.0155355893, 437773.8348305295], [1809889.4349509012, 432893.46346820245], [1816384.2275176896, 426593.2290900081], [1821707.2349294676, 418942.15838220477], [1825800.1372031216, 410024.07807655446], [1828618.091644857, 399936.696527115], [1830130.2241561008, 388790.5331970625], [1830319.967496626, 376707.7077843265], [1829185.2427987033, 363820.60225261975], [1826738.4823435643, 350270.41042695125], [1823006.4933507708, 336205.59104452084], [1818030.1642727181, 321780.24120973545], [1811864.016812129, 307152.40807408385], [1804575.6085709329, 292482.35723847063], [1796244.7928750273, 277930.8168497578], [1796244.7928750273, 277930.8168497575]]] })
        }, {
            begin: new Date(2020, 4, 13),
            end: new Date(2020, 4, 22),
            label: "Midwest Outbreak",
            geometry: geometry_1.Polygon.fromJSON({ "spatialReference": { "wkid": 102008 }, "rings": [[[312139.31489543937, -136457.23987904092], [266664.6564812335, -213902.91530744595], [217619.230043447, -289048.02801492077], [165540.3875375608, -361069.2724215143], [110998.71566025427, -429177.5687020897], [54591.78438220886, -492626.7081100284], [-3062.4001535949646, -550721.5285963881], [-61332.16663645388, -602825.5311507941], [-119579.09931107258, -648367.853417801], [-177165.0325941001, -686849.5241843044], [-233459.04294984642, -717848.9302125835], [-287844.36142058915, -741026.4355231442], [-339725.1310763035, -756128.1025176024], [-388532.9353478808, -762988.4741721394], [-433733.02571804996, -761532.3868192834], [-474830.18053795944, -751775.7936567783], [-511374.1307793072, -733825.5899610077], [-542964.4932759199, -707878.4419199901], [-569255.1574055676, -674218.631917446], [-589958.0771503709, -633214.9438755364], [-604846.4269892529, -585316.6227810261], [-613757.0870457818, -531048.4526631804], [-616592.4302637028, -471005.0069501675], [-613321.3920293973, -405844.13419811474], [-603979.8105222622, -336279.75056467525], [-588670.0340641446, -263074.0179942325], [-567559.7997696793, -187028.99381210553], [-540880.3957834216, -108977.84321668414], [-508924.1272384587, -29775.710947131913], [-472041.11370023806, 49709.64786128769], [-430635.4531833725, 128607.37498408274], [-385160.7947691597, 206053.05041248683], [-336115.3683313675, 281198.16311995906], [-284036.5258254859, 353219.40752655076], [-229494.85394817934, 421327.7038071294], [-173087.92267013394, 484776.84321506746], [-115433.73813433584, 542871.6637014252], [-57163.97165146776, 594975.666255832], [1082.9610231463448, 640517.9885228376], [58668.894306169284, 678999.6592893415], [114962.90466191561, 709999.0653176183], [169348.22313266867, 733176.5706281797], [221228.99278837722, 748278.2376226383], [270036.7970599546, 755138.6092771754], [315236.88743012946, 753682.5219243198], [356334.04225004814, 743925.9287618136], [392877.99249138555, 725975.725066046], [424468.35498799593, 700028.5770250275], [450759.01911763794, 666368.7670224862], [471461.9388624494, 625365.0789805774], [486350.2887013267, 577466.7578860618], [495260.94875785557, 523198.5877682194], [498096.29197578225, 463155.14205520577], [494825.25374147797, 397994.26930315094], [485483.6722343359, 328429.88566971687], [470173.8957762149, 255224.15309927316], [449063.66148175887, 179179.1289171471], [422384.25749549543, 101127.97832172198], [390427.9889505337, 21925.8460521653], [353544.9754123175, -57559.512756250086], [312139.31489543937, -136457.23987904092]]] })
        }, {
            begin: new Date(2020, 5, 7),
            end: new Date(2020, 6, 13),
            label: "Arizona spikes",
            geometry: geometry_1.Polygon.fromJSON({ "spatialReference": { "wkid": 102008 }, "rings": [[[-1066217.3712800527, -571606.1107071708], [-1067948.5224066502, -604638.4419808928], [-1073123.008932433, -637308.8641207203], [-1081684.138100194, -669259.4331449638], [-1093538.1123872395, -700140.0919333074], [-1108555.057170677, -729612.5055258726], [-1126570.4436609615, -757353.7679918403], [-1147386.8915137434, -783059.940254401], [-1170776.331370226, -806449.3801108836], [-1196482.5036327867, -827265.8279636656], [-1224223.7660987545, -845281.2144539501], [-1253696.1796913198, -860298.1592373876], [-1284576.8384796632, -872152.133524433], [-1316527.4075039066, -880713.262692194], [-1349197.8296437343, -885887.7492179768], [-1382230.1609174563, -887618.9003445744], [-1415262.4921911783, -885887.7492179768], [-1447932.9143310057, -880713.262692194], [-1479883.483355249, -872152.133524433], [-1510764.1421435927, -860298.1592373876], [-1540236.5557361578, -845281.2144539503], [-1567977.8182021256, -827265.8279636656], [-1593683.9904646864, -806449.3801108836], [-1617073.430321169, -783059.940254401], [-1637889.878173951, -757353.7679918404], [-1655905.2646642355, -729612.5055258726], [-1670922.209447673, -700140.0919333072], [-1682776.1837347185, -669259.4331449637], [-1691337.3129024794, -637308.8641207201], [-1696511.7994282623, -604638.4419808927], [-1698242.9505548598, -571606.1107071706], [-1696511.7994282623, -538573.7794334484], [-1691337.3129024794, -505903.357293621], [-1682776.1837347182, -473952.78826937743], [-1670922.2094476728, -443072.1294810339], [-1655905.2646642353, -413599.7158884686], [-1637889.8781739506, -385858.45342250087], [-1617073.4303211686, -360152.2811599402], [-1593683.990464686, -336762.8413034576], [-1567977.8182021254, -315946.39345067577], [-1540236.5557361576, -297931.0069603913], [-1510764.1421435925, -282914.0621769539], [-1479883.483355249, -271060.0878899085], [-1447932.9143310057, -262498.9587221476], [-1415262.4921911783, -257324.47219636472], [-1382230.1609174563, -255593.32106976723], [-1349197.8296437343, -257324.47219636472], [-1316527.407503907, -262498.9587221476], [-1284576.8384796637, -271060.08788990846], [-1253696.17969132, -282914.0621769538], [-1224223.766098755, -297931.00696039124], [-1196482.5036327874, -315946.39345067565], [-1170776.3313702266, -336762.8413034575], [-1147386.8915137441, -360152.28115994006], [-1126570.443660962, -385858.4534225006], [-1108555.0571706775, -413599.71588846814], [-1093538.11238724, -443072.12948103325], [-1081684.1381001943, -473952.7882693767], [-1073123.0089324333, -505903.35729362007], [-1067948.5224066502, -538573.7794334474], [-1066217.3712800527, -571606.1107071693], [-1066217.3712800527, -571606.1107071708]]] })
        }, {
            begin: new Date(2020, 5, 24),
            end: new Date(2020, 6, 13),
            label: "Texas surge",
            geometry: geometry_1.Polygon.fromJSON({ "spatialReference": { "wkid": 102008 }, "rings": [[[463620.9113665279, -1210446.744446077], [460054.49772966467, -1254941.4667151738], [449394.33119319007, -1298948.6954959682], [431757.2067724597, -1341986.27838084], [407336.3604934374, -1383582.686605501], [376399.3522583563, -1423282.1812168472], [339285.1344034113, -1460649.8062442546], [296400.3380660722, -1495276.1541682375], [248214.8180492418, -1526781.8514749166], [195256.50499368273, -1554821.7151516145], [138105.6212594658, -1579088.5345841674], [77388.32388839778, -1599316.437420717], [13769.844296362251, -1615283.8025248144], [-52052.800141201355, -1626815.6881029978], [-119358.44275754597, -1633785.7484036805], [-187409.6688475823, -1636117.6179876165], [-255460.8949376084, -1633785.7484036805], [-322766.53755396046, -1626815.6881029978], [-388589.18199152034, -1615283.8025248144], [-452207.6615835568, -1599316.437420717], [-512924.9589546425, -1579088.5345841674], [-570075.8426888455, -1554821.7151516145], [-623034.1557444073, -1526781.8514749166], [-671219.675761248, -1495276.1541682375], [-714104.472098575, -1460649.8062442546], [-751218.6899535293, -1423282.1812168472], [-782155.6981886094, -1383582.686605501], [-806576.5444676252, -1341986.27838084], [-824213.6688883519, -1298948.6954959682], [-834873.8354248255, -1254941.4667151738], [-838440.2490616897, -1210446.744446077], [-834873.8354248255, -1165952.0221769786], [-824213.6688883519, -1121944.7933961777], [-806576.5444676252, -1078907.2105113044], [-782155.6981886094, -1037310.8022866426], [-751218.6899535293, -997611.3076753039], [-714104.472098575, -960243.6826479025], [-671219.675761248, -925617.3347239103], [-623034.1557444073, -894111.6374172373], [-570075.8426888455, -866071.7737405398], [-512924.9589546425, -841804.9543079901], [-452207.6615835568, -821577.0514714406], [-388589.18199152034, -805609.6863673441], [-322766.53755396046, -794077.8007891551], [-255460.8949376084, -787107.740488477], [-187409.6688475823, -784775.8709045392], [-119358.44275754597, -787107.740488477], [-52052.800141201355, -794077.8007891551], [13769.844296362251, -805609.6863673441], [77388.32388839778, -821577.0514714406], [138105.6212594658, -841804.9543079901], [195256.50499368273, -866071.7737405398], [248214.8180492418, -894111.6374172373], [296400.3380660722, -925617.3347239103], [339285.1344034113, -960243.6826479025], [376399.3522583563, -997611.3076753039], [407336.3604934374, -1037310.8022866426], [431757.2067724597, -1078907.2105113044], [449394.33119319007, -1121944.7933961777], [460054.49772966467, -1165952.0221769717], [463620.9113665279, -1210446.744446077]]] })
        }, {
            begin: new Date(2020, 5, 24),
            end: new Date(2020, 6, 13),
            label: "Florida Surge",
            geometry: geometry_1.Polygon.fromJSON({ "spatialReference": { "wkid": 102008 }, "rings": [[[1678440.3313840367, -1539190.8908058095], [1713894.9988214686, -1720995.2722021742], [959832.7944621877, -1553316.496477963], [743568.365088948, -1344516.7363895099], [742523.5123223022, -1343471.883622864], [739931.4737281234, -1340879.8450286852], [736133.8357878146, -1334208.8619801006], [735018.6563926446, -1329547.2111750655], [734807.6765070718, -1327849.325429266], [734385.7167359265, -1323931.1275543445], [733923.5703199101, -1320676.0093197941], [732979.1841654419, -1313020.4534718704], [732476.8511045545, -1307645.4897203753], [730658.405424142, -1295890.8960956102], [729332.2461433993, -1289511.2662223405], [727182.2606428012, -1266645.0652907463], [728076.4134911809, -1246210.1563738473], [728689.2598254634, -1235209.0623404135], [730889.4786321502, -1211478.848544093], [730889.4786321502, -1199613.741645933], [730889.4786321502, -1182474.137608455], [730618.218779271, -1175391.2414499428], [730618.218779271, -1162842.9615889757], [730618.218779271, -1157136.458017295], [730618.218779271, -1146708.0236732727], [730377.0989100451, -1142578.8459127785], [729904.905832811, -1135194.5499177338], [729663.7859635849, -1131065.3721572394], [729422.666094359, -1123379.6763256623], [729422.666094359, -1119551.8984017004], [729422.666094359, -1111293.5428807116], [729422.666094359, -1108038.4246461615], [729422.666094359, -1103909.246885667], [729422.666094359, -1096253.6910377431], [729653.7393023672, -1093802.3057006127], [730799.0586811905, -1088377.108643029], [731733.398174441, -1085121.9904084785], [732908.8575369176, -1081866.8721739284], [735048.796376298, -1074753.8360317629], [736535.7022365246, -1070574.4249651798], [739348.7673774939, -1064466.054944789], [741197.3530415595, -1061944.3429791343], [743236.8252687624, -1060135.9439599398], [747546.8429311761, -1056750.2191295587], [749315.0553054998, -1055434.1065100338], [753886.286159575, -1051566.141941201], [756156.8315947859, -1049757.7429220062], [758146.0705159002, -1048662.6568492719], [761843.2418440313, -1046502.624687456], [763551.1742510484, -1046080.6649163105], [764575.9336952588, -1045678.7984676006], [766625.4525836792, -1045477.8652432456], [768333.3849906963, -1044844.9255865276], [773838.9553380222, -1043709.652868922], [868177.1041726742, -1031934.9659217215], [871171.0092155631, -1031934.9659217215], [872647.868414572, -1031934.9659217215], [874697.3873029926, -1031734.0326973666], [876405.3197100097, -1031523.0528117939], [878605.5385166965, -1031312.0729262212], [882774.902922062, -1030880.066493858], [884734.0018595227, -1030669.0866082853], [886210.8610585316, -1030468.1533839303], [888481.4064937427, -1030468.1533839303], [890440.5054312034, -1030468.1533839303], [895363.3694278998, -1030247.12683714], [897071.3018349172, -1030247.12683714], [899793.9470249268, -1030026.1002903495], [902255.3790232749, -1029805.0737435591], [910232.4280301668, -1029332.8806663249], [914371.6524518789, -1029332.8806663249], [919756.6628645917, -1029332.8806663249], [930215.2371922671, -1029594.0938579863], [935931.7874251655, -1030116.5202413092], [940372.4116834102, -1030116.5202413092], [945837.795385865, -1030116.5202413092], [948560.4405758746, -1030116.5202413092], [952106.9119857396, -1030116.5202413092], [962886.9794723832, -1030638.9466246321], [967026.2038940953, -1030890.1131550758], [972089.7211478401, -1031151.3263467372], [976530.3454060846, -1031402.4928771809], [984537.5343966295, -1031653.6594076246], [988978.1586548742, -1031904.8259380683], [994041.6759086191, -1032166.0391297297], [999758.2261415175, -1032427.2523213913], [1010538.2936281611, -1032688.4655130527], [1016586.3836812451, -1032959.7253659319], [1022302.9339141438, -1033220.9385575933], [1027044.9580089208, -1033472.105088037], [1034147.9474898684, -1033472.105088037], [1038287.1719115805, -1033472.105088037], [1043029.1960063574, -1033472.105088037], [1046867.0205915372, -1033472.105088037], [1061454.772679707, -1033763.4582633517], [1069281.1217683326, -1034044.7647774486], [1075329.2118214169, -1034577.2378219892], [1082422.1546411468, -1034858.5443360861], [1098446.5792834545, -1036556.4300818855], [1109035.7602069606, -1037470.6762527006], [1117615.6088869174, -1038334.6891174269], [1128204.7898104235, -1038947.5354517095], [1137970.1445140745, -1039540.2884635567], [1154074.9424461243, -1039841.6883000891], [1160123.0324992083, -1039841.6883000891], [1165839.582732107, -1039841.6883000891], [1171224.5931448198, -1039590.5217696454], [1181351.6276523096, -1038847.0688395321], [1187068.177885208, -1038073.4759257655], [1192784.7281181065, -1037299.8830119988], [1197848.2453718516, -1036546.3834206678], [1201113.4102676196, -1036084.2370046515], [1204951.2348527992, -1035612.0439274173], [1213832.4833692883, -1033401.7784595127], [1217971.7077910004, -1032437.298982609], [1222713.7318857773, -1031191.5129916082], [1228430.282118676, -1029895.4936945187], [1234146.8323515742, -1029121.9007807522], [1242425.2811949984, -1028408.5878342921], [1245690.4460907667, -1027946.4414182757], [1248684.3511336553, -1027263.2684554688], [1252230.8225435205, -1026791.0753782346], [1259665.351844654, -1025123.3296160885], [1264728.8690983988, -1024118.6634943137], [1270776.9591514831, -1023073.810727668], [1275217.5834097276, -1022340.4044587724], [1280281.1006634724, -1021586.9048674413], [1284118.9252486522, -1021114.7117902072], [1286841.5704386616, -1020441.585488618], [1289564.2156286715, -1019768.4591870289], [1292025.6476270198, -1019326.406093448], [1295019.5526699084, -1018643.2331306412], [1297480.9846682567, -1017980.1534902698], [1299681.2034749435, -1017106.0939643257], [1301158.0626739524, -1016483.2009688254], [1303117.1616114131, -1015840.2146508895], [1304825.0940184304, -1014996.2951085988], [1306533.0264254473, -1014574.3353374533], [1308009.8856244562, -1014162.4222275256], [1309968.9845619174, -1013519.4359095898], [1311676.9169689342, -1012886.4962528717], [1313173.869490379, -1011821.5501637904], [1314439.7488038149, -1010987.6772827173], [1315705.6281172512, -1009942.8245160716], [1316991.600753123, -1008666.8985414176], [1318257.4800665593, -1007622.0457747718], [1319523.3593799956, -1006577.193008126], [1320558.1654854235, -1005753.3667882708], [1321824.0447988599, -1004919.4939071976], [1323089.9241122957, -1004085.6210261246], [1324114.6835565064, -1003482.8213530597], [1324707.4365683533, -1003091.0015655676], [1325300.1895802002, -1002699.1817780754], [1325692.0093676927, -1002317.408651801], [1325882.89593083, -1002136.5687498815], [1326073.782493967, -1001955.728847962], [1326264.6690571043, -1001955.728847962], [1326455.5556202414, -1001774.8889460426], [1326847.3754077335, -1001584.0023829053], [1328093.1613987344, -1001383.0691585505], [1332523.7389957611, -1001172.0892729777], [1334985.1709941095, -1001172.0892729777], [1337707.8161841189, -1001172.0892729777], [1339415.7485911362, -1001172.0892729777], [1341374.8475285969, -1001172.0892729777], [1342851.7067276058, -1001383.0691585505], [1344097.4927186067, -1001383.0691585505], [1345343.2787096072, -1001383.0691585505], [1347051.2111166245, -1001383.0691585505], [1349251.4299233113, -1001604.0957053408], [1351712.8619216597, -1001835.168913349], [1354435.507111669, -1002749.4150841641], [1357198.3389465497, -1003904.7811242051], [1360232.4306343095, -1005542.386902698], [1363598.0621422553, -1007461.2991952879], [1367847.7998373625, -1009711.7513080634], [1370881.8915251223, -1011349.3570865563], [1375131.6292202296, -1013850.9757297755], [1379130.2003848935, -1016603.7609034383], [1387127.3427142208, -1022099.2845895464], [1389699.2879859642, -1024199.0367840558], [1396028.684553145, -1029805.0737435591], [1400077.4890238973, -1032849.2120925366], [1402960.8807933913, -1035491.4839928043], [1410204.523531387, -1041740.5072702435], [1413700.7616351633, -1045236.7453740197], [1416584.1534046573, -1047879.0172742874], [1420040.2048635622, -1050842.782333523], [1428680.3335108254, -1059472.8643195685], [1432176.5716146016, -1062969.1024233447], [1441449.639918583, -1073548.2366856332], [1444232.565075899, -1077848.2076868291], [1446483.0171886748, -1082097.9453819366], [1448643.0493504903, -1085463.576889882], [1450833.2214959594, -1089110.5149119245], [1453515.680041098, -1092275.213195515], [1457011.9181448743, -1095771.4512992913], [1467520.7257786389, -1104140.3200936753], [1475296.8415611754, -1110720.8831913], [1495510.7239312842, -1125559.8018099137], [1508511.1035470497, -1135485.9030930484], [1529247.4123004815, -1150475.5216299281], [1536641.7549567437, -1157287.1579355611], [1543453.3912623767, -1164390.147416509], [1566490.3854346727, -1190210.0667461208], [1577310.6395661868, -1203471.659553548], [1585126.9419935946, -1212533.7479719566], [1594158.8904283498, -1222530.1758836156], [1603411.8654098958, -1231461.6577061934], [1612855.726954579, -1241558.55223003], [1619737.6898887362, -1249334.6680125669], [1626900.95933699, -1261059.1216536786], [1632969.1427125097, -1272542.4554255644], [1638133.126578432, -1284789.335449999], [1641358.1048293295, -1293861.4705296252], [1646672.7886135178, -1307484.7431408912], [1654720.164248934, -1325759.6198959746], [1664656.3121932866, -1346395.4620372287], [1674130.3137216228, -1366468.6911502888], [1680288.9170481022, -1381528.636315693], [1684870.1945633953, -1398788.8002877836], [1686517.847003106, -1412934.4992823724], [1686236.5404890087, -1432565.6753018517], [1685302.2009957582, -1444440.8288612298], [1682549.4158220952, -1495256.841300598], [1681594.9830064094, -1508016.101047138], [1680057.8438400938, -1519449.2015129349], [1678440.3313840367, -1539190.8908058095], [1678440.3313840367, -1535925.7259100415], [1678440.3313840367, -1539190.8908058095]]] })
        }];
});
//# sourceMappingURL=annotations.js.map