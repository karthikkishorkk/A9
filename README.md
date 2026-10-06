# Team A9 — Design Patterns Case Study (23CSE455)

**Application:** NestJS Airplane Reservation System ([github](https://github.com/zeyadAlbadawy/Airport-Reservation-System.git))
**Baseline branch:** `main`
**Baseline commit SHA:** `ae2c24869377ce2f7a29022cd237d808338156ea`
**Original source URL:** `TODO: add repository URL (or "supplied as ZIP, received <date>")`

---

## 1. Team Members

| Roll Number | Name | Batch |
| :--- | :--- | :--- |
| AM.SC.U4CSE23016 | Balashankar Mohan | CSE-A |
| AM.SC.U4CSE23125 | Josewin Anto J | CSE-B |
| AM.SC.U4CSE23128 | Karthik Kishor | CSE-B |
| AM.SC.U4CSE23141 | Pavithra Nair | CSE-B |


---

## 2. Project Status

| Part | Status | Description |
| :--- | :--- | :--- |
| Part 1 | ✅ Completed | Baseline verification and confirmed pattern inventory |
| Part 2 | ✅ Completed | Pattern evolution across Change1, Change2 and Change3 |
| Part 3 | ✅ Completed | Cross-language implementation and benchmarking of two patterns |
| Part 4 | ⏳ In progress | Assigned to the Part 4 owner |
| Final audit | ⏳ Pending | Repository, evidence, documentation and submission audit |

---

## 3. Repository Structure

```text
A9/
├── README.md
├── A9_Report.pdf                     # pending
├── A9_Report.tex                     # pending
├── data/
│   ├── code/                         # original application baseline
│   └── test_result/                  # baseline test evidence (pending)
├── Part1/
│   ├── patterns.csv
│   ├── Pattern_count.csv
│   ├── Part1_prompt.txt
│   ├── part1_antigravity_output.md   # raw model output
│   ├── llm.csv
│   └── pattern_architecture/         # .mmd, .png, .svg
├── Part2/
│   ├── code/                         # evolved application source
│   ├── changes/
│   │   ├── Change1/                  # requirement.md, diff.patch, test_result.txt
│   │   ├── Change2/
│   │   └── Change3/
│   ├── diagrams/                     # updated UML / pattern evolution
│   ├── llm/                          # prompts, inputs, outputs
│   ├── pattern_evolution.csv
│   ├── Pattern_count.csv
│   ├── Part2_prompt.txt
│   ├── llm.csv
│   └── README_CONTRIBUTION.md
└── Part3/
    ├── pattern_crosslanguage.csv     # the one cross-language CSV
    ├── A9_slide.pdf                  # pending
    ├── evidence/                     # pending (raw timing, test, complexity output)
    ├── dynamic_guard_factory/        # java/ python/ javascript/ cpp/
    ├── producer_consumer/            # java/ python/ javascript/ cpp/
    └── llm/
        ├── part3_prompt.txt
        └── llm.csv
```

---

## 4. Part 1 — Baseline Pattern Evidence

### Baseline environment

| Component | Version |
| :--- | :--- |
| Node.js | `v25.9.0` |
| npm | `11.12.1` |
| TypeScript | `5.9.3` (`^5.7.3`) |
| NestJS Core | `^11.0.1` |
| TypeORM | `^0.3.27` |
| Apollo GraphQL | `^13.2.0` / `@apollo/server ^5.1.0` |
| DataLoader | `^2.2.3` |
| BullMQ | `^5.65.1` / `@nestjs/bullmq ^11.0.4` |
| Passport | `^0.7.0` / `passport-google-oauth20 ^2.0.0` |

### Baseline verification

| Command | Result |
| :--- | :--- |
| `npm run build` | Success (exit code 0) |
| `npm test` | Success: 10 test suites passed, 10 tests passed |
| `npm run test:e2e` | **Failed** (exit code 1) |

The e2e failure is a baseline issue: `test/jest-e2e.json` lacks the `moduleNameMapper` configuration needed to resolve `src/` paths. The original source was not modified to hide it.

### Confirmed pattern inventory

1. Dynamic Guard Factory (`rolesRestrict`)
2. User Batch Loader (`UserDataLoader`)
3. Flight Batch Loader (`FlightDataLoader`)
4. Seat Batch Loader (`SeatDataLoader`)
5. Producer–Consumer Email Queue (`SendGridService` / `EmailProcessor`)

Part 1 is complete and should not be modified unless the final audit requires it.

---

## 5. Part 2 — Pattern Evolution

Part 2 applies three changes to the baseline application. Each change folder holds the requirement, the diff and the test result.

| Item | Location |
| :--- | :--- |
| Evolved source | `Part2/code/` |
| Changes | `Part2/changes/Change1`, `Change2`, `Change3` |
| Pattern records | `Part2/pattern_evolution.csv`, `Part2/Pattern_count.csv` |
| Diagrams | `Part2/diagrams/` |
| Contribution notes | `Part2/README_CONTRIBUTION.md` |

The original baseline is kept separately in `data/code/`.

---

## 6. Part 3 — Cross-Language Implementation

Two confirmed patterns were re-implemented in Java, Python, JavaScript and C++, using the same inputs and expected outputs.

### 6.1 Dynamic Guard Factory — Role-Based Guard Synthesis

- **Original source:** `data/code/src/flight/guards/roles.restrict.guard.ts`
- **Behavior:** a factory builds an authorization guard that checks whether a user's role is in the permitted role set.
- **Reduction:** framework dependencies were removed; the factory behavior was kept.
- **Location:** `Part3/dynamic_guard_factory/{java,python,javascript,cpp}/`

### 6.2 Producer–Consumer — Async Email Processing Queue

- **Original sources:**
  - `data/code/src/users/send-grid.service.ts`
  - `data/code/src/users/users.resolver.ts`
  - `data/code/src/users/workers/email.worker.ts`
- **Behavior:** producers enqueue email jobs on a BullMQ queue and a worker consumes them by job type.
- **Reduction:** a deterministic standalone FIFO queue with no Redis, BullMQ, network calls or credentials.
- **Location:** `Part3/producer_consumer/{java,python,javascript,cpp}/`

### 6.3 Test results

| Pattern | Java | Python | JavaScript | C++ |
| :--- | :--- | :--- | :--- | :--- |
| Dynamic Guard Factory | 7/7 | 7/7 | 7/7 | 7/7 |
| Producer–Consumer | 4/4 | 4/4 | 4/4 | 4/4 |

### 6.4 Runtime environment

| Language | Runtime / compiler |
| :--- | :--- |
| Java | Java 25.0.1 LTS / `javac` 25.0.1 |
| Python | Python 3.11.9 |
| JavaScript | Node.js v22.12.0 |
| C++ | g++ (MSYS2) 14.2.0, C++17 |

### 6.5 Measurement rules

- **LOC:** production lines only, excluding blank lines, comments and tests.
- **Cyclomatic complexity:** maximum per-function value. Tool/counting rule: `TODO: state the tool or rule used`.
- **Timing:** compile first, then one warmup run and five measured runs on the same machine; the median is reported.
- **Timing scope:** process startup plus test execution; compilation excluded. Raw runs are in each language folder's `timing_raw.csv`.
- No timing values were estimated, and no compiled binaries are kept in the repository.

### 6.6 Results file

`Part3/pattern_crosslanguage.csv` is the single Part 3 results file (the instructions call it both `cross_language.csv` and `pattern_crosslanguage.csv`). Columns:

`pattern_name`, `instance_name`, `language`, `snippet_path`, `source_loc`, `max_function_cc`, `runtime_compiler`, `test_command`, `test_result`, `median_process_ms`, `language_notes`

### 6.7 Run commands

Each language folder has its own README. Working folder for every command is that language's folder.

| Language | Command (Dynamic Guard Factory) |
| :--- | :--- |
| Java | `java RoleGuardFactoryTest` |
| Python | `python test_role_guard_factory.py` |
| JavaScript | `node testRoleGuardFactory.js` |
| C++ | `.\test_role_guard_factory.exe` (after compiling) |

### 6.8 LLM documentation

Stored in `Part3/llm/` (`part3_prompt.txt`, `llm.csv`). No separate raw model-output transcript was retained, so none is claimed. The resulting code was verified independently through the language tests and timing records.

---

## 7. Remaining Work

### 7.1 Baseline test evidence

The original application in `data/code/` must be tested independently and the actual output saved in `data/test_result/`.

- Use the original source; do not edit it to make tests pass.
- Record real output, including failures, and document their cause (missing dependency, configuration, Redis, database, environment variables, etc.).
- Do not fabricate results.

### 7.2 Part 4

Owner: Part 4 assignee. The owner should:

1. Review the existing repository structure.
2. Preserve completed Part 1, 2 and 3 work.
3. Complete the required Part 4 implementation or analysis and add its artifacts.
4. Run the required tests or validation and keep the evidence.
5. Document any failures honestly.
6. Avoid binaries, dependency caches, secrets and temporary files.
7. Avoid modifying Part 1 or Part 3 unless integration requires it.

### 7.3 Other deliverables

- `A9_Report.pdf` and `A9_Report.tex`
- `Part3/A9_slide.pdf`
- `Part3/evidence/`
- Team member table (section 1), source URL and Part 2 commit or version records

---

## 8. Final Audit Checklist

- [x] Part 1 artifacts present
- [x] Part 2 artifacts present
- [x] Part 3 implementations present
- [x] Part 3 tests executed successfully
- [x] Part 3 timing measurements recorded
- [x] Part 3 `pattern_crosslanguage.csv` verified
- [x] Part 3 LLM documentation present
- [x] Temporary ZIP extraction removed
- [x] No generated binaries or caches in Part 3
- [ ] Baseline test evidence saved in `data/test_result/`
- [ ] Part 4 completed and evidence verified
- [ ] Report PDF and LaTeX source added
- [ ] Slide deck added
- [ ] All referenced file paths verified
- [ ] No unintended Part 1 modifications
- [ ] No secrets or `.env` files committed
- [ ] Final README reviewed

---

## 9. Handoff Notes

- **Part 1 is frozen** unless the assignment requires a correction.
- **Keep the baseline separate:** `data/code/` is the original application; `Part3/` holds reduced standalone implementations. Do not replace one with the other.
- **One Part 3 CSV:** `Part3/pattern_crosslanguage.csv`. Do not create a duplicate `cross_language.csv`.
- **Evidence must be real:** test results, timings and LLM records must come from actual executed work.