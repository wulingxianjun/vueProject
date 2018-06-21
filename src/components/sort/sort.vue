<template>
  <div id="c_sort">
     <header id="c_header">
         <i class="fa fa-qrcode"></i>
         <div class="h_search">
             <i class="fa fa-search"></i>
             <input type="search" value="搜索"/>
         </div>
         <i class="fa fa-commenting-o"></i>
     </header>
     <main id="s_main">
        <div class="m_left">
             <ul class="lists" @click="tz">
                 <li title="1">为你推荐</li>
                 <li title="2" class="active">数码家电</li>
                 <li title="3">服饰鞋靴</li>
                 <li title="4">个人洗护</li>
                 <li title="5">美容彩妆</li>
                 <li title="6">营养保健</li>
                 <li title="7">家居生活</li>
                 <li title="8">品牌墙</li>
                 <li title="9">运动户外</li>
                 <li title="10">轻奢</li>
                 <li title="11">为你推荐</li>
                 <li title="12">品牌墙</li>
                 <li title="13">运动户外</li>
                 <li title="14">母婴专区</li>
                 <li title="15">营养保健</li>
                 <li title="16">个人洗护</li>
                 <li title="17">家居生活</li>
                 <li title="18">数码家电</li>
                 <li title="19">运动户外</li>
                 <li title="20">轻奢</li>
             </ul>
        </div>
        <div class="m_right" @click="t_list">
            <div class="m_goods">
                <h4>为你推荐</h4>
                <ul>
                    <li>
                        <img src="src/images/sport_1_01.jpg"/>
                        <p>NIKE</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_02.jpg"/>
                        <p>adidas</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_03.jpg"/>
                        <p>asics</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_04.jpg"/>
                        <p>Marmot</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_05.jpg"/>
                        <p>SKECHERS</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_06.jpg"/>
                        <p>KEEN</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_07.jpg"/>
                        <p>patagonia</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_08.jpg"/>
                        <p>Osprey</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_09.jpg"/>
                        <p>GREGORY</p>
                    </li>
                </ul>
            </div>
            <div class="m_sort">
                <h4>热门分类</h4>
                <ul>
                    <li>
                        <img src="src/images/elet_2_01.jpg"/>
                        <p>手机数码</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_02.jpg"/>
                        <p>耳机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_03.jpg"/>
                        <p>相机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_04.jpg"/>
                        <p>音响</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_05.jpg"/>
                        <p>平板</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_06.jpg"/>
                        <p>剃须刀</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_07.jpg"/>
                        <p>电饭煲</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_08.jpg"/>
                        <p>榨汁机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_09.jpg"/>
                        <p>扫地机器人</p>
                    </li>
                </ul>
            </div>
            <div class="m_goods">
                <h4>数码家电</h4>
                <ul>
                    <li>
                        <img src="src/images/elet_1_01.jpg"/>
                        <p>PHILIPS</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_02.jpg"/>
                        <p>Apple</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_03.jpg"/>
                        <p>LAMY</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_04.jpg"/>
                        <p>Hurom</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_05.jpg"/>
                        <p>iRobot</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_06.jpg"/>
                        <p>Panasonic</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_07.jpg"/>
                        <p>beats</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_08.jpg"/>
                        <p>dyson</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_09.jpg"/>
                        <p>Canon</p>
                    </li>
                </ul>
            </div>
            <div class="m_sort">    
                <h4>数码电器</h4>
                <ul>
                    <li>
                        <img src="src/images/elet_2_01.jpg"/>
                        <p>手机数码</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_02.jpg"/>
                        <p>耳机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_03.jpg"/>
                        <p>相机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_04.jpg"/>
                        <p>音响</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_05.jpg"/>
                        <p>平板</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_06.jpg"/>
                        <p>剃须刀</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_07.jpg"/>
                        <p>电饭煲</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_08.jpg"/>
                        <p>榨汁机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_09.jpg"/>
                        <p>扫地机器人</p>
                    </li>
                </ul>
            </div>
            <div class="m_goods">
                <h4>服饰鞋靴</h4>
                <ul>
                    <li>
                        <img src="src/images/cloth_1_01.jpg"/>
                        <p>MO&amp</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_02.jpg"/>
                        <p>Five Plus</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_03.jpg"/>
                        <p>La Chapelle</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_04.jpg"/>
                        <p>Triumph</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_05.jpg"/>
                        <p>Wacoal</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_06.jpg"/>
                        <p>Aimer</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_07.jpg"/>
                        <p>Calvin Klein</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_08.jpg"/>
                        <p>GXG</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_09.jpg"/>
                        <p>BeLLE</p>
                    </li>
                </ul>
            </div>
            <div class="m_sort">    
                <h4>气质女装</h4>
                <ul>
                    <li>
                        <img src="src/images/cloth_2_01.jpg"/>
                        <p>连衣裙</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_02.jpg"/>
                        <p>T恤</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_03.jpg"/>
                        <p>衬衫</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_04.jpg"/>
                        <p>卫衣</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_05.jpg"/>
                        <p>半身裙</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_06.jpg"/>
                        <p>裤装</p>
                    </li>
                </ul>
                <h4>型格男装</h4>
                <ul>
                    <li>
                        <img src="src/images/cloth_2_07.jpg" alt="" />
                        <p>T恤</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_08.jpg" alt="" />
                        <p>衬衫</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_09.jpg" alt="" />
                        <p>针织衫</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_10.jpg" alt="" />
                        <p>POLO衫</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_11.jpg" alt="" />
                        <p>夹克</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_12.jpg" alt="" />
                        <p>裤装</p>
                    </li>
                </ul>
            </div>
            <div class="m_goods">
                <h4>个人洗护</h4>
                <ul>
                    <li>
                        <img src="src/images/makeup_1_01.jpg"/>
                        <p>SK-II</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_02.jpg"/>
                        <p>雅诗兰黛</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_03.jpg"/>
                        <p>兰蔻</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_04.jpg"/>
                        <p>MEDIHEAL</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_05.jpg"/>
                        <p>Dior</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_06.jpg"/>
                        <p>POLA</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_07.jpg"/>
                        <p>CHANEL</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_08.jpg"/>
                        <p>HERMES</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_09.jpg"/>
                        <p>BVLGARI</p>
                    </li>
                </ul>
            </div>
            <div class="m_sort">    
                <h4>个人护理</h4>
                <ul>
                    <li>
                        <img src="src/images/person_2_01.jpg"/>
                        <p>洗发水</p>
                    </li>
                    <li>
                        <img src="src/images/person_2_02.jpg"/>
                        <p>护发素</p>
                    </li>
                    <li>
                        <img src="src/images/person_2_03.jpg"/>
                        <p>发膜</p>
                    </li>
                    <li>
                        <img src="src/images/person_2_04.jpg" alt="" />
                        <p>护发精油</p>
                    </li>
                    <li>
                        <img src="src/images/person_2_05.jpg"/>
                        <p>沐浴清洁</p>
                    </li>
                    <li>
                        <img src="src/images/person_2_06.jpg" alt="" />
                        <p>身体护理</p>
                    </li>
                    <li>
                        <img src="src/images/person_2_07.jpg"/>
                        <p>牙膏</p>
                    </li>
                    <li>
                        <img src="src/images/person_2_08.jpg"/>
                        <p>卫生巾</p>
                    </li>
                    <li>
                        <img src="src/images/person_2_09.jpg"/>
                        <p>避孕套</p>
                    </li>
                </ul>
            </div>
            <div class="m_goods">
                <h4>美容彩妆</h4>
                <ul>
                    <li>
                        <img src="src/images/makeup_1_01.jpg"/>
                        <p>SK-II</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_02.jpg"/>
                        <p>雅诗兰黛</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_03.jpg"/>
                        <p>兰蔻</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_04.jpg"/>
                        <p>MEDIHEAL</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_05.jpg"/>
                        <p>Dior</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_06.jpg"/>
                        <p>POLA</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_07.jpg"/>
                        <p>CHANEL</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_08.jpg"/>
                        <p>HERMES</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_09.jpg"/>
                        <p>BVLGARI</p>
                    </li>
                </ul>             
            </div>
            <div class="m_sort">
                <h4>彩妆香氛</h4>
                <ul>
                    <li>
                        <img src="src/images/makeup_2_01.jpg"/>
                        <p>唇妆</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_02.jpg"/>
                        <p>眼妆</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_03.jpg"/>
                        <p>底妆</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_04.jpg"/>
                        <p>美甲</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_05.jpg"/>
                        <p>隔离</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_06.jpg"/>
                        <p>面部彩妆</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_07.jpg"/>
                        <p>美容工具</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_08.jpg"/>
                        <p>香水</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_09.jpg"/>
                        <p>精油</p>
                    </li>
                </ul>
            </div>
            <div class="m_goods">
                <h4>营养保健</h4>
                <ul>
                    <li>
                        <img src="src/images/sport_1_01.jpg"/>
                        <p>NIKE</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_02.jpg"/>
                        <p>adidas</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_03.jpg"/>
                        <p>asics</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_04.jpg"/>
                        <p>Marmot</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_05.jpg"/>
                        <p>SKECHERS</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_06.jpg"/>
                        <p>KEEN</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_07.jpg"/>
                        <p>patagonia</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_08.jpg"/>
                        <p>Osprey</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_09.jpg"/>
                        <p>GREGORY</p>
                    </li>
                </ul>
            </div>
            <div class="m_sort">
                <h4>热门分类</h4>
                <ul>
                    <li>
                        <img src="src/images/elet_2_01.jpg"/>
                        <p>手机数码</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_02.jpg"/>
                        <p>耳机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_03.jpg"/>
                        <p>相机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_04.jpg"/>
                        <p>音响</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_05.jpg"/>
                        <p>平板</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_06.jpg"/>
                        <p>剃须刀</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_07.jpg"/>
                        <p>电饭煲</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_08.jpg"/>
                        <p>榨汁机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_09.jpg"/>
                        <p>扫地机器人</p>
                    </li>
                </ul>
            </div>
            <div class="m_goods">
                <h4>家居生活</h4>
                <ul>
                    <li>
                        <img src="src/images/elet_1_01.jpg"/>
                        <p>PHILIPS</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_02.jpg"/>
                        <p>Apple</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_03.jpg"/>
                        <p>LAMY</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_04.jpg"/>
                        <p>Hurom</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_05.jpg"/>
                        <p>iRobot</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_06.jpg"/>
                        <p>Panasonic</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_07.jpg"/>
                        <p>beats</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_08.jpg"/>
                        <p>dyson</p>
                    </li>
                    <li>
                        <img src="src/images/elet_1_09.jpg"/>
                        <p>Canon</p>
                    </li>
                </ul>
            </div>
            <div class="m_sort">    
                <h4>家居电器</h4>
                <ul>
                    <li>
                        <img src="src/images/elet_2_01.jpg"/>
                        <p>手机数码</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_02.jpg"/>
                        <p>耳机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_03.jpg"/>
                        <p>相机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_04.jpg"/>
                        <p>音响</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_05.jpg"/>
                        <p>平板</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_06.jpg"/>
                        <p>剃须刀</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_07.jpg"/>
                        <p>电饭煲</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_08.jpg"/>
                        <p>榨汁机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_09.jpg"/>
                        <p>扫地机器人</p>
                    </li>
                </ul>
            </div>
            <div class="m_goods">
                <h4>品牌墙</h4>
                <ul>
                    <li>
                        <img src="src/images/sport_1_01.jpg"/>
                        <p>NIKE</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_02.jpg"/>
                        <p>adidas</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_03.jpg"/>
                        <p>asics</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_04.jpg"/>
                        <p>Marmot</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_05.jpg"/>
                        <p>SKECHERS</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_06.jpg"/>
                        <p>KEEN</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_07.jpg"/>
                        <p>patagonia</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_08.jpg"/>
                        <p>Osprey</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_09.jpg"/>
                        <p>GREGORY</p>
                    </li>
                </ul>
            </div>
            <div class="m_sort">
                <h4>热门分类</h4>
                <ul>
                    <li>
                        <img src="src/images/elet_2_01.jpg"/>
                        <p>手机数码</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_02.jpg"/>
                        <p>耳机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_03.jpg"/>
                        <p>相机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_04.jpg"/>
                        <p>音响</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_05.jpg"/>
                        <p>平板</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_06.jpg"/>
                        <p>剃须刀</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_07.jpg"/>
                        <p>电饭煲</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_08.jpg"/>
                        <p>榨汁机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_09.jpg"/>
                        <p>扫地机器人</p>
                    </li>
                </ul>
            </div>
            <div class="m_goods">
                <h4>运动户外</h4>
                <ul>
                    <li>
                        <img src="src/images/cloth_1_01.jpg"/>
                        <p>MO&amp</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_02.jpg"/>
                        <p>Five Plus</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_03.jpg"/>
                        <p>La Chapelle</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_04.jpg"/>
                        <p>Triumph</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_05.jpg"/>
                        <p>Wacoal</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_06.jpg"/>
                        <p>Aimer</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_07.jpg"/>
                        <p>Calvin Klein</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_08.jpg"/>
                        <p>GXG</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_1_09.jpg"/>
                        <p>BeLLE</p>
                    </li>
                </ul>
            </div>
            <div class="m_sort">    
                <h4>运动女装</h4>
                <ul>
                    <li>
                        <img src="src/images/cloth_2_01.jpg"/>
                        <p>连衣裙</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_02.jpg"/>
                        <p>T恤</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_03.jpg"/>
                        <p>衬衫</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_04.jpg"/>
                        <p>卫衣</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_05.jpg"/>
                        <p>半身裙</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_06.jpg"/>
                        <p>裤装</p>
                    </li>
                </ul>
                <h4>型格男装</h4>
                <ul>
                    <li>
                        <img src="src/images/cloth_2_07.jpg" alt="" />
                        <p>T恤</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_08.jpg" alt="" />
                        <p>衬衫</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_09.jpg" alt="" />
                        <p>针织衫</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_10.jpg" alt="" />
                        <p>POLO衫</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_11.jpg" alt="" />
                        <p>夹克</p>
                    </li>
                    <li>
                        <img src="src/images/cloth_2_12.jpg" alt="" />
                        <p>裤装</p>
                    </li>
                </ul>
            </div>
            <div class="m_goods">
                <h4>轻奢</h4>
                <ul>
                    <li>
                        <img src="src/images/makeup_1_01.jpg"/>
                        <p>SK-II</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_02.jpg"/>
                        <p>雅诗兰黛</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_03.jpg"/>
                        <p>兰蔻</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_04.jpg"/>
                        <p>MEDIHEAL</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_05.jpg"/>
                        <p>Dior</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_06.jpg"/>
                        <p>POLA</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_07.jpg"/>
                        <p>CHANEL</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_08.jpg"/>
                        <p>HERMES</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_1_09.jpg"/>
                        <p>BVLGARI</p>
                    </li>
                </ul>             
            </div>
            <div class="m_sort">
                <h4>彩妆香氛</h4>
                <ul>
                    <li>
                        <img src="src/images/makeup_2_01.jpg"/>
                        <p>唇妆</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_02.jpg"/>
                        <p>眼妆</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_03.jpg"/>
                        <p>底妆</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_04.jpg"/>
                        <p>美甲</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_05.jpg"/>
                        <p>隔离</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_06.jpg"/>
                        <p>面部彩妆</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_07.jpg"/>
                        <p>美容工具</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_08.jpg"/>
                        <p>香水</p>
                    </li>
                    <li>
                        <img src="src/images/makeup_2_09.jpg"/>
                        <p>精油</p>
                    </li>
                </ul>
            </div>
            <div class="m_goods">
                <h4>为你推荐</h4>
                <ul>
                    <li>
                        <img src="src/images/sport_1_01.jpg"/>
                        <p>NIKE</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_02.jpg"/>
                        <p>adidas</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_03.jpg"/>
                        <p>asics</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_04.jpg"/>
                        <p>Marmot</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_05.jpg"/>
                        <p>SKECHERS</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_06.jpg"/>
                        <p>KEEN</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_07.jpg"/>
                        <p>patagonia</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_08.jpg"/>
                        <p>Osprey</p>
                    </li>
                    <li>
                        <img src="src/images/sport_1_09.jpg"/>
                        <p>GREGORY</p>
                    </li>
                </ul>
            </div>
            <div class="m_sort">
                <h4>热门分类</h4>
                <ul>
                    <li>
                        <img src="src/images/elet_2_01.jpg"/>
                        <p>手机数码</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_02.jpg"/>
                        <p>耳机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_03.jpg"/>
                        <p>相机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_04.jpg"/>
                        <p>音响</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_05.jpg"/>
                        <p>平板</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_06.jpg"/>
                        <p>剃须刀</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_07.jpg"/>
                        <p>电饭煲</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_08.jpg"/>
                        <p>榨汁机</p>
                    </li>
                    <li>
                        <img src="src/images/elet_2_09.jpg"/>
                        <p>扫地机器人</p>
                    </li>
                </ul>
            </div>
        </div>
     </main>
     <cfooter></cfooter>
  </div>
</template>
<script>
    import './sort.css'
    import cfooter from '../footer/footer.vue'
    import http from '../../utils/httpclients.js'

    
    export default{
        
        components:{
            cfooter,
        },
        methods:{   
            tz(){
                var lists=$(".lists").children();
                if(event.target.tagName=="LI"){
                    var n=(event.target.title)-1;
                    let goods = $('.m_goods');
                    $(".m_right").animate({scrollTop:goods.eq(n)[0].offsetTop-50},300)
                }
            },
            t_list(){
                if(event.target.tagName=="IMG"){
                    var val=$(event.target).next().html();
                    this.$router.push({
                        name:"list",
                        query:{val}
                    })
                }
            }
        },
        mounted(){
            $("#c_footer ul").children().eq(1).addClass("actived");     
        }
    }
</script>
