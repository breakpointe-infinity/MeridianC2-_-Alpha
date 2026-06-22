# Firestore Security Specification

This document details the Zero-Trust attribute-based access control (ABAC) assertions and security invariants designed for the agent pipeline workflows.

## 1. Data Invariants

1. **Owner Exclusivity (No Spoofing)**: A user can only create, update, read, or delete pipeline configurations where `userId` strictly matches the authenticated user's `uid` (i.e. `request.auth.uid`). No user can write a pipeline with another user's ID as the owner.
2. **Strict Structure**:
   - `name` must be a string up to 100 characters.
   - `nodes` must be a list containing valid structured nodes.
   - `connections` must be a list of connections.
3. **Temporal Invariants**:
   - On creation, `createdAt` must match `request.time`.
   - On updates, `updatedAt` must match `request.time` and `createdAt` must remain immutable.
4. **Id Integrity**: The `pipelineId` must be a valid alphanumeric/hyphen string (`isValidId`).

## 2. The "Dirty Dozen" Overrides & Vulnerability Audits
Below are the twelve malicious payloads designed to audit authorization gates and ensure they fail-safe (Permission Denied).

1. **The Identity Spoof (Create)**: Unauthorized creating a document under someone else's ID.
2. **The Guest Write**: Attempting to write a pipeline configuration without being authenticated.
3. **The Unverified Email Write**: Attempting to create a pipeline when email is not verified (if mandated).
4. **The Shadow Field Inject**: Attempting to update a pipeline with a shadow/ghost field like `isAdmin: true`.
5. **The Temporal Fake**: Client sending an arbitrary historical timestamp for `createdAt` instead of `request.time`.
6. **The Immutable Mutate**: Attempting to modify `createdAt` or `userId` of an existing pipeline.
7. **The Jumbo Content Exploit**: Sending an extremely large `name` value string (e.g., 2MB) to cause DoS/resource exhaustion.
8. **The Malicious Path ID**: Using path injection characters (`../../`) or high-waste strings inside the document path key.
9. **The Blind Query Lift**: Submitting a general query to fetch all pipelines across all users (unfiltered list scraping).
10. **The Delete Hijack**: Attempting to delete another user's pipeline document.
11. **The Empty Schema Push**: Saving an invalid schema document missing required `nodes` or `connections` array fields.
12. **The Type Shift Hack**: Attempting to overwrite the `nodes` or `connections` field with an invalid type (such as a flat string or number).

## 3. Test Cases (firestore.rules.test.ts)

A standard testing module is set up to verify that all these malicious vectors are blocked.
