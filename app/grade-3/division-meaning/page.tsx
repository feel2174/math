import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ExternalCta from "@/components/ExternalCta";
import AdSlot from "@/components/AdSlot";
import GradeNav from "@/components/GradeNav";
import { SubtopicBreadcrumb, SiblingLink } from "@/components/SubtopicNav";

export const metadata: Metadata = {
  title: "초3 나눗셈, 등분제와 포함제 구분하는 법",
  description:
    "나눗셈에는 두 가지 의미가 있다. 문장제에서 헷갈리지 않는 법을 정리했다.",
  alternates: { canonical: "/grade-3/division-meaning" },
  openGraph: {
    title: "초3 나눗셈, 등분제와 포함제 구분하는 법",
    description:
      "나눗셈에는 두 가지 의미가 있다. 문장제에서 헷갈리지 않는 법을 정리했다.",
    url: "/grade-3/division-meaning",
  },
};

export default function DivisionMeaning() {
  return (
    <Container>
      <div className="pt-6">
        <SubtopicBreadcrumb gradeHref="/grade-3" gradeLabel="초3" />
      </div>
      <PageHero
        eyebrow="초3 나눗셈 · 분수 첫 도입"
        title="초3 나눗셈, 등분제와 포함제 구분하는 법"
        description="같은 12÷3도 묻는 상황이 다르다."
      />

      <article className="article">
        <p>
          나눗셈에는 &quot;똑같이 나누기&quot;(등분제)와 &quot;몇 묶음인지
          세기&quot;(포함제) 두 의미가 있다. 이 둘을 구분하지 못하면
          문장제에서 헷갈린다.
        </p>

        <h2>등분제: 몇 개씩 나눠 갖는가</h2>
        <p>
          12÷3을 &quot;사탕 12개를 3명에게 똑같이 나누면 몇 개씩&quot;으로
          이해하는 방식이다. 전체를 몇 묶음으로 나눌지가 정해져 있고, 한
          묶음의 크기를 구한다.
        </p>

        <h2>포함제: 몇 묶음이 나오는가</h2>
        <p>
          같은 12÷3을 &quot;사탕 12개를 3개씩 묶으면 몇 묶음&quot;으로
          이해할 수도 있다. 한 묶음의 크기가 정해져 있고, 몇 묶음이
          나오는지를 구한다. 답은 같은 4지만 묻는 상황이 다르다.
        </p>

        <ExternalCta
          heading="초3 나눗셈 · 분수 문제지가 필요하다면"
          description="11math.com에서 등분제·포함제, 분수 개념별 문제지를 받을 수 있다."
        />

        <h2>구체물로 두 상황을 다 경험시킨다</h2>
        <p>
          문제지를 풀기 전에 사탕이나 블록으로 두 상황을 직접 나눠보게
          한다. 등분제는 &quot;3명에게 나눠주기&quot;, 포함제는
          &quot;3개씩 묶기&quot;로 실제로 손을 움직여본다. 이 경험이 있어야
          나눗셈 문장제에서 어떤 상황인지 빠르게 알아챈다.
        </p>

        <AdSlot id="grade3-division-infeed-1" />

        <p>
          많은 문제지가 등분제 위주로 구성돼 있다. 포함제 상황도 의도적으로
          섞어서 풀려야 두 감각이 고르게 자란다.
        </p>
      </article>

      <SiblingLink
        href="/grade-3/fraction-intro"
        label="분수, 처음 배울 때 꼭 잡아야 할 개념"
      />

      <GradeNav current={3} />
    </Container>
  );
}
