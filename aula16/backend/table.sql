CREATE SEQUENCE aluno_id_seq;
CREATE TABLE aluno (
    id integer NOT NULL DEFAULT nextval('aluno_id_seq'),
    nome varchar(50)
);
ALTER SEQUENCE aluno_id_seq OWNED BY aluno.id;
