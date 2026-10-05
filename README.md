# Team A9 — Design Patterns Case Study (Part 1 Baseline)

**Application Title**: NestJS Airplane Reservation System  
**Baseline Git Commit SHA**: `ae2c24869377ce2f7a29022cd237d808338156ea`  
**Branch**: `main`  
**Submission Part**: PART 1 — Repository Archaeology & Baseline Pattern Evidence  

---

## 1. Baseline Environment Specification

| Component | Version | Verification Notes |
| :--- | :--- | :--- |
| **Node.js** | `v25.9.0` | Target runtime |
| **npm** | `11.12.1` | Package manager |
| **TypeScript** | `5.9.3` / `^5.7.3` | TypeScript compiler |
| **NestJS Core** | `^11.0.1` | Application framework |
| **TypeORM** | `^0.3.27` | ORM & database persistence |
| **Apollo GraphQL** | `^13.2.0` / `@apollo/server ^5.1.0` | GraphQL presentation layer |
| **DataLoader** | `^2.2.3` | Relational query batching |
| **BullMQ** | `^5.65.1` / `@nestjs/bullmq ^11.0.4` | Redis asynchronous job queue |
| **Passport** | `^0.7.0` / `passport-google-oauth20 ^2.0.0` | OAuth 2.0 strategy framework |

---

## 2. Empirical Verification Commands & Results

- **Application Build**: `npm run build`
  - **Result**: `SUCCESS` (Exit Code 0)
- **Unit & Integration Tests**: `npm test`
  - **Result**: `SUCCESS` (10 test suites passed, 10 total tests passed, Exit Code 0)
- **End-to-End Tests**: `npm run test:e2e`
  - **Result**: `FAILED` (Exit Code 1 due to `test/jest-e2e.json` lacking `moduleNameMapper` for `src/` path resolution in baseline)

---

## 3. Subsystem Implementation Matrix

| Subsystem / Feature | Implementation Status | Key Source Files |
| :--- | :--- | :--- |
| **Flight Domain** | `IMPLEMENTED` | `src/flight/flight.service.ts`, `flight.resolver.ts`, `staff.service.ts` |
| **Booking Domain** | `IMPLEMENTED` | `src/booking/booking.service.ts`, `booking.resolver.ts` |
| **Seat Domain** | `IMPLEMENTED` | `src/seat/seat.service.ts`, `loaders/seat.loader.ts` |
| **User & Auth Domain** | `IMPLEMENTED` | `src/users/users.service.ts`, `auth.service.ts`, `guards/*.ts` |
| **Notification / Email** | `IMPLEMENTED` | `src/users/send-grid.service.ts`, `workers/email.worker.ts` |
| **Background Processing** | `IMPLEMENTED` | `src/users/workers/email.worker.ts`, `flight-auto-delete.service.ts` |
| **Payment Subsystem** | `NOT FOUND / NOT IMPLEMENTED` | *No payment entities, services, or controllers exist in baseline.* |

---

## 4. Confirmed Pattern Inventory (Part 1)

1. **Dynamic Guard Factory** (`rolesRestrict`): `src/flight/guards/roles.restrict.guard.ts:12-28`
2. **User Batch Loader** (`UserDataLoader`): `src/users/loaders/user.loader.ts:10-24`
3. **Flight Batch Loader** (`FlightDataLoader`): `src/flight/loaders/flight.loader.ts:7-23`
4. **Seat Batch Loader** (`SeatDataLoader`): `src/seat/loaders/seat.loader.ts:8-45`
5. **Producer-Consumer Email Queue** (`SendGridService` / `EmailProcessor`): `src/users/send-grid.service.ts:30-42`, `src/users/workers/email.worker.ts:8-25`

---

## 5. Submission Artifact Structure

```
A9/
├── README.md                           # This baseline submission documentation
├── data/                               # Preserved global dataset root
├── Part1/
│   ├── patterns.csv                    # 5 verified pattern instances with source line ranges
│   ├── Pattern_count.csv               # Formal pattern count summary
│   ├── pattern_architecture/
│   │   ├── pattern_architecture.mmd    # Mermaid diagram source file
│   │   ├── pattern_architecture.png    # High-resolution architectural diagram image
│   │   └── pattern_architecture.svg    # Vector architecture diagram
│   ├── Part1_prompt.txt                # Analytical archaeology instructions prompt
│   └── llm.csv                         # Auditable LLM usage log records
├── Part2/                              # Reserved for Part 2 system evolution
└── Part3/                              # Reserved for Part 3 cross-language benchmarks
```
