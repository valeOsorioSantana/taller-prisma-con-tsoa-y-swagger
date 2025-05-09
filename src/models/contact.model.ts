export interface ContactInput {
  companyId: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  status: 'active' | 'inactive';
}

import { z } from 'zod';

export const ContactSchema = z.object({
  companyId: z.number(),
  firstName: z.string().min(1, 'El nombre es requerido').max(50, "Deja de ser pendejo no más de 50"),
  lastName: z.string().min(1, 'El apellido es requerido').max(50, "Deja de ser pendejo no más de 50"),
  email: z.string().email().min(1),
  phone: z.string().min(7, 'El teléfono es muy corto'),
  position: z.string(),
  status: z.enum(['active', 'inactive']),
});
