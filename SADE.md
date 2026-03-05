SADE Manifest Guide

SADE (Software Architecture Diagram Editor) uses a .sade.json manifest file to define the architecture graph for a project.

Purpose

The manifest describes:
- Nodes: Groups of related files (components, modules, services)
- Edges: Relationships between nodes (imports, calls, contains)
- File mappings: Which files belong to which nodes

Manifest Format

{
  "version": "1.0",
  "generated_by": "llm",
  "last_analyzed": "2026-01-15T10:30:00Z",
  "nodes": [
    {
      "id": "unique-node-id",
      "label": "Display Name",
      "description": "What this component does",
      "manual": true,
      "parent": "parent-node-id-or-null",
      "files": ["file1.ts", "path/to/file2.js"]
    }
  ],
  "edges": [
    {
      "source": "source-node-id",
      "target": "target-node-id",
      "type": "imports",
      "manual": true
    }
  ]
}

Fields

- version: Manifest version (currently "1.0")
- generated_by: Tool that created the manifest (e.g., "llm", "simple")
- last_analyzed: ISO timestamp of last analysis
- nodes: Array of node definitions
- edges: Array of relationship definitions

Node Fields

- id: Unique identifier (kebab-case recommended)
- label: Human-readable name
- description: Optional detailed description
- manual: If true, won't be overwritten by auto-generation
- parent: Parent node ID, or null for root-level nodes
- files: Array of file paths relative to project root

Edge Fields

- source: Source node ID
- target: Target node ID
- type: Relationship type (contains, imports, calls)
- manual: If true, won't be overwritten
- note: Optional note about the relationship

Edge Types

- contains: Source contains/manages target (parent-child)
- imports: Source imports or depends on target
- calls: Source directly calls or invokes target function

File Organization Tips

1. Group files by architectural concern (UI, business logic, data)
2. Keep related files together in the same node
3. Use parent-child relationships for hierarchy
4. Mark stable boundaries as manual: true
5. Let auto-generation suggest initial structure, then refine

Working with SADE

1. Open a project directory
2. Generate initial manifest or write your own
3. View the architecture graph
4. Click nodes to see contained files
5. Edit .sade.json manually or enhance with AI
6. Save changes to see updated graph

The graph is interactive:
- Click to select a node and view details
- Double-click to expand/collapse children
- Drag nodes to reposition
- Hover to see node information