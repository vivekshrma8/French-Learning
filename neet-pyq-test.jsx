import { useState, useMemo } from "react";
import { Beaker, Atom, Leaf, Check, X, Clock, Award, RotateCcw, ChevronRight } from "lucide-react";

// ---------------------------------------------------------------------------
// Question bank — hard, previous-year-pattern style questions, 10 per subject
// (originally written to match the difficulty/style of a decade of NEET
// papers, not reproductions of any specific paper)
// ---------------------------------------------------------------------------

const BANK = {
  physics: {
    label: "Physics",
    icon: Atom,
    ink: "#1C2541",
    questions: [
      {
        year: 2016,
        q: "A particle moves in a circle of radius R with constant speed. The magnitude of average velocity over the time it completes a quarter revolution is:",
        options: ["πR/2t", "R√2/t", "2R/t", "πR/t"],
        answer: 1,
        note: "Displacement over a quarter circle is R√2 (chord length), so average velocity = R√2 / t, where t is time for the quarter turn.",
      },
      {
        year: 2019,
        q: "A block of mass m rests on a rough incline of angle θ. The coefficient of static friction is μ = tanθ. If θ is slowly increased beyond this value, the block:",
        options: [
          "Remains stationary indefinitely",
          "Begins to slide, accelerating down the incline",
          "Begins to slide at constant velocity",
          "Flies off the incline",
        ],
        answer: 1,
        note: "μ = tanθ is the threshold; once θ exceeds this, gravity's component along the incline exceeds max static friction, so net force acts down-slope and the block accelerates.",
      },
      {
        year: 2021,
        q: "Two identical capacitors of capacitance C are first connected in series to a battery of EMF V, then disconnected and reconnected in parallel to each other (plates of like charge together). The final common potential difference is:",
        options: ["V/2", "V", "2V", "V/4"],
        answer: 0,
        note: "In series each capacitor holds charge Q = CV/2. Reconnected in parallel with like plates together, total charge stays Q, total capacitance 2C, so V' = Q/(2C) = V/2.",
      },
      {
        year: 2014,
        q: "A photon and an electron have the same de Broglie wavelength λ. If Ep and Ee are their respective kinetic energies, then Ep/Ee is proportional to:",
        options: ["λ", "1/λ", "λ²", "1/λ²"],
        answer: 0,
        note: "Photon: Ep = hc/λ (∝ 1/λ). Electron: Ee = h²/(2mλ²) (∝ 1/λ²). Ratio Ep/Ee ∝ λ.",
      },
      {
        year: 2018,
        q: "In a Young's double slit experiment, the slit separation is doubled and the screen distance is halved. The fringe width becomes:",
        options: ["Same", "Half", "One-fourth", "Double"],
        answer: 2,
        note: "Fringe width β = λD/d. Doubling d and halving D gives β' = λ(D/2)/(2d) = β/4.",
      },
      {
        year: 2022,
        q: "A conducting rod of length L rotates with angular velocity ω about one end, perpendicular to a uniform magnetic field B. The EMF induced between its ends is:",
        options: ["BωL", "BωL²/2", "2BωL²", "BωL²"],
        answer: 1,
        note: "Each element dr at radius r has EMF dε = B(ωr)dr. Integrating 0 to L gives ε = BωL²/2.",
      },
      {
        year: 2015,
        q: "An ideal gas undergoes a process in which P ∝ 1/V² (V is volume). The molar heat capacity for this process, in terms of Cv, is:",
        options: ["Cv + R", "Cv − R/2", "Cv + R/3", "Cv − R"],
        answer: 3,
        note: "For a polytropic process PVⁿ = const, molar heat capacity C = Cv + R/(1−n). Here P ∝ 1/V² means PV² = const, so n = 2, giving C = Cv + R/(1−2) = Cv − R.",
      },
      {
        year: 2020,
        q: "A radioactive nucleus decays via successive emission of one α-particle and two β-particles. The mass number and atomic number of the resulting nucleus, compared to the parent (A, Z), are:",
        options: ["A−4, Z−2", "A−4, Z", "A−4, Z−1", "A−2, Z−2"],
        answer: 1,
        note: "α emission: A→A−4, Z→Z−2. Two β emissions each raise Z by 1 without changing A, so Z−2+2 = Z. Net: (A−4, Z).",
      },
      {
        year: 2023,
        q: "A uniform disc of mass M and radius R rolls without slipping down an incline of height h. Its speed at the bottom is:",
        options: ["√(2gh)", "√(4gh/3)", "√(gh)", "√(3gh/2)"],
        answer: 1,
        note: "Energy conservation with rotational KE: Mgh = ½Mv² + ½(½MR²)(v/R)² = ¾Mv², giving v = √(4gh/3).",
      },
      {
        year: 2017,
        q: "In a series LCR circuit at resonance, the power factor is:",
        options: ["0", "0.5", "1", "Depends on R only"],
        answer: 2,
        note: "At resonance, inductive and capacitive reactances cancel, impedance = R (purely resistive), so cosφ = R/Z = 1.",
      },
    ],
  },
  chemistry: {
    label: "Chemistry",
    icon: Beaker,
    ink: "#5B3A29",
    questions: [
      {
        year: 2016,
        q: "For the reaction N2(g) + 3H2(g) ⇌ 2NH3(g), at equilibrium the pressure is doubled by compressing the container at constant temperature. The equilibrium will:",
        options: [
          "Shift towards reactants",
          "Shift towards products",
          "Remain unaffected",
          "Cannot be predicted",
        ],
        answer: 1,
        note: "Increasing pressure shifts equilibrium toward the side with fewer gas moles — products (2 mol vs 4 mol reactants), by Le Chatelier's principle.",
      },
      {
        year: 2019,
        q: "The correct order of increasing acidic strength of the following is: phenol, p-nitrophenol, p-cresol, p-chlorophenol",
        options: [
          "p-cresol < phenol < p-chlorophenol < p-nitrophenol",
          "phenol < p-cresol < p-chlorophenol < p-nitrophenol",
          "p-nitrophenol < p-chlorophenol < phenol < p-cresol",
          "p-cresol < p-chlorophenol < phenol < p-nitrophenol",
        ],
        answer: 0,
        note: "Electron-donating −CH3 (cresol) decreases acidity below phenol; electron-withdrawing −Cl and especially −NO2 increase it via resonance/inductive stabilization of the phenoxide ion.",
      },
      {
        year: 2021,
        q: "The number of unpaired electrons and the magnetic moment (spin-only) of [Fe(CN)6]4− are respectively (Fe2+, low spin, d6):",
        options: ["0, 0 BM", "2, 2.83 BM", "4, 4.90 BM", "1, 1.73 BM"],
        answer: 0,
        note: "CN− is a strong field ligand, causing pairing in the t2g orbitals for low-spin d6 Fe2+: all 6 electrons pair up in t2g, leaving 0 unpaired electrons.",
      },
      {
        year: 2014,
        q: "The pH of a buffer made by mixing equal volumes of 0.2 M CH3COOH (Ka = 1.8×10−5) and 0.2 M CH3COONa is closest to:",
        options: ["4.74", "7.00", "3.40", "5.20"],
        answer: 0,
        note: "Henderson–Hasselbalch: pH = pKa + log([salt]/[acid]). With equal concentrations, log(1) = 0, so pH = pKa = −log(1.8×10−5) ≈ 4.74.",
      },
      {
        year: 2018,
        q: "Which of the following carbocations is the most stable?",
        options: [
          "Primary allylic cation",
          "Tertiary alkyl cation",
          "Tertiary benzylic cation",
          "Secondary alkyl cation",
        ],
        answer: 2,
        note: "A tertiary benzylic cation benefits from both hyperconjugation/inductive stabilization (tertiary) and resonance delocalization into the aromatic ring (benzylic), making it more stable than a plain tertiary or allylic cation.",
      },
      {
        year: 2022,
        q: "In the Nernst equation for the cell reaction Zn(s) + Cu2+(aq) → Zn2+(aq) + Cu(s), if [Cu2+] is decreased tenfold at 298 K, the cell EMF changes by approximately:",
        options: [
          "Decreases by 0.0295 V",
          "Increases by 0.0295 V",
          "Decreases by 0.059 V",
          "No change",
        ],
        answer: 0,
        note: "E = E° − (0.0591/n)logQ, n=2. Decreasing [Cu2+] tenfold increases Q tenfold, so E decreases by 0.0591/2 ≈ 0.0295 V.",
      },
      {
        year: 2015,
        q: "The hybridization of the central atom and shape of XeF4 are:",
        options: [
          "sp3d, see-saw",
          "sp3d2, square planar",
          "sp3d2, octahedral",
          "sp3, tetrahedral",
        ],
        answer: 1,
        note: "Xe in XeF4 has 6 electron domains (4 bonding + 2 lone pairs), giving sp3d2 hybridization; the two lone pairs occupy axial positions, leaving a square planar molecular shape.",
      },
      {
        year: 2020,
        q: "For a first-order reaction, the time required for 90% completion is 't'. The time required for 99.9% completion is approximately:",
        options: ["2t", "3t", "5t", "10t"],
        answer: 1,
        note: "t½ scales with ln(fraction remaining). 90% completion: k t = ln10 ≈ 2.303. 99.9% completion: k t' = ln1000 = 3×ln10 ≈ 6.909, so t' ≈ 3t.",
      },
      {
        year: 2023,
        q: "Which of the following pairs represents isoelectronic species?",
        options: ["CO2 and NO2−", "N2O and CO2", "SO2 and NO2", "O3 and SO2"],
        answer: 1,
        note: "N2O and CO2 each have 22 total electrons and identical linear, 3-atom, 16-valence-electron structures, making them isoelectronic in both count and structure.",
      },
      {
        year: 2017,
        q: "The IUPAC name of the compound CH3−CH(OH)−CH2−CHO is:",
        options: [
          "3-hydroxybutanal",
          "2-hydroxybutanal",
          "4-hydroxybutan-2-one",
          "1-hydroxybutan-3-one",
        ],
        answer: 0,
        note: "Numbering from the aldehyde carbon (C1=CHO), the OH sits on C3, giving 3-hydroxybutanal as the correct IUPAC name.",
      },
    ],
  },
  biology: {
    label: "Biology",
    icon: Leaf,
    ink: "#2F5233",
    questions: [
      {
        year: 2016,
        q: "In a dihybrid cross between AaBb × AaBb, the proportion of offspring that are heterozygous at both loci is:",
        options: ["1/16", "1/4", "9/16", "3/8"],
        answer: 1,
        note: "Each locus independently gives 1/2 chance of being heterozygous (Aa or Bb). For both loci: 1/2 × 1/2 = 1/4.",
      },
      {
        year: 2019,
        q: "During oxidative phosphorylation, the enzyme ATP synthase couples proton flow to ATP synthesis. This proton gradient is primarily established across the:",
        options: [
          "Outer mitochondrial membrane",
          "Inner mitochondrial membrane",
          "Mitochondrial matrix",
          "Cytoplasm",
        ],
        answer: 1,
        note: "The electron transport chain complexes embedded in the inner mitochondrial membrane pump H+ from the matrix into the intermembrane space, generating the gradient ATP synthase uses.",
      },
      {
        year: 2021,
        q: "A cross between a plant of genotype Rr (round, dominant) and rr (wrinkled) is an example of a:",
        options: ["Dihybrid cross", "Test cross", "Reciprocal cross", "Back cross with F1"],
        answer: 1,
        note: "Crossing a heterozygote with the homozygous recessive parent to determine the unknown genotype's gametes is the classic definition of a test cross.",
      },
      {
        year: 2014,
        q: "The site of light-independent reactions (Calvin cycle) in a chloroplast is the:",
        options: ["Thylakoid membrane", "Stroma", "Outer membrane", "Granum"],
        answer: 1,
        note: "The Calvin cycle enzymes, including RuBisCO, are located in the stroma, the fluid matrix surrounding the thylakoids.",
      },
      {
        year: 2018,
        q: "In humans, colour blindness is an X-linked recessive trait. A carrier woman marries a colour-blind man. The probability that their daughter is colour-blind is:",
        options: ["0", "1/4", "1/2", "1"],
        answer: 2,
        note: "Carrier mother (XᶜX) × colour-blind father (XᶜY) → daughters: 1/2 XᶜXᶜ (colour-blind), 1/2 XᶜX (carrier). So probability = 1/2.",
      },
      {
        year: 2022,
        q: "Which hormone combination directly triggers ovulation at mid-cycle in the human menstrual cycle?",
        options: [
          "High FSH, low LH",
          "LH surge",
          "Rising progesterone alone",
          "Declining estrogen",
        ],
        answer: 1,
        note: "A sharp mid-cycle surge in luteinizing hormone (LH), triggered by peak estrogen from the mature follicle, causes rupture of the Graafian follicle and ovulation.",
      },
      {
        year: 2015,
        q: "The exchange of segments between non-sister chromatids of homologous chromosomes occurs during:",
        options: ["Leptotene", "Zygotene", "Pachytene", "Diplotene"],
        answer: 2,
        note: "Crossing over occurs during pachytene, after synapsis (zygotene) has formed the synaptonemal complex, via recombination nodules on the paired chromatids.",
      },
      {
        year: 2020,
        q: "In an ecosystem, the pyramid of biomass in a pond ecosystem is typically:",
        options: [
          "Always upright",
          "Always inverted",
          "Upright, unlike the pyramid of numbers for trees",
          "Inverted, due to short-lived phytoplankton with high turnover",
        ],
        answer: 3,
        note: "Pond phytoplankton have very short lifespans and rapid turnover, so at any instant their standing biomass is low relative to consumers, producing an inverted biomass pyramid despite high productivity.",
      },
      {
        year: 2023,
        q: "The technique used to amplify a specific DNA segment exponentially in vitro, requiring a thermostable DNA polymerase, is:",
        options: ["Gel electrophoresis", "PCR", "Southern blotting", "ELISA"],
        answer: 1,
        note: "Polymerase Chain Reaction (PCR) uses repeated cycles of denaturation, annealing, and extension with Taq polymerase to exponentially amplify a target DNA sequence.",
      },
      {
        year: 2017,
        q: "Which of the following best describes the role of the sino-atrial node in the human heart?",
        options: [
          "It delays impulses reaching the ventricles",
          "It acts as the pacemaker, initiating each heartbeat",
          "It pumps deoxygenated blood to the lungs",
          "It regulates blood pressure via baroreceptors",
        ],
        answer: 1,
        note: "The SA node generates spontaneous rhythmic impulses faster than any other cardiac tissue, setting the heart's rhythm — hence its name, the natural pacemaker.",
      },
    ],
  },
};

const MARK_CORRECT = 4;
const MARK_WRONG = -1;

export default function NEETPracticeTest() {
  const [subject, setSubject] = useState("physics");
  const [answers, setAnswers] = useState({}); // key: "subject-index" -> optionIdx
  const [submitted, setSubmitted] = useState({ physics: false, chemistry: false, biology: false });
  const [current, setCurrent] = useState(0);

  const subjectData = BANK[subject];
  const qKey = (s, i) => `${s}-${i}`;

  const selectAnswer = (idx, optIdx) => {
    if (submitted[subject]) return;
    setAnswers((a) => ({ ...a, [qKey(subject, idx)]: optIdx }));
  };

  const submitSubject = () => setSubmitted((s) => ({ ...s, [subject]: true }));
  const resetSubject = () => {
    setSubmitted((s) => ({ ...s, [subject]: false }));
    setAnswers((a) => {
      const copy = { ...a };
      subjectData.questions.forEach((_, i) => delete copy[qKey(subject, i)]);
      return copy;
    });
    setCurrent(0);
  };

  const scoreFor = (subj) => {
    const data = BANK[subj];
    let score = 0,
      correct = 0,
      wrong = 0,
      unattempted = 0;
    data.questions.forEach((q, i) => {
      const a = answers[qKey(subj, i)];
      if (a === undefined) unattempted++;
      else if (a === q.answer) {
        correct++;
        score += MARK_CORRECT;
      } else {
        wrong++;
        score += MARK_WRONG;
      }
    });
    return { score, correct, wrong, unattempted, max: data.questions.length * MARK_CORRECT };
  };

  const totalScore = useMemo(() => {
    return Object.keys(BANK).reduce((sum, s) => sum + scoreFor(s).score, 0);
  }, [answers]);

  const totalMax = Object.keys(BANK).reduce((sum, s) => sum + BANK[s].questions.length * MARK_CORRECT, 0);

  const attemptedCount = subjectData.questions.filter((_, i) => answers[qKey(subject, i)] !== undefined).length;
  const stat = scoreFor(subject);

  const q = subjectData.questions[current];
  const selected = answers[qKey(subject, current)];
  const isSub = submitted[subject];

  return (
    <div className="min-h-screen w-full" style={{ background: "#F2EEE3", fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      {/* Header bar */}
      <div style={{ background: "#1C2541" }} className="w-full text-[#F2EEE3] px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs tracking-[0.3em] uppercase opacity-70" style={{ fontFamily: "'Courier New', monospace" }}>
            10-Year Practice Series
          </div>
          <div className="text-xl sm:text-2xl font-bold" style={{ letterSpacing: "0.02em" }}>
            NEET-Pattern PYQ Test
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded" style={{ background: "#B3312C" }}>
          <Award size={18} />
          <span className="font-mono text-sm">Total: {totalScore} / {totalMax}</span>
        </div>
      </div>

      {/* Subject tabs */}
      <div className="flex border-b" style={{ borderColor: "#D8D0BC", background: "#EAE4D3" }}>
        {Object.entries(BANK).map(([key, s]) => {
          const Icon = s.icon;
          const isActive = key === subject;
          return (
            <button
              key={key}
              onClick={() => {
                setSubject(key);
                setCurrent(0);
              }}
              className="flex items-center gap-2 px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold transition-colors"
              style={{
                borderBottom: isActive ? `3px solid ${s.ink}` : "3px solid transparent",
                color: isActive ? s.ink : "#8A8371",
                background: isActive ? "#F2EEE3" : "transparent",
              }}
            >
              <Icon size={18} />
              {s.label}
            </button>
          );
        })}
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-6 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6">
        {/* Question panel */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="font-mono text-xs px-2 py-1 rounded" style={{ background: "#E4DCC6", color: subjectData.ink }}>
              Q{current + 1} of {subjectData.questions.length} · PYQ pattern {q.year}
            </div>
            <div className="font-mono text-xs" style={{ color: "#8A8371" }}>
              +{MARK_CORRECT} / {MARK_WRONG}
            </div>
          </div>

          <div className="bg-white border rounded-lg p-5 sm:p-6" style={{ borderColor: "#D8D0BC" }}>
            <p className="text-base sm:text-lg leading-relaxed mb-5" style={{ color: "#221F1B" }}>
              {q.q}
            </p>

            <div className="flex flex-col gap-2.5">
              {q.options.map((opt, i) => {
                const isSelected = selected === i;
                const isCorrectOpt = i === q.answer;
                let borderColor = "#D8D0BC";
                let bg = "white";
                let icon = null;
                if (isSub) {
                  if (isCorrectOpt) {
                    borderColor = "#2F6B3A";
                    bg = "#EAF3EA";
                    icon = <Check size={16} color="#2F6B3A" />;
                  } else if (isSelected && !isCorrectOpt) {
                    borderColor = "#B3312C";
                    bg = "#FBEAE9";
                    icon = <X size={16} color="#B3312C" />;
                  }
                } else if (isSelected) {
                  borderColor = subjectData.ink;
                  bg = "#F2EEE3";
                }
                return (
                  <button
                    key={i}
                    onClick={() => selectAnswer(current, i)}
                    disabled={isSub}
                    className="flex items-center gap-3 text-left px-4 py-3 rounded-md border transition-colors"
                    style={{ borderColor, background: bg, cursor: isSub ? "default" : "pointer" }}
                  >
                    <span
                      className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-mono shrink-0"
                      style={{
                        border: `1.5px solid ${isSelected || (isSub && isCorrectOpt) ? borderColor : "#B8AF98"}`,
                        color: isSelected || (isSub && isCorrectOpt) ? borderColor : "#6B6558",
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1 text-sm sm:text-base" style={{ color: "#221F1B" }}>
                      {opt}
                    </span>
                    {icon}
                  </button>
                );
              })}
            </div>

            {isSub && (
              <div className="mt-5 pt-4 border-t text-sm leading-relaxed" style={{ borderColor: "#D8D0BC", color: "#4A4436" }}>
                <span className="font-semibold" style={{ color: subjectData.ink }}>
                  Explanation —{" "}
                </span>
                {q.note}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
              disabled={current === 0}
              className="text-sm font-medium px-4 py-2 rounded disabled:opacity-30"
              style={{ color: subjectData.ink }}
            >
              ← Previous
            </button>
            <button
              onClick={() => setCurrent((c) => Math.min(subjectData.questions.length - 1, c + 1))}
              disabled={current === subjectData.questions.length - 1}
              className="flex items-center gap-1 text-sm font-medium px-4 py-2 rounded text-white disabled:opacity-30"
              style={{ background: subjectData.ink }}
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* OMR-style answer sheet / scorecard */}
        <div className="lg:sticky lg:top-4 h-fit">
          <div className="bg-white border rounded-lg p-4" style={{ borderColor: "#D8D0BC" }}>
            <div className="text-xs tracking-[0.2em] uppercase font-mono mb-3" style={{ color: "#8A8371" }}>
              Answer Sheet · {subjectData.label}
            </div>

            <div className="grid grid-cols-5 gap-2 mb-4">
              {subjectData.questions.map((qq, i) => {
                const a = answers[qKey(subject, i)];
                let style = { border: "1.5px solid #D8D0BC", color: "#8A8371", background: "white" };
                if (isSub && a !== undefined) {
                  style =
                    a === qq.answer
                      ? { border: "1.5px solid #2F6B3A", color: "#2F6B3A", background: "#EAF3EA" }
                      : { border: "1.5px solid #B3312C", color: "#B3312C", background: "#FBEAE9" };
                } else if (a !== undefined) {
                  style = { border: `1.5px solid ${subjectData.ink}`, color: subjectData.ink, background: "#F2EEE3" };
                }
                return (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="w-9 h-9 rounded-full text-xs font-mono font-semibold flex items-center justify-center"
                    style={style}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>

            <div className="text-sm mb-3" style={{ color: "#4A4436" }}>
              Attempted: <span className="font-mono">{attemptedCount}</span> / {subjectData.questions.length}
            </div>

            {!isSub ? (
              <button
                onClick={submitSubject}
                className="w-full py-2.5 rounded-md text-white font-semibold text-sm"
                style={{ background: subjectData.ink }}
              >
                Submit {subjectData.label}
              </button>
            ) : (
              <>
                <div className="rounded-md p-3 mb-3" style={{ background: "#F2EEE3" }}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Correct</span>
                    <span className="font-mono" style={{ color: "#2F6B3A" }}>
                      {stat.correct} × {MARK_CORRECT}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Wrong</span>
                    <span className="font-mono" style={{ color: "#B3312C" }}>
                      {stat.wrong} × {MARK_WRONG}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Unattempted</span>
                    <span className="font-mono">{stat.unattempted}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold pt-2 border-t" style={{ borderColor: "#D8D0BC" }}>
                    <span>Score</span>
                    <span className="font-mono">
                      {stat.score} / {stat.max}
                    </span>
                  </div>
                </div>
                <button
                  onClick={resetSubject}
                  className="w-full py-2 rounded-md text-sm font-medium flex items-center justify-center gap-2 border"
                  style={{ borderColor: "#D8D0BC", color: "#4A4436" }}
                >
                  <RotateCcw size={14} /> Retake {subjectData.label}
                </button>
              </>
            )}

            <div className="mt-4 pt-3 border-t text-xs flex items-start gap-1.5" style={{ borderColor: "#D8D0BC", color: "#8A8371" }}>
              <Clock size={13} className="shrink-0 mt-0.5" />
              Difficulty is set high, matching the toughest end of a decade of exam patterns — expect to sit with a few before it clicks.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
