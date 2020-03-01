import * as React from "react";
import PropTypes from "prop-types";
import { withStyles, createStyles, Theme, WithStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({});

interface IState {}

interface IProps extends WithStyles<typeof styles> {
  classes: any;
  value: string;
}

class ChatViewRowTypeTextMarkdown extends React.PureComponent<IProps, IState> {
  element: any;
  constructor(props: IProps) {
    super(props);
    this.setRef = this.setRef.bind(this);
  }

  setRef(e: any) {
    this.element = e;
  }

  render() {
    const { classes } = this.props;

    return (
      <p ref={this.setRef} style={{ margin: 0 }}>
        {this.props.value}
      </p>
    );
  }
}

(ChatViewRowTypeTextMarkdown as React.ComponentClass<IProps>).propTypes = {
  classes: PropTypes.object.isRequired
} as any;

export default withStyles(styles)(ChatViewRowTypeTextMarkdown);