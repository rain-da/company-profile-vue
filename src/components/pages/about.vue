<template>
  <div>
    <div id="about">
      <div style="position: absolute; top: 20%;left: 10%;font-size: 36px; font-style: oblique;color: #eef0f3">
        <span>公司简介</span><br>
        <span>COMPANY PROFILE</span>
      </div>
    </div>

    <br><br><br>

    <div style="position: relative;left: 10%;width: 80%;font-size: 16px;color: #909399;display: flex;">
      <div style="flex: 1">
        <p style="text-indent: 2em;">
          {{company.p1}}
        </p>
        <p style="text-indent: 2em;">
          {{company.p2}}
        </p>
        <p style="text-indent: 2em;">
          {{company.p3}}
        </p>
      </div>
      <div style="padding: 10px;">
        <img src="../../assets/about/profile.png" alt="">
      </div>
    </div>

    <br><br><br>

    <div style="position: relative;left: 10%;width: 80%;">
      <span style="font-size: 26px;">组织机构</span><br>
      <span style="font-size: 26px;color: #909399">Organizational structure</span>
    </div>

    <div style="position: relative;left: 10%;width: 80%;font-size: 16px;color: #909399;display: flex;">
      <div style="flex: 1">
        <p style="text-indent: 2em;">
          {{organizational.p1}}
        </p>
        <h3>专业技术人员及专家队伍</h3>
        <p style="text-indent: 2em;">
          {{organizational.p2}}
        </p>
        <p style="text-indent: 2em;">
          {{organizational.p3}}
        </p>
      </div>
      <div style="padding: 10px;">
        <img src="../../assets/about/organizational.png" alt="">
      </div>
    </div>

    <br><br><br>

    <div style="position: relative;left: 10%;width: 80%;">
      <span style="font-size: 26px;">内部管理和安全评价过程控制</span><br>
      <span style="font-size: 26px;color: #909399">Internal Management and safety evaluation process control</span>
    </div>

    <div style="position: relative;left: 10%;width: 80%;font-size: 16px;color: #909399;display: flex;">
      <div style="flex: 1">
        <p style="text-indent: 2em;">
          {{management.p1}}
        </p>
        <p style="text-indent: 2em;">
          {{management.p2}}
        </p>
        <p style="text-indent: 2em;">
          {{management.p3}}
        </p>
        <p style="text-indent: 2em;">
          {{management.p4}}
        </p>
        <p style="text-indent: 2em;">
          {{management.p5}}
        </p>
        <p style="text-indent: 2em;">
          {{management.p6}}
        </p>
        <p style="text-indent: 2em;">
          {{management.p7}}
        </p>
        <p style="text-indent: 2em;">
          {{management.p8}}
        </p>
      </div>
      <div style="padding: 10px;">
        <img src="../../assets/about/management.png" alt="" style="width: 700px;height: 500px">
      </div>
    </div>

    <br><br><br>

    <div style="position: relative;left: 10%;width: 80%;">
      <span style="font-size: 26px;">荣誉资质</span>
    </div>

    <div style="position: relative;left: 10%;width: 80%;font-size: 16px;color: #909399;display: flex;">
      <div style="flex: 1">
        <img src="../../assets/about/license.png" alt="" style="width: 700px;height: 500px">
      </div>
      <div style="padding: 10px;">
        <img src="../../assets/about/certification.png" alt="" style="width: 700px;height: 500px">
      </div>
    </div>

    <br><br><br>
    <br><br><br>
  </div>

</template>

<script>
export default {
  data() {
    return {
      company: {
        p1: "    陕西旭弘应急安全评价有限公司公司是一家围绕安全与应急问题开展科学研究和工程实践的产学研为一体的科技型公司。公司以西安建筑科技大学安全工程系为核心团队组建而成，围绕安全评价、应急科技转化、技术咨询服务等业务，公司于2022年4月开始建设，2022年12月16日注册成立并正式运行，公司坐落在陕西省西安市高新区高新区科技二路启迪科技园G座。",
        p2: "    公司控股西安智慧应急科学工程研究院、西安新泰和安全技术服务 有限公司，其中西安智慧应急科学工程研究院主要以科学研究、科研转化为主要业务，并为企事业单位开展应急技术咨询服务业务。西安新泰和安 全技术服务有限公司主要从事安全评价、重大危险源评估、HAZOP分析等业务，公司取得了由陕西省应急管理厅颁发的《安全评价机构资质证书》，主要从事金属、非金属矿及其他矿采选业；陆地石油和天然气开采业；石油加工业，化学原料、化学品及医药制造业等行业的安全评价业务。",
        p3: "    公司瞄准世界安全与应急科技前沿，面向安全与应急重大需求，融合西安建筑科技大学以及陕西相关大学以及科研机构的科研、人才优势和陕西省、西安市的产业支撑优势，集聚人才、技术、资本等创新要素，贯通融合安全与应急领域基础研究、技术创新、成果转化和产业培育等链条，打造国内一流的安全与应急科技创新基地和产业发展基地。",
      },
      organizational: {
        p1: "本公司具有独立的企业法人资格，法定代表人贾晋鹏，公司由骨干成员组成股东会，是公司的决策机构。公司设监事一名，聘任一名总经理，全面负责公司的日常经营和管理工作，公司设三名副经理，分别负责行政管理、市场开发、技术开发。",
        p2: "公司现有人员有48人，技术骨干以西安建筑科技大学安全工程系教师为主，其中具备博士学位8人，其中正高级职称15人，副高级职称10人。毕业院校包括西安建筑科技大学、南开大学、中国石油大学、中国科学技术大学、西安石油大学等具备国内外著名高校管理学、安全科学与工程等多学科的知识基础和工程背景。公司专职安全评价师30名，其中一级评价师7名，二级评价师12名，三级评价师11名；专职消防操作员6名，其中中级消防操作员2名，初级消防操作员4名。",
        p3: "公司安全评价师和注册安全工程师专业涵盖：安全工程、采矿、矿井通风、机械制造与自动化、电气自动化、给排水、建筑与土木、有色金属、石油与化工、天然气储运等。",
      },
      management: {
        p1: "本公司高度重视内部管理和规范化管理建设，持之以恒狠抓内部管理，持续改进安全评价过程管理，从而使公司进一步走上制度化、科学化、规范化轨道。",
        p2: "1）为了规范内部管理，公司制技术资料管理制度、技术档案管理制度、技术质量信息反馈管理制度等30余项制度。为内部管理的规范化、制度化提供了保证。",
        p3: "2）技术服务过程控制体系",
        p4: "本公司制定了《技术服务过程控制手册》、《程序文件》及《作业文件》，确定了公司的质量方针和目标，建立了质量保证体系。其中《技术服务过程控制手册》包括方针和目标、岗位职责以及风险分析、实施评价、报告审核、技术支撑、内部管理、作业文件、检查改进等方面内容，《程序文件》包括文件和资料控制、记录控制、风险分析控制、实施评价控制、报告审核控制、人力资源控制、信息资源控制、跟踪服务控制等控制文件。同时根据《安全评价过程控制手册》《程序文件》的要求，结合我们开展工作的的业务范围和实际情况，编制了各个行业各类安全评价的《作业文件》。",
        p5: "3）技术负责人和过程控制负责人",
        p6: "根据本公司的工作需求，现设置专职技术负责人1名和过程控制负责人1名。专职技术负责人具有二级以上安全评价师、注册安全工程师资格。",
        p7: "4）主要过程控制文件",
        p8: "风险分析制度、质量控制体系、报告审核制度、档案管理制度、法律法规及技术标准文件的管理制度、文件资料控制管理制度、纠正和预防措施控制程序制度、跟踪服务制度制度、保密制度",
      },
    };
  },
};
</script>

<style>
#about {
  background-image: url("../../assets/background/about.jpg");
  background-position: 50% 50%;
  background-size: cover;
  background-color: rgb(255, 255, 255);
  opacity: 1;
  z-index: 1;
  height: 376px !important;
}
</style>