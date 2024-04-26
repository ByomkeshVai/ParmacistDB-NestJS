import { Injectable } from '@nestjs/common';

@Injectable()
export class MapperService {
  dtoToEntity<T, V>(dto: T, entity: V): any {
    const entityKeys = Object.keys(entity);
    for (const key of entityKeys) {
      if (dto.hasOwnProperty(key)) {
        entity[key] = dto[key];
      }
    }
    return entity;
  }

  entityToDto<T, V>(entity: T, dto: V): any {
    const dtoKeys = Object.keys(dto);
    for (const key of dtoKeys) {
      if (entity.hasOwnProperty(key)) {
        dto[key] = entity[key];
      }
    }
    return dto;
  }
}
