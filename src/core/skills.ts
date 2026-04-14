import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { config } from './config';
import type { Skill } from '../types';

export async function loadSkills(): Promise<Skill[]> {
  const dir = config.LILAC_SKILLS_DIR;
  const files = await fs.readdir(dir);
  const skills: Skill[] = [];

  for (const file of files) {
    if (file.endsWith('.md')) {
      const fullPath = path.join(dir, file);
      const content = await fs.readFile(fullPath, 'utf-8');
      const { data, content: body } = matter(content);

      skills.push({
        name: data.name || path.basename(file, '.md'),
        description: data.description || '',
        model: data.model,
        temperature: data.temperature,
        systemPrompt: body.trim(),
      });
    }
  }

  return skills;
}

export async function loadDefaultSkill(): Promise<Skill | null> {
  const skills = await loadSkills();
  return skills.find(s => s.name === 'Lilac-Core') || skills[0] || null;
}
