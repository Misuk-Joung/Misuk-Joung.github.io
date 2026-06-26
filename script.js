const translations = {
  ko: {
    brandName: "정미숙",
    brandRole: "Pharmaceutical R&D Researcher",
    navProfile: "Profile",
    navPublication: "Publication",
    navProjects: "Projects",
    navSkills: "Skills",
    navEducation: "Education",
    navAwards: "Awards",
    heroEyebrow: "Pharmaceutical Research & Development Portfolio",
    heroTitle: "정미숙",
    heroSubtitle: "제약 연구 개발 분야를 지향하는 연구자",
    heroCopy: "약학 기반의 연구 경험을 바탕으로 신약개발, 중개연구, 약물 평가 분야에서 기여할 수 있는 연구 역량을 정리한 이력서형 포트폴리오입니다.",
    statementKicker: "Personal Statement",
    statementTitle: "자기소개서",
    statementText: "제약 연구 개발 분야에서 연구자로 성장하기 위한 지원 동기, 연구 경험, 직무 적합성, 향후 기여 방향을 정리할 공간입니다. 자세한 자기소개서 내용은 추후 업데이트할 예정입니다.",
    profileKicker: "Profile",
    profileTitle: "연구자 소개",
    profileFocusTitle: "Research Focus",
    profileFocusText: "제약 연구 개발 직무를 목표로 약학, 생명과학, 질환 기반 연구 경험을 연결해가고 있습니다. 세부 연구 관심사와 핵심 성과는 추후 업데이트할 예정입니다.",
    profileStrengthTitle: "Core Strengths",
    profileStrengthText: "문헌 기반 가설 수립, 실험 설계, 데이터 해석, 연구 결과 커뮤니케이션 역량을 중심으로 포트폴리오를 구성할 예정입니다.",
    publicationKicker: "Publication",
    publicationTitle: "논문 및 발표",
    publicationEmpty: "논문, 학회 발표, 포스터, 특허 정보를 추가할 공간입니다.",
    projectsKicker: "Projects",
    projectsTitle: "대표 연구 프로젝트",
    projectBadge: "To be updated",
    projectOneTitle: "연구 프로젝트 01",
    projectOneText: "연구 배경, 사용 기술, 본인의 역할, 주요 결과를 요약해서 넣을 예정입니다.",
    projectTwoTitle: "연구 프로젝트 02",
    projectTwoText: "제약회사 지원 시 직무 연관성이 높은 프로젝트를 우선 배치하면 좋습니다.",
    skillsKicker: "Skills",
    skillsTitle: "연구 및 분석 역량",
    skillGroupOne: "Experimental Skills",
    skillGroupTwo: "Data & Tools",
    skillGroupThree: "Communication",
    skillPlaceholder: "세부 기술 업데이트 예정",
    toolPlaceholder: "분석 도구 업데이트 예정",
    commPlaceholder: "발표, 문서화, 협업 경험 업데이트 예정",
    educationKicker: "Education",
    educationTitle: "학력",
    eduPhd: "서울대학교 약학박사",
    eduPhdDetail: "Doctoral degree in Pharmacy, Seoul National University",
    eduMaster: "이화여자대학교 약학석사",
    eduMasterDetail: "Master's degree in Pharmacy, Ewha Womans University",
    eduBachelor: "대구대학교 생물교육 학사",
    eduBachelorDetail: "Bachelor's degree in Biology Education, Daegu University",
    awardsKicker: "Awards",
    awardsTitle: "수상 및 자격",
    awardsEmpty: "수상, 장학금, 자격증, 교육 이수 내역을 추가할 공간입니다.",
    footerText: "© 2026 Joung Misuk. Pharmaceutical R&D Portfolio."
  },
  en: {
    brandName: "Joung Misuk",
    brandRole: "Pharmaceutical R&D Researcher",
    navProfile: "Profile",
    navPublication: "Publication",
    navProjects: "Projects",
    navSkills: "Skills",
    navEducation: "Education",
    navAwards: "Awards",
    heroEyebrow: "Pharmaceutical Research & Development Portfolio",
    heroTitle: "Joung Misuk",
    heroSubtitle: "Researcher pursuing pharmaceutical research and development",
    heroCopy: "A CV-style research portfolio summarizing my academic background and research capabilities for drug discovery, translational research, and pharmaceutical development.",
    statementKicker: "Personal Statement",
    statementTitle: "Personal Statement",
    statementText: "This section will summarize my motivation for pharmaceutical R&D, research experience, role fit, and future contribution as a researcher. Detailed statement content will be updated later.",
    profileKicker: "Profile",
    profileTitle: "Research Profile",
    profileFocusTitle: "Research Focus",
    profileFocusText: "I am building a research profile that connects pharmacy, life sciences, and disease-oriented research experience toward pharmaceutical R&D roles. Detailed interests and achievements will be added later.",
    profileStrengthTitle: "Core Strengths",
    profileStrengthText: "This portfolio will focus on literature-based hypothesis building, experimental design, data interpretation, and research communication.",
    publicationKicker: "Publication",
    publicationTitle: "Publications & Presentations",
    publicationEmpty: "This section will include journal articles, conference presentations, posters, and patents.",
    projectsKicker: "Projects",
    projectsTitle: "Selected Research Projects",
    projectBadge: "To be updated",
    projectOneTitle: "Research Project 01",
    projectOneText: "This section will summarize the research background, methods, personal contribution, and key outcomes.",
    projectTwoTitle: "Research Project 02",
    projectTwoText: "Projects most relevant to pharmaceutical R&D applications should be placed first.",
    skillsKicker: "Skills",
    skillsTitle: "Research & Analytical Skills",
    skillGroupOne: "Experimental Skills",
    skillGroupTwo: "Data & Tools",
    skillGroupThree: "Communication",
    skillPlaceholder: "Detailed skills to be updated",
    toolPlaceholder: "Analysis tools to be updated",
    commPlaceholder: "Presentation, documentation, and collaboration experience to be updated",
    educationKicker: "Education",
    educationTitle: "Education",
    eduPhd: "Ph.D. in Pharmacy, Seoul National University",
    eduPhdDetail: "2022 - 2026",
    eduMaster: "M.S. in Pharmacy, Ewha Womans University",
    eduMasterDetail: "2008 - 2010",
    eduBachelor: "B.S. in Biology Education, Daegu University",
    eduBachelorDetail: "2004 - 2008",
    awardsKicker: "Awards",
    awardsTitle: "Awards & Certifications",
    awardsEmpty: "This section will include awards, scholarships, certifications, and professional training.",
    footerText: "© 2026 Joung Misuk. Pharmaceutical R&D Portfolio."
  }
};

const languageButtons = document.querySelectorAll(".lang-button");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const tabLinks = document.querySelectorAll("[data-tab]");
const tabPanels = document.querySelectorAll(".tab-panel");

function setLanguage(language) {
  const dictionary = translations[language];

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  document.documentElement.lang = language;
  localStorage.setItem("portfolioLanguage", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

function showTab(tabId, shouldUpdateHash = true) {
  const targetPanel = document.getElementById(tabId);
  if (!targetPanel) {
    return;
  }

  tabPanels.forEach((panel) => {
    const isActive = panel.id === tabId;
    panel.hidden = !isActive;
    panel.classList.toggle("active", isActive);
  });

  tabLinks.forEach((link) => {
    const isActive = link.dataset.tab === tabId;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });

  if (shouldUpdateHash) {
    history.replaceState(null, "", `#${tabId}`);
  }
}

tabLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showTab(link.dataset.tab);
    document.getElementById(link.dataset.tab).scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const initialTab = window.location.hash.replace("#", "") || "profile";
showTab(initialTab, Boolean(window.location.hash));
setLanguage(localStorage.getItem("portfolioLanguage") || "ko");
