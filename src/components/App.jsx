import React, { useState, useEffect } from "react";
import { ChevronsDown, Github, ExternalLink } from "lucide-react";
import "../assets/styles/main.scss";

const portfolioData = {
  name: "임재찬",
  introduction: `웹 개발에 대한 저의 열정은 대학 시절 HTML과 CSS를 배우며 시작됐습니다.
  그 후 JavaScript와 React를 학습하며 동적인 웹 애플리케이션 개발에 흥미를 느꼈고, 
  사용자 경험(UX)과 인터랙티브 디자인에 큰 관심을 가지고 웹 개발의 깊이를 더해가고 있습니다. 
  제가 개발한 웹사이트는 단순한 정보 제공을 넘어, 몰입감과 시각적 즐거움을 선사합니다. 
  이 포트폴리오는 그동안 작업한 웹사이트와 프로젝트를 통해
   기술적 깊이와 창의력을 어떻게 구현했는지 보여줍니다.`,
  personalInfo: {
    name: "임재찬",
    birthDate: "2000-03-27",
    phone: "010-6603-8396",
    email: "alex8396@naver.com",
  },
  skills: {
    Languages: ["TypeScript", "JavaScript", "Python"],
    Frontend: [
      "Next.js",
      "React",
      "Vue.js",
      "Sass",
      "Tailwind CSS",
      "GSAP", // 애니메이션 라이브러리 추가
      "Vite", // 빌드 툴 추가,
      "Bootstrap",
    ],
    Backend: [
      "Django",
      "Firebase",
      "Node.js", // 톡톡 블로그 프로젝트에서 사용된 기술 추가
      "Express", // 톡톡 블로그 백엔드 기술 추가
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "JWT",
    ],
    DevOps: ["Vercel", "Docker"],
  },
  coreCompetencies: [
    {
      title: "프론트엔드 개발",
      description:
        "HTML, CSS, JavaScript에 대한 깊은 이해를 바탕으로 웹 표준과 웹 접근성을 준수한 견고한 웹사이트 구축.\n 반응형 디자인을 통해 다양한 기기에서 최적화된 \n사용자 경험 제공.",
    },
    {
      title: "인터랙티브 디자인",
      description:
        "GSAP (GreenSock Animation Platform)을 활용하여 시각적 몰입감을 극대화한 애니메이션 구현. 스크롤, \n호버, 사용자 상호작용에 따른 동적 요소 제어.",
    },
    {
      title: "프레임워크 숙련도",
      description:
        "React, Vue.js, Next.js 등 \n최신 JavaScript 프레임워크를 활용하여 효율적이고 \n확장 가능한 애플리케이션 개발.\n 재사용 가능한 컴포넌트 설계를 통한 개발 효율성 향상.",
    },
    {
      title: "성능 최적화",
      description:
        "웹 성능 지표 개선과 코드 최적화를 통한 \n빠른 로딩 속도 구현.\n 번들 크기 최소화, 이미지 최적화, 캐싱 전략 등을 \n활용하여 사용자 경험 향상.",
    },
    {
      title: "협업 및 문제 해결",
      description:
        "GitHub, Jira 등 협업 툴을 사용하여 팀 프로젝트에서 \n효율적인 코드 관리 및 협업. \n복잡한 문제 해결 능력을 통해 팀과 함께 \n효과적인 결과 도출.",
    },
    {
      title: "지속적 학습 및 풀스택 역량",
      description:
        "프론트엔드뿐만 아니라 백엔드 기술도 학습하여 \n풀스택 개발의 잠재력을 보여줌. \n최신 기술 트렌드에 대해 꾸준히 학습하고,\n 새로운 도전을 추구.",
    },
  ],
  projects: [
    {
      title: "JPort 포트폴리오 시리즈",
      stack: ["Vue.js", "Vite", "React", "Next.js"],
      description:
        "다양한 프레임워크를 비교하고, 각 기술 스택의 특성과 장단점을 이해하는 프로젝트입니다. Vue.js, Vite, React, Next.js로 동일한 포트폴리오를 구현하여 각 프레임워크에 대한 숙련도를 입증했습니다.",
      links: [
        {
          type: "link",
          url: "https://jport-vuesite.netlify.app/?utm_source=portfolio&utm_medium=project",
          name: "Vue.js 버전",
        },
        {
          type: "link",
          url: "https://jport-vitesite.netlify.app/?utm_source=portfolio&utm_medium=project",
          name: "Vite 버전",
        },
        {
          type: "link",
          url: "https://jport-reactsite.netlify.app/?utm_source=portfolio&utm_medium=project",
          name: "React 버전",
        },
        {
          type: "link",
          url: "https://jport-nextsite.netlify.app/?utm_source=portfolio&utm_medium=project",
          name: "Next.js 버전",
        },
      ],
    },
    {
      title: "About Me Site & JPort Ver1",
      stack: ["HTML", "CSS", "JavaScript", "GSAP"],
      description:
        "개인 자기소개 웹사이트로, GSAP를 활용하여 몰입감 있는 애니메이션을 구현한 프로젝트입니다. 스크롤 애니메이션과 전환 효과를 통해 직관적인 탐색 경험을 제공합니다.",
      links: [
        {
          type: "link",
          url: "https://alex8396.github.io/aboutme/dist/?utm_source=portfolio&utm_medium=project",
          name: "About Me Site",
        },
        {
          type: "link",
          url: "https://jport-ver1.netlify.app/?utm_source=portfolio&utm_medium=project",
          name: "JPort Ver1",
        },
        {
          type: "github",
          url: "https://github.com/alex8396/aboutme",
          name: "About Me Site github ",
        },
      ],
    },
    {
      title: "GitPulse 프로젝트",
      stack: ["React", "GitHub API", "JavaScript", "CSS"],
      description:
        "GitHub API를 활용하여 팀의 GitHub 활동을 시각화하고, 협업 문화를 개선할 수 있는 웹 애플리케이션을 개발한 프로젝트입니다.",
      links: [
        {
          type: "github",
          url: "https://github.com/GitPulse-04/GitPulse",
          name: "GitPulse GitHub",
        },
      ],
    },
    {
      title: "Weather Jockey",
      stack: ["React", "JavaScript", "SCSS"],
      description:
        "사용자 위치 기반 날씨 API를 활용하여 날씨에 맞는 음악을 추천해주는 웹 애플리케이션입니다. 날씨 변화에 따라 사용자에게 개인화된 콘텐츠를 제공합니다.",
      links: [
        {
          type: "github",
          url: "https://github.com/alex8396/weatherjockey",
          name: "GitHub",
        },
      ],
    },
    {
      title: "톡톡 블로그",
      stack: ["React", "Node.js", "Express"],
      description:
        "프론트엔드와 백엔드를 \n모두 다룬 블로그 웹사이트 프로젝트입니다.\n 서버 사이드 렌더링과 RESTful API 설계를 포함하여 풀스택 개발 경험을 쌓았습니다.",
      links: [
        {
          type: "link",
          url: "https://toktokblog-front.vercel.app/?utm_source=portfolio&utm_medium=project",
          name: "톡톡 블로그",
        },
        {
          type: "github",
          url: "https://github.com/alex8396/frontend",
          name: "톡톡 블로그 frontend GitHub",
        },
        {
          type: "github",
          url: "https://github.com/alex8396/backend",
          name: "톡톡 블로그 backend GitHub",
        },
      ],
    },
    {
      title: "민도커튼월 웹사이트",
      stack: ["HTML", "CSS", "JavaScript"],
      description:
        "실제 기업 웹사이트를 개발하고 배포한 경험이 있습니다. 고객의 요구 사항을 반영하여 실용적인 웹사이트를 구현했습니다.",
      links: [
        {
          type: "link",
          url: "http://www.mindocw.com/?utm_source=portfolio&utm_medium=project",
          name: "민도커튼월 웹사이트",
        },
      ],
    },
  ],
};

// 기술명 -> 로고 URL 매핑
const skillLogos = {
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Vue.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  Sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  "Tailwind CSS":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEX////G6fxsyvk/v/g4vfhhyPmz4vuK1PoAtfckufgvu/hTxPn6/f+h2/tGwPjS7v255fxMwviT1/qn3vsZjXhWAAAAbElEQVR4AeWOCQqAMAwEq11r06b3//9qAwiI0QfowHINC2N+yLJabE53uycgUGTtF11CmDqLLVdZ57iJhSt9V+4cCQB5a1RGJgr9FrrW866GbmpoGylISlNC3RxnsbY+hLbX0GSJIKE6zOajHN4ZA8/fNs9XAAAAAElFTkSuQmCC",
  Bootstrap:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAn1BMVEWRC/6ICvuHCvuCCvp9Cvh5CfeFAPt7APh2APd1Cfaqa/fo2vzr3fzh0fqgZ/SfU/f////SvPPDo/K9nvHMtfOQTvHPsfhnB/LGq/XfzflzCfXcyfiROfiWR/ZqB/PWwvf48P27j/V5DOeDLOuHOeure/SuiPLw5fuQOfF4A+2VWe+IJu/68/2da+tqAO92JOr++f5YAOicZ++IRezCo/ftjRgzAAABbUlEQVR4AX3S1XaEMBRA0UFiWLGSwQLj7vP/39ab4LXzulc8sz5N03TIkJkQQmhk0NTQ1AZEA2IZUdEmaawxy3Yce5Tr0Q7xhx+Eo6Io9j8pYg0mNsOwFDFhWjmCcXdOWYcp1jUdy5rdZPmAcU50HRclZFKJokoEY5nCPMaaTmxfljA4Bk0qwTKJmlkvsK6TtF6u1oG/oYDbHW8QF/6+wYyQgx9KXPsrKhGbro10hZzSjX8ERNxNOc1muKzrEww0aH5OU+d8uYIxetvt1gJwdy6wbgDWURTad08en65qB1DDh9wmCndXll3d3VXdQvUQgBo+wYYkyg2J5H6FgWv/JhRqaLcgzUiEvNoGFFuHN6iTIFF4lzlrCjiPFcpDzANA8vmEXjCOZSIOm5GAYUXhvpuHRhJ5EPUj36lQoBIQzzs0cHmP35OS+0u0aJBjMC0+cjl+BgbKsiy7tnFISOOzyUdVu8kykAb/sQbHNsYvjA0vKuhfMkMAAAAASUVORK5CYII=",
  GSAP: "https://search.pstatic.net/sunny?src=https%3A%2F%2Fgsap.com%2Ffavicon-32x32.png&type=f30_30_png_expire24",
  Vite: "https://vitejs.dev/logo.svg",
  Django:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEURMigAKx8AKBsKLyRmc256hYFAU0wAJhp0f3s6T0gAGADf4uH///+FkIwAAADm6OeBjIja3NsACwDFysjq7OsAEwAAIhSUnZrv8fD29/cAEACwtrTP0tEhPTTAxsRSY12co6AAHQxbamUrGWKdAAAAv0lEQVR4AWIYaACojS4SEIahIIDGE9Kpu8v974g7H3ZMvS8eLoQ83yhTWhurnN4R6gMgjGIgsQSmJwx+YJbHheNvYn0ZndBGUVS9kqzqtCnaI3b9MCj+YmOLcy4D0uIZuwDA1LfnAb0hnwGYY58U2hoIMuZJrBYgLb+g0AB4RTZ7VABNnRTkaK3DJUc8lnAvyCoztQDaWEUAFH/brrVbhe/8ugEYJaNibQPEHUWXYWPmjIwMm3ar2JfYteLszzkAujcN06GBllAAAAAASUVORK5CYII= ",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  Supabase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",

  Vercel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "GitHub API":
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  MongoDB:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC5klEQVRYhc2XT0gUcRTHPzOzqy4b6kZpQS6odIiJTgYRHYK6CSkEXTvXrXPRIbp27lQQ5FXwEBEZdAjp4CVw0ItbjBqo2ba06v5pZjq8mcZdN/dNK+QXfq6/+b3f+755v/d7741BEuTtHDAOjAGjQC5cKQLLwDzwCtcpalUaSuLbwENgRKm3ADzCdV50ZkDevgbMAFklcTO2gQlc593fBMwDyF8Csx2QE+6dDXW1RGsP5O0FwO6AuBUcXOd8ewOSkP8K5DelC6VWRjQegbhKR14PYKRbRj3QGmA3H0dsugTcrEpNAKzUYPGSzM99hKEu7Z0CuB4F5l4PzKi3r9Rh2oahjIxpW57p8YfLAqJ7fku1tejDnUG4Owy7HngB2L1Q3oW5bcio3NBF38AXSpufjNCAZTRJxgdWPfh2RXwXHb0Rrp34AGesgy73XhRwnVEzTK+6DLfuwdNh6DFjckJDekxZW/dUqoAR8nbORHK7DnUPJk9Dzd+/VvNlra42AGDcRApLe1QDuNEP/en47eu+DJBn/WmRqaqv5ZiJVLX22AngYq8EHci5V3wZUdx5ocyO2oDRFHFJPRj1oPHtAapNRxF5QZ+YcimtJJYhbxvBMKDqxf8HIWnFF1klUkgz0R4ZA5bKjcorTR6wDFgsa3MBQNFEOhmdAc+2JOgMwhjwZETzug/Pt5IYsGwibVR7GOGfNxuQCjNN1Y+9kDZlDSNJTZg3wkT0XSXuhYYsXAbTgPeb8vzqSfADsOdkbqkNOG6GDWRBJW4BP3x4sARZC3Z9GVkL7i9ByU9CXsB1iiLeN1ACJlXbMga8/Qm5AAa7pRl5vQGP1+CUnh24FxcjgLxdJkn/59akDAfATQfyXUnIt3GdY9BYtyaSaCCbgq8VGVl9Omnmin1W2vxM38BZ4IJKhQWkA1itwFotSV84hes8iSadNaVR0en+96b0v7flrXsXEZw6RPKpVuRwBD7NjvjH6X5DDv3z/DcbOANcFGQKxgAAAABJRU5ErkJggg==",
  Mongoose:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEX////99/f57+/+/Pzlysq3c3PSpaWdNjaHAACBAADVq6uvYGCMAACPAAC1bW16AACwZGShQECZLCyQEBB+AADCh4eAAACSGRmWJibz5eXHkpLZsrLevr6jSUmoUVHKmJju3t768/O8fX2aNTXn0dGi5lwOAAAAsklEQVR4AeXOURqCIBBF4UFUZ1QVFUkw0qz9r7HAUL+WUPeFA/8LEMYiFpJHUcg4SYGnGRJmub8XJVFVb542grUNdllPsgYYlLpkI6pKe5RCkHknm5CuqbQxB9A3ZT1SiTH4zTSWgvuMerV4JAPbdIlj+Estc4+4wLZ7Ryt8ZqRxqEYI+KAp9CxXh9IeiM8DE4/FCZdvFP+BTbFjd8LG4dQO4YEJq0PnrXEHh3383PBLewEQBBA5C4H39wAAAABJRU5ErkJggg==",
  "Socket.IO":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHr/7WAAAAFHRSTlMAJDx65P/XCpyITzFaqhfva8ZHum3csOAAAADrSURBVHgBbZEHEsMgDARFOXrP/9+a4gIi453KLDrOMnGElIIeURoHRtl/5QDjQ5TJG8ARRwJ5BpYMyOUCqiCGqGhrzhBHEHUkOrCo+/OCfvbMyijcaUU/oI8QeB4Jc/dIxyBzCTNG/0aRl/NYNRUsCYTpOljviEEJYj4HgK0Ojdo8y7HvHZ4S/5AYo7RTuk2+ACg+GSHXioE4XUE6LlwAmvU5Ik2doS9iGH3cCFeo5y6e66g4/80gTq3nnSMuF+Lku2dDpmKJ49cbCmZ3GY7XRlunUfduxQBuCGvF8BU60s7ouOiDHoippcGHPjjuB+a9coujAAAAAElFTkSuQmCC",
  JWT: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAvVBMVEVHcEwcHBwZGRkZGRkZGRkaGhoFBQUAAAAVFhSBgYG5ubgWBQkYPDb///85HicGFxUnX1NI6cs/v6iys7PPQzf+Tjx0Jh9J79E0kYOeNyr/UEFaHxU8uKEXFQcXIB9E1rw0zbLjPCzsSjwAFgQvP5YoMHQeGjF6sqe8fHhNIUSAK3KaL4Q+VeBAWukzTcEZcGGura2sOknWPLr+RN//RuctX3qNMFkdKFA5UdHqP8uvMpUdQJQcOYHePL1iI1L51Fu6AAAABnRSTlMAFrD4/7B/5ke/AAABhElEQVR4AX2TBXLDMBBF7UaJtzGu2UqDhjAz3v9YlapoGv6D0pOWV1HUrxJ5odKXyhh5K1Up35wqmla5OZYVaROAVL6r1e8bWlKIkG4YoFVNs6qBZdlE6ArBQVfXPNP0NNsPQltCwSKMYgETSmnNvv2p/0SIBoc1xvzbn/V6vdFEbHGfbUo7xE5TCetZXugOInZNsxfQoJb2B8NU/hyNx5M8xmg6m4U0mA8Wy9USBKznY67ROnZII0w2jCyXq4H9B2Gb7TjdFTohdrFfMu0PfRBmoQ7b425yKgiTNTzvDxdIGRMwhcthfx5a/KI4TXbHLdSvEPoHYapgbvRCuMi2wqw9+ItguUnCBnHi9WjMldfFT2BkMZgHNPRm0wjjfMJil0VIhwMrZWULeqbZRURHL/KsLiCjqU06lLZ5+VqIzQar503hbZ/3ghfeQIx+9NuWNXgvEtGymHXPAXL7Mwx8W0DdRcEkZNSy5JgYhk6E/geMyAEDkAP2cTQ/D7Will+vQ1lVfgHa0zEXT+rLEwAAAABJRU5ErkJggg==",
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header${isScrolled ? " scrolled" : ""}`}>
      <h1>{portfolioData.name}'s Portfolio</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className={`hero section ${isVisible ? "fade-up" : ""}`} id="home">
      <h1>{portfolioData.name}</h1>
      <p>Creative Web Developer</p>
      <a
        href="#about"
        aria-label="Scroll down"
        style={{ marginTop: "3rem", display: "inline-block" }}
      >
        <ChevronsDown size={40} color="white" />
      </a>
    </section>
  );
};

const AboutSection = () => {
  const { name, birthDate, phone, email } = portfolioData.personalInfo;

  return (
    <section className="about section" id="about">
      <h2>About Me</h2>
      <p style={{ whiteSpace: "pre-line" }}>{portfolioData.introduction}</p>

      <div
        className="personal-info"
        style={{
          marginTop: "2rem",
          textAlign: "left",
          maxWidth: "480px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p>
          <strong>이름:</strong> {name}
        </p>
        <p>
          <strong>생년월일:</strong> {birthDate}
        </p>
        <p>
          <strong>전화번호:</strong> {phone}
        </p>
        <p>
          <strong>이메일:</strong> {email}
        </p>
      </div>
    </section>
  );
};

const SkillsSection = () => (
  <section className="skills section" id="skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      {Object.entries(portfolioData.skills).map(([category, skills]) => (
        <div key={category} className="card fade-up">
          <h3>{category}</h3>
          <ul className="skill-logo-list">
            {skills.map((skill) => (
              <li key={skill} title={skill}>
                {skillLogos[skill] ? (
                  <img
                    src={skillLogos[skill]}
                    alt={skill}
                    className="skill-logo"
                    loading="lazy"
                  />
                ) : (
                  <span>{skill}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

const CompetenciesSection = () => (
  <section className="competencies section" id="competencies">
    <h2>Core Competencies</h2>
    <div className="competencies-grid">
      {portfolioData.coreCompetencies.map(({ title, description }, idx) => (
        <div key={idx} className="card fade-up">
          <h3>{title}</h3>
          <p style={{ whiteSpace: "pre-line" }}>{description}</p>
        </div>
      ))}
    </div>
  </section>
);

const ProjectCard = ({ project }) => (
  <div className="card fade-up">
    <h3>{project.title}</h3>
    <div>
      {project.stack.map((tech) => (
        <span key={tech} className="tag">
          {tech}
        </span>
      ))}
    </div>
    <p>{project.description}</p>
    <div className="project-links">
      {project.links.map(({ url, name, type }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={name}
        >
          {type === "github" ? (
            <Github size={16} />
          ) : (
            <ExternalLink size={16} />
          )}
          {name}
        </a>
      ))}
    </div>
  </div>
);

const ProjectsSection = () => (
  <section className="projects section" id="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {portfolioData.projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} />
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <p>
      &copy; {new Date().getFullYear()} {portfolioData.name}. All rights
      reserved.
    </p>
  </footer>
);

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CompetenciesSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
